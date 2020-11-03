var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
subject = unescape(temp[1]);
temp = parameters[1].split("=");
uid = unescape(temp[1]);
console.log(subject + " " + uid);
db.collection("files")
	.doc(uid)
	.collection("assignments")
	.doc(subject)
	.collection("assignments")
	.get()
	.then((s) => {
		$("#elements").html("");
		var n = 0;
		s.forEach(function (x) {
			$("#elements").append(
				`
				<div class="element1-content" id="head` +
					n +
					`">
					<div class="cardForView">
						<h4>` +
					x.data().fileName +
					`	</h4>
						<button type="button" id"buttonFOrViewAssignments"><a target="_blank" href="` +
					x.data().viewURL +
					`">View PDF</a></button>
					</div>
				</div>
				`
			);
			console.log(x.data().fileName);
			n += 1;
		});
	});
db.collection("files")
	.doc(uid)
	.collection("experiments")
	.doc(subject)
	.collection("experiments")
	.get()
	.then((s) => {
		$("#elements_two").html("");
		var n = 0;
		s.forEach(function (x) {
			$("#elements2").append(
				`
				<div class="element2-content" id="head` +
					n +
					`">
					<div class="cardForViewTwo">
						<h4>` +
					x.data().fileName +
					`	</h4>
						<button type="button" id"buttonFOrViewExperiments"><a target="_blank" href="` +
					x.data().viewURL +
					`">View PDF</a></button>
					</div>
				</div>
				`
			);
			console.log(x.data().fileName);
			n += 1;
		});
	});
function uploadFile(type, elementID) {
	var firstFile = document.getElementById(elementID).files[0];
	var storageRef = firebase.storage().ref("files");
	// var firstFile = ev.files[0]; // get the first file uploaded
	console.log("started");
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
function content() {
	var x = document.getElementById("container");
	if (x.className.indexOf("show") == -1) {
		x.className += "show";
		document.getElementById("elements").style.display = "none";
	} else {
		x.className = x.className.replace("show", "");
		document.getElementById("elements").style.display = "block";
	}
}
function contentTwo() {
	var y = document.getElementById("container2");
	if (y.className.indexOf("show") == -1) {
		y.className += "show";
		document.getElementById("elements2").style.display = "none";
	} else {
		y.className = y.className.replace("show", "");
		document.getElementById("elements2").style.display = "block";
	}
}
