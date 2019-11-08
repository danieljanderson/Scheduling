$(function() {
  $('#submit_button').click(get)
  console.log('hi')

  function Submit() {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3050/api/customers',
      data: Customer,
      success: success,
      dataType: Object,
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
