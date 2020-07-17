import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="Snapchat.jpg"
              alt="avatar"
              className="avatar-img"
              
            />
           
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>html/css | Java | Python | React | MySQL </p>
              <div className="social-links">
                {/*LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" arir-hidden="true" />
                </a>

                {/*Github */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" arir-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" arir-hidden="true" />
                </a>

                {/*Gmail */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-google" arir-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
