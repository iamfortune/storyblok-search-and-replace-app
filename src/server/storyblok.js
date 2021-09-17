const StoryblokClient = require("storyblok-js-client");
const dotenv = require("dotenv");

dotenv.config();

const Storyblok = new StoryblokClient({
	accessToken: process.env.PREVIEW_TOKEN,
	cache: {
		clear: "auto",
		type: "memory",
	},
});

const Storyblok2 = new StoryblokClient({
	oauthToken: process.env.AUTH_TOKEN,
});

const getAllStories = async () => {
	try {
		const res = await Storyblok.getAll("cdn/stories");

		let arr = [];

		res
			.map((story) => story?.content?.body)
			.forEach((story) => {
				for (let i = 0; i < story.length; i++) {
					arr.push(story[i].content);
				}
			});

		return arr;
	} catch (error) {
		console.error("GET =>", error.message);
	}
};

const updateStory = async (newContent, id, index, cb) => {
	const data = await Storyblok.getAll("cdn/stories");

	const story = {
		...data[index],
		content: {
			...data[index].content,
			body: [...newContent],
		},
	};

	try {
		await Storyblok2.put(`spaces/126850/stories/${id}`, {
			story,
			force_update: 1,
			publish: 1,
		});

		cb(null, "Updated Sucessfully");
	} catch (error) {
		cb(true);
		console.error("UPDATE =>", error.message);
	}
};

const filterStories = async (search, replaceString, cb) => {
	try {
		const res = await Storyblok.getAll("cdn/stories");
		let storyObj = {
			id: "",
			body: null,
			index: 0,
		};

		res
			.map((story, index) => {
				storyObj.id = story.id;
				storyObj.body = story;
				storyObj.index = index;
				return story?.content?.body;
			})
			.forEach((body) => {
				body.forEach((prop, index) => {
					const str = new RegExp(search, "gi");

					const content = (prop?.content).toString();

					const isAvailable = content.search(str);

					if (isAvailable >= 0) {
						const regex = new RegExp(search, "g");
						const newContent = content.replace(regex, replaceString);

						body.splice(index, 1, {
							...prop,
							content: newContent,
						});

						updateStory(body, storyObj.id, storyObj.index, cb);
					}
				});
			});
	} catch (error) {
		console.error("FILTER =>", error.message);
	}
};

module.exports = {
	getAllStories,
	filterStories,
};
