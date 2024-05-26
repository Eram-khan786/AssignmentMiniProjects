let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let number = document.getElementById("number");
let email = document.getElementById("email");
let Address = document.getElementById("Address");
let btn = document.querySelector(".addContact");
let leftBorder=document.querySelector(".leftBorder");

btn.addEventListener("click", () => {

  let newInfoOfAPerson = document.createElement("div");
  newInfoOfAPerson.classList.add("flex2", "marginRight");
  newInfoOfAPerson.style.border="2px solid black"
  newInfoOfAPerson.style.display="flex"
  newInfoOfAPerson.style.justifyContent="center"
  newInfoOfAPerson.style.alignItems="center"

  let firstNamePara = document.createElement("p");
  firstNamePara.classList.add("dataFirstName", "leftBorder");
  firstNamePara.textContent = firstName.value;

  let lastNamePara = document.createElement("p");
  lastNamePara.classList.add("dataLastName", "leftBorder");
  lastNamePara.textContent = lastName.value;

  let phonePara = document.createElement("p");
  phonePara.classList.add("dataPhoneNumber", "leftBorder");
  phonePara.textContent = number.value;

  let emailPara = document.createElement("p");
  emailPara.classList.add("dataEmail", "leftBorder");
  emailPara.textContent = email.value;

  let addressPara = document.createElement("p");
  addressPara.classList.add("dataAddress", "leftBorder");
  addressPara.textContent = Address.value;

  let editButton = document.createElement("button");
  editButton.classList.add(
    "editAndResponseButton",
    "dataEditBtn",
    "leftBorder"
  );
  editButton.textContent = "Edit";
  editButton.style.marginTop="5px"
  leftBorder.style.borderLeft="2px solid black"
  // editButton.style.background="black"

  editButton.addEventListener("click", () => {
    firstNamePara.contentEditable = true;
    lastNamePara.contentEditable = true;
    phonePara.contentEditable = true;
    emailPara.contentEditable = true;
    addressPara.contentEditable = true;
    firstNamePara.focus();
  });

  let deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "editAndResponseButton",
    "dataDeleteBtn",
    "leftBorder"
  );
  deleteButton.textContent = "Delete";
  editButton.style.marginTop = "5px";


  deleteButton.addEventListener("click", () => {
    newInfoOfAPerson.remove();
  });

  newInfoOfAPerson.appendChild(firstNamePara);
  newInfoOfAPerson.appendChild(lastNamePara);
  newInfoOfAPerson.appendChild(phonePara);
  newInfoOfAPerson.appendChild(emailPara);
  newInfoOfAPerson.appendChild(addressPara);
  newInfoOfAPerson.appendChild(editButton);
  newInfoOfAPerson.appendChild(deleteButton);

  document.querySelector(".flexSecondContainer").appendChild(newInfoOfAPerson);

  firstName.value = "";
  lastName.value = "";
  number.value = "";
  email.value = "";
  Address.value = "";
});
