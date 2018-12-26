
var USER = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    appointmentDate: '',
    appointmentTime: ''
}

document.addEventListener('DOMContentLoaded', function() {
    var modifiedDate
    var options = {
        format: 'mmmm dd, yyyy',
        onSelect: function(date) { 
             //the appointmentDate is the date the user chooses for their appointment
             var selectedDate= date
             console.log(selectedDate)

              // modifiying the date object to only display the date not including the hours
              var dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
              modifiedDate = selectedDate.toLocaleDateString("en-US", dateFormat)
              USER.appointmentDate = modifiedDate
              console.log(USER.appointmentDate)
              
        }
    }

    var htmlDateElems = document.querySelectorAll('.datepicker');
    // the issue is that modifiedDate runs before the user selects the time.
    var dateInstances = M.Datepicker.init(htmlDateElems, options);
    
   
})

document.addEventListener('DOMContentLoaded',function(){
   
    //gets the selected the time
        var timeOption = {
            twelveHour:true,
            vibrate:true,
            onSelect: function(hour,second){
                var hourSelected = hour
                var minuteSelected = second
                USER.appointmentTime = hourSelected+":"+minuteSelected
               console.log(USER)
               console.log("!")
               // so I have to access the Node element from the html.  Since I know that there is only one
               // element with the fields that the user inputs I use the first node.  That returns a node object that has a 
               // property of value that which is then used to return the value from the field and store it in the user object
               USER.firstName = document.getElementsByClassName('userfirstname')[0].value
               USER.lastName = document.getElementsByClassName('userlastname')[0].value
               USER.emailAddress = document.getElementsByClassName('user_email')[0].value
               USER.phoneNumber = document.getElementsByClassName('usernumber')[0].value
               console.log("this is the user in side the onselct"+USER)
                }
            }
            
        
        var htmlTimeElems = document.querySelectorAll('.timepicker');
        var timeInstances = M.Timepicker.init(htmlTimeElems, timeOption);
       
    
    
   
})



