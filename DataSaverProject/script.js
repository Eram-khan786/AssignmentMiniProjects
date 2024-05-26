let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let number = document.getElementById("number");
let email = document.getElementById("email");
let address = document.getElementById("Address");
let btn = document.querySelector(".addContact");
let rightElement = document.querySelector(".marginRight");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  rightElement.style.margin = "5rem";
  // rightElement.style.marginBottom="5rem"
  // Create paragraph elements for each input field
  let firstNamePara = document.createElement("h3");
  let lastNamePara = document.createElement("h3");
  let numberPara = document.createElement("h3");
  let emailPara = document.createElement("h3");
  let addressPara = document.createElement("h3");

  firstNamePara.innerText = "First Name: " + firstName.value;
  lastNamePara.innerText = "Last Name: " + lastName.value;
  numberPara.innerText = "Phone Number: " + number.value;
  emailPara.innerText = "Email: " + email.value;
  addressPara.innerText = "Address: " + address.value;

  //   rightElement.style.marginLeft="4rem";
  rightElement.appendChild(firstNamePara);
  rightElement.appendChild(lastNamePara);
  rightElement.appendChild(numberPara);
  rightElement.appendChild(emailPara);
  rightElement.appendChild(addressPara);

  firstName.value = "";
  lastName.value = "";
  number.value = "";
  email.value = "";
  address.value = "";
});
