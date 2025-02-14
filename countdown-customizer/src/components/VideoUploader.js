import React, { useState, useEffect, useContext } from "react";
import '../styles.css';
import { TextCustomizerContext } from "./TextCustomizerContext";

const VideoUploader = () => {
    const [background, setBackground] = useState(null);
    const {fontSize, fontColor} = useContext(TextCustomizerContext);

    useEffect(() => {
        // Remove any existing video element when a new file is uploaded
        const existingVideo = document.querySelector('video');
        if (existingVideo) {
          existingVideo.remove();
        }

        if (background) {
            const fileType = background.type.split('/')[0];
            if (fileType === 'video') {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(background);
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.classList.add('video');
                document.body.appendChild(video);
                //document.body.style.background = `src=${URL.createObjectURL(background)} autoPlay loop muted`;
                //document.body.style.backgroundSize = 'cover';
            } 
            else if (fileType == 'image') {
                document.body.style.background = `url(${URL.createObjectURL(background)}) no-repeat center center fixed`;
                document.body.style.backgroundSize = 'cover';
            }
        }
    }, [background]);

    const onChangeFileHandler = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'video/mp4' || file.type === 'image/png')) {
                setBackground(file);
        } 
    };

    return (
        <div className="customizer-container" style={{ fontSize: fontSize, color: fontColor }}>
            <span>CUSTOMIZE BACKGROUND </span>
            <div className="input-field">
                <input type="file" accept=".mp4, .png" className="uploader-input" onChange={onChangeFileHandler} />
            </div>
        </div>
    );
}

export default VideoUploader;