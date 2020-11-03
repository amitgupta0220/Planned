// var queryString = decodeURIComponent(window.location.search);
// queryString = queryString.substring(1);
// var queries = queryString.split("&");
// for (var i = 0; i < queries.length; i++) {
// 	console.log(queries[i]);
// }
var parameters = location.search.substring(1).split("&");

var temp = parameters[0].split("=");
sem = unescape(temp[1]);
temp = parameters[1].split("=");
year = unescape(temp[1]);
console.log(sem + " " + year);
db.collection("collectionOfSubjects")
	.doc(year)
	.collection(sem)
	.doc("subjects")
	.collection("subjects")
	.get()
	.then((s) => {
		$("#station").html(""); // This will empty your station button
		// $("#station_box").html(""); // This will empty your station box
		var n = 0;
		s.forEach(function (x) {
			var user = firebase.auth().currentUser;
			// console.log(x.data());
			$("#accordion").append(
				`
					<div class="square-flip" id = "heading` +
					n +
					`">
			<div class='square' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
			<div class="square-container">
                    <div class="align-center">
                        <img src="" class="boxshadow" alt="" />
                    </div>
                    <h2 class="textshadow">` +
					x.data().subject +
					`</h2>
                </div>
                <div class="flip-overlay"></div>
            </div>
            <div class="square2" data-image="">
                <div class="square-container2">
                    <div class="align-center"></div>
                    <a href="" target="_blank" class="boxshadow kallyas-button">Assignments</a>
                </div>
        <div class="flip-overlay"></div>
    </div>
    <div class='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
        <div class="square-container2">
            <div class="align-center"></div>
            <a href="../html/assignment.html?subject=` +
					x.data().subject +
					`&uid=` +
					user.uid +
					`" target="_blank" class="boxshadow kallyas-button">Assignments</a>
        </div>
        <div class="flip-overlay"></div>
    </div>
			</div>
			`
				//  <div class="card">
				//    <div class="card-header" id="heading` +
				// 					n +
				// 					`">
				//        <h5 class="mb-0">
				//            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse` +
				// 					n +
				// 					`">` +
				// 					x.id +
				// 					`</button>
				//        </h5>
				//     </div>

				//     <div id="collapse` +
				// 					n +
				// 					`" class="collapse" data-parent="#accordion">
				//        <div class="card-body">
				//           <p>` +
				// 					x.data().subject +
				// 					`</p>
				//        </div>
				//     </div>
				//  </div>

				//  `
			);

			n += 1;
		});
	});
function signOut() {
	firebase
		.auth()
		.signOut()
		.then(function () {
			setTimeout(function () {
				window.location.replace("../index.html");
			}, 1000);
		})
		.catch(function (error) {
			// An error happened.
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error in sign in " + errorMessage);
		});
}
