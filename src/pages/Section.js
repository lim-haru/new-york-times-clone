import React from 'react'
import Col from 'react-bootstrap/Col'
import Article from '../components/Article'
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData"
import SEO from '../SEO'

export default function Section() {
  const { sectionName } = useParams()
  const { articles, loading } = useFetchData(sectionName)
  
  return (
    <div>
      <SEO
        title={`Clone - The New York Times ${sectionName}`}
        description={`Benvenuto nel mio clone del The New York Times! Esplora gli articoli su ${sectionName}`}
        url={`https://lim-haru.github.io/new-york-times-clone/section/${sectionName}`}
        type="website"
      />
      <main className='d-flex justify-content-center'>
        <Col xl={9}>
          {articles.map((article, index) => (
            <Article 
              key={index}
              title={article.title}
              abstract={article.abstract}
              url={article.url}
              image={article.multimedia && article.multimedia[0].url}
              figCaption={article.multimedia && article.multimedia[0].copyright}
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
        </Col>
      </main>
    </div>
  )
}
