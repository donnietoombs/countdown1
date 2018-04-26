function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( (t/(1000*60*60*24)) % 7 );
    var weeks = Math.floor(t/(1000*60*60*24*7) );
    return {
      'total': t,
      'weeks': weeks,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      clock.innerHTML = t.weeks + "W " + t.days + "D "
                        + t.hours + "H " 
                        + t.minutes + "M "
                        + t.seconds + "S "
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }

  var deadline = "02-25-2019 17:30:00"
  initializeClock("timer", deadline);