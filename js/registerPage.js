let currentDate = new Date();
let currentYear = currentDate.getFullYear()
let birthday = document.querySelector("input[type='date']").value
let birthDate = new Date(birthday);
let birthYear = birthDate.getFullYear();

let mainSection = document.querySelector('.mainSection')
let image = document.querySelector(".displayPic")
let picLabel = document.querySelector("label[for='picInput'] span" ) 
let inputs = document.querySelectorAll('input')
let fileInput = document.querySelector("input[type='file']")
let formDiv = document.querySelector('.formDiv');
let form = document.forms[0];
let registerOutputDiv = document.querySelector('.registerOutputDiv')
let birthdayInput = document.querySelector("input[type='date']")
let button = document.querySelector('button')
// let students = new Object();

function uploadPic() {
	file = fileInput.files[0];
	console.log(file)
	let fileData = new FileReader();
	console.log(fileData)
	fileData.readAsDataURL(file)
	fileData.onload = function displayPic () {
		let fileURL = fileData.result;
		image.src = fileURL
		console.log(image.src)
	};
	picLabel.style.display = "none"
console.log(fileInput)

};


function displayNone (elementSelectorInAQuote) {
	document.querySelector(elementSelectorInAQuote).style.display = "none"
}
function displayError (elementSelectorInAQuote,errorMessage) {
	document.querySelector(elementSelectorInAQuote).style.display = "block"
	document.querySelector(elementSelectorInAQuote).innerHTML = errorMessage;
}

console.log(button)

let age = currentYear - birthYear;
let email = document.querySelector("#emailAddress");
let parentsNumber = document.querySelector("#parentsNumber");
let homeAddress = document.querySelector("#homeAddress");
let password = document.querySelector("#pass");
let confirmPassword = document.querySelector("#confirmPass");


inputs[3].onblur = function validateBirthDay() {
	let birthday = document.querySelector("input[type='date']").value
	if (Number.isNaN(birthdayInput.valueAsNumber)) {
		displayError(".birthDayErr","Select a birth date")

	}else {
		displayNone(".birthDayErr")
	}
}
console.log(fileInput)
//refractor

inputs[12].onkeyup = function() {
	if (inputs[11].value != inputs[12].value) {
			displayError(".confirmPassErr", "Passwords do not yet match")
			console.log("Password: "+ inputs[11].value +" Confirm password: " + inputs[12].value )
			console.log("Ensure both passwords match")
	}else {
			displayNone(".confirmPassErr")
	}	
}
console.log(inputs[12].value)
//refractor:

inputs[6].onchange = function() {
	let phoneNumber = document.querySelector('#phoneNumber').value;
	let num =  phoneNumber.length;
	console.log(num)
		if(num == 11) {
			displayNone(".phoneNumberErr")
		}else if( num >=11) {
			displayError(".phoneNumberErr","Phone number is more than 11")
		}else {
			displayError(".phoneNumberErr","Put an 11 digit number")
		}
	
}
inputs[8].onchange = function() {
	let parentsNumber = document.querySelector('#parentsNumber').value;
	let num =  parentsNumber.length;
	console.log(num)
		if(num == 11) {
			displayNone(".parentsNumberErr")
		}else if( num >=11) {
			displayError(".parentsNumberErr","Phone number is more than 11")
		}else {
			displayError(".parentsNumberErr","Put an 11 digit number")
		}
	
}
inputs[4].onclick = function() {
	displayNone(".genderErr")
		}

inputs[5].onclick = function() {
	displayNone(".genderErr")
}


let student = {};
let labels = [
				"First Name: ", "Last Name: ",
				"Birthday:","Gender:","Age: ",
				"Phone Number: ","Email Address: ",
				"Parent's Number: ","Occupation: ",
				"Home Address: ","Password: "
]

function storeStudent() {
	student.firstName = firstName.value;
	student.lastName = lastName.value;
	student.birthday = birthday;
	student.age = age;
	student.gender;
	if (inputs[4].checked === true) {
		student.gender = inputs[4].value;
	}else if (inputs[5].checked === true) {
		student.gender = inputs[5].value;
	}
	student.phoneNumber = phoneNumber.value;
	student.emailAddress = emailAddress.value;
	student.parentsNumber = parentsNumber.value;
	student.occupation = occupation.value;
	student.homeAddress = homeAddress.value;
	student.password = password.value;
	console.log(student)
	let i = 0;
	for (let details in student) {
		let lineBreak =  document.createElement('br')
		let lineBreak2 =  document.createElement('br')
		registerOutputDiv.innerHTML += labels[i] + student[details]
		i++;
		registerOutputDiv.appendChild(lineBreak)
		registerOutputDiv.appendChild(lineBreak2)
	}
}


button.onclick = function validateAndRegister() {
	if (inputs[4].checked === false && inputs[5].checked === false) {
		displayError(".genderErr", "Select a gender")

	}else if (file == undefined) {
			alert("Please upload a picture for your profile")
	}else {
		storeStudent()
		form.style.display = "none";
		form.style.padding_top = "50px";
		formDiv.style.height = "580px";
	}
}
let file;