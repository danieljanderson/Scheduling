
document.addEventListener('DOMContentLoaded', function() {
    
    var options = {
        format: 'mmmm dd, yyyy',
        onSelect: function(date) { 
             //the appointmentDate is the date the user chooses for their appointment
             var selectedDate= date
             console.log(selectedDate)

              // modifiying the date object to only display the date not including the hours
              var dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
              var modifiedDate = selectedDate.toLocaleDateString("en-US", dateFormat)
              console.log(modifiedDate)
            
        }
    }

    var htmlDateElems = document.querySelectorAll('.datepicker');
    var dateInstances = M.Datepicker.init(htmlDateElems, options);

})
document.addEventListener('DOMContentLoaded',function(){
    //returns the selected time the user picks
        var timeOption = {
            twelveHour:true,
            vibrate:true,
            onSelect: function(hour,second){
                var hourSelected = hour
                var minuteSelected = second
                console.log(hourSelected,"this is the time on the select is the hour"+"and"+minuteSelected+"is the second time")
                }
            }
            
        
        var htmlTimeElems = document.querySelectorAll('.timepicker');
        var timeInstances = M.Timepicker.init(htmlTimeElems, timeOption);
});




