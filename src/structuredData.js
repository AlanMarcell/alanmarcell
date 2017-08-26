import {assocPath, curry, pipe, prop} from 'ramda';
import {isNilOrEmpty, isNotNilOrEmpty} from 'ptz-fp';

const filterObj = curry((fn, obj) => {
  if(isNilOrEmpty(obj)) return obj;

  return Object.keys(obj).reduce((newObj, key) => {
    const value = obj[key];

    if(typeof value === 'object'){
      newObj[key] = filterObj(fn, obj[key]);
    } else if(fn(value)){
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
});

/**
 * Remove null fields and fields that has value equal to '...'
 * @param  {Object} structuredData google structured data
 * @return {Object}                clean structured data
 */
const cleanStructuredData = filterObj((v) => isNotNilOrEmpty(v) && v !== '...');

/**
 * Rename props named 'type' to '@type'
 * @param  {Object} obj any object
 * @return {Object}     new object
 */
const renameType = (obj) => {
  return Object.keys(obj).reduce((newObj, key) => {
    newObj[key === 'type' ? '@type' : key] = obj[key];
    return newObj;
  }, {});
};

const addContext = (structuredData) => {
  // Does it really needs to be immutable?
  structuredData['@context'] = 'http://schema.org/';
  return structuredData;
};

const getDate = pipe(
  prop('frontmatter'),
  prop('date')
);

const addDatePublished = (markdownRemark) => {
  return assocPath(['frontmatter', 'structuredData', 'datePublished'],
    getDate(markdownRemark), markdownRemark);
};

const getHeadline = pipe(
  prop('frontmatter'),
  prop('title')
);

const addHeadline = (markdownRemark) => {
  return assocPath(['frontmatter', 'structuredData', 'headline'],
    getHeadline(markdownRemark), markdownRemark);
};

const getArticleBody = pipe(
  prop('html')
);

const addArticleBody = (markdownRemark) => {
  return assocPath(['frontmatter', 'structuredData', 'articleBody'],
    getArticleBody(markdownRemark), markdownRemark);
};

/**
 *  Prepare structuredData from markdownRemark to google
 *  - get Structured Data from markdownRemark
 *  - remove empty fields
 *  - rename type to @type
 *  - parse to JSON
 *
 * @type {Object => String}
 */
const getStructuredData =
  pipe(
    addDatePublished,
    addHeadline,
    addArticleBody,
    prop('frontmatter'),
    prop('structuredData'),
    cleanStructuredData,
    renameType,
    addContext,
    JSON.stringify
  );

export {
  cleanStructuredData,
  getStructuredData
};
