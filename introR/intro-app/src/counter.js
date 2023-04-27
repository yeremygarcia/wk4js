/* Create a functional component called Counter. Inside the component, use the useState hook to create a state variable 
called count with an initial value of 0 and a function called setCount to update the state.
Implement two functions called increment and decrement inside the Counter component. 
The increment function should increase the count value by 1, and the decrement function should decrease 
the count value by 1. Use the setCount function to update the count value.
In the Counter component's JSX, display the count value and create two buttons for incrementing and decrementing the 
counter. Attach the increment and decrement functions as event handlers for the onClick event of the respective buttons.
Export the Counter component. */

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <>
        <button id='button' onClick={increment}>Increment Button</button>
        <button id='button' onClick={decrement}>Decrement Button</button>
      </>
    </>
  );
}