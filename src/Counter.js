import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Welcome To Counter App</h2>
      <h4>Counter Value - { counter }</h4>
    </div>
  )
}

export default Counter;
