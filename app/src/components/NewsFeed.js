import React, {useEffect, useState} from "react";
import axios from "axios";

const NewsFeed = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
                'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_NEWS
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setArticles(response.data)
        }).catch((error) => {
            console.error(error);
        })
    }, [])

    const first7articles = articles?.slice(0, 7)

    return (
        <div className="news-feed">
            <h2>NewsFeed</h2>
            {articles && first7articles.map((article, _index) =>
                <div key={_index}>
                    <a href={article.url}>
                        <p>
                            {article.title}
                        </p>
                    </a>
                </div>
            )}
        </div>
    );
}

export default NewsFeed;
