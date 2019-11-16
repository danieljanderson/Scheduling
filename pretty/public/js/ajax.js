$(function() {
  $('#submit_button').click(Submit)
  console.log('hi')

  function Submit() {
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
