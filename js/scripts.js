$(document).ready(function() {
  $("form#belief").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (gender === 'male' && age < 30) {
        var tendancy = 'liberal';
        $("#tendancy").empty().append(tendancy);
        $("#quote").show();
      } else if (gender === 'male' && age < 40) {
        var tendancy = 'conservative';
        $("#tendancy").empty().append(tendancy);
        $("#quote").show();
      } else {
        alert('Please enter your age.');
      }

    event.preventDefault();
  });
});
