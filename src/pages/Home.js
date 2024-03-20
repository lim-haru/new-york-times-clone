import React from 'react'
import style from '../style/Home.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Article from '../components/Article'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const [articles, setArticles] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    const client = axios.create({
      baseURL: "https://api.nytimes.com/svc/topstories/v2"
    })
    client.get('home.json', {
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

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // Decide la larghezza massima per determinare se è mobile o desktop
    };

    handleResize(); // Controlla la dimensione iniziale all'avvio dell'app
    window.addEventListener('resize', handleResize); // Aggiunge un listener per rilevare i cambiamenti di dimensione della finestra

    return () => {
      window.removeEventListener('resize', handleResize); // Pulisce il listener quando il componente viene smontato
    };
  }, []);

  return (
    <div className='container-xl px-lg-5'>
      {isMobile ? <NavbarMobile /> : <Navbar />}
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
      <Footer />
    </div>
  )
}
