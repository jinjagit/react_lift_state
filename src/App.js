import { useState } from 'react';

function App() {
  const [name, setName] = useState('<your name>');
  const handleChange = (name) => {
    setName(name);
  };

  return (
    <div className="container app">
      <div className='row'>
        <h3>App component [parent]</h3>
      </div>
      <div className='row'>
        <h1>My name is {name}</h1>
      </div>
      <form className='row g-3'>
        
          <NameInput onChange={handleChange} />
           
          <NameInput onChange={handleChange} />

      </form>
    </div>
  );
}

const NameInput = ({ onChange, name }) => {
  return (
    <div className='col-lg-6 card input'>
      <h3>Input component [child of App]</h3>
      <label htmlFor='name' className='form-label'>Name</label>
      <input
        className='form-control'
        placeholder='Name'
        value={name}
        onChange={e => onChange(e.target.value)}
      />
    </div>  
  )
};

export default App;
