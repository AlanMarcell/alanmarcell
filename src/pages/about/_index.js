import React from 'react';
import PropTypes from 'proptypes';
import H1 from '../../components/H1';
import { getAuthor } from '../../data/authors';
import { getStructuredDataForAuthor } from '../../structuredData';
import BigFirstLetter from '../../components/BigFirstLetter';

const AboutMe = (props) => {
  const author = getAuthor('angeloocana');

  author.description = props.i18n.descriptionForGoogle;

  const structuredData = getStructuredDataForAuthor(author);
  
  console.log(structuredData);

  return (
    <BigFirstLetter>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <header>
        <H1>
          {props.i18n.title}
        </H1>
      </header>
      {props.i18n.description}
    </BigFirstLetter>
  );
};

AboutMe.propTypes = {
  i18n: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    descriptionForGoogle: PropTypes.string.isRequired,
  }).isRequired
};

export default AboutMe;
