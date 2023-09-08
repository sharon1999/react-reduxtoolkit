import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "./Theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(setTheme(color))}>Change Theme</button>
    </>
  );
};

export default ChangeColor;
