import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { QuoteWrapper } from './styles/QuoteStyles'
import QuoteImg from '../../images/tango_quote.svg'
export default () => {
  const {
    quote: {
      acf: { citat_1_author: author, citat_1_text: quote },
    },
  } = useStaticQuery(graphql`
    {
      quote: wordpressPage(wordpress_id: { eq: 47 }) {
        acf {
          citat_1_author
          citat_1_text
        }
      }
    }
  `)
  return (
    <QuoteWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={QuoteImg} alt="quote" />
            <h6>{quote}</h6>
            {author}
          </div>
        </div>
      </div>
    </QuoteWrapper>
  )
}
