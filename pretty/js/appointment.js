var appointmentDate
var appointmentTime
document.addEventListener('DOMContentLoaded', function() {
    
    var options = {
        format: 'mmmm dd, yyyy',
        onSelect: function(date) { 
             //the appointmentDate is the date the user chooses for their appointment
             appointmentDate= date
             console.log(appointmentDate)
              //getAppointmentTime()

              // modifiying the date object to only display the date not including the hours
              var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
              var newDate = appointmentDate.toLocaleDateString("en-US", options)
              console.log(newDate)
            
        }
    }

    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
})
document.addEventListener('DOMContentLoaded',function(){
    //returns the selected time the user picks
        var timeOption = {
            twelveHour:true,
            vibrate:true,
            onSelect: function(hour,second){
                var hourtime = hour
                var secondtime = second
                console.log(hourtime,"this is the time on the select is the hour"+"and"+secondtime+"is the second time")
                }
            }
            
        
        var timeElems = document.querySelectorAll('.timepicker');
        var timeInstances = M.Timepicker.init(timeElems, timeOption,time);
        var time= timeInstances['time']
        console.log("this is the time"+time)
    
    
   
});




