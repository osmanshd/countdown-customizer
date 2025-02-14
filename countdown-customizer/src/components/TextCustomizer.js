import React, { useContext, useState } from "react";
import '../styles.css';
import { TextCustomizerContext } from "./TextCustomizerContext";

const TextCustomizer2 = () => {
    //const [fontSize, setFontSize] = useState('16px');
    //const [fontColor, setFontColor] = useState('#000000');

    const {fontSize, setFontSize, fontColor, setFontColor} = useContext(TextCustomizerContext);

    // set font size from input
    const onChangeFontSizeHandler = (event) => {
        setFontSize(`${event.target.value}px`);
    };

    // set font color from input
    const onChangeColorHandler = (event) => {
        setFontColor(event.target.value);
    };

    return (
        <div className="customizer-container" style={{ fontSize: fontSize, color: fontColor }}>
            <span>CUSTOMIZE COUNTDOWN TIMER </span>

            <div className="input-field">
                <label htmlFor="size-selector" style={{ fontSize: fontSize, color: fontColor }}> 
                    Select Font Size: 
                    <input type="number" value={fontSize.replace('px', '')} onChange={onChangeFontSizeHandler} />
                </label>
            </div>

            <div className="input-field">
                <label htmlFor="color-selector" style={{ fontSize: fontSize, color: fontColor }}> 
                    Select Font Size: 
                    <input type="color" value={fontColor} onChange={onChangeColorHandler} />
                </label>
            </div>
        </div>
    )
}

export default TextCustomizer2;