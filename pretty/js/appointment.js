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




