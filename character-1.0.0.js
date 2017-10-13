"use strict";

function ainoTalking() {
    var iframe = document.getElementById( 'aino-talking' );
    var version = '1.0.0';
    var urlid = 'e535f09ece994dd0988a52a6086e40dd';
    var client = new Sketchfab( version, iframe );

    client.init( urlid, {
        success: function onSuccess( api ){
          api.start( function() {
						$( '#_play' ).click( function (event) {
								console.log( '_play!' );
								api.play();
						});

						$( '#_stop' ).click( function (event) {
								console.log( '_stop!' );
								api.pause();
						});
					});

					api.addEventListener( 'viewerready', function() {
						console.log( 'Viewer is ready' );
			                      //once the viewer is ready, show the iframe
						let $apiFrame = document.getElementById("aino-talking");
						AIno_intro();
						$apiFrame.classList.remove("hidden"); // Remove hidden class
					} );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        },
				transparent: 1,
				camera: 0,
				ui_infos: 0,
				ui_controls: 0,
				ui_general_controls: 0,
				ui_stop: 0,
				preload: 1,
    } );
}

function ainoIdle() {
    var iframe = document.getElementById( 'aino-idle' );
    var version = '1.0.0';
    var urlid = 'aef3cd9633a74224bea74cccf0d28ca1';
    var client = new Sketchfab( version, iframe );

    client.init( urlid, {
        success: function onSuccess( api ){
          api.start( function() {
						$( '#_play' ).click( function (event) {
								console.log( '_play!' );
								api.play();
						});

						$( '#_stop' ).click( function (event) {
								console.log( '_stop!' );
								api.pause();
						});
					});

					api.addEventListener( 'viewerready', function() {
						console.log( 'Viewer is ready' );
			                      //once the viewer is ready, show the iframe
					} );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        },
				transparent: 1,
				camera: 0,
				ui_infos: 0,
				ui_controls: 0,
				ui_general_controls: 0,
				ui_stop: 0,
				preload: 1,
    } );
}

function showAinoIdle() {
	let $apiFrame = document.getElementById("aino-idle");
	$apiFrame.classList.remove("hidden"); // Remove hidden class		
}

function showAinoIdle() {
	let $apiFrame = document.getElementById("aino-idle");
	$apiFrame.classList.add("hidden"); // Remove hidden class		
}

function showAinoTalking() {
	let $apiFrame = document.getElementById("aino-talking");
	$apiFrame.classList.remove("hidden"); // Remove hidden class		
}

function hideAinoTalking() {
	let $apiFrame = document.getElementById("aino-talking");
	$apiFrame.classList.add("hidden"); // Remove hidden class		
}
