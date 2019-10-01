let dateInput = document.querySelector("input[type='date']").value
let date = new Date(dateInput);
let year = (date.getYear() + 1900)
console.log(year)

let displayPic = document.querySelector(".displayPic")
let fileInput = document.querySelector("input[type='file']")
console.log(fileInput)

// let picLabel = document.querySelector('label[for="picInput"] span')
function uploadPic () {
	let file = fileInput.files[0];
	let fileData = new FileReader();

	fileData.readAsDataURL(file)
	fileData.onload = function displayPic () {
		let fileURL = fileData.result;
		displayPic.src = fileURL
	};
};
