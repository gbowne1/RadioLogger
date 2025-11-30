
function initVhfLog() {
  const submitButton = document.getElementById('vhflog_submit');
  if (submitButton) {
    console.log(`found submitButton`, submitButton);
    submitButton.addEventListener('click', async event => {
      event.preventDefault();
      const requestData = {
        callsign: document.querySelector('#callsign').value,
        frequency: document.querySelector('#frequency').value,
        mode: document.querySelector('#mode').value
      };
      try {
      console.log(`submitButton posting`, requestData);
        const response = await fetch('/vhflog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify(requestData)
        });
        console.log(response);
        const responseObj = response.json();
        console.log(responseObj);
      } catch (err) {
        console.log('There was a problem with the fetch operation:', err);
      }
    });
  }
}

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

export { initVhfLog };
