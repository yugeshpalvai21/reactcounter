import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleReset = () => {
    console.log('Resetting Counter To Zero');
    setCounter(0);
  }

  return (
    <div>
      <h2>Welcome To Counter App</h2>
      <h4>Counter Value - { counter }</h4>
      <button onClick={() => (setCounter(counter+1)) }>Add One</button>
      <button onClick={() => (setCounter(counter-1)) }>Minus One</button>
      <button onClick={handleReset}>Reset Counter</button>
    </div>
  )
}

export default Counter;
