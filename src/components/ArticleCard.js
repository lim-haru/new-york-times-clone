import React from 'react'
import style from '../style/ArticleCard.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ArticleCard(props) {
  return (
    <Col as={'a'} href={props.url} target='_blank' xs={12} md={6} xl={12}>
      <Row>
        <Col>
          <section>
            <p className={style.title}>{props.title}</p>
          </section>
        </Col>
        <Col xs={3} md={4}>
          <img src={props.image} alt="" className={style.articleImage}/>
        </Col>
      </Row>
      <hr className={style.separator}/>
    </Col>
  )
}
