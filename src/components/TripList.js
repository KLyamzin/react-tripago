import React from 'react';

export default function TripList() {
  fetch('http://localhost:3000/trips')
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
}
