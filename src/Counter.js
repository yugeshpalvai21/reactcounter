import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Welcome To Counter App</h2>
      <h4>Counter Value - { counter }</h4>
      <button onClick={() => {console.log('adding one')}}>Add One</button>
      <button onClick={() => {console.log('minus one')}}>Minus One</button>
      <button onClick={() => {console.log('resetting counter')}}>Reset Counter</button>
    </div>
  )
}

export default Counter;
