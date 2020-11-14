import React, { Component } from 'react';
import "../../font-awesome/css/font-awesome.min.css"
import '../../Css/review-page/MainBody.css';
import ArticleData from "../../data/ArticleData.js"
import HeaderText from "./Mainbody-Review-Page/HeaderText.js"

class ReviewPage extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
            articleHeading: "",
            articleThumbnail: "",
            articleContent: ""
        };
      }
    render() {

        this.state = ArticleData[0]

        return (
               <div className="main-body-reviewpage">
                    <div className="flex-container-reviewpage">

                        <HeaderText
                            articleHeading={this.state.articleHeading}
                            articleSubHeading={this.state.articleSubHeading}
                            articleThumbnail={this.state.articleThumbnail}
                        />

                        <div className="article-text-reviewpage">
                            {this.state.articleContent}
                        </div>

                        <a href="#" className="button-reviewpage">Review Now</a>

                    </div>
                </div>
         );
    }
}

export default ReviewPage;
