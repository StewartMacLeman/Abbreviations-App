"use strict";

// Global variables. -----------------------------------------------------
let addAbbrevButton = document.getElementById("subBut");
let modalCoverDiv = document.querySelector(".modalCover");
let addAbbrevModalDiv = document.querySelector(".addAbbrevModal");
let updateAbbrevModalDiv = document.querySelector(".updateAbbrevModal");
let submitCancelButton = document.getElementById("subCancel");

let updateButtons = document.querySelectorAll(".updButton");
let hiddenIdInput = document.getElementById("abbrevId");
let updateAbbrevInputElement = document.getElementById("abbrevUpd");
let updateDefinInputElement = document.getElementById("abbrevDefinUpd");
let cancelUpdateButton = document.getElementById("cancelUpd");

let deleteItemButton = document.getElementById("delButton");
let deleteElement;


// Show the model to add an abbreviation. ---------------------------
addAbbrevButton.addEventListener("click", showAddModel);

function showAddModel(){
  modalCoverDiv.classList.remove("hide");
  addAbbrevModalDiv.classList.remove("hide");
}

// Cancel the submit and close the model. ----------------------------
submitCancelButton.addEventListener("click", closeAddModal);

function closeAddModal(){
  modalCoverDiv.classList.add("hide");
  addAbbrevModalDiv.classList.add("hide");
}

// Add the showUpdateModel function to the update buttons. ----------
for (let i = 0; i < updateButtons.length; i++){
  updateButtons[i].addEventListener("click", showUpdateModal);
}

// Display the update model. ---------------------------------------
function showUpdateModal(e) {
  let clickedButton = e.target;
  let abbrevText = clickedButton.parentElement.parentElement.querySelector(".abbrRow .abbrevText").textContent;
  let definText = clickedButton.parentElement.parentElement.querySelector(".abbrRow .defText").textContent;
  let id = clickedButton.value;

  deleteItemButton.value = id;
  deleteElement = clickedButton.parentElement.parentElement;
  hiddenIdInput.value = id;
  updateAbbrevInputElement.value = abbrevText;
  updateDefinInputElement.value = definText;


  modalCoverDiv.classList.remove("hide");
  updateAbbrevModalDiv.classList.remove("hide");
}
// Cancel an update. ---------------------------------------------
cancelUpdateButton.addEventListener("click", cancelUpdate);

function cancelUpdate() {
  modalCoverDiv.classList.add("hide");
  updateAbbrevModalDiv.classList.add("hide");
}

// Delete an item. ------------------------------------------------
deleteItemButton.addEventListener("click", deleteItem);

function deleteItem(){

  let delButtonId = deleteItemButton.value;

  axios.post("/delete", { id: delButtonId }).then(() => {
    deleteElement.remove();
  }).catch(() => {
    console.log("Please try again later!");
  });

  modalCoverDiv.classList.add("hide");
  updateAbbrevModalDiv.classList.add("hide");
}
