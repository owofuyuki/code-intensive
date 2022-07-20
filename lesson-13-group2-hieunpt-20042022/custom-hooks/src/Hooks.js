import { useState, useRef, useEffect } from "react";

const useInput = () => {
  const [input, setInput] = useState("");

  const handleInputChanged = (event) => {
    setInput(event.target.value);
  };

  return {
    value: input,
    handleChange: handleInputChanged,
  };
};

const useHover = () => {
  const [isHover, setHover] = useState(false);
  const elemRef = useRef(null);

  useEffect(() => {
    const node = elemRef.current;
    node.addEventListener("mouseenter", () => {
      setHover(true);
    });
    node.addEventListener("mouseleave", () => {
      setHover(false);
    });
  });

  return [elemRef, isHover];
};

const useLocalStorage = (name) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(Number(localStorage.getItem(name)));
  }, [name]);

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [name, value]);

  return [value, setValue];
};

export { useInput, useHover, useLocalStorage };
