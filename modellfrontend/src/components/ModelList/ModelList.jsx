import React from 'react';

const ModelList = ({ models }) => {
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
