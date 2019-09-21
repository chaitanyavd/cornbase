import React from 'react'
import NewsItem from "./news_item"; 

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchGeneralNews(); 
    // }

    render() {
        const {news} = this.props
        // debugger

        // { posts.map(post => <PostIndexItem post={post} key={post.id} deletePost={deletePost} />) }

        return (
                <div id = "news-wrapper"> 
                    <div id = "news-header-container">
                        <h2 id = "top-stories">Top Stories</h2>
                    </div>
                    <div id = "article-container">
                        {news.map(article => <NewsItem article={article} key = {article.id} />)}
                    </div>
                </div> 
        )
    }

    
    
}

export default News; 