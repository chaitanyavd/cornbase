import React from 'react'
import { Link } from 'react-router-dom'; 

class NewsItem extends React.Component {
    constructor(props) {
        super(props)
        

    }
    
    render() {
        const {article} = this.props

        return (
            <article className = "article-wrapper">
                <div className = "article-content">
                    <div className = "article-title">
                        <a className = "news-link" href = {article.url} target = "_blank">
                            <h3 className = "h3title">{article.title}</h3>
                        </a>
                    </div>

                    <a className="news-description-link" href = {article.url} target = "_blank">
                        <p className = "news-description">{article.description}</p>
                    </a>
                    <div className = "article-details">
                        <a className="source-details-link" href = {article.url} target = "_blank">
                            <p>{article.source.name}</p>
                        </a>
                        <a className="source-details-link" href = {article.url} target = "_blank">
                            <p>{article.publishedAt}</p>
                        </a>
                    </div>
                </div>

                <a className="news-thumbnail" href = {article.url} target = "_blank">
                    <img src={`${article.originalImageUrl}`} className = "news-image">

                    </img>
                </a>

            </article>
        )
    }    
}

export default NewsItem; 