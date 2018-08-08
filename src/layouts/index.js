import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TemplateWrapper = ({ children }) => {
    AOS.init()
    
    return (
      <div>
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <Navbar />
        <div>{children()}</div>
      </div>
    )
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
