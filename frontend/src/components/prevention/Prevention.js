import React, { Component, Fragment } from "react";
import CarouselPage from "../carousel/CarouselPage";
import YouTube from "react-youtube";
import { MDBContainer } from "mdbreact";

class Prevention extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "676",
      width: "1110",
      maxWidth: "100%"
    };
    return (
      <Fragment>
        <div className="something"></div>
        <div>
          <CarouselPage />
        </div>
        <div className="something"></div>
        <div>
          <h1>
            <center>
              [LIVE] Coronavirus Pandemic: Real Time Counter, World Map, News
            </center>
          </h1>

          <br></br>
          <MDBContainer>
            <YouTube
              className="videoContainer"
              videoId="qgylp3Td1Bw"
              opts={opts}
              onReady={this._onReady}
            />
          </MDBContainer>
        </div>
        <div className="something"></div>
      </Fragment>
    );
  }
}

export default Prevention;
