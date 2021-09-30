"use strict";

// Global variables. -----------------------------------------------------
let addAbbrevButton = document.getElementById("subBut");
let modelCoverDiv = document.querySelector(".modelCover");
let addAbbrevModelDiv = document.querySelector(".addAbbrevModel");
let submitCancelButton = document.getElementById("subCancel");


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
