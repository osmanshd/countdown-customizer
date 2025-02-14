import React, { useState, useEffect, useContext } from "react";
import './styles.css';
import CountdownTimer from "./components/CountdownTimer";
import VideoUploader from "./components/VideoUploader";
import TextCustomizer2 from "./components/TextCustomizer";
import { TextCustomizerProvider } from "./components/TextCustomizerContext";

function App() {  
  return (
    <TextCustomizerProvider>
      <div className="Countdown-Customizer">
        <div className="input-section">
          <VideoUploader />
          <TextCustomizer2 />
        </div>

        <div className="timer-section">
        <CountdownTimer />
        </div>
      </div>
    </TextCustomizerProvider>
  );
}

export default App;
