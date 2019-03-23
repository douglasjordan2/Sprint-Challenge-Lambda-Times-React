import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: none;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    flex-wrap: wrap;
  `;

  return (
    <Container>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

      { props.cards.map(card => (
        <Card 
          card = { card }
        />
      )) }
    </Container>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objects).isRequired
}

export default Cards;