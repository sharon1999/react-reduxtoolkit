import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./User";
const ChangeState = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* Login */}
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Sharon1",
              age: 0,
              email: "sharondsaasfdsda@test.com"
            })
          );
        }}
      >
        Login
      </button>
      {/* Logout */}
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(
            logout({
              name: "Sharon1",
              age: 0,
              email: "sharondsaasfdsda@test.com"
            })
          );
        }}
      >
        Logout
      </button>
      {/* ChangeTheme */}
      <br />
      <br />
    </div>
  );
};
export default ChangeState;
