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
    //console.log(document.getElementsByClassName('appdate'))
    var appointmentDate = $('.appdate')[0].value
    var appointmentTime = $('.apptime')[0].value
    //Customer.appointments.push({ AppointmentDate: new Date(appointmentDate + ' ' + appointmentTime) })
    Customer.appointments = { AppointmentDate: new Date(appointmentDate + ' ' + appointmentTime) }
    console.log('this is the new user appointment date object')
    console.log(Customer.appointments)
    Customer.firstName = $('.userfirstname')[0].value
    Customer.lastName = $('.userlastname')[0].value
    Customer.email = $('.user_email')[0].value
    Customer.phoneNumber = $('.usernumber')[0].value
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3050/api/customers',
      data: JSON.stringify(Customer),
      contentType: 'application/json',
      success: success,
    })
    function success(data) {
      console.log(data)
      location.reload(true)
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
