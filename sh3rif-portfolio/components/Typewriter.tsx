"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export default function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(pauseTimeout);
    }

    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentText.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
