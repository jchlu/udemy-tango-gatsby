import React from 'react'
import ContactCard from './contact-card'

import { FooterWrapper } from './styles/FooterStyles'

export default () => (
  <>
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="whiteText">CONTACT US</h1>
          </div>
        </div>
        <div className="row">
          <ContactCard
            name="Gene Hunt"
            email="gene@exito.tech"
            number="+44 7919 999 911"
            social={[{ service: 'linkedIn', profile: 'gene-hunt-999' }]}
          />
          <ContactCard
            name="Alex Drake"
            email="alex@exito.tech"
            number="+44 7919 999 911"
            social={[
              { service: 'linkedIn', profile: 'alex-drake-911' },
              { service: 'instagram', profile: 'bollyknickers' },
              { service: 'facebook', profile: 'bollyknickers' },
            ]}
          />
          <ContactCard
            name="Sam Tyler"
            email="samtyler@exito.tech"
            number="+44 7919 999 911"
            social={[
              { service: 'linkedIn', profile: 'sam-tyler-50' },
              { service: 'instagram', profile: 'sammyt50' },
            ]}
          />
        </div>
      </div>
    </FooterWrapper>
  </>
)
