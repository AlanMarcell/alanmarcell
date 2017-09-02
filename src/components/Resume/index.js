import React from 'react';
import PropTypes from 'proptypes';
import H1 from '../H1';
import Technologies from './Technologies';
import Years from './Years';
import CheckboxList, { getCbListFromArray } from '../CheckboxList';
import {
  intersection,
  isEmpty,
  contains,
  uniq
} from 'ramda';

const getYears = (technologies) => {
  return uniq(technologies.reduce((years, tech) => {
    return years.concat(tech.years);
  }, []));
};

const filterTechnologies = (technologies, selectedYears) => {
  return technologies.filter(t => !isEmpty(intersection(t.years, selectedYears)));
};

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.technologies = props.data.site.siteMetadata.resume.technologies;
    this.years = getYears(this.technologies);

    this.state = {
      selectedYears: this.years
    };
  }

  selectYear = (year) => {
    const containsYear = contains(year, this.state.selectedYears);

    const selectedYears = containsYear
      ? this.state.selectedYears.filter(y => y !== year)
      : [...this.state.selectedYears, year];

    this.setState({
      selectedYears
    });
  }

  isAllYearsSelected = () => this.years === this.state.selectedYears;

  selectAllYears = () => {
    const selectedYears = this.isAllYearsSelected()
      ? []
      : this.years;

    this.setState({
      selectedYears
    });
  }

  render() {
    const { i18n } = this.props;
    const years = getCbListFromArray(this.years, this.state.selectedYears);
    const technologies = filterTechnologies(this.technologies, this.state.selectedYears);

    return (
      <section>
        <header>
          <H1>
            {i18n.title}
          </H1>
        </header>
        <CheckboxList
          items={years}
          check={this.selectYear}
          checkAll={this.selectAllYears}
          i18n={i18n.years}
        />
        <Technologies
          technologies={technologies}
          i18n={i18n.technologies}
        />
      </section>
    );
  }
}

Resume.propTypes = {
  data: PropTypes.object.isRequired,
  i18n: PropTypes.shape({
    title: PropTypes.string.isRequired,
    years: PropTypes.object.isRequired,
    technologies: PropTypes.object.isRequired
  })
};

export default Resume;
