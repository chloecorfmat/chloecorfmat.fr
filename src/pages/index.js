import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faPinterest,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import {
  faGlobeEurope,
  faPortrait,
  faLink
} from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage () {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {in: [
        "logo_aaee.png", 
        "logo_klee.png",
        "undraw_creativity.png",
        "undraw_dev.png",
        "undraw_health.png",
      ]}}) {
        edges {
          node {
            relativePath,
            absolutePath,
            childImageSharp {
              fixedLogo: fixed(width: 150, height: 50) {
                ...GatsbyImageSharpFixed
              },
              fixedUndraw: fixed(width: 200, height: 180) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Chloé Corfmat" />
      <div className="pl-10 pr-10 md:pl-20 ml:pr-20 xl:pl-40 xl:pr-40">
        <h1 className="text-5xl">Bonjour ! <span role="img" aria-label="Hello emoji">👋</span></h1>
        <p className="font-bold text-xl">Je m'appelle Chloé,</p>
        <div className="mb-5 text-lg">
          <p>Chaque jour, blabla.</p>
          <p>J'attache beaucoup d'importance à l'accessibilité web, à la qualité du code que j'écris...</p>
        </div>

        <h2 className="text-3xl">Actuellement</h2>
        <ul className="flex flex-col lg:flex-row mb-5">
          <li className="mt-5 pl-10 pt-5 pr-10 pb-5 bg-gray-200 lg:w-1/2 lg:mr-10">
            <Img
              fixed={data.allFile.edges[0].node.childImageSharp.fixedLogo}
            />
            <div className="mt-2 mb-2">
              <h3 className="font-bold">Klee Group</h3>
              <p className="text-sm">Depuis septembre 2019</p>
            </div>
            <p className="italic">Ingénieure web</p>
            <p className="mt-3">Parmi mes missions : </p>
            <ul className="list-disc list-outside">
              <li>toto</li>
              <li>titi</li>
            </ul>
          </li>
          <li className="mt-5 pl-10 pt-5 pr-10 pb-5 bg-gray-200 lg:w-1/2 lg:ml-10">
            <Img fixed={data.allFile.edges[1].node.childImageSharp.fixedLogo} />
            <div className="mt-2 mb-2">
              <h3 className="font-bold">Association des Anciens Élèves de l'Enssat</h3>
              <p className="text-sm">Depuis février 2020</p>
            </div>
            <p className="italic">Membre du Conseil d'Administration de l'Association</p>
            <p className="mt-3">Les objectifs de l'association : </p>
            <ul className="list-disc list-outside">
              <li>toto</li>
              <li>titi</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-3xl">Pendant mon temps-libre</h2>
        <ul className="lg:flex lg:flex-row">
          <li className="lg:w-1/3 ml-5 mt-5 mr-5 text-center">
            <Img
              fixed={data.allFile.edges[2].node.childImageSharp.fixedUndraw}
            />
            <h3 className="font-bold">Loisirs créatifs</h3>
            <p>Je pratique plusieurs types de loisirs créatifs : couture, scrapbooking, aquarelle, broderie...</p>
          </li>
          <li className="lg:w-1/3 ml-5 mt-5 mr-5 text-center">
            <Img
              fixed={data.allFile.edges[4].node.childImageSharp.fixedUndraw}
            />
            <h3 className="font-bold">Zéro déchet, cuisine, bien-être</h3>
            <p>Depuis plusieurs années, je mets en place des actions qui permettent, selon moi, d'améliorer mon quotidien.</p>
          </li>
          <li className="lg:w-1/3 ml-5 mt-5 mr-5 text-center">
            <Img
              fixed={data.allFile.edges[3].node.childImageSharp.fixedUndraw}
            />
            <h3 className="font-bold">Développement web</h3>
            <p>Quotidiennement, je suis l'actualité dans le domaine du web et je mets mes connaissances en pratique à travers des projets personnels.</p>
          </li>
        </ul>

        {/*<h2 className="text-3xl">Mes précédentes expériences</h2>
        <p>Avant d'obtenir mon diplôme d'ingénieure, j'ai travaillé en alternance pendant 4 ans.</p>
        <ol className="flex flex-col lg:flex-row mb-5">
          <li className="mt-5 pl-10 pt-5 pr-10 pb-5 bg-gray-200 lg:w-1/2 lg:mr-10">
            <div className="mt-2 mb-2">
              <h3 className="font-bold">Capgemini</h3>
              <p className="text-sm">De septembre 2016 à septembre 2019</p>
            </div>
            <ul className="list-disc list-outside">
              <li>toto</li>
              <li>titi</li>
            </ul>
          </li>
          <li className="mt-5 pl-10 pt-5 pr-10 pb-5 bg-gray-200 lg:w-1/2 lg:ml-10">
            <div className="mt-2 mb-2">
              <h3 className="font-bold">Département de la Sarthe</h3>
              <p className="text-sm">De septembre 2015 à août 2016</p>
            </div>
            <ul className="list-disc list-outside">
              <li>toto</li>
              <li>titi</li>
            </ul>
          </li>
        </ol>*/}

        <div className="md:ml-10 md:mr-10 lg:ml-20 lg:mr-20 mt-5 mb-10 p-5 bg-gray-200">
          <h2 className="text-2xl text-center mb-3">Échangeons ensemble !</h2>
          <ul className="text-center">
            <li className="inline pl-3 pr-3">
              <Link
                to="https://www.linkedin.com/in/chloecorfmat/"
                target="_blank"
                title="LinkedIn de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
            <li className="inline pl-3 pr-3">
              <Link
                to="https://chloecorfmat.fr"
                target="_blank"
                title="Site web personnel de Chloé Corfmat"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faGlobeEurope} size="lg" />
                <span className="sr-only">Website</span>
              </Link>
            </li>
            <li className="inline pl-3 pr-3">
              <Link
                to="https://twitter.com/chloecorfmat"
                target="_blank"
                title="Twitter de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                <span className="sr-only">Twitter</span>
              </Link>
            </li>
            <li className="inline pl-3 pr-3">
              <Link
                to="https://github.com/chloecorfmat"
                target="_blank"
                title="Github de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <span className="sr-only">Github</span>
              </Link>
            </li>
            {/*<li className="inline pl-3 pr-3">
              <Link
                to="https://www.notion.so/Welcome-1f98b0bb33c644cebb38595484d7b707"
                target="_blank"
                title="Notion de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faPortrait} size="lg" />
                <span className="sr-only">Notion</span>
              </Link>
            </li>*/}
            <li className="inline pl-3 pr-3">
              <Link
                to="https://linktr.ee/chloecorfmat"
                target="_blank"
                title="Linktr.ee de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faLink} size="lg" />
                <span className="sr-only">Linktr.ee</span>
              </Link>
            </li>
            <li className="inline pl-3 pr-3">
              <Link
                to="https://www.instagram.com/missbichettefr/"
                target="_blank"
                title="Instagram de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
            <li className="inline pl-3 pr-3">
              <Link
                to="https://www.pinterest.fr/ccorfmat/"
                target="_blank"
                title="Pinterest de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faPinterest} size="lg" />
                <span className="sr-only">Pinterest</span>
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-xs text-center italic">Ce site web sera amené à évoluer : l'idée était d'en poster une première version et de la faire évoluer au cours du temps (sur tous les aspects).</p>
      </div>

    </Layout>
  )
}
