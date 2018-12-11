document.addEventListener('DOMContentLoaded', function() {
  //var calender= document.querySelectorAll('.datepicker');
 // console.log(calender)
 //var date = M.Datepicker.getInstance('.datepicker').toString(); 
  
  //var instances = M.Datepicker.init(calender, {format:'mmmm dd, yyyy'});
  //var date =M.Datepicker.getInstance('.datepicker').toString();
  //console.log(date)
  //var appointmentDate = M.Datepicker.date
 // console.log("this should be the appointmentDate ",instances)
  //var element = document.querySelectorAll('.datepicker');
  //instance.SetDate()
  //var test = M.Datepicker.getInstance(calender)
  //console.log(instances.SetDate())
  //instance.setDate()
  var elems = document.querySelectorAll('.datepicker');
  console.log(elems)
  M.Datepicker.init(elems);
  
  
  var instance = M.Datepicker.getInstance(elems[0]);
  console.log(instance.date)
  
   
});




