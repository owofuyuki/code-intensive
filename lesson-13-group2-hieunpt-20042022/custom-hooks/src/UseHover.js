import { useHover } from "./Hooks.js";

const UseHover = () => {
  const [elemRef, isHover] = useHover();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 16,
        width: 100,
        height: 100,
        border: "1px solid black",
        borderRadius: 8,
      }}
      ref={elemRef}
    >
      {isHover ? "Hovering" : "Not hovering"}
    </div>
  );
};

export default UseHover;
