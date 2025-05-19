import React from 'react';
import MovieList from './movielist';

function Page() {
  return (
    <div className="container mt-5">
      <h1>Movie list</h1>
      <h2>Movie</h2>
      <MovieList />
    </div>
  );
}

export default Page;
