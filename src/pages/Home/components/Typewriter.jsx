import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Typewriter(props){
    const [currentText, setCurrentText] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [typingState, setTypingState] = useState("type");
    const [delay, setDelay] = useState(100);
    const allText = props.text;
    
    useEffect(() => {
        const d = setTimeout(() => {
            if(typingState === "type"){
                if(currentIndex < allText[currentTextIndex].length){
                    setDelay(100);
                    setCurrentText(allText[currentTextIndex].slice(0, currentIndex+1));
                    setCurrentIndex(currentIndex+1);
                }else{
                    setTypingState("erase");
                    setDelay(2000);
                }
            }
            
            if(typingState === "erase"){
                if(currentIndex >= 0){
                    setDelay(200);
                    setCurrentIndex(currentIndex-1);
                    setCurrentText(allText[currentTextIndex].slice(0, currentIndex));
                }else{
                    setCurrentIndex(0);
                    currentTextIndex >= allText.length-1 ? setCurrentTextIndex(0) : setCurrentTextIndex(currentTextIndex+1);
                    setTypingState("type");
                    setDelay(100);
                }
            }
        }, delay);
        
        return () => clearTimeout(d);
    }, [currentText, typingState, currentIndex]);
    return (
        <span>
            <span>{currentText}</span>
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="h-[1rem] bg-black">.</motion.span>
            <span>.</span>
        </span>
    )
}