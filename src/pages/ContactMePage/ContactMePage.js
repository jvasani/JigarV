import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import './style.scss';

const ContactMePage = (props, context) => {
    const {
      theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
    } = context;


    return (
        <div className="contactme-page" style={{ backgroundColor: bgPrimary }}>
          <style jsx="true">
            {`
              .highlight {
                background-color: ${colorHighlight};
              }
              ::selection {
                background-color: ${colorHighlight};
              }
            `}
          </style>
         {/* <div className="content-grid">
            <h1 style={{ color: colorPrimary }}>Contact Me</h1>
            <div className="tagline" style={{color: colorPrimary}}>
               Want to create something awesome with technologies...?
            </div>
            </div>*/}
          <ScrollToPrevious pageSelector=".portfolio-page" /> 
        </div>
      );
};

    ContactMePage.contextTypes = {
        theme: PropTypes.any
      };
      export default ContactMePage;