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