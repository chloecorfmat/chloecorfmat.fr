/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="app-height flex flex-col justify-between">
        <div>
          <Header></Header>
          <main className="mt-10 mb-5">{children}</main>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
