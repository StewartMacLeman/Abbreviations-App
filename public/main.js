"use strict";

// Global variables. -----------------------------------------------------
let addAbbrevButton = document.getElementById("subBut");
let modelCoverDiv = document.querySelector(".modelCover");
let addAbbrevModelDiv = document.querySelector(".addAbbrevModel");
let updateAbbrevModelDiv = document.querySelector(".updateAbbrevModel");
let submitCancelButton = document.getElementById("subCancel");

let updateButtons = document.querySelectorAll(".updButton");
let hiddenIdInput = document.getElementById("abbrevId");
let updateAbbrevInputElement = document.getElementById("abbrevUpd");
let updateDefinInputElement = document.getElementById("abbrevDefinUpd");
let deleteItemButton = document.getElementById("delButton");


// Show the model to add an abbreviation. ---------------------------
addAbbrevButton.addEventListener("click", showAddModel);

function showAddModel(){
  modelCoverDiv.classList.remove("hide");
  addAbbrevModelDiv.classList.remove("hide");
}
// Cancel the submit and close the model. ----------------------------
submitCancelButton.addEventListener("click", closeAddModel);

function closeAddModel(){
  modelCoverDiv.classList.add("hide");
  addAbbrevModelDiv.classList.add("hide");
}
// Add the showUpdateModel function to the update buttons. ----------
for (let i = 0; i < updateButtons.length; i++){
  updateButtons[i].addEventListener("click", showUpdateModel);
}
// Display the update model. ---------------------------------------
function showUpdateModel(e) {
  let clickedButton = e.target;
  let abbrevText = clickedButton.parentElement.parentElement.querySelector(".abbrRow .abbrevText").textContent;
  let definText = clickedButton.parentElement.parentElement.querySelector(".abbrRow .defText").textContent;
  let id = clickedButton.value;
  deleteItemButton.value = id;
  console.log(id);
  // console.log(abbrevText);
  // console.log(definText);
  hiddenIdInput.value = id;
  updateAbbrevInputElement.value = abbrevText;
  updateDefinInputElement.value = definText;


  modelCoverDiv.classList.remove("hide");
  updateAbbrevModelDiv.classList.remove("hide");

}
// Delete an item. ------------------------------------------------
deleteItemButton.addEventListener("click", deleteItem);

function deleteItem(){
  // Temp functionality!!!
  let delButtonId = deleteItemButton.value
  // console.log(delButtonId);
  axios.post("/delete", { id: delButtonId }).then(() => {
    // deleteElement.remove();
    console.log("The item was deleted!");
  }).catch(() => {
    console.log("Please try again later!");
  });

  modelCoverDiv.classList.add("hide");
  updateAbbrevModelDiv.classList.add("hide");
}
