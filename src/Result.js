import React from 'react';

export default function Result(props) {
  let info = '';
  let cost = '';
  let title = <em>{props.item.name}</em>;

  switch(props.type) {
    case 'people':
      const speciesUrl = props.item.species;
      const speciesId = parseInt(speciesUrl[0].substring(29, 33));
      const species = props.data.species[speciesId];
      const homeworldUrl = props.item.homeworld;
      const homeworldId = parseInt(homeworldUrl.substring(29, 33));
      const homeworld = props.data.homeworld[homeworldId] || {name:'unknown'};

      info = <div>
        <p>gender <span>{props.item.gender}</span></p>
        <p>member of <span>{species.name}</span>, from <span>{homeworld.name}</span></p>
        <p>birth year <span>{props.item.birth_year}</span></p>
        <p>height <span>{props.item.height}</span></p>
      </div>;
      break;

    case 'films':
      title = <em>{props.item.title}</em>;
      break;
    
    case 'starships':
      cost = Number(props.item.cost_in_credits).toLocaleString();

      info = <div>
        <p>class <span>{props.item.starship_class}</span></p>
        <p>cost <span>{cost} galactic credits</span></p>
        <p>manufacturer <span>{props.item.manufacturer}</span></p>
      </div>;
      break;

    case 'vehicles':
      cost = Number(props.item.cost_in_credits).toLocaleString();

      info = <div>
        <p>class <span>{props.item.vehicle_class}</span></p>
        <p>cost <span>{cost} galactic credits</span></p>
        <p>manufacturer <span>{props.item.manufacturer}</span></p>
      </div>;
      break;

    case 'planets':
      const diameter = Number(props.item.diameter).toLocaleString();
      const population = Number(props.item.population).toLocaleString();

      info = <div>
        <p>diameter <span>{diameter}</span></p>
        <p>population <span>{population}</span></p>
        <p>terrain <span>{props.item.terrain}</span></p>
        <p>climate <span>{props.item.climate}</span></p>
      </div>;
      break;

    case 'species':
      info = <div>
        <p>classification <span>{props.item.classification}</span></p>
        <p>language <span>{props.item.language}</span></p>
        <p>avg. lifespan <span>{props.item.average_lifespan} years</span></p>
        <p>avg. height <span>{props.item.average_height}cm</span></p>
      </div>;

    default:
      // nothing
  }

  return (
    <li className="result">
      {title}
      {info}
    </li>
  );
}