'use strict';

// STEP1 : 웹캠에서 비디오 스트림 가져오기

// only streaming video
const mediaStreamConstraints = {
    video: true,
    audio: true,
};

const localVideo = document.querySelector('video');

let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error : ', error);
}

// Initialize media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream)
    .catch(handleLocalMediaStreamError);
