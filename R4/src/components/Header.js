import React, { Fragment } from "react";
import "./Header.css";

const Header = ({ titulo }) => {
  return (
    <Fragment>
      <h1>{titulo}</h1>
      <form className='form-style'>
        <input type="text" name="ciudad" id="ciudad" />
        <label>Buscar Ciudad</label>
      </form>
    </Fragment>
  );
};

export default Header;
