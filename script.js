var topbtn = document.getElementById("topbtn");

// When the user scrolls down 20px from the s of the document, show the button
window.onscroll = ()=> {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// contact form


// $(document).ready(function() {
//   $("#submit").click(function() {
//   var name = $("#name").val();
//   var email = $("#email").val();
//   var message = $("#message").val();
//   var contact = $("#contact").val();
//   $("#returnmessage").empty(); // To empty previous error/success message.
//   // Checking for blank fields.
//   if (name == '' || email == '' || contact == '') {
//   alert("Please Fill Required Fields");
//   } else {
//   // Returns successful data submission message when the entered information is stored in database.
//   $.post("contact_form.php", {
//   name1: name,
//   email1: email,
//   message1: message,
//   contact1: contact
//   }, function(data) {
//   $("#returnmessage").append(data); // Append returned message to message paragraph.
//   if (data == "Your Query has been received, We will contact you soon.") {
//   $("#form")[0].reset(); // To reset form fields on success.
//   }
//   });
//   }
//   });
//   });


//text animation
var typed = new Typed(".animate", {
  strings: [
    "HEY THERE! I'M YUVASAIKIRAN",
  ],
  typeSpeed: 50,
  backDelay: 5000,
  backSpeed: 50,
  loop: true,
  cursorChar: '_',
    // shuffle: true,
    // smartBackspace: false,
});