"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaUniversalAccess } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleToolbar = () => setIsOpen(!isOpen);

  const speakText = () => {
    const text = document.body.innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      alert(`You said: ${event.results[0][0].transcript}`);
    };
    recognition.start();
  };

  const changeTextSize = (delta) => {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = `${currentSize + delta}px`;
  };

  const changeTextSpacing = (delta) => {
    const body = document.body;
    const currentSpacing = parseFloat(window.getComputedStyle(body).letterSpacing) || 0;
    body.style.letterSpacing = `${currentSpacing + delta}px`;
  };

  const toggleInvertColors = () => {
    document.body.classList.toggle("invert-colors");
  };

  const toggleGrayscale = () => {
    document.body.classList.toggle("grayscale");
  };

  const toggleBigCursor = () => {
    document.body.classList.toggle("big-cursor");
  };

  const options = [
    { label: "Increase Text Size", action: () => changeTextSize(2) },
    { label: "Decrease Text Size", action: () => changeTextSize(-2) },
    { label: "Increase Text Spacing", action: () => changeTextSpacing(1) },
    { label: "Decrease Text Spacing", action: () => changeTextSpacing(-1) },
    { label: "Invert Colours", action: toggleInvertColors },
    { label: "Grey Hues", action: toggleGrayscale },
    { label: "Big Cursor", action: toggleBigCursor },
    { label: "Text to Speech", action: speakText },
    { label: "Speech to Text", action: startListening },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button onClick={toggleToolbar} className="p-3 rounded-full shadow-lg">
        <FaUniversalAccess size={24} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="p-4 bg-white shadow-xl rounded-lg w-64"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Accessibility Options</h2>
              <button onClick={toggleToolbar} className="text-xl">
                <IoMdClose />
              </button>
            </div>

            <div className="space-y-2">
              {options.map((option) => (
                <Button
                  key={option.label}
                  variant="outline"
                  className="w-full"
                  onClick={option.action}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibilityToolbar;

