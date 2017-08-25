  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCYyL6i1RblC94NyutDi9mZq-iU6IZsqk0",
    authDomain: "fir-demo-b56a1.firebaseapp.com",
    databaseURL: "https://fir-demo-b56a1.firebaseio.com",
    projectId: "fir-demo-b56a1",
    storageBucket: "fir-demo-b56a1.appspot.com",
    messagingSenderId: "402866821016"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

 var name = "";
    var role = "";
    var startDate = 0;
    var monthlyRate  //moment().format("MM/DD/YYYY");
    
    $("#submit").on("click", function() {
      
      event.preventDefault();
      name = $("#name-input").val().trim();
      role = $("#role-input").val().trim();
      startDate = $("#startDate-input").val().trim();
      monthlyRate = $("#monthlyRate-input").val().trim();
      database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
      });
    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(childSnapshot) {
      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val());
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startDate);
      console.log(childSnapshot.val().monthlyRate);
      // Change the HTML to reflect
      var data = snapshot.val();
      console.log(data);
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          // "?" = value-if-true, ":" value-if-false
            name = data[key].message ? data[key].message : '';
            console.log(name);
            if (name.trim().length > 0) {
              var m = $("<p>")
              m.text(name)
                $("#messagesDiv").prepend(m);
                }
            }
        }
      var newRow = $("<tr>")
      var newCell = $("<td>")
      $("#Name").append(childSnapshot.val().name);
      $("#Role").append(childSnapshot.val().email);
      $("#startDate").append(childSnapshot.val().age);
      $("#monthlyRate").append(childSnapshot.val().comment);
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });