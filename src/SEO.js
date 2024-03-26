import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO({title, description, url, type}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta data-rh="true" name="description" content={description}/>
      <meta data-rh="true" property="og:url" content={url}/>
      <meta data-rh="true" property="og:type" content={type}/>
      <meta data-rh="true" property="og:title" content={title}/>
      <meta data-rh="true" property="og:description" content={description}/>
    </Helmet>
  )
}
