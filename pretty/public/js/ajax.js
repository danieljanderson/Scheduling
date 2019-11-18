$(function() {
  //console.log('this is the user in side the onselct' + Customer)
  var Customer = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    appointments: [],
  }
  $('#submit_button').click(Submit)
  console.log('hi')

  function Submit() {
    console.log(document.getElementsByClassName('appdate'))
    var appointmentDate = document.getElementsByClassName('appdate')[0].value
    var appointmentTime = document.getElementsByClassName('apptime')[0].value
    Customer.appointments.push({ AppointmentDate: new Date(appointmentDate + ' ' + appointmentTime) })
    console.log('this is the new user appointment date object')
    console.log(Customer.appointments)
    Customer.firstName = document.getElementsByClassName('userfirstname')[0].value
    Customer.lastName = document.getElementsByClassName('userlastname')[0].value
    Customer.email = document.getElementsByClassName('user_email')[0].value
    Customer.phoneNumber = document.getElementsByClassName('usernumber')[0].value
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3050/api/customers',
      data: JSON.stringify(Customer),
      contentType: 'application/json',
      success: success,
    })
    function success(data) {
      console.log(data)
    }

    console.log('hi')
  }
  function get() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3050/api/',
      success: function(data) {
        console.log(data)
      },
      error: function() {
        console.log('rip')
      },
    })
  }
})
