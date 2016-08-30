$('document').ready(function(){

  function renderBoots(boots) {
    $("#bootList").empty();
    boots.forEach(function(boot) {
      $("#bootList").append(`<li>${boot.name}</li>`);
    })

  }
  // make a function that expects all of the boots
  $.ajax({
    url: 'http://localhost:3000/boots/index',
    dataType: 'json',// jsonp is only for get requests not for POST or any other call type
    type: 'GET',
    crossDomain: true,
    error: function(err) {
     console.log('error');
     console.log(err);
    },
    success: function(data) {
      console.log('success');
      console.log(data);
      renderBoots(data);
    },
  });



  // make a function that spits out an li string with the boot's name and link to their id page
  var displayBoot = function() {
    // html string here with interpolated information
  }
})
