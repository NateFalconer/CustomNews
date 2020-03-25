import React, { Component, Fragment } from 'react';
import actions from "../../services/index";
import { Image, Col, Row, Accordion, Card, Button } from 'react-bootstrap';
// import PostArticle from "../Post_Article/PostArticle";
// import ArticleDetails from "../article/ArticleDetails";
class User_Feed extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        actions.findAllArticles().then(articles => {
            console.log(articles)
            this.setState({ articles: articles.data.allArticles })
        })
    }

    handleSubmit = (e, article) => {
        e.preventDefault();
        actions
          .likeArticle(article) // {title: userInput}
          .then(resback => {
            console.log(resback);
          })
          .catch(({ response }) => console.error(response));
      };
    showLikedArticles = () => {
        return this.state.articles.map((eachArticle, index) => {
            return <Fragment key={index}>
              <Fragment style={{ textDecoration: 'none' }} key={eachArticle.publishedAt} to={`/article-details/${eachArticle.publishedAt}`}>
                <Row>

                  <Col xs={6} md={4}>
                  <Image alt="No image found" thumbnail fluid src={eachArticle.urlToImage || "https://cdn.discordapp.com/attachments/687291089081597987/689576474818248748/logo2.png"}  />
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
                            <p>Liked by {eachArticle.users.length} user(s).</p>
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
            </Fragment>
        })
    }
    render() {
        console.log("user_feed props:", this.props)
        return (
            <div>
            <br></br>
                <div className="topHeadlines"><h1>Recently Liked Articles</h1></div>
                <br></br>
                {this.showLikedArticles()}
                {/* <div className="sharedFeed"><h1>Shared feed here</h1></div> */}
            </div>
        );
    }
}
export default User_Feed;