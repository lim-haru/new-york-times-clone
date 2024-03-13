import React from 'react'
import axios from 'axios'
import ArticleCard from '../components/ArticleCard'

export default function Sidebar() {
  const [articles, setArticles] = React.useState([])
  
  React.useEffect(() => {
    const client = axios.create({
      baseURL: "https://api.nytimes.com/svc/mostpopular/v2/emailed"
    })
    client.get('1.json', {
      params: {
        "api-key": process.env.REACT_APP_API_KEY
      }
    })
      .then((response) => {
        setArticles(response.data.results)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [])

  return (
    <div className='row py-3'>
      {articles.map((article, index) => (
        <ArticleCard 
          key={index}
          title={article.title}
          url={article.url}
          image={article.media[0] && article.media[0]["media-metadata"][0].url}
        />
      ))}
    </div>
  )
}
