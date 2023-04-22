function addData() {
  var table = document.getElementById('log').getElementsByTagName('tbody')[0];
  var row = table.insertRow();
  var frequency = row.insertCell(0);
  var mode = row.insertCell(1);
  var date = row.insertCell(2);
  var time = row.insertCell(3);
  var callsign = row.insertCell(4);
  var signal = row.insertCell(5);
  var location = row.insertCell(6);
  var comments = row.insertCell(7);
  var qsl = row.insertCell(8);
  var antenna = row.insertCell(9);
  frequency.innerHTML = document.getElementById('frequency').value;
  mode.innerHTML = document.querySelector('input[name="mode"]:checked').value;
  date.innerHTML = document.getElementById('date').value;
  time.innerHTML = document.getElementById('time').value;
  callsign.innerHTML = document.getElementById('callsign').value;
  signal.innerHTML = document.getElementById('signal').value;
  location.innerHTML = document.getElementById('location').value;
  comments.innerHTML = document.getElementById('comments').value;
  qsl.innerHTML = document.getElementById('qsl').value;
  antenna.innerHTML = document.querySelector('input[name="antenna"]:checked').value;
}
