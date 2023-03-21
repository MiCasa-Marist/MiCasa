import { FunctionComponent } from "react";
import { Header } from "../containers";

export const Home: FunctionComponent = () => {
  return (
    <div className="Home">
      <Header />
      <p> This is a Home page!</p>
    </div>
  );
};
