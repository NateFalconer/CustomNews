import React, { Component, Fragment } from "react";
import PostArticle from "../Post_Article/PostArticle";
import actions from "../../services/index"

class ArticleDetails extends Component {

  findDetails = () => {
    console.log(
      "article detail title:",
      this.props.match.params.detail,
      this.props.newsEvents
    );
    let theArticle = this.props.newsEvents.articles.find(eachArticle => {
      return eachArticle.publishedAt.includes(this.props.match.params.detail);
    });
    console.log(theArticle);
    return theArticle;
  };

    handleSubmit = e => {
    e.preventDefault();
    let theArticle = this.findDetails();
    actions
      .likeArticle(theArticle) // {title: userInput}
      .then(resback => {
        this.props.setUser(resback.data)
        console.log(resback);
      })
      .catch(({ response }) => console.error(response));
  };

  handleSubmitLike = e => {
    e.preventDefault();
    let theArticle = this.findDetails();
    actions
      .likeArticle(theArticle) // {title: userInput}
      .then(resback => {
        console.log(resback);
      })
      .catch(({ response }) => console.error(response));
  }

  showArticles = () => {
    let theArticle = this.findDetails();
    console.log(theArticle)
    return (
      <div>
        {theArticle && <Fragment>
        <div className="publish">
          <p>{theArticle.author}</p>

          <p>{theArticle.publishedAt}</p>
        </div>
        <div className="newsFeed">
          <img src={theArticle.urlToImage} alt="" />
          <h1>{theArticle.title}</h1>
        </div>
        <div className="topHeadlines">
          <h1>{theArticle.description}</h1>
        </div>
        <div className="coronaTracker">
          <a rel="noopener noreferrer" target="_blank" href={theArticle.url}>
            <h1>Read more</h1>
          </a>
        </div>
        </Fragment>}
        <div>
          {/* <button onClick="">Like</button>
          <button onClick="">Share</button> */}
        </div>
      </div>
    );
  };
  render() {
    console.log(this.props.newsEvents);
    return (
      <div>
        {this.props.ready ? this.showArticles() : " "}
        <PostArticle handleSubmit={this.handleSubmit} handleSubmitLike={this.handleSubmitLike}/>
        {/* <User_Feed handleSubmit={this.handleSubmit} handleSubmitLike={this.handleSubmitLike} /> */}
      </div>
    );
  }
}

export default ArticleDetails;
