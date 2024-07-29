// @ts-nocheck
import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BiCoffeeTogo } from 'react-icons/bi';

// eslint-disable-next-line react/display-name
const Queue = React.memo(({ isFirstPerson, item, windowId, dequeueOrder }) => {
  console.log('Set time out runing for ', item.id, windowId);
  const [isItemRemoved, setIsItemRemoved] = useState(false);

  useEffect(() => {
    if (isFirstPerson) {
      const timer = setTimeout(() => {
        console.log('Remove item ', item.id, item.value, windowId);
        setIsItemRemoved(true);
        // delay the fn call to show the slideUp animation after the item is removed
        setTimeout(() => {
          dequeueOrder(windowId, item.id);
        }, 400);
      }, 10000);

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [isFirstPerson]);

  return (
    <div className={`Queue ${isItemRemoved ? 'list-item-exit' : ''}`}>
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
