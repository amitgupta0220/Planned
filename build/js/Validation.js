firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// var uid = user.uid;
		// db.collection("users")
		// 	.doc("data")
		// 	.collection(uid)
		// 	.get()
		// 	.then((s) => {
		// 		s.forEach(function (x) {
		// 			name = x.data().name;
		// 			lastn = x.data().lastName;
		// 			// console.log(x.data().name);
		// 			// console.log(x.data().lastName);
		// 		});
		// 	});
		var name = localStorage.getItem("name");
		var lastName = localStorage.getItem("lastName");
		var email = localStorage.getItem("email");
		var sem = localStorage.getItem("sem");
		var year = localStorage.getItem("year");
		db.collection("users")
			.doc(user.uid)
			.set({
				sem: sem,
				name: name,
				lastName: lastName,
				email: email,
				year: year,
			})
			.then((res) => {
				console.log("done");
			})
			.catch((Err) => {
				console.log("error");
			});
		alert("Signed in " + user.uid);
		setTimeout(function () {
			window.location.replace(
				"../build/html/next.html?" + "sem=" + sem + "&year=" + year
			); //----------------change page here---------------//
		}, 1000);
		// var firebaseRef = firebase.database().ref();
		// var userData = {
		// 	// userFullName: userFullName,
		// 	// firstName: firstName,
		// 	userEmail: "abc@abc.abc",
		// 	userUID: "test",
		// };
		// firebaseRef.child("test").set(userData);
		// setTimeout(function () {
		// 	window.location.replace("temp.html"); //----------------change page here---------------//
		// }, 1000);
	} else {
		var user = firebase.auth().currentUser;
		if (user == null) {
			console.log("no user");
		}
		// window.alert('Logged out');
		console.log("Logged out");
	}
});
// db.collection("users")
// 	.doc("abc")
// 	.set({
// 		hello: "hello",
// 	})
// 	.then((res) => {
// 		console.log("done");
// 	})
// 	.catch((Err) => {
// 		console.log("error");
// 	});

// function signInAfter(name, lastName, email, sem, year) {
// 	var user = firebase.auth().currentUser;
// 	var uid;
// 	if (user != null) {
// 		uid = user.uid;
// 		console.log("2");
// 		db.collection("users")
// 			.doc(uid)
// 			.set({
// 				sem: sem,
// 				name: name,
// 				lastName: lastName,
// 				email: email,
// 				year: year,
// 			})
// 			.then((res) => {
// 				console.log("done");
// 			})
// 			.catch((Err) => {
// 				console.log("error");
// 			});
// 	} else {
// 		console.log("null");
// 	}
// }

// function check() {
// 	firebase.auth().onAuthStateChanged(function (user) {
// 		if (user) {
// 			alert("Signed in ", user.uid);
// 			setTimeout(function () {
// 				window.location.replace("../build/html/next.html"); //----------------change page here---------------//
// 			}, 1000);
// 		} else {
// 			// window.alert('Logged out');
// 			console.log("Logged out");
// 		}
// 	});
// }

// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
function checkfirstName() {
	var firstName = document.getElementById("firstName").value;
	var flag = false;
	if (firstName === "") {
		flag = true;
	}
	if (flag) {
		document.getElementById("firstnameErr").style.display = "block";
	} else {
		document.getElementById("firstnameErr").style.display = "none";
	}
}
function checklastName() {
	var lastName = document.getElementById("lastName").value;
	var flag = false;
	if (lastName === "") {
		flag = true;
	}
	if (flag) {
		document.getElementById("lastnameErr").style.display = "block";
	} else {
		document.getElementById("lastnameErr").style.display = "none";
	}
}
// function checkUserEmail() {
//     var userEmail = document.getElementById("userEmail");
//     var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     var flag;
//     if (userEmail.value.match(userEmailFormate)) {
//         flag = false;
//     } else {
//         flag = true;
//     }
//     if (flag) {
//         document.getElementById("userEmailError").style.display = "block";
//     } else {
//         document.getElementById("userEmailError").style.display = "none";
//     }
// }
// function checkUserPassword() {
//     var userPassword = document.getElementById("userPassword");
//     var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
//     var flag;
//     if (userPassword.value.match(userPasswordFormate)) {
//         flag = false;
//     } else {
//         flag = true;
//     }
//     if (flag) {
//         document.getElementById("userPasswordError").style.display = "block";
//     } else {
//         document.getElementById("userPasswordError").style.display = "none";
//     }
// }
function signUp() {
	// var userFullName = document.getElementById("userFullName").value;
	// var firstName = document.getElementById("firstName").value;
	var userEmail = document.getElementById("email").value;
	var userPassword = document.getElementById("password").value;
	var name = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var x = document.getElementById("semesterOption").selectedIndex;
	var sem = document.getElementsByTagName("option")[x + 5].value;
	var y = document.getElementById("yearOption").selectedIndex;
	var year = document.getElementsByTagName("option")[y].value;
	localStorage.setItem("name", name);
	localStorage.setItem("lastName", lastName);
	localStorage.setItem("email", userEmail);
	localStorage.setItem("sem", sem);
	localStorage.setItem("year", year);
	// console.log(userEmail, userPassword, year, sem);
	// var userFullNameFormate = /^([A-Za-z.\s_-])/;
	// var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

	// var checkUserFullNameValid = userFullName.match(userFullNameFormate);
	// var checkUserEmailValid = userEmail.match(userEmailFormate);
	// var checkUserPasswordValid = userPassword.match(userPasswordFormate);

	// if (checkUserFullNameValid == null) {
	//     return checkUserFullName();
	// } else if (firstName === "") {
	//     return checkfirstName();
	// } else
	// if (checkUserEmailValid == null) {
	//     return checkUserEmail();
	// } else if (checkUserPasswordValid == null) {
	//     return checkUserPassword();
	// } else {
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword);

	// signInAfter(name, lastName, userEmail, sem, year);

	// .then((success) => {
	// 	console.log("1");

	// 	alert("Logged in with uid" + uid);

	// 	// var firebaseRef = firebase.database().ref();
	// 	// var userData = {
	// 	// 	// userFullName: userFullName,
	// 	// 	// firstName: firstName,
	// 	// 	userEmail: userEmail,
	// 	// 	userPassword: userPassword,
	// 	// };
	// 	// firebaseRef.child(uid).set(userData);
	// })
	// .catch((error) => {
	// 	// Handle Errors here.
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
	// 	alert("Error " + errorMessage);
	// });
	// }
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
		document.getElementById("userSIEmailError").style.visibility =
			"visible";
	} else {
		document.getElementById("userSIEmailError").style.visibility = "hidden";
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
		document.getElementById("userSIPasswordError").style.visibility =
			"visible";
	} else {
		document.getElementById("userSIPasswordError").style.visibility =
			"hidden";
	}
}
function signIn() {
	var userSIEmail = document.getElementById("emailForSignIn").value;
	var userSIPassword = document.getElementById("passwordForSignIn").value;

	// var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

	// var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
	// var checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);

	// if (checkUserEmailValid == null) {
	// 	console.log("2");
	// 	return checkUserSIEmail();
	// } else if (checkUserPasswordValid == null) {
	// 	console.log("3");
	// 	return checkUserSIPassword();
	// } else {

	console.log("Outside login");
	firebase
		.auth()
		.signInWithEmailAndPassword(userSIEmail, userSIPassword)
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error in sign in " + errorMessage);
		});

	// signInAfter(name, lastName, email, sem, year);
	console.log("here");
	// }
}
function signOut() {
	firebase
		.auth()
		.signOut()
		.then(function () {
			setTimeout(function () {
				window.location.replace("index.html");
			}, 1000);
		})
		.catch(function (error) {
			// An error happened.
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error in sign in " + errorMessage);
		});
}
function uploadFile(ev) {
	var storageRef = firebase.storage().ref("files");
	var firstFile = ev.files[0]; // get the first file uploaded
	var uploadTask = storageRef.child(firstFile.name).put(firstFile);
	uploadTask.on("state_changed", function progress(snapshot) {
		console.log(snapshot.totalBytesTransferred); // progress of upload
	});
}
