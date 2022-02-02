import { useState } from 'react';
import { Input } from './Input';

function App() {
  const [name, setName] = useState('<name>');
  const [age, setAge] = useState('<age>');
  const handleNameChange = (name) => setName(name);
  const handleAgeChange = (age) => setAge(age);

  return (
    <div className="container app">
      <div className='row'>
        <h3>App component [parent]</h3>
      </div>
      <div className='row'>
        <h1>My name is {name}, and I am {age} years old.</h1>
      </div>
      <form className='row g-3'>      
        <Input onChange={handleNameChange} label={'name'} />           
        <Input onChange={handleAgeChange} label={'age'} />
      </form>
    </div>
  );
}

export default App;
