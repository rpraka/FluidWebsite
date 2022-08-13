// // Initialize Firebase (ADD YOUR OWN DATA)
// // var config = {
// //     apiKey: "AIzaSyChP1IQhVDLlbd2R1IadbrBEe0YEwafExk",
// //     authDomain: "fluid-waitlist.firebaseapp.com",
// //     databaseURL: "https://fluid-waitlist-default-rtdb.firebaseio.com",
// //     projectId: "fluid-waitlist",
// //     storageBucket: "fluid-waitlist.appspot.com",
// //     messagingSenderId: "101723915594"
// //   };
// //   firebase.initializeApp(config);
  
// //   // Reference messages collection
// //   var messagesRef = firebase.database().ref('emails');
  
//   // Listen for form submit
//   document.getElementById('contactForm').addEventListener('submit', submitForm);
  
//   // Submit form
  function submitForm(e){
    alert("chinee")
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
  
    // Save message
    saveMessage(name, email);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'block';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
//   // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
//   // Save message to firebase
//   function saveMessage(name, email){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       name: name,
//       email:email
//     });
//   }