import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Tab = props => {
  const Style = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${ props.tab === props.selectedTab ? '#333' : '#fff'};
  background-color: ${ props.tab === props.selectedTab ? '#fff' : '#333'};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: ${ props.tab === props.selectedTab ? '2px solid #333' : 'none'}
  
  :hover {
  text-decoration: underline;
  }
`;
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <Style
      onClick={() => props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </Style>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
