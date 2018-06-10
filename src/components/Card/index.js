import React from 'react'
import Link from 'gatsby-link'
import './card.css'

export const Title = ({ title, colors }) => (
  <div
    className="header"
    style={{
      borderColor: colors.border,
      backgroundColor: colors.background,
    }}
  >
    <h2 style={{ color: colors.text, margin: 0 }}>{title}</h2>
  </div>
)

const Card = ({ children }) => <div className="box-intro">{children}</div>

export default Card
