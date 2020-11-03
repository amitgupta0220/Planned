var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
subject = unescape(temp[1]);
temp = parameters[1].split("=");
uid = unescape(temp[1]);
console.log(subject + " " + uid);
function uploadFile() {
	var firstFile = document.getElementById("file").files[0];
	var storageRef = firebase.storage().ref("files");
	// var firstFile = ev.files[0]; // get the first file uploaded
	var uploadTask = storageRef
		.child(firstFile.name)
		.put(firstFile)
		.then((s) => {
			alert("Done uploading");
		});
	// uploadTask.on("state_changed", function progress(snapshot) {
	// 	console.log(snapshot.totalBytesTransferred); // progress of upload
	// });
}
