import React, {Component} from 'react';
import Film from './Film'

export default function FilmList(props){
    const filmNodes = props.films.map(film => {
      return <Film key={film.id} href={film.url}>{film.name}</Film>
    })

    return(
        <div>
            {filmNodes}
        </div>
    )
}