import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "localhost:4001",
      color: "white",
      namespace: "/1",
      recieving: false
    };
  }

  // sending sockets
  send = () => {
    this.socket.emit("change color", this.state.color); // to state.color
  };

  connectSocket = () => {
    this.socket = socketIOClient(this.state.endpoint + this.state.namespace);
    this.socket.on("change color", col => {
      this.setState({ color: col, recieving: true });
      console.log("color changed to " + col);
    });
  };

  disconnectSocket = () => {
    this.socket.close();
  };

  //adding function
  setColor = color => {
    this.setState({ color, recieving: false });
  };

  setNamespace = namespace => {
    this.setState({ namespace });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.namespace !== this.state.namespace) {
      this.disconnectSocket();
      this.connectSocket();
    }

    if (prevState.color !== this.state.color && !this.state.recieving) {
      this.send();
    }
  };

  componentDidMount = () => {
    this.connectSocket();
  };

  render() {
    document.body.style.backgroundColor = this.state.color;
    return (
      <div style={{ textAlign: "center" }}>
        <button id="blue" onClick={() => this.setColor("blue")}>
          Blue
        </button>
        <button id="red" onClick={() => this.setColor("red")}>
          Red
        </button>
        <button id="green" onClick={() => this.setColor("green")}>
          Green
        </button>
        <button id="orange" onClick={() => this.setColor("orange")}>
          Orange
        </button>
        <button id="Room 1" onClick={() => this.setNamespace("/1")}>
          Room 1
        </button>
        <button id="Room 2" onClick={() => this.setNamespace("/2")}>
          Room 2
        </button>
        <button id="Room 3" onClick={() => this.setNamespace("/3")}>
          Room 3
        </button>
        <p>Room: {this.state.namespace}</p>
      </div>
    );
  }
}

export default App;
