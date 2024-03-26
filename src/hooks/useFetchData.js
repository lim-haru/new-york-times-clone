import React from 'react'
import axios from 'axios'

export const useFetchData = (section) => {
  const [articles, setArticles] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    const client = axios.create({
      baseURL: "https://api.nytimes.com/svc/topstories/v2"
    })
    client.get(`${section}.json`, {
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
  }, [section])

  return {articles, loading}
}
