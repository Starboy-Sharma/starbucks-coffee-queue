// @ts-nocheck
import { PropTypes } from 'prop-types';
import { SiCoffeescript } from 'react-icons/si';
import { CiMoneyCheck1 } from 'react-icons/ci';
import coffeeCounter from '../assets/coffee-loading.gif';
import coffeePreparing from '../assets/coffee-preparing.gif';
import Queue from './Queue';

function ShoppingWindow({ queues, dequeueOrder }) {
  return (
    <div className="ShoppingWindow">
      <h1 className="title">
        Starbucks Checkout
        <SiCoffeescript size="32px" color="#362415" />
      </h1>

      <div className="window-list">
        {Object.keys(queues).map((key) => (
          <div key={key} className="window">
            <img
              src={
                queues[key].length === 0
                  ? `${coffeeCounter}`
                  : `${coffeePreparing}`
              }
              alt="CASH QUEUE"
            />

            <h3>
              Payment Window {key}
              <CiMoneyCheck1 size="32px" color="#362415" />
            </h3>

            {queues[key].map((item, idx) => (
              <Queue
                isFirstPerson={idx === 0}
                item={item}
                windowId={key}
                key={item.id}
                dequeueOrder={dequeueOrder}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

ShoppingWindow.propTypes = {
  queues: PropTypes.object.isRequired,
  dequeueOrder: PropTypes.func.isRequired,
};

export default ShoppingWindow;
