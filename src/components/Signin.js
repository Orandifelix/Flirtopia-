import React from 'react'
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div>
      <div className="formwrapper">
        <h1>FLIRTOPIA</h1>
        <h3>FILL IN YOUR INFO</h3>
        <form>
          <input type="text" placeholder="Enter Username" name="username" />
          <input type="password" placeholder="Enter Password" name="password" />
          <button type="submit">Sigin</button>
        </form>
        <p>
          Dont have an account ? Then Sign up <Link to="/signin">Signin</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin