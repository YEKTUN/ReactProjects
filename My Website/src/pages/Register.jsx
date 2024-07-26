import React from "react";

function Register() {
  return (
    <div className="Register">
      <form id="board">
      <h1>FORM</h1>
        <div className="info-btn">
          <div className="left-side">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" maxLength={11} />
            <br />
            <label htmlFor="password" >Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              maxLength={8}
            />
            <br />
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="ads21132ad@gmail.com" />
            <br />
          </div>

          <div className="right-side">
            <label htmlFor="birthday">Birthday</label>
            <input
              id="birthday"
              type="number"
              placeholder="12/12/2012"
              min={0}
            />
            <br />
            <label htmlFor="address">Address</label>
            <input id="address" type="text" /> <br />
            <div className="gender1">
              <label htmlFor="gender" id="gender">Gender</label>
              <input type="radio" name="gender" />
              <input type="radio" name="gender" />
            </div>
          </div>
        </div>

        <div className="form-btn">
          <button id="submit1"
            onClick={() => {
              alert("Submitted");
              event.preventDefault();
            }}
            type="submit"
          >
            Submit
          </button >
          <button id="clear1"
            onClick={() => {
              document.getElementById("board").reset();
              event.preventDefault();
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
