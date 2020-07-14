import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
      filter: {relativePath: {in: [
        "favicon.png", 
      ]}},
      sort: {
        fields: relativePath,
        order: ASC
      }
      ) {
        edges {
          node {
            relativePath,
            absolutePath,
            childImageSharp {
              logo: fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
              },
            },
          }
        }
      }
    }
  `)

  return (
    <header className="block w-full p-2 text-center lg:text-left lg:flex lg:justify-between pt-4 pb-4 pr-40 pl-40">
      <Link to="/" className="inline-block mb-3 lg:mb-0 logo-link">
        <Img
          fixed={data.allFile.edges[0].node.childImageSharp.logo}
          className="inline-block"
        />
        <p className="h-like inline-block">Chloé Corfmat</p>
      </Link>
      <nav className="lg:inline-block text-sm">
        <ul>
          <li className="inline-block pr-2 pl-3">
            <Link to="/checklist" className="link">Checklist</Link>
          </li>
          <li className="inline-block pr-2 pl-3">
            <Link to="/liens" className="link">Liens du moment</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
