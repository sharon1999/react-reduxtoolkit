import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChangeColor from "./ChangeColor";
import ChangeState from "./ChangeState";
export function App(props) {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  return (
    <div className="App" style={{ color: theme }}>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
      <ChangeState />
      <ChangeColor />
    </div>
  );
}

// Log to console
console.log("Hello console");
