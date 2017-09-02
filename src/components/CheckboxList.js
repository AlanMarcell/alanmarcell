import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { InvisibleSpan } from './Invisible';
import { pipe, not, any, contains } from 'ramda';

const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 0 1rem 0;
    padding: 0;
`;

const Div = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;

export const isAllItemsChecked = pipe(
  any(i => !i.checked),
  not
);

export const getCbListFromArray = (items, checkedItems) => {
  return items.map(i => ({
    label: i,
    value: i,
    checked: contains(i, checkedItems)
  }));
};

const CheckboxList = ({ i18n, items, check, checkAll }) => {
  const allItemsChecked = isAllItemsChecked(items);
  const ul = allItemsChecked
    ? null
    : (
      <Ul>
        {items.map(item => (
          <li>
            <Checkbox
              value={item.value}
              label={item.label}
              check={check}
              checked={item.checked}
            />
          </li>
        ))}
      </Ul>
    );

  return (
    <fieldset>
      <legend>
        <InvisibleSpan>{i18n.title}</InvisibleSpan>
      </legend>
      <Div>
        <Checkbox
          label={i18n.checkAll}
          check={checkAll}
          checked={allItemsChecked}
        />
      </Div>
      {ul}
    </fieldset>
  );
};

export const i18nPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  checkAll: PropTypes.string.isRequired
});

CheckboxList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  })).isRequired,
  check: PropTypes.func.isRequired,
  checkAll: PropTypes.func.isRequired,
  i18n: i18nPropTypes
};

export default CheckboxList;
