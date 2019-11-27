import React from "react"; 
import { GridLoader } from "halogenium";


export default class About extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {

        if (this.props.metadata === undefined){
            return (
              <GridLoader
                id="loader"
                color="rgb(22, 82, 240)"
                size="16px"
                margin="4px"
              />
            );
        }

        const {metadata} = this.props
        // debugger
        return (
          <div id="about-wrapper">
            <div id="about-description-container">
              <h2 id="about-name">About {metadata.name}</h2>
            </div>
            <div id="about-descrition-wrapper">
              <p id="about-decription">{metadata.description}</p>
            </div>

            <div id="about-links-container">
              <div id="about-links-wrapper">
                <div id="about-links-header-wrapper">
                  <div id="about-links-header">RESOURCES</div>
                </div>

                <div id="about-links-tags">
                  <a id="about-link-web" 
                  href={`${metadata.urls.website}`} t
                  arget="_blank"
                  >
                    <img
                      id="official-website-logo"
                      src="https://www.coinbase.com/assets/resource_types/globe-58759be91aea7a349aff0799b2cba4e93028c83ebb77ca73fd18aba31050fc33.png"
                      target="_blank"
                    />
                    <div id="about-link-web-text">Official Website</div>
                  </a>
                  <a
                    id="about-link-web"
                    href={`${metadata.urls.technical_doc}`}
                    target="_blank"
                  >
                    <img
                      id="official-website-logo"
                      src="https://www.coinbase.com/assets/resource_types/white_paper-1129060acdfdb91628bf872c279435c9ce93245a40f0227d98f0aa0a93548cb4.png"
                      target="_blank"
                    />
                    <div id="about-link-web-text">White Paper</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
    
}

