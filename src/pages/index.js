import React from 'react'
import Link from 'gatsby-link'
import './firstpage.css'
import { Card, Title } from '../components'

const IndexPage = () => (
  <div>
    <div className="nav">
      <h2>Hem</h2>
      <h2>Priser</h2>
      <h2>Kontakt</h2>
    </div>
    <div id="page-1">
      <Card>
        <Title
          colors={{ border: '#c9c9c9', text: '#c9c9c9', background: '#fff' }}
          title="Välkommen"
        />
        <p>
          Klipp och färgning På Camillas Hårstudio får du känslan av att du är
          den viktigaste personen på denna jord. Här, i en unik atmosfär, där
          avkopplingen total och den personliga kontakten med den person du valt
          skall vårda ditt hår och därmed en del av din personlighet är mycket
          speciell. Inge drop-in. Bara tidsbeställning. Inge spring. Bara lugn
          och ro. Lämna dina bekymmer hemma och låt Camilla få vårda ditt hår
        </p>
      </Card>
      <Card>
        <Title
          title="Priser"
          colors={{ border: '#fff', text: '#ffff', background: '#70DEC3' }}
        />
        <div className="priser">
          <div>
            <h4>Klipping: 300 Kr</h4>
          </div>
          <div>
            <h4>Klipp och sling: 300 Kr</h4>
          </div>
          <div>
            <h4>Klipping: 300 Kr</h4>
          </div>
          <div>
            <h4>Klipping: 300 Kr</h4>
          </div>
          <div>
            <h4>Klipping: 300 Kr</h4>
          </div>
        </div>
      </Card>
      <div className="kontakt">
        <div className="wrapper">
          <Title
            title="Kontakta mig"
            colors={{ border: '#4F4F4F', text: '#fff', background: '#C9C9C9' }}
          />
          <h4>Telefon: 070-052 09 54</h4>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
