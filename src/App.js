import React from 'react';
import { bikeApi } from "./api";

import './App.css';

const App = () => {
  const [incidents, setIncidents] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [displayIncidents, setDisplayIncidents] = React.useState([]);

  React.useEffect(() =>{
    bikeApi().then(data => {
      setIncidents(data.incidents)
    });
  }, [])

  const displayCards = (type) => {
    const filteredIncidents = incidents.filter(incident => incident.type === type);
    setDisplayIncidents(filteredIncidents)
  }

  if(error){
  return <p>{error}</p>
  } else if(incidents){

    const mappedArray = incidents.map(incident => incident.type);
    const uniqueTypes = [...new Set(mappedArray)];
    

    return (
      <div className="App">
        {uniqueTypes.map((type) => <button onClick={() => displayCards(type)}>{type}</button> )}
          {displayIncidents.map((incident) => (
            <div>
              <p>{incident.title}</p>
              <p>{incident.description}</p>
              <p>{incident.address}</p>
              <a href={incident.url}>website</a>
            </div>
          ))}
      </div>
    );
  } else{
    return <p>Loading</p>
  }
}

export default App;
