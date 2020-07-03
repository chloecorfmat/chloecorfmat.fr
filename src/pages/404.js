import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Erreur 404" />
    <h1>Erreur 404</h1>
    <p>La page que vous recherchez n'existe pas.</p>
    <Link to="/">Retour à la page d'accueil</Link>
  </Layout>
)

export default NotFoundPage
