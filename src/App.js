import React from 'react';
import { bikeApi } from "./api";

import './App.css';

const App = () => {
  const [incidents, setIncidents] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() =>{
    bikeApi().then(data => {
      setIncidents(data.incidents)
    });
  }, [])

  const displayCards = () => {
    bikeApi().then(data => {
      setIncidents(data.incidents)
    });
  }

  if(error){
  return <p>{error}</p>
  } else if(incidents){

    const mappedArray = incidents.map(incident => incident.type);
    const uniqueTypes = [...new Set(mappedArray)];
    const filteredIncidents = incidents.filter(incident => incident.type);

    return (
      <div className="App">
        {uniqueTypes.map((type) => <button onClick={displayCards}>{type}</button> )}
          <p>
            hello
          </p>
      </div>
    );
  } else{
    return <p>Loading</p>
  }
}

export default App;
