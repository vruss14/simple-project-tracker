let today = moment().format("MMM Do, YYYY");
$("#current-date").text(today);

let time = moment().format("LTS");
$("#current-time").text(time);

$('#exampleModalCenter').on('shown.bs.modal', function () {
    $('#modal-btn').trigger('focus')
  })

$(function () {
  $("#due-date").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });
});

let table = document.getElementById("column-values")
let addBtn = document.getElementById("add-proj");
let form = document.getElementById("form-projects");


addBtn.addEventListener("click", addProject)

function addProject (event) {

  event.preventDefault();

  let projName = document.getElementById("proj-name").value.trim();
  let projType = document.getElementById("types").value.trim();
  let rate = document.getElementById("rate-value").value.trim();
  let dueDate = document.getElementById("due-date").value.trim();


  console.log("Listening :)");
  console.log(projName);
  console.log(projType);
  console.log(rate);
  console.log(dueDate);

  form.reset();

  addNewRow(projName, projType, rate, dueDate);
}

function addNewRow(projName, projType, rate, dueDate) {
  let row = document.createElement("div");
  table.appendChild(row);
  row.setAttribute("class", "row row-cols-4");

  let nameOfProj = document.createElement("div");
  row.appendChild(nameOfProj);
  nameOfProj.setAttribute("class", "col custom-col adjust-col");
  nameOfProj.textContent = projName;

  let typeOfProj = document.createElement("div");
  row.appendChild(typeOfProj);
  typeOfProj.setAttribute("class", "col custom-col adjust-col");
  typeOfProj.textContent = projType;

  let rateOfProj = document.createElement("div");
  row.appendChild(rateOfProj);
  rateOfProj.setAttribute("class", "col custom-col adjust-col");
  rateOfProj.textContent = `$ ${rate}`;

  let dateOfProj = document.createElement("div");
  row.appendChild(dateOfProj);
  dateOfProj.setAttribute("class", "col custom-col adjust-col");
  dateOfProj.textContent = dueDate;
}
