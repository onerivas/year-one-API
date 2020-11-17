import React from 'react'

function MovieSearch(props) {
  return (
    <>
      <form onSubmit={props.movieQueryOnSubmit }>
        <input className='' onChange={ props.onChange } type='search' placeholder='Indiana Jones'/>
        <button className='' type='submit'>Search</button>
        </form>
    </>
  );
}


export default MovieSearch;
