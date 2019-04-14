import React, { Component } from "react";
import Header from "./Header";

class Drum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
        pads: [
            {
                key: 'Q',
                pad: 81,
                id: 'Q',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            },
            {
                key: 'W',
                pad:87,
                id: 'W',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            },
            {
                key: 'E',
                pad:69,
                id: 'E',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            {
                key: 'A',
                pad:65,
                id: 'A',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            },
            {
                key: 'S',
                pad:83,
                id: 'S',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            },
            {
                key: 'D',
                pad:68,
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            },
            {
                key: 'Z',
                pad:90,
                id: "Z",
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'

            },
            {
                key: 'X',
                pad:88,
                id: 'X',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'

            },
            {
                key: 'C',
                pad:67,
                id: 'C',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            },
        ]
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const idx = +e.target.getAttribute("data-idx");
    const pad = this.state.pads[idx];
    const url = pad.url;
    const audio = new Audio(url);
    audio.play();

    this.setState({
      display: pad.key
    })

    // click on the corresponding <audio> button
    document.getElementById(`Pad${pad.key}`).classList.add("clicked");


      setTimeout(() => {
        // this.setState({ display: ""});
        document.getElementById(`Pad${pad.key}`).classList.remove("clicked");

      }, 200)
  }


  render() {

    return (
      <div>

      <Header display={this.state.display}/>

        <div className="columns multiline">
          <div className="column is-offset-4 is-1">
            <div id="PadQ" className="button is-large is-primary drum-pad"
              data-idx="0"
              onClick={this.handleClick}
            >Q
            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" >
            </audio></div>
          </div>
          <div className="column is-1">
            <div id="PadW" className="button is-large is-primary drum-pad"
              data-idx="1"
              onClick={this.handleClick}
            >W
            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" >
            </audio></div>
          </div>
          <div className="column is-1">
          <div id="PadE" className="button is-large is-primary drum-pad"
              data-idx="2"
              onClick={this.handleClick}
            >E
            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" >
            </audio></div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-4 is-1">
          <div id="PadA" className="button is-large is-primary drum-pad"
              data-idx="3"
              onClick={this.handleClick}
            >A
            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" >
            </audio></div>
          </div>
          <div className="column is-1">
          <div id="PadS" className="button is-large is-primary drum-pad"
              data-idx="4"
              onClick={this.handleClick}
            >S
            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" >
            </audio></div>
          </div>
          <div className="column is-1">
          <div id="PadD" className="button is-large is-primary drum-pad"
              data-idx="5"
              onClick={this.handleClick}
            >D
            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" >
            </audio></div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-4 is-1">
          <div id="PadZ" className="button is-large is-primary drum-pad"
              data-idx="6"
              onClick={this.handleClick}
            >Z
            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" >
            </audio></div>
          </div>
          <div className="column is-1">
          <div id="PadX" className="button is-large is-primary drum-pad"
              data-idx="7"
              onClick={this.handleClick}
            >X
            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" >
            </audio></div>
          </div>
          <div className="column is-1">
          <div id="PadC" className="button is-large is-primary drum-pad"
              data-idx="1"
              onClick={this.handleClick}
            >C
            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" >
            </audio></div>
          </div>
        </div>

      </div>
    )
  }
}

export default Drum;