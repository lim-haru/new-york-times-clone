import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function SEO({title, description, url, type}) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta data-rh="true" name="description" content={description}/>
        <meta data-rh="true" property="og:url" content={url}/>
        <meta data-rh="true" property="og:type" content={type}/>
        <meta data-rh="true" property="og:title" content={title}/>
        <meta data-rh="true" property="og:description" content={description}/>
      </Helmet>
    </HelmetProvider>
  )
}
