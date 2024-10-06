"use client";
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import React from "react";

export default function ArScene() {
    return (
        <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind;" vr-mode-ui="enabled: false"
                 device-orientation-permission-ui="enabled: false">
            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
            <a-entity mindar-image-target="targetIndex: 0">
                <a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
            </a-entity>
        </a-scene>
    )
}