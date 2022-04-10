import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Welcome To Counter App</h2>
      <h4>Counter Value - { counter }</h4>
      <button onClick={() => (setCounter(counter+1)) }>Add One</button>
      <button onClick={() => (setCounter(counter-1)) }>Minus One</button>
      <button onClick={() => (setCounter(0)) }>Reset Counter</button>
    </div>
  )
}

export default Counter;
