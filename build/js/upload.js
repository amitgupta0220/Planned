var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
subject = unescape(temp[1]);
temp = parameters[1].split("=");
uid = unescape(temp[1]);
console.log(subject + " " + uid);
function uploadFile(type, elementID) {
	var firstFile = document.getElementById(elementID).files[0];
	var storageRef = firebase.storage().ref("files");
	// var firstFile = ev.files[0]; // get the first file uploaded
	var uploadTask = storageRef
		.child(firstFile.name)
		.put(firstFile)
		.then((snapshot) => {
			snapshot.ref.getDownloadURL().then((url) => {
				db.collection("files")
					.doc(uid)
					.collection(type)
					.doc(subject)
					.collection(type)
					.doc(firstFile.name)
					.set({ fileName: firstFile.name, viewURL: url })
					.then((s) => {
						alert("Done uploading");
					});
			});
		});
	// uploadTask.on("state_changed", function progress(snapshot) {
	// 	console.log(snapshot.totalBytesTransferred); // progress of upload
	// });
}
