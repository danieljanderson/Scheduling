document.addEventListener('DOMContentLoaded', function() {
  var calender= document.querySelectorAll('.datepicker');
  console.log(calender)
  
  var instances = M.Datepicker.init(calender, {format:'mmmm dd, yyyy'});
  console.log(instances.close())
  //var element = document.querySelectorAll('.datepicker');
  //instance.SetDate()
  //var test = M.Datepicker.getInstance(calender)
  //console.log(instances.SetDate())
  //instance.setDate()
});




