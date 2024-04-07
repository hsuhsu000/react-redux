import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav className="col-6 offset-3 d-flex justify-content-between align-items-center mt-3">
      <h1>Redux Counter</h1>
      {isLogin && (
        <div>
          <a href="#" className="me-2">
            My Records
          </a>
          <a href="#" className="me-2">
            Profile
          </a>
          <a href="#">
            <button className="btn btn-dark" onClick={logoutHandler}>
              Logout
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
