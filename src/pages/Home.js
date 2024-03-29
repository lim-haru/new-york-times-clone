import React from 'react'
import style from '../style/Home.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Article from '../components/Article'
import Sidebar from '../components/Sidebar'
import ClipLoader from "react-spinners/ClipLoader"
import { useFetchData } from "../hooks/useFetchData"
import SEO from '../SEO'

export default function Home() {
  const { articles, loading } = useFetchData("home")

  return (
    <div>
      <SEO
        title="Clone - The New York Times"
        description="Benvenuto nel mio clone del The New York Times! Esplora le ultime notizie, articoli e reportage su una vasta gamma di argomenti, dall'attualità alla politica, dalla cultura alla scienza e molto altro. Con una presentazione moderna e reattiva, forniamo aggiornamenti tempestivi e approfondimenti su ciò che sta accadendo nel mondo."
        url="https://lim-haru.github.io/new-york-times-clone"
        type="website"
      />
      <Row as={'main'}>
        <Col xl={8}>
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
        <Col xl={4} className={style.separator}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  )
}
