// import React, { useState } from "react";
import React from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "#13466e"
  // });
  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "grey",
  //       backgroundColor: "#042743",
        // border: "1px solid grey"
  //     });
  //     setBtnText("Enable Light Mode");

  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#13466e"
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  }

  return (
    <>
      {/* <div className="container my-3" style={myStyle}> */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 className="my-3">{props.heading} </h2>

        <div className="accordion" id="accordionExample" style={myStyle}>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne" style={myStyle}>
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Add Personal Notes</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                MyNotebook gives you a way to saved your private notes smoothly.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Using CRUD System</strong>
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                CRUD (Create, Read, Update, Delete) is an acronym for ways one can operate on stored data. It is a mnemonic for the four basic functions of persistent storage.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Free to use</strong>
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                MyNotebook is a free notes making tool that provides instant security of your personal notes as you need to login first to open it. If you don't have an account then create your MyNotebook account through signup. Thus it is suitable for making self notes quickly and efficiently. All your notes are secured on cloud.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>

            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                This MyNotebook software works in any web browser such as Chrome, Edge, Firefox, Safari, Opera.
              </div>
            </div>
          </div>

          {/* <div className="container my-3" style={myStyle}>
            <button
              onClick={toggleStyle}
              type="button"
              className="btn btn-primary"
            >
              {btnText}
            </button>
          </div> */}

        </div>

      </div>
    </>
  );
}