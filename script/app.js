
(function() {
	var frameContainer = document.getElementById("frame");
	var capturing = false;

	camera.init({
		width: 612,
		height: 612,
		fps: 30,
		mirror: true,
		targetCanvas: frameContainer,

		onFrame: function(canvas) {

		},

		onSuccess: function() {
			document.getElementById("info").style.display = "none";

			capturing = true;
			document.getElementById("pause").style.display = "block";
			document.getElementById("pause").onclick = function() {
				if (capturing) {
					camera.pause();
				} else {
					camera.start();
				}
				capturing = !capturing;
			};
		},

		onError: function(error) {
			// TODO: log error
		},

		onNotSupported: function() {
			document.getElementById("info").style.display = "none";
			asciiContainer.style.display = "none";
			document.getElementById("notSupported").style.display = "block";
		}
	});
})();