import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Card = props => {
  const Container = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;

    @media (min-width: 1200px) {
      width: 1200px;
    }
  `;

  const Headline = styled.div`
    font-size: 25px;
    font-family: Didot, serif;
  `;

  const Author = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
  `;

  const ImgContainer = styled.div`
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
  `;

  const Img = styled.img`
    width: 40px; 
  `;

  const Span = styled.span`
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  `;

  const { headline, img, author } = props.card;
  return (
    <Container>
      <Headline>{ headline }</Headline>
      <Author>
        <ImgContainer>
          <Img src={ img } />
        </ImgContainer>
        <Span>By { author }</Span>
      </Author>
    </Container>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  })
}

export default Card;
