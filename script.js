// Retrieves and formats the current date
let today = moment().format("MMM Do, YYYY");
$("#current-date").text(today);

// Ascending time updates every second

let updatedTime = function () {
  $("#current-time").text(moment().format('h:mm:ss a'));
}
setInterval(updatedTime, 1000);

// Modal functionality (includes datepicker from jQuery UI library)

$('#project-modal').on('shown.bs.modal', function () {
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

// Adds projects to the table; includes error handling

let projectTbody = document.getElementById("project-tbody")

function addProject (event) {

  event.preventDefault();

  let projName = document.getElementById("proj-name").value.trim();
  let projType = document.getElementById("types").value.trim();
  let rate = document.getElementById("rate-value").value.trim();
  let dueDate = document.getElementById("due-date").value.trim();

  let nameLabel = document.getElementById("name-label");
  let typeLabel = document.getElementById("type-label");
  let dateLabel = document.getElementById("date-label");

  if (projName === "") {
    nameLabel.setAttribute("style", "font-weight: bold; color:red;");
    nameLabel.textContent = "Please select a name for your project.";
    return;
  }

  if (projType === "Select an option:") {
    typeLabel.setAttribute("style", "font-weight: bold; color:red;");
    typeLabel.textContent = "Please select a type for your project.";
    return;
  }

  if (dueDate === "") {
    dateLabel.setAttribute("style", "font-weight: bold; color: red;");
    dateLabel.textContent = "Please select a due date for your project.";
    return;
  }

  form.reset();

  $('#project-modal').modal('hide');

  addNewRow(projName, projType, rate, dueDate);
}

function addNewRow(projName, projType, rate, dueDate) {
  let tableRow = document.createElement("tr");
  projectTbody.appendChild(tableRow);

  let td1 = document.createElement("td");
  tableRow.appendChild(td1);
  td1.textContent = projName;

  let td2 = document.createElement("td");
  tableRow.appendChild(td2);
  td2.textContent = projType;

  let td3 = document.createElement("td");
  tableRow.appendChild(td3);
  td3.textContent = `$${rate}`;

  let td4 = document.createElement("td");
  tableRow.appendChild(td4);
  td4.textContent = dueDate;

  let deleteBtn = document.createElement("button");
  tableRow.appendChild(deleteBtn);
  deleteBtn.textContent = "X";
  deleteBtn.setAttribute("style", "background-color: maroon; color: white; padding-top: 0.55rem; padding-bottom: 0.55rem; padding-left: 1.5rem; padding-right: 1.5rem;")
}
