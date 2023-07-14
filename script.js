document.addEventListener('DOMContentLoaded', function() {
    var clock = document.getElementById('clock');
    var alarmTimeInput = document.getElementById('alarm-time');
    var setAlarmButton = document.getElementById('set-alarm-btn');
    var clearAlarmButton = document.getElementById('clear-alarm-btn');
    var alarmSound = document.getElementById('alarm-sound');
    var alarmInterval;


    // SET ALARM USING EVENT LISTNER 

    setAlarmButton.addEventListener('click', function() {
      var alarmTime = alarmTimeInput.value;
      if (alarmTime !== '') {
        var currentTime = new Date();
        var alarmTimeParts = alarmTime.split(':');
        var alarmDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), alarmTimeParts[0], alarmTimeParts[1], 0, 0);
        var timeDifference = alarmDate.getTime() - currentTime.getTime();
  
        if (timeDifference > 0) {
          alarmInterval = setTimeout(function() {
            playAlarm();
          }, timeDifference);
          setAlarmButton.disabled = true;
          clearAlarmButton.disabled = false;
        } else {
          alert('Please select a future time.');
        }
      }
    });
//   to clear the exixting alarm 
    clearAlarmButton.addEventListener('click', function() {
      clearTimeout(alarmInterval);
      setAlarmButton.disabled = false;
      clearAlarmButton.disabled = true;
    });

// real time clock using setinterval function and new date function
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        
        var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        document.getElementById('time').textContent = timeString;
        
        var dateString = now.toDateString();
        document.getElementById('date').textContent = dateString;
    }
    setInterval(updateTime, 1000);


//   play alarm sound

    function playAlarm() {
      alarmSound.play();
      alert('Wake up!');
      setAlarmButton.disabled = false;
      clearAlarmButton.disabled = true;
    }
  });
  