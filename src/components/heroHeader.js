import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import apps from '../../static/assets/apps.jpeg'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">Small Steps. Big Dreams.</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: "Welcome to a community of over 20,000 people who are committing <br> to one small step each month to achieve their financial dreams"}}
        />

        <div 
          className="primary-content"

          dangerouslySetInnerHTML={{ __html: "Our members have supported each other with £253162 in financial protections so far"}}
        />

        <div style={{width: "100%"}}>
          <img style={{width: 370, marginBottom: 12}} src={apps} />
        </div>

        <input style={{width: 190, background: "none", color: "black", border: "2px dashed rgba(0,0,0,0.5)", boxShadow: "none"}} className="button -primary" placeholder="Enter your mobile number"/>
        <Link to='' className="button -primary">Get download link</Link>
      </div>
    )}
  />
)