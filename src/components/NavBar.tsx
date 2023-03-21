import { FunctionComponent, useState } from "react";
import dropdown from "../assets/three-dots-vertical.svg";

export const NavBar: FunctionComponent = () => {
  const [title, setTitle] = useState("Title not set");
  return (
    <div className="NavBar">
      <h1>{title}</h1>
      <a href="https://reactjs.org">
        <img src={dropdown} className="dropdown" alt="dropdown logo" />
      </a>
    </div>
  );
};
