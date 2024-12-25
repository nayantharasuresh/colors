import { useState } from 'react';
import './App.css';

function App() {
  const [bg, setBackground] = useState('black');

  const red = () => {
    setBackground('red');
  };
  const violet = () => {
    setBackground('violet');
  };
  const green = () => {
    setBackground('green');
  };

  return (
    <>
      <div
        style={{backgroundColor: bg, width: '100%', height: '100vh', display:'flex',flexWrap:'wrap', alignItems: 'center', justifyContent: 'center',}}>
        <div style={{border:'5px solid black', width: '600px', padding: '30px', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(204, 190, 190, 0.2)',textAlign: 'center',}}>
          <h1 style={{color: 'white', fontSize: '50px', fontWeight: 'bold', fontStyle: 'italic',fontFamily: '"Comic Sans MS", "Arial", sans-serif', marginBottom: '20px',}}>Choose the Color</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <button onClick={red} style={{width: '100px',height: '50px',color: 'white',fontSize: '16px',fontWeight: 'bold',border: '3px solid black',backgroundColor: 'red',borderRadius: '50px',}}>Red</button>
          
           <button onClick={violet} style={{width: '100px',height: '50px',color: 'white',fontSize: '18px',fontWeight: 'bold',border: '3px solid black',backgroundColor: 'violet',borderRadius: '50px',}}>Violet</button>
          
          <button onClick={green}style={{width: '100px', height: '50px', color: 'white', fontSize: '18px', fontWeight: 'bold', border: '3px solid black',backgroundColor: 'green',borderRadius: '50px',}}>Green</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;  
