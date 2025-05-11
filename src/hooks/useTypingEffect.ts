import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number = 50) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText(''); // Reset when text or speed changes
        if (text) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText((prev: string) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);
            return () => clearInterval(typingInterval);
        }
    }, [text, speed]);

    return displayedText;
}; 