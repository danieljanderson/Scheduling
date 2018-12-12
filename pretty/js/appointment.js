var appointmentDate
document.addEventListener('DOMContentLoaded', function() {
    
    var options = {
        format: 'mmmm dd, yyyy',
        onSelect: function(date) { 
             appointmentDate= date
             console.log(appointmentDate)
            
        }
    }

    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
    
   
});




