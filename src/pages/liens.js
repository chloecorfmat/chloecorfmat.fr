import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLink,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

export default function Liens () {
  return (
    <Layout>
      <SEO title="Chloé Corfmat - Liens du moment" />
      <div className="pl-10 pr-10 md:pl-20 ml:pr-20 xl:pl-40 xl:pr-40">
        <h1 className="text-5xl">Liens du moment</h1>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-gray-200 text-center">
            <Link
              to="/"
              target="_blank"
              title="Portfolio de Chloé Corfmat - Nouvelle fenêtre"
              className="p-4 block"
            >
              <FontAwesomeIcon icon={faLink} size="lg" className="link-icon" />
              <h2 className="text-2xl mt-2">Site web</h2>
              <p>Portfolio de Chloé Corfmat.</p>
            </Link>
          </div>
          <div className="bg-gray-200 text-center">
            <Link
              to="https://www.linkedin.com/in/chloecorfmat/"
              target="_blank"
              title="Profil LinkedIn de Chloé Corfmat - Nouvelle fenêtre"
              className="p-4 block"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="link-icon" />
              <h2 className="text-2xl mt-2">Profil LinkedIn</h2>
              <p>L'actualité professionnelle de Chloé Corfmat.</p>
            </Link>
          </div>
          <div className="bg-gray-200 text-center">
            <Link
              to="https://github.com/chloecorfmat"
              target="_blank"
              title="Compte Github de Chloé Corfmat - Nouvelle fenêtre"
              className="p-4 block"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" className="link-icon" />
              <h2 className="text-2xl mt-2">Compte Github</h2>
              <p>Hébergement du code des projets de Chloé Corfmat.</p>
            </Link>
          </div>
          <div className="bg-gray-200 text-center">
            <Link
              to="https://twitter.com/chloecorfmat"
              target="_blank"
              title="Compte Twitter de Chloé Corfmat - Nouvelle fenêtre"
              className="p-4 block"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" className="link-icon" />
              <h2 className="text-2xl mt-2">Compte Twitter</h2>
              <p>La veille de Chloé Corfmat en direct.</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
