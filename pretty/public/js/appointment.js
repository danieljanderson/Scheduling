var appointmentDate = ''
var appointmentTime = ''
var Customer = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  appointments: [],
}

document.addEventListener('DOMContentLoaded', function() {
  var modifiedDate
  var options = {
    format: 'mmmm dd, yyyy',
    onSelect: function(date) {
      //the appointmentDate is the date the user chooses for their appointment
      var selectedDate = date
      console.log(selectedDate)

      // modifiying the date object to only display the date not including the hours
      var dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      modifiedDate = selectedDate.toLocaleDateString('en-US', dateFormat)
      appointmentDate = modifiedDate
      console.log('I think this is where the appointmentDate is assigned')
      console.log(Customer.appointmentDate)
    },
  }

  var htmlDateElems = document.querySelectorAll('.datepicker')
  // the issue is that modifiedDate runs before the user selects the time.
  var dateInstances = M.Datepicker.init(htmlDateElems, options)
})

document.addEventListener('DOMContentLoaded', function() {
  //gets the selected the time
  var timeOption = {
    twelveHour: true,
    vibrate: true,
    onSelect: function(hour, second) {
      var hourSelected = hour
      var minuteSelected = second
      appointmentTime = hourSelected + ':' + minuteSelected
      console.log(Customer)
      console.log('!')
      // so I have to access the Node element from the html.  Since I know that there is only one
      // element with the fields that the user inputs I use the first node.  That returns a node object that has a
      // property of value that which is then used to return the value from the field and store it in the user object
      //ToDo make values from customers bind on submit button click.  in other words  move lines 50to 57 to ajax file.
      Customer.appointments.push({ AppointmentDate: new Date(appointmentDate + ' ' + appointmentTime) })
      console.log('this is the new user appointment date object')
      console.log(Customer.appointments)
      Customer.firstName = document.getElementsByClassName('userfirstname')[0].value
      Customer.lastName = document.getElementsByClassName('userlastname')[0].value
      Customer.email = document.getElementsByClassName('user_email')[0].value
      Customer.phoneNumber = document.getElementsByClassName('usernumber')[0].value
      console.log('this is the user in side the onselct' + Customer)
    },
  }

  var htmlTimeElems = document.querySelectorAll('.timepicker')
  var timeInstances = M.Timepicker.init(htmlTimeElems, timeOption)
})
