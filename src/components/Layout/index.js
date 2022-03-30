/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 
 import { Header } from "../Header"
 import Footer from "../Footer"
 
 import "react-multi-carousel/lib/styles.css"
 import "./layout.scss"
 
 const scrollToRef = ref => {
   window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" })
 }
 
 const Layout = ({ children }) => {
   const footerRef = React.useRef(null)
   return (
     <>
       <Header scrollToRef={scrollToRef} refs={{ footerRef }} />
 
       <main>{children}</main>
 
       <Footer ref={footerRef} />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 