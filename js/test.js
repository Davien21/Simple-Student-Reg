// console.log("linked!")
// let fileInput = document.querySelector('input')
// let fileValue = fileInput.value;
// let image = document.querySelector('.displayPic')

// console.log(image)
// console.log(fileInput)

// function uploadPic() {
// 	let file = fileInput.files[0];
// 	let fileData = new FileReader();
// 	console.log(file)
// 	fileData.readAsDataURL(file)
// 	console.log(fileData)
// 	fileData.onload = function displayPic () {
// 		let fileURL = fileData.result;
// 		image.src = fileURL
// 		console.log(image.src)
// 	};
// };

// let firstName = document.querySelector("#firstName").value
// let lastName = document.querySelector("#lastName").value
// let age = currentYear - birthYear
// let gender = document.querySelector("input[type='radio']").value
// let email = document.querySelector("#emailAddress").value
// let parentsNumber = document.querySelector("#parentsNumber").value
// let homeAddress = document.querySelector("#homeAddress").value
// let password = document.querySelector("#pass").value
// let confirmPassword = document.querySelector("#confirmPass").value

// function validations() {
// 	if (firstName.length > 3) {
// 		c
// 	}
// }
	
// function register() {
// 	let students = new Object();
// 	students.firstName = firstName;
// 	students.lastName = lastName;
// 	students.birthday = birthday;
// 	students.age = age;
// 	students.gender = gender;
// 	students.email = email;
// 	students.parentsNumber = parentsNumber;
// 	students.homeAddress = homeAddress;
// 	students.password =password;

// 	students.confirmedPassword = confirmPassword
// 	console.log(students)

		
// 	let mainSection = document.querySelector('.mainSection')
// 	form.style.display = "none"
// 	mainSection.style.height = "550px"


// }
document.querySelector(".firstNameErr").style.display = "block"
document.querySelector(".firstNameErr").innerHTML = "Please input a valid First Name"
let i = 1;
i++

while (i<5) {
	for (i = 1; i<5; i++) {
		console.log(`${i} is less than 5`)
	}
}
// let lastName = document.querySelector("#lastName").value.trim();
// let age = currentYear - birthYear;
// let gender = document.querySelector("input[type='radio']").value.trim();
// let email = document.querySelector("#emailAddress").value.trim();
// let parentsNumber = document.querySelector("#parentsNumber").value.trim();
// let homeAddress = document.querySelector("#homeAddress").value.trim();
// let password = document.querySelector("#pass").value;
// let confirmPassword = document.querySelector("#confirmPass").value;

let currentDate = new Date();
let currentYear = currentDate.getFullYear()
let birthday = document.querySelector("input[type='date']").value
let birthDate = new Date(birthday);
let birthYear = birthDate.getFullYear();

console.log(currentYear)
console.log(birthYear)

let form = document.forms[0];
let image = document.querySelector(".displayPic")
let fileInput = document.querySelector("input[type='file']")
let picLabel = document.querySelector("label[for='picInput'] span" ) 
let birthdayInput = document.querySelector("input[type='date']")

console.log(document.querySelector("input[type='date']"))
function displayNone (elementSelectorInAQuote) {
	document.querySelector(elementSelectorInAQuote).style.display = "none"
}
function displayBlock (elementSelectorInAQuote) {
	document.querySelector(elementSelectorInAQuote).style.display = "block"
}
function displayError (elementSelectorInAQuote,errorMessage) {
	document.querySelector(elementSelectorInAQuote).innerHTML = errorMessage;
}
let age = currentYear - birthYear;
let gender = document.querySelector("input[type='radio']").value.trim();
let email = document.querySelector("#emailAddress").value.trim();
let parentsNumber = document.querySelector("#parentsNumber").value.trim();
let homeAddress = document.querySelector("#homeAddress").value.trim();
let password = document.querySelector("#pass").value;
let confirmPassword = document.querySelector("#confirmPass").value;


let inputs = document.querySelectorAll('input')
inputs[1].onkeydown = function validateFirstName() {
	let firstName = document.querySelector("#firstName").value.trim();
	if (firstName.length <3) {
		displayBlock(".firstNameErr")
		displayError(".firstNameErr","Please input a valid First Name")

	}else {
		displayNone(".firstNameErr")
	}

	return firstName;
}
inputs[2].onkeydown = function validateLastName() {
	let lastName = document.querySelector("#lastName").value.trim();
	if (lastName.length <3) {
		displayBlock(".lastNameErr")
		displayError(".lastNameErr","Please input a valid Last Name")

	}else {
		displayNone(".lastNameErr")
	}

	return lastName;
}
inputs[3].oninput = function validateBirthDay() {
	// let birthdayInput = document.querySelector("#birthday")
	if (birthdayInput.valueAsNumber == """null""") {
		displayBlock(".birthDayErr")
		displayError(".birthDayErr","Please select a date for your birthday")

	}else {
		displayNone(".birthDayErr")
	}

	return birthday;
}


function uploadPic() {
	let file = fileInput.files[0];
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
};



	
function register() {
	
	let students = new Object();
	students.firstName = inputs[1].oninput()
	students.lastName = lastName;
	students.birthday = birthday;
	students.age = age;
	students.gender = gender;
	students.email = email;
	students.parentsNumber = parentsNumber;
	students.homeAddress = homeAddress;
	students.password =password;

	students.confirmedPassword = confirmPassword
	console.log(students)

		
	let mainSection = document.querySelector('.mainSection')
	// form.style.display = "none"
	mainSection.style.height = "550px"


}
if (Number.isNaN(birthdayInput.valueAsNumber) ) {
					document.querySelector(".bDayErr").innerHTML = "Please select a date for your birthday"
					displayBlock(".bDayErr");
			}else {
					displayNone(".bDayErr")
					
				}

for (let i=0;i<inputs.length-1;i++) {
	inputs[i].oninput = function validation() {
		let firstName = document.querySelector("#firstName").value.trim();
		let lastName = document.querySelector("#lastName").value.trim();
		let birthday = document.querySelector("input[type='date']").value;

		if (firstName.length <3 ) {
			displayBlock(".firstNameErr");
			document.querySelector(".firstNameErr").innerHTML = "Please input a valid First Name"
		}else {
			displayNone(".firstNameErr")
		}
		if (lastName.length <3  ) {
			displayBlock(".lastNameErr");
			document.querySelector(".lastNameErr").innerHTML = "Please input a valid Last Name"

		}else {
			displayNone(".lastNameErr")

		}
		 
			if (Number.isNaN(birthdayInput.valueAsNumber) ) {
				document.querySelector(".bDayErr").innerHTML = "Please select a date for your birthday"
				displayBlock(".bDayErr");
			}else {
				displayNone(".bDayErr")
				
			}
		
		
	}
}
