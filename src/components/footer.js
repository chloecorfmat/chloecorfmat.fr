import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className="block w-full p-2 bg-gray-900 text-white text-xs text-center">
      <p>
        <Link to="/" className="text-custom-yellow hover:font-bold footer-link">Chloé Corfmat</Link> • Tous droits réservés (2020)
      </p>
    </footer>
  )
}
