import React from 'react'
import Link from 'gatsby-link'
import './firstpage.css'
import { Card, Title, Header } from '../components'

const IndexPage = () => (
  <div>
    <div id="page-1">
      <div className="title-c">
        <h1 className="title">Camillas hårstudio</h1>
        <svg
          onClick={() => {
            const el = document.getElementsByClassName('intro-c')

            el[0].scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            })
          }}
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
        </svg>
      </div>

      <div className="intro-c">
        <div className="intro">
          <h2>Välkommen</h2>
          <p>
            Camillas Hårstudio, skapad för tjugo år sedan och belägen i
            Trollbäcken, vet hur man ska behandla dina hår och värna om dem, men
            först och främst vet hon hur man lyssnar, förstår och råder sina
            klienter för att få dem att känna sig lugna och nöjda med sin nya
            frisyr . Om du är intresserad av att uppleva en ny frisyr / färg,
            skämma bort dina hår med en omedelbar strålning eller bara ha
            fräscha, revitaliserade och silkeiga hår, tveka inte att ringa
            Camilla för att ordna ett möte. En unik upplevelse garanterad!
          </p>
        </div>
        <div className="contact">
          <h2>Kontakta mig </h2>
          <h4>Telefon: 070-750 76 91</h4>
        </div>
      </div>

      <div className="location-c">
        <div className="location-text">
          <h2>här hittar ni mig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam
            facere qui at, asperiores laudantium nesciunt minus amet et?
            Eligendi deserunt voluptates blanditiis, doloribus laboriosam
            aliquam sit soluta quaerat accusantium!
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041.5042575870605!2d18.200061085795003!3d59.224301333953605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7eb1d7a57041%3A0xeb561f5c68d1a4fa!2sCamillas+H%C3%A5rstudio!5e0!3m2!1sen!2sse!4v1528661927660"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
