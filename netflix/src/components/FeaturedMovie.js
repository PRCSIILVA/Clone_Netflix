import React from 'react';
import './FeatureMovie.css';

export default ({item}) => {

    let firtstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name ); 
    }

    let description = item.overview;
    // logica para a descricao
    
    // if(){

    // }
        
    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
            <div className='featured--horizontal'>
                <div  className='featured--name'>{item.original_name}</div>
                <div className='info'>
                    <div className='featured--point'>{item.vote_average} Pontos</div>
                    <div className='featured--year'>{firtstDate.getFullYear()}</div>
                    <div className='featured--seasons'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's':''}</div>
                </div>
                <div className='featured--description'>{description}</div>
                <div className='featured--buttons'>
                    <a href={`/watch/${item.id}`} className="featured--btnwatch"> ► Assistir</a>

                    <a href={`/list/add/${item.id}`} className="featured--btnadd">+ Minha Lista</a>
                </div>
                <div className='featured--genres'><strong>Gêneros: </strong>{genres.join(', ')}</div>

            </div>

            </div>
        </section>
    );
}