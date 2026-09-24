import { useEffect, useState } from "react";

export function useTypewriter(
  phrases,
  { typingSpeed = 70, pauseTime = 1800, clearedPause = 300, startDelay = 400 } = {}
) {
  const [text, setText] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let timeoutId;

    function typeTick() {
      const currentPhrase = phrases[phraseIndex];
      charIndex++;
      setText(currentPhrase.slice(0, charIndex));

      if (charIndex === currentPhrase.length) {
        timeoutId = setTimeout(clearAndAdvance, pauseTime);
        return;
      }
      timeoutId = setTimeout(typeTick, typingSpeed);
    }

    function clearAndAdvance() {
      setText("");
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeoutId = setTimeout(typeTick, clearedPause);
    }

    timeoutId = setTimeout(typeTick, startDelay);
    return () => clearTimeout(timeoutId);
  }, [phrases, typingSpeed, pauseTime, clearedPause, startDelay]);

  return text;
}
