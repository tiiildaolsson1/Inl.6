import React from 'react';
import MovieList from './movielist';

function Page() {
  return (
    <div className="container mt-5">
      <h1>Filmlista</h1>
      <h2 className='mb-4'>filmer som jag sett!</h2>
      <MovieList />
    </div>
  );
}

export default Page;
