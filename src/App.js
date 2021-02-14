import './App.css';
import React from 'react';
import Form from './form.js';
import Weather from './Weather';
import News from './News';

const HEALTH_API_URL = '/api/health';

async function fetchHealth(updateCb) {
  const res = await fetch(HEALTH_API_URL);
  const json = await res.json();

  console.log({json});
  updateCb(json);
}

function App() {

//react hooks
  const [newsList, updateHealth] = React.useState([]);
  React.useEffect(() => {
    fetchHealth(updateHealth);
  }, [])

  return (
    <div className="App">
      <Weather/>
      <News news = {newsList} />
      <Form />
    </div>
  );
}

export default App;
