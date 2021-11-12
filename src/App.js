import React, { useState } from 'react';
import Icon from "./component/Icon"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Col, Row } from "reactstrap"
import "./App.css"

const itemArray = new Array(9).fill("empty");


function App() {

  const [isCross, setIsCross] = useState(false);
  const [ , setUpdateState] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setUpdateState(true);
    setWinMessage("");
    itemArray.fill("empty");
  };

  const checkIsWinner = () => {

    if (itemArray[0] !== "empty" && itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2]) {
      setWinMessage(`${itemArray[0]} wins`)
    } else if (itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5]) {
      setWinMessage(`${itemArray[3]} wins`)
    } else if (itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8]) {
      setWinMessage(`${itemArray[6]} wins`)
    } else if (itemArray[0] !== "empty" && itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6]) {
      setWinMessage(`${itemArray[0]} wins`)
    } else if (itemArray[1] !== "empty" && itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7]) {
      setWinMessage(`${itemArray[1]} wins`)
    } else if (itemArray[2] !== "empty" && itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8]) {
      setWinMessage(`${itemArray[2]} wins`)
    } else if (itemArray[0] !== "empty" && itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8]) {
      setWinMessage(`${itemArray[0]} wins`)
      // diagonal
    } else if (itemArray[2] !== "empty" && itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6]) {
      setWinMessage(`${itemArray[2]} wins`)
      // diagonal
    } else if (!itemArray.includes("empty")) {
      setWinMessage(`Match Draw`)
    }


  };

  const chnageItem = (itemNumber) => {

    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross)
    } else {
      return toast("already filled", { type: "error" })
    }

    setUpdateState(false);
    checkIsWinner()

  }

  return (
    <Container className="p-4" >
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3 col" >
          <div className="mb-2 mt-2">
            <h1 className=" text-center custom-font" >
              tic-tac-toe
            </h1>
          </div>
          {winMessage ? (
            <div className="mb-2 ">
              <h1 className="text-success text-uppercase text-center" >
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame} >
                Reload Game
              </Button>
            </div>
          ) : (
            <div className="mb-2 mt-2">
              <h1 className="text-warning text-uppercase text-center" >
                {isCross ? "Cross" : "Circle"} turns
              </h1>
              <Button color="warning" block onClick={reloadGame} >
                Reset Game
              </Button>
            </div>
          )}
          <div className="play-area">
            {
              itemArray.map((item, index) => {
                return (
                  <div key={index} className="block" id={`block_${index}`} onClick={() => chnageItem(index)} >
                    <Icon name={item} />
                  </div >)
              })
            }
          </div>

          <footer>

            <div className="mb-2 mt-5 d-flex">
              <p>Sukhvinder Singh</p>
              <span className="ms-2" ><a href="https://www.linkedin.com/in/sukhvinder-singh-4029a8190"  > <Icon name="linkedin" /></a></span>
              <span className="ms-2" ><a href="https://github.com/iamsukhe"  > <Icon name="github" /></a></span>
            </div>

          </footer>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
