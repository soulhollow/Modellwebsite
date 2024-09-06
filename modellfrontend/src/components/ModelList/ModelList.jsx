import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ModelList = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get('/api/models')
      .then(response => {
        setModels(response.data);
      })
      .catch(error => {
        console.error('Es gab einen Fehler beim Abrufen der Models!', error);
      });
  }, []);

  return (
    <div>
      <h1>Model-Liste</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>
            <h2>{model.name}</h2>
            <p>{model.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelList;
