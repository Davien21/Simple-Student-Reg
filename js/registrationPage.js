let dateInput = document.querySelector("input[type='date']").value
let date = new Date(dateInput);
let year = (date.getYear() + 1900)
console.log(year)

let displayPic = document.querySelector(".displayPic")
let fileInput = document.querySelector("input[type='file']")
let fileValue = fileInput.value;


console.log(displayPic.src)

let picLabel = document.querySelector('label[for="picInput"] span')
function uploadPic() {
	fileValue = fileInput.value;
	let slicedPath = fileValue.substr(fileValue.lastIndexOf("\\")+1,fileValue.length)
	let filePath = "./"+slicedPath;
	fileValue = filePath
	displayPic.src = filePath;
	picLabel.style.display = "none"

}

	
	

// console.log(displayPic.getAttribute('src'))
// let fileInput = document.querySelector("input[type ='file']").value
// console.log(picture)