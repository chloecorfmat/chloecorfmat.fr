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
  //faPortrait,
  //faLink
} from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage () {
  const data = useStaticQuery(graphql`
    query {
      allFile(
      filter: {relativePath: {in: [
        "01_logo_aaee.png", 
        "00_logo_klee.png",
        "02_undraw_creativity.png",
        "03_undraw_dev.png",
        "04_undraw_health.png",
        "05_photo_profil.png",
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
              fixedPicture: fixed(width: 180, height: 180) {
                ...GatsbyImageSharpFixed
              },
              fixedLogo: fixed(width: 200, height: 50) {
                ...GatsbyImageSharpFixed
              },
              fixedUndraw: fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            },
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Chloé Corfmat" />
      <div className="pl-10 pr-10 md:pl-20 ml:pr-20 xl:pl-40 xl:pr-40">
        <div className="mb-5 md:mb-10 md:flex md:flex-row-reverse md:justify-center md:items-center">
          <Img
            fixed={data.allFile.edges[5].node.childImageSharp.fixedPicture}
          />
          <div className="md:mr-10 md:w-2/3">
            <h1 className="text-5xl">Bonjour ! <span role="img" aria-label="Hello emoji">👋</span></h1>
            <p className="font-bold text-xl">Je m'appelle Chloé,</p>
            <div className="mb-5">
              <p className="text-lg">Chaque jour, je <strong className="font-bold">développe des applications web</strong> qui répondent aux <em className="italic">besoins</em> des clients avec lesquels je travaille.</p>
              <p className="mt-2">J'attache beaucoup d'importance à l'<strong className="font-bold">accessibilité web</strong>, à la <strong className="font-bold">qualité du code</strong> que j'écris, au <strong className="font-bold">référencement naturel</strong> de l'application ou encore à sa <strong className="font-bold">sécurité</strong>.</p>
            </div>
          </div>
        </div>

        <blockquote className="m-auto mt-10 mb-5 md:w-1/2 text-center text-sm text-custom-pink">
          <p className="font-black italic">Les batailles de la vie ne sont pas gagnées par les plus forts, ni par les plus rapides, mais par ceux qui n'abandonnent jamais.</p>
          <footer className="text-right">—Hassan II</footer>
        </blockquote>

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
            <p className="mt-3 underline">Mes missions : </p>
            <ul className="list-disc list-outside">
              <li>Proposer des solutions techniques</li>
              <li>Développer des applications web métier (avec notamment Drupal 8)</li>
              <li>Garantir le respect des bonnes pratiques (sécurité, accessibilité, référencement...)</li>
              <li>Participer aux cérémonies agiles des projets</li>
            </ul>
          </li>
          <li className="mt-5 pl-10 pt-5 pr-10 pb-5 bg-gray-200 lg:w-1/2 lg:ml-10">
            <Img fixed={data.allFile.edges[1].node.childImageSharp.fixedLogo} />
            <div className="mt-2 mb-2">
              <h3 className="font-bold">Association des Anciens Élèves de l'Enssat</h3>
              <p className="text-sm">Depuis février 2020</p>
            </div>
            <p className="italic">Membre du Conseil d'Administration de l'Association</p>
            <p className="mt-3 underline">Les objectifs de l'association : </p>
            <ul className="list-disc list-outside">
              <li>Développer et animer le réseau des anciens élèves</li>
              <li>Aider à la recherche d'emploi et faciliter les contacts entreprises/diplômés</li>
              <li>Aider les étudiants en difficulté (financièrement ou dans la recherche de stage par exemple)</li>
              <li>Promouvoir l'Enssat et l'ingénieur Enssat</li>
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
            <h3 className="font-bold">Écologie, santé, bien-être</h3>
            <p>Depuis plusieurs années, je mets en place des actions qui permettent, selon moi, d'améliorer mon quotidien (dans les domaines du zéro déchet, de l'alimentation...).</p>
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
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="link-icon" />
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
                <FontAwesomeIcon icon={faGlobeEurope} size="lg" className="link-icon" />
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
                <FontAwesomeIcon icon={faTwitter} size="lg" className="link-icon" />
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
                <FontAwesomeIcon icon={faGithub} size="lg" className="link-icon" />
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
                <FontAwesomeIcon icon={faPortrait} size="lg" className="link-icon" />
                <span className="sr-only">Notion</span>
              </Link>
            </li>*/}
            {/*<li className="inline pl-3 pr-3">
              <Link
                to="https://linktr.ee/chloecorfmat"
                target="_blank"
                title="Linktr.ee de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faLink} size="lg" className="link-icon" />
                <span className="sr-only">Linktr.ee</span>
              </Link>
            </li>*/}
            <li className="inline pl-3 pr-3">
              <Link
                to="https://www.instagram.com/missbichettefr/"
                target="_blank"
                title="Instagram de Chloé Corfmat - Nouvelle fenêtre"
                className="text-custom-pink hover:text-custom-violet"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" className="link-icon" />
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
                <FontAwesomeIcon icon={faPinterest} size="lg" className="link-icon" />
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
