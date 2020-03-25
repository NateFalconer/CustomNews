import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block"
                src={process.env.PUBLIC_URL + '/hands.jpg'}
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html" target="_blank" rel="noopener noreferrer">
                <h3 className="h3-responsive">Prevention</h3>
                <p className="slideinfo">CDC instructions</p></a>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block"
                src={process.env.PUBLIC_URL + '/sick.jpg'}
                alt="Second slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html" target="_blank" rel="noopener noreferrer">
                <h3 className="h3-responsive">Feeling sick?</h3>
                <p className="slideinfo">Here's what to do</p></a>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block"
                src={process.env.PUBLIC_URL + '/corona.jpg'}
                alt="Third slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <a href="https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resource-center" target="_blank" rel="noopener noreferrer">
                <h3 className="h3-responsive">Coronavirus Resource Center</h3>
                <p className="slideinfo">More info</p></a>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block"
                src={process.env.PUBLIC_URL + '/symptoms.png'}
                alt="Fourth slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;