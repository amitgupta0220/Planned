function uploadFile(ev) {
	var storageRef = firebase.storage().ref("files");
	var firstFile = ev.files[0]; // get the first file uploaded
	var uploadTask = storageRef.child(firstFile.name).put(firstFile);
	uploadTask.on("state_changed", function progress(snapshot) {
		console.log(snapshot.totalBytesTransferred); // progress of upload
	});
}
// var inputFile = document.getElementById("file");
// inputFile.addEventListener("change", uploadFile, false);
// var storageRef = firebase.storage.ref("folderName/file.jpg");
// storageRef.getDownloadURL().then(function(url) {
//   console.log(url);
// });
