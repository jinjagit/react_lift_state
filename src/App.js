import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const handleChange = (name) => {
    setName(name);
  };

  return (
    <div className="App">
      <ChildComponent onChange={handleChange} />
      <h1>{name}</h1>     
    </div>
  );
}

const ChildComponent = ({ onChange, name }) => {
  return (
    <input
      value={name}
      onChange={e => onChange(e.target.value)}
    />
  )
};

export default App;
