// @ts-nocheck
import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { BiCoffeeTogo } from 'react-icons/bi';

// eslint-disable-next-line react/display-name
const Queue = React.memo(({ isFirstPerson, item, windowId, dequeueOrder }) => {
  console.log('Set time out runing for ', item.id, windowId);

  useEffect(() => {
    if (isFirstPerson) {
      const timer = setTimeout(() => {
        console.log('Remove item ', item.id, item.value, windowId);
        dequeueOrder(windowId, item.id);
      }, 10000);

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [isFirstPerson]);

  return (
    <div className="Queue">
      <p>
        <BiCoffeeTogo size="16px" color="#362415" /> {item.value} coffee
      </p>
    </div>
  );
});

Queue.propTypes = {
  isFirstPerson: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  windowId: PropTypes.string.isRequired,
  dequeueOrder: PropTypes.func.isRequired,
};

export default Queue;
