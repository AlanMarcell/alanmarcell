import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';
import { head, last } from 'ramda';
import { FormattedMessage } from 'react-intl';

const Img = styled.img`
  max-width: 90%;
  max-height: ${({ theme }) => theme.scale(8)};
`;

const Name = styled.cite`
  font-size: ${({ theme }) => theme.scale(0)};
`;

const Li = styled.li`  
  width: ${({ theme }) => theme.scale(9)};
`;

const ImgContainer = styled.div`
  width: 90%;
  height: ${({ theme }) => theme.scale(9)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;  

  ${(props) => props.needWhiteBg
    ? `background-color: ${props.theme.colors.white};
       color: ${props.theme.colors.black};`
    : ``};
`;

const Level = styled.p`
  color: ${({ theme, level }) => {
    switch (level) {
    case 'expert': return theme.colors.green;
    case 'novice': return theme.colors.darkBlue;
    case 'proficient': return theme.colors.blue;
    default: return '';
    }
  }};
  font-weight: bold;
  padding: ${({ theme }) => theme.scale(-6)} 0;
`;

const A = styled.a`
  display: block;
  padding: 1rem ${({ theme }) => theme.scale(-6)};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.blackShades[0]};
  }
`;

const getNYears = (years) => last(years) - head(years) + 1;

const Technology = ({ name, link, needWhiteBg, level, years, img, i18n }) => {
  return (
    <Li>
      <A href={link} target="_blank">
        <figure>
          <ImgContainer needWhiteBg={needWhiteBg}>
            <Img src={`/imgs/${img}`} alt={name} title={name} />
          </ImgContainer>
          <figcaption>
            <Name>{name}</Name>
            <Level level={level}>{i18n.getLevelMsg(level)}</Level>
            <FormattedMessage
              id="resume.technologies.years"
              defaultMessage={i18n.yearsMsg}
              values={{ nYears: getNYears(years) }}
            />
          </figcaption>
        </figure>
      </A>
    </Li>
  );
};

Technology.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string,
  needWhiteBg: PropTypes.bool,
  i18n: PropTypes.shape({
    yearsMsg: PropTypes.string.isRequired,
    getLevelMsg: PropTypes.func.isRequired
  })
};

export default Technology;
