var state = document.getElementById("state");
var next = document.getElementById("next_button");
var reset = document.getElementById("reset_button");

var current_state = 1;

var firebaseConfig = {
    apiKey: "xxxxxxxxx",
    authDomain: "xxxxxxxxx",
    databaseURL: "xxxxxxxxx",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxxxx",
    messagingSenderId: "xxxxxxxxx",
    appId: "xxxxxxxxx"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Display State
firebase.database().ref("state").on('value', function(snapshot){
    state.innerText = snapshot.val();
    current_state = snapshot.val();
});

// Function
function next_state() {
    if (current_state + 1 <= 5) {
        var updates = {};
        current_state += 1;
        updates["state"] = current_state;
        firebase.database().ref().update(updates);
    }
}

function back_state() {
    if (current_state - 1 >= 1) {
        var updates = {};
        current_state -= 1;
        updates["state"] = current_state;
        firebase.database().ref().update(updates);
    }
}

function reset_state() {
    var updates = {};
    updates["state"] = 1;
    firebase.database().ref().update(updates);
    current_state = 1;
}