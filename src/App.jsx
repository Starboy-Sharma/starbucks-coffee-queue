// @ts-nocheck
import { useState } from 'react';
import './App.css';
import AddToCartForm from './components/AddToCartForm';
import ShoppingWindow from './components/ShoppingWindow';
import Starbucks from './assets/starbucks.gif';

function App() {
  const [queues, setQueues] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });

  const findShortestQueue = () => {
    let minLength = Infinity;
    let selectedWindow = 0;

    for (let key in queues) {
      if (queues[key].length < minLength) {
        minLength = queues[key].length;
        selectedWindow = key;
      }
    }

    return selectedWindow;
  };

  const enqueueCart = (item) => {
    const windowId = findShortestQueue();
    if (windowId !== 0) {
      const newItem = { id: Date.now(), value: item };
      setQueues((prevQueues) => ({
        ...prevQueues,
        [windowId]: [...prevQueues[windowId], newItem],
      }));
    }
  };

  const dequeueCart = (windowId, itemId) => {
    setQueues((prevQueues) => ({
      ...prevQueues,
      [windowId]: prevQueues[windowId].filter((item) => item.id !== itemId),
    }));
  };

  return (
    <div className="container">
      <div className="header-section">
        <AddToCartForm addToCart={enqueueCart} />
        <div className="starbucks-picture">
          <img src={Starbucks} alt="Starbucks Animated Gif" />
        </div>
      </div>
      <ShoppingWindow queues={queues} dequeueOrder={dequeueCart} />
    </div>
  );
}

export default App;
