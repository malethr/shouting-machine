$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var inputUp = person1Input.toUpperCase();
    $("#shout").text(inputUp);

    event.preventDefault();
  });
});
