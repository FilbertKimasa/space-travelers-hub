import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelBook } from '../redux/rockets/rocketsSlice';
import '../styles/RocketItem.css';

function RocketItem({ itemProp }) {
  const dispatch = useDispatch();

  return (
    <>
      <li className="rocket-item">
        <img
          src={itemProp.flickr_images[0]}
          alt="rocket"
          className="rocket-img"
        />
        <span className="display-flex rocket-info">
          <h2>{itemProp.name}</h2>
          <p>
            {itemProp.reserved && (
              <span className="reserved-label">Reserved</span>
            )}
            {itemProp.description}
          </p>
          {itemProp.reserved ? (
            <button
              className="rocket-btn cancel-reserve"
              type="button"
              onClick={() => dispatch(cancelBook({ id: itemProp.id }))}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              className="rocket-btn reserve-btn"
              type="button"
              onClick={() => dispatch(bookRocket({ id: itemProp.id }))}
            >
              Reserve Rocket
            </button>
          )}
        </span>
      </li>
    </>
  );
}

RocketItem.propTypes = {
  itemProp: PropTypes.shape({
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
