import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Checklist () {
  return (
    <Layout>
      <SEO title="Chloé Corfmat - Checklist" />
      <div className="pl-10 pr-10 md:pl-20 ml:pr-20 xl:pl-40 xl:pr-40 mb-10">
        <h1 className="text-5xl">Checklist</h1>
        <p>La liste des prochaines évolutions du site web ! <span className="important"><span role="img" aria-label="Warning !">⚠️</span> ATTENTION</span>, elles ne sont pas obligatoirement données dans l'ordre de réalisation.</p>
        <div className="pt-5 pb-5">
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el1">
                <input className="checkbox-input" id="el1" type="checkbox" disabled="disabled" checked="checked"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Créer la page "Liens utiles"</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el2">
                <input className="checkbox-input" id="el2" type="checkbox" disabled="disabled"  checked="checked"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Créer la page "Checklist"</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el3">
                <input className="checkbox-input" id="el3" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Ajouter un "dark theme"</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el4">
                <input className="checkbox-input" id="el4" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Mise en place d'un wiki</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el5">
                <input className="checkbox-input" id="el5" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Mise en place d'un blog</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el6">
                <input className="checkbox-input" id="el6" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Rédiger une newsletter (régulièrement)</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el7">
                <input className="checkbox-input" id="el7" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Ajouter sur la home les derniers posts des réseaux sociaux</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el8">
                <input className="checkbox-input" id="el8" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Créer une page sur mes projets</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el9">
                <input className="checkbox-input" id="el9" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Créer une page sur mes compétences</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el10">
                <input className="checkbox-input" id="el10" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Rédiger la charte graphique (avec storytelling éventuel)</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el11">
                <input className="checkbox-input" id="el11" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Uniformiser tous les réseaux et supports de communication</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el12">
                <input className="checkbox-input" id="el12" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Créer la page de contact</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el13">
                <input className="checkbox-input" id="el13" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">S'assurer de la prise en compte de l'accessibilité</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el14">
                <input className="checkbox-input" id="el14" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Ajouter des exemples de newsletter sur le site</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el15">
                <input className="checkbox-input" id="el15" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Ajouter sur la home la liste des mises à jour du wiki</span>
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="el16">
                <input className="checkbox-input" id="el16" type="checkbox" disabled="disabled"/>
                <span className="checkbox-label--svg">
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span className="checkbox-label--text">Ajouter sur la home les derniers articles du blog</span>
              </label>
            </div>
          </div>
      </div>
    </Layout>
  )
}
