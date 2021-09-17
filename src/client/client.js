const button = document.querySelector("button");
const searchInput = document.getElementById("search-input");
const replaceInput = document.getElementById("replace-input");
const contentWrapper = document.getElementById("contents");
const notif = document.getElementById("notif");

const fetchAllContents = async () => {
	notif.textContent = "Loading...";

	try {
		const res = await axios.get("http://localhost:5001/api/stories");
		return res.data;
	} catch (error) {
		console.error(error.message);
	}
};

const renderContents = () => {
	fetchAllContents().then((allContents) => {
		notif.textContent = "";

		if (allContents.length) {
			allContents.forEach((content) => {
				contentWrapper.innerHTML += `
          <li>${content}</li>
        `;
			});
		} else {
			notif.textContent = "No data";
		}
	});
};

button.addEventListener("click", async (e) => {
	e.preventDefault();

	const searchString = searchInput.value;
	const replaceString = replaceInput.value;

	if (searchString && replaceString) {
		try {
			await axios.post("http://localhost:5001/api/update", {
				searchString: searchString,
				replaceString: replaceString,
			});

			contentWrapper.innerHTML = "";

			renderContents();
		} catch (error) {
			console.error(error.message);
		}
	}
});

renderContents();
