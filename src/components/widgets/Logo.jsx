import React, { useRef, useEffect, useState } from "react";
import "./Logo.css";

function Logo({ svgPath, text, altText = "Icon", link }) {
    const textRef = useRef(null);
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
        if (textRef.current) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = '14px system-ui, -apple-system, sans-serif';
            const measuredWidth = context.measureText(text).width;
            setTextWidth(measuredWidth);
        }
    }, [text]);

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div 
            className="logo-icon-with-text" 
            onClick={handleClick}
            style={{ 
                '--expanded-width': `${50 + textWidth + 20}px`
            }}
        >
            <div className="logo-icon-container">
                <img src={svgPath} alt={altText} className="logo-icon-svg" />
            </div>
            <div className="logo-text-container">
                <span className="logo-icon-text" ref={textRef}>{text}</span>
            </div>
        </div>
    );
}

export default Logo;