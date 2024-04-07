import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
const App = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <>
      <Navbar></Navbar>
      {!isLogin && <Welcome></Welcome>}
      {isLogin && <Counter></Counter>}
    </>
  );
};

export default App;
