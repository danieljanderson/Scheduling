var appointmentDate
document.addEventListener('DOMContentLoaded', function() {
    
    var options = {
        format: 'mmmm dd, yyyy',
        onSelect: function(date) { 
             //the appointmentDate is the date the user chooses for their appointment
             appointmentDate= date
             console.log(appointmentDate)
            
        }
    }

    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
    
   
});




