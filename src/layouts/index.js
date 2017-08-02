import React from 'react';
import PropTypes from 'proptypes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteMetadata } from '../../gatsby-config';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../themes/theme';
import { getLangs, getHomeLink } from '../i18n/domain/langs';

const Background = styled.div`
  background-color: ${props => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

const BodyContainer = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.bg};
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin};
  max-width: ${props => props.theme.maxWidth};

  font-feature-settings: "calt" 1, "clig" 1, "dlig" 1, "kern" 1, "liga" 1, "salt" 1;
`;

/**
 * Gets the number of paths in a url
 * @param {*} url pathName
 * @returns {Number} number of paths
 */
const nPaths = (url) => (url.match(/\//g) || []).length - 1;

/**
 * Checks if the url is /, /en/ or /pt/
 * @param {*} url this.props.location
 * @returns {Boolean} is home or not
 */
const isHomePage = (url) => nPaths(url) <= 1;

class Wrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
    location: PropTypes.object
  }

  render() {
    const browserLang = 'en';
    const isHome = isHomePage(this.props.location.pathname);
    const langs = getLangs(browserLang, this.props.location.pathname);
    const homeLink = getHomeLink(browserLang, this.props.location.pathname);

    return (
      <ThemeProvider theme={theme}>
        <Background>
          <BodyContainer>
            <Header
              siteMetadata={siteMetadata}
              isHome={isHome}
              langs={langs}
              homeLink={homeLink}
            />
            <main>
              {this.props.children()}
            </main>
            <Footer siteMetadata={siteMetadata} />
          </BodyContainer>
        </Background>
      </ThemeProvider>
    );
  }
}

export default Wrapper;
