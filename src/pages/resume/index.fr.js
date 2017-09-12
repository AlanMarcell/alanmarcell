import React from 'react';
import Resume from '../../components/Resume';
import graphql from 'graphql';

const yearsMsg = `{nYears, number} {nYears, plural,
  one {an}
  other {ans}
}`;

const getLevelMsg = (level) => {
  switch (level) {
    case 'expert': return 'Expert';
    case 'novice': return 'Novice';
    case 'proficient': return 'Proficient';
    default: return '';
  }
};

export const i18n = {
  title: `Résumé`,
  filters: {
    title: `Filtres`,
    years: {
      title: `Années`,
      checkAll: `Toutes les années`
    },
    tags: {
      title: `Tags`,
      checkAll: `Tous les tags`
    }
  },
  technologies: {
    title: `Les technologies`,
    noTechnologies: `0 Enseignants. Sélectionnez les autres années.`,
    technology: {
      getLevelMsg,
      yearsMsg
    }
  },
  educations: {
    title: `Éducation`,
    noEducations: `0 Instituições de Ensino. Selecione outros anos.`
  }
};

export default (props) =>
  <Resume
    {...props}
    i18n={i18n}
  />;

export const pageQuery = graphql`
  query ResumeFr {
    site {
      siteMetadata {
        resume {
          technologies {
            name
            tags
            level
            years
            img
            needWhiteBg
            link
          }
          educations {
            name
            subject {
              pt
              en
              fr
            }
            needWhiteBg
            link
            fullName
            years
            img
          }
        }
      }
    }
  }
`;
