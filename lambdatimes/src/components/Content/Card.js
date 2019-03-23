import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { headline, img, author } = props.card;
  return (
    <div className="card">
      <div className="headline">{ headline }</div>
      <div className="author">
        <div className="img-container">
          <img src={ img } />
        </div>
        <span>By { author }</span>
      </div>
    </div>
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
