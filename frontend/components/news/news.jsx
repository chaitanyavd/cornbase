import React from 'react'
import NewsItem from "./news_item"; 

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {news} = this.props
        return (
            <div className='news-container'>
                <div id='news-wrapper'>
                    <div id='news-header-container'>
                        <h2 id='top-stories'>Top Stories</h2>
                    </div>
                    <div id='article-container'>
                        {news.map((article, idx) => (
                            <NewsItem article={article} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    
    
}

export default News; 