import React from 'react'
import style from '../style/Article.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Article(props) {
  return (
    <div className={style.article}>
      <a href={props.url} target='_blank'>
        <Row className='gap-3'>
          <Col className={style.separator}>
            <section>
              <p className={style.title}>{props.title}</p>
              <p className={style.text}>{props.abstract}</p>
            </section>
          </Col>
          <Col as={'figure'} md={8}>
            <img src={props.image} alt="" />
            <figcaption>{props.figCaption}</figcaption>
          </Col>
        </Row>
      </a>
    </div>
  )
}
