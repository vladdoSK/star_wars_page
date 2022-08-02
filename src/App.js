import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character/Character.jsx';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';


function App() {

  const [characters, setCharacters] = useState([]);
  const [value, setValue] = useState('');

  const [isLoad, setIsLoad] = useState(false);

  const [filter, setFilter] = useState('Name');
  const [isActiveSelector, setIsActiveSelector] = useState(false);

  //let char = [];

  const filterCharacter = characters.filter(character => {
    return character.toLowerCase().includes(value.toLowerCase())
  });

  async function getCharacters() {

    let page='https://swapi.dev/api/people/';

    changePage(page);

    /*const response = await fetch('https://swapi.dev/api/people/')
    const data = await response.json();
    const charact = await data.results;

    await setCharacters([]);

    for (let i = 0; i < charact.length; i++) {
      const response_planet = await fetch(charact[i].homeworld);
      const data_planet = await response_planet.json();
      const planet_name = await data_planet.name;
      console.log(planet_name);
      char.push(charact[i].name + ' ' + charact[i].height + ' ' + planet_name);
    }

    setCharacters(char);*/
  }

  useEffect(() => {
    getCharacters();
  }, [])

  function setSelector() {
    if (isActiveSelector === true) {
      setIsActiveSelector(false);
    }
    else {
      setIsActiveSelector(true);
    }
  }

  function settingDirect(value) {
    setFilter(value);
    setIsActiveSelector(false);
  }

  let charact;

  async function changePage(page){

    setIsLoad(true);
    let newPage = [];
    await setCharacters([]);

    const response = await fetch(page);
    const data = await response.json();
    charact = await data.results;

    for (let i = 0; i < charact.length; i++) {
      //--------HOME--------------

      const response_planet = await fetch(charact[i].homeworld);
      const data_planet = await response_planet.json();
      const planet_name = await data_planet.name;
      
      //--------species--------------

      const species_link = await charact[i].species;
      let species;
      if(species_link.length == 0){
        species="Human";
      }
      else{
        const data_species = await fetch(species_link[0]);
        const kind = await data_species.json();
        species = await kind.name;
      }

      
      //--------EPISODE--------------

      const films = await charact[i].films;

      let num_episode = [];
      let spaceships = [];

      for(let j = 0; j<films.length; j++){
        
        const data_film = await fetch(films[j]);
        const data_episode = await data_film.json();
        const episode = await data_episode.title;
        num_episode.push(episode);
        
      }
      //--------SPACESHIP--------------
      const ship_links = await charact[i].starships;

      for(let x = 0; x < ship_links.length; x++){
        
        const data_ship = await fetch(ship_links[x]);
        const ship = await data_ship.json();
        const spaceship = await ship.model;
        spaceships.push(spaceship);
      }

      let episod = num_episode.toString();
      let starships = spaceships.toString();

      newPage.push(charact[i].name + '/' + species + '/' + planet_name + '/' + episod + '/' + starships);
    }
    setIsLoad(false);
    setCharacters(newPage);
  }

  return (
    <div className="App">
      <Header changePage={changePage}/>



      <Filter setValue={setValue}
        isActiveSelector={isActiveSelector}
        setSelector={setSelector}
        settingDirect={settingDirect}
        />

      <Loading isLoad={isLoad}/>

      <div className='wrapper'>
        {filterCharacter.map((m) => (<Character character={m} />))}
      </div>

    </div>
  );
}

export default App;
