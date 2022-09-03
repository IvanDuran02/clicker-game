import "./App.css";
import React, { useEffect } from "react";
import btccc from "./btccc.png";

// you need to have a certain amount of cash to buy an item

// when you buy the item

let gtx760 = false;
let gtx780 = false;
let gtx790 = false;
let multiplier = 1;

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + multiplier);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      setCount(count + multiplier);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="container">
      <div className="clicker">
        <img src={btccc} alt="" className="image1" onClick={handleClick} />

        <h1>BTC: {count}</h1>
        <button onClick={reset}>Reset BTC</button>
        <button onClick={() => setCount(count + 100)}>Cheat Button</button>
      </div>
      <div className="shop">
        <h1>Shop:</h1>
        <div className="items">
          {!gtx760 ? (
            <h1
              onClick={() => {
                if (count >= 500) {
                  setCount(count - 500);
                  gtx760 = true;
                  multiplier = multiplier + 1.5;
                } else {
                  alert("You don't have enough BTC to buy this item");
                }
              }}
              className="item"
            >
              GeForce GTX 760 - buy $500
            </h1>
          ) : (
            <h1>GeForce GTX 760: Purchased</h1>
          )}
          {!gtx780 ? (
            <h1
              onClick={() => {
                if (count >= 1000) {
                  setCount(count - 1000);
                  gtx780 = true;
                  multiplier = multiplier + 2.5;
                } else {
                  alert("You don't have enough BTC to buy this item");
                }
              }}
              className="item"
            >
              GeForce GTX 780 - buy $1000
            </h1>
          ) : (
            <h1>GeForce GTX 780: Purchased</h1>
          )}
          {!gtx790 ? (
            <h1
              onClick={() => {
                if (count >= 2500) {
                  setCount(count - 2500);
                  gtx790 = true;
                  multiplier = multiplier + 5;
                } else {
                  alert("You don't have enough BTC to buy this item");
                }
              }}
              className="item"
            >
              GeForce GTX 790 - buy $2500
            </h1>
          ) : (
            <h1>GeForce GTX 790: Purchased</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
