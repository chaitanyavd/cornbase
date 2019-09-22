import React from 'react'
import { Link } from 'react-router-dom'; 

class NewsItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDate = this.handleDate.bind(this); 
        // this.handleThumbnail = this.handleThumbnail.bind(this); 
    }

    handleDate(iso){
        let date = new Date(iso); 
        let month = date.getMonth(); 
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let formattedDate = `${months[month]} ${date.getDate()}`
        let hours = Math.abs(date - Date.now()) / 36e5;

        if (hours >= 24) {
            return formattedDate
        } else {
            if (hours < 1) {
                return "1 hour ago"
            } else {
                return `${hours.toFixed(0)} hours ago`
            }
        }
    }

    // handleThumbnail(image_url){
    //     // debugger
    //     $.get(image_url)
    //         .done(function () {
    //             return image_url
    //         }).fail(function () {
    //             return <div></div>
    //         })
    // }
    
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
                            <p>{this.handleDate(article.publishedAt)}</p>
                        </a>
                    </div>
                </div>

                <a className="news-thumbnail" href = {article.url} target = "_blank">
                    <img src={`${article.originalImageUrl}`} className = "news-image"></img>
                    {/* <img src={`${this.handleThumbnail(article.originalImageUrl)}`} className = "news-image"></img> */}
                </a>

            </article>
        )
    }    
}

export default NewsItem; 