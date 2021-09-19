const express = require("express");
const { getAllStories, filterStories } = require("./storyblok");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/api/stories", async (req, res) => {
	try {
		const stories = await getAllStories();
		res.status(200).send(stories);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

app.post("/api/update", async (req, res) => {
	const searchString = req.body.searchString;
	const replaceString = req.body.replaceString;

	try {
		filterStories(searchString, replaceString, (error, result) => {
			if (error) {
				return res.status(500).send("An error occured!");
			}
			res.status(200).send(result); 
		});
	} catch (error) {
		console.error("Error at index!", error.message);
	}
});

app.listen(5001, () => {
	console.log("SERVER IS RUNNING ON PORT 5001");
});
