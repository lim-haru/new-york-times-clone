import React from 'react'
import axios from 'axios'
import ArticleCard from '../components/ArticleCard'
import ClipLoader from "react-spinners/ClipLoader";

export default function Sidebar() {
  const [articles, setArticles] = React.useState([])
  const [loading, setLoading] = React.useState(true)

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
      .finally(() => {
        setLoading(false);
      });
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
      <ClipLoader
        loading={loading}
        color="gray"
        size={70}
        speedMultiplier={0.7}
        cssOverride={{ display: "block", margin: "90px auto" }}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
