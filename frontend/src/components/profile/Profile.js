import React, { Component } from 'react';
import actions from "../../services/index";

class Profile extends Component {
state = {
    articles: []
}
    componentDidMount() {
        actions.findLikedArticles().then(articles => {
            console.log(articles)
            this.setState({articles: articles.data})
        })

    }
    showLikedArticles = () => {
        return this.state.articles.map(eachArticle => {
        return <li><a href={eachArticle.url} target="_blank" rel="noopener noreferrer">{eachArticle.title}</a>
         Shared by: {eachArticle.userName}
        </li>
            
        })
    }
 
    filterArticles = () => {
        
    }
    render() {
        return (
            <div>
                <div className="favoriteFeed"><p>Welcome to your profile.</p></div>
                {/* {this.showLikedArticles()} */}
                {/* <div className="sharedFeed"><h1>Shared feed here</h1></div> */}
            </div>
        );
    }
}

export default Profile;
