firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        alert('Signed in ', user.uid)
        setTimeout(function () {
            window.location.replace("temp.html");     //----------------change page here---------------//
        }, 1000);
    } else {
        // window.alert('Logged out');
        console.log('Logged out');

    }

});
function check() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            alert('Signed in ', user.uid)
            setTimeout(function () {
                window.location.replace("temp.html");     //----------------change page here---------------//
            }, 1000);
        } else {

            // window.alert('Logged out');
            console.log('Logged out');
        }
    });
}

// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
function checkUserFullName() {
    var userSurname = document.getElementById("userFullName").value;
    var flag = false;
    if (userSurname === "") {
        flag = true;
    }
    if (flag) {
        document.getElementById("userFullNameError").style.display = "block";
    } else {
        document.getElementById("userFullNameError").style.display = "none";
    }
}
function checkUserSurname() {
    var userSurname = document.getElementById("userSurname").value;
    var flag = false;
    if (userSurname === "") {
        flag = true;
    }
    if (flag) {
        document.getElementById("userSurnameError").style.display = "block";
    } else {
        document.getElementById("userSurnameError").style.display = "none";
    }
}
function checkUserEmail() {
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if (userEmail.value.match(userEmailFormate)) {
        flag = false;
    } else {
        flag = true;
    }
    if (flag) {
        document.getElementById("userEmailError").style.display = "block";
    } else {
        document.getElementById("userEmailError").style.display = "none";
    }
}
function checkUserPassword() {
    var userPassword = document.getElementById("userPassword");
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    var flag;
    if (userPassword.value.match(userPasswordFormate)) {
        flag = false;
    } else {
        flag = true;
    }
    if (flag) {
        document.getElementById("userPasswordError").style.display = "block";
    } else {
        document.getElementById("userPasswordError").style.display = "none";
    }
}
function signUp() {
    // var userFullName = document.getElementById("userFullName").value;
    // var userSurname = document.getElementById("userSurname").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userFullNameFormate = /^([A-Za-z.\s_-])/;
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

    // var checkUserFullNameValid = userFullName.match(userFullNameFormate);
    var checkUserEmailValid = userEmail.match(userEmailFormate);
    var checkUserPasswordValid = userPassword.match(userPasswordFormate);

    // if (checkUserFullNameValid == null) {
    //     return checkUserFullName();
    // } else if (userSurname === "") {
    //     return checkUserSurname();
    // } else 
    if (checkUserEmailValid == null) {
        return checkUserEmail();
    } else if (checkUserPasswordValid == null) {
        return checkUserPassword();
    } else {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref();
            var userData = {
                // userFullName: userFullName,
                // userSurname: userSurname,
                userEmail: userEmail,
                userPassword: userPassword,
            }
            firebaseRef.child(uid).set(userData);
            swal('Your Account Created', 'Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function () {
                    window.location.replace("../pages/temp.html");                 //---------------Channge page here--------------------//
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: "Error",
            })
        });
    }
}


// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail() {
    console.log("a");
    var userSIEmail = document.getElementById("email");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if (userSIEmail.value.match(userSIEmailFormate)) {
        flag = false;
    } else {
        flag = true;
    }
    // flag = true;
    console.log(flag);
    if (flag) {
        document.getElementById("userSIEmailError").style.visibility = 'visible';
    } else {
        document.getElementById("userSIEmailError").style.visibility = 'hidden';
    }
}
function checkUserSIPassword() {
    var userSIPassword = document.getElementById("password");
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    var flag;
    if (userSIPassword.value.match(userSIPasswordFormate)) {
        flag = false;
    } else {
        flag = true;
    }
    if (flag) {
        document.getElementById("userSIPasswordError").style.visibility = 'visible';
    } else {
        document.getElementById("userSIPasswordError").style.visibility = 'hidden';
    }
}
function signIn() {
    var userSIEmail = document.getElementById("email").value;
    var userSIPassword = document.getElementById("password").value;
    console.log(userSIEmail, userSIPassword);
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

    var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
    var checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);

    if (checkUserEmailValid == null) {
        console.log("2");
        return checkUserSIEmail();
    }
    else if (checkUserPasswordValid == null) {
        console.log('3');
        return checkUserSIPassword();
    }
    else {
        console.log('Outside login');
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert('Error in sign in ' + errorMessage);
        });
        console.log('here');
    }
}
function signOut() {
    firebase.auth().signOut().then(function () {
        setTimeout(function () {
            window.location.replace("index.html");
        }, 1000);
    }).catch(function (error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert('Error in sign in ' + errorMessage);
    });
}