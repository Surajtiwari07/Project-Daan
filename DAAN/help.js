// Add active class to the current button (highlight it)
var header = document.getElementsByTagName("header")[0];
var btns = header.getElementsByTagName("a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Form validation
var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name == "" || email == "" || message == "") {
    alert("Please fill in all fields.");
  } else {
    alert("Thank you for your message, " + name + ".");
  }
});
