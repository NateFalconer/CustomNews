import React, { Component, Fragment } from "react";
import { Image, Col, Row, Accordion, Card, Button } from 'react-bootstrap';
import actions from "../../services/index";
import NextButton from './NextButton';


class Main extends Component {
  // state = {

  // }

  decode = (uri) => {
    this.props.history.push(decodeURIComponent(uri))
  }

  // findDetails = () => {
  //   console.log(
  //     "article detail title:",
  //     this.props.match.params.detail,
  //     this.props.newsEvents
  //   );
  //   let theArticle = this.props.newsEvents.articles.find(eachArticle => {
  //     return eachArticle.url.includes(this.props.match.params.detail);
  //   });
  //   console.log(theArticle);
  //   return theArticle;
  // };
  handleSubmit = (e, article) => {
    e.preventDefault();
    // let theArticle = this.findDetails();
    actions
      .likeArticle(article) // {title: userInput}
      .then(resback => {
        console.log(resback);
        this.props.history.push("/home");
      })
      .catch(({ response }) => console.error(response));
  };
  showArticles = () => {
    return this.props.newsEvents.articles.map((eachArticle, index) => {
      return (
        <container>
          <div key={index}>
            <div className="newsFeed">
              <Fragment style={{ textDecoration: 'none' }} key={eachArticle.publishedAt} to={`/article-details/${eachArticle.publishedAt}`}>
                <Row>
                  <Col xs={6} md={4}>
                    <Image className="artImages" alt="No image found" thumbnail fluid src={eachArticle.urlToImage || "https://cdn.discordapp.com/attachments/687291089081597987/689576474818248748/logo2.png"}  />
                  </Col>
                  <Col>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {eachArticle.title}
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>{eachArticle.description}
                            <br></br>
                            <br></br>
                            {eachArticle.content}
                            <br></br>
                            <br></br>
                            <Button onClick={(e) => this.handleSubmit(e, eachArticle)} variant="primary" type="submit">
                              {/* <input name="comment" placeholder="Comment" type="text" onChange={this.handleChange} /> */}
                                Like
                            </Button>
                            {' '}
                            <Button href={eachArticle.url} target="_blank">Read More</Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </Row>
              </Fragment>
              <br></br>
            </div>
          </div>
        </container>
      )
    })
  }

  render() {
    // console.log(this.props.newsEvents)
    return (
      <div>
        {/* <div className="coronaTracker">
            <h1>Corona Tracker here</h1>
          </div> */}
          <br></br>
        <div className="topHeadlines">
          <h1>Top Headlines</h1>
        </div>
        <br></br>
        <div className="favFeed">
        {this.props.ready ? <Fragment > {this.showArticles()} <div className="pagination"> </div> </Fragment> : " "}
        </div>
      </div>
    );
  }
}

export default Main;
