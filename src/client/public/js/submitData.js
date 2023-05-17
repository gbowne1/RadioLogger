$(document).ready(function () {
  $('#log-form').submit(function (event) {
    event.preventDefault();
    var data = {
      callsign: $('#callsign').val(),
      frequency: $('#frequency').val(),
      mode: $('#mode').val()
    };
    $.ajax({
      type: 'POST',
      url: '/vhflog',
      data: data,
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      }
    });
  });
});
