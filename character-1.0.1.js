"use strict";

function ainoTalking() {
    var iframe = document.getElementById( 'aino-talking' );
    var version = '1.0.0';
    var urlid = '1b3df2c94ff14a4693d0b82b81ecd3fa';
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
						AIno_intro();
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
				preload: 0
    } );
}

function ainoIdle() {
    var iframe = document.getElementById( 'aino-idle' );
    var version = '1.0.0';
    var urlid = '1b3df2c94ff14a4693d0b82b81ecd3fa';
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
				preload: 0
    } );
}

function ainoDancing() {
    var iframe = document.getElementById( 'aino-dancing' );
    var version = '1.0.0';
    var urlid = '1b3df2c94ff14a4693d0b82b81ecd3fa';
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
					} );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        },
				transparent: 0,
				camera: 0,
				ui_infos: 0,
				ui_controls: 0,
				ui_general_controls: 0,
				ui_stop: 0,
				preload: 0
    } );
}

function showAinoIdle() {
	let $apiFrame = document.getElementById('aino-idle');
	$apiFrame.classList.remove('hidden'); 
}

function hideAinoIdle() {
	let $apiFrame = document.getElementById('aino-idle');
	$apiFrame.classList.add('hidden'); 
}	
function showAinoTalking() {
	let $apiFrame = document.getElementById('aino-talking');
	$apiFrame.classList.remove('hidden');
}

function hideAinoTalking() {
	let $apiFrame = document.getElementById('aino-talking');
	$apiFrame.classList.add('hidden'); 	
}

function showAinoDancing() {
	let $apiFrame = document.getElementById('aino-dancing');
	$apiFrame.classList.remove('hidden');
}

function hideAinoDancing() {
	let $apiFrame = document.getElementById('aino-dancing');
	$apiFrame.classList.add('hidden');		
}
