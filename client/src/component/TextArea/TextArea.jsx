import { useEffect, useRef } from 'react';
import './TextArea.css';
const TextArea = ({ value, onChange, maxLength }) => {
    const textAreaRef = useRef(null);

    const resizeTextArea = () => {
        textAreaRef.current.style.height = '50px';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    };
    useEffect(resizeTextArea, [value]);
    return (
        <textarea
            required
            className="textarea"
            ref={textAreaRef}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
        />
    );
};

export default TextArea;
