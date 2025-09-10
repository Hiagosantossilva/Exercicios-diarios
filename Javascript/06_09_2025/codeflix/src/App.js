import React, { useState, useEffect } from 'react';
import Tmdb from './Tmdb';

export default () => {

  const [movieList, setMovieList] = useEffect([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      console.log(list);

    }
  }, []);
  
  return (
    <div className="page">
      Olá Mundo!
    </div>
  );
}
