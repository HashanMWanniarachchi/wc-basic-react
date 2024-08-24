import React from 'react';
import { useState } from 'react';
import HeroTable from './HeroTable';

const HeroList = () => {

    const [heroes, setHeroes] = useState({});

    HeroService.getHeroes().then((data)=>{
        setHeroes(data);
    })

    // import("../../../Services/HeroService.js").then(async (heroService) => {

    //     let heroList= await heroService.getHeroes();
    //     console.log(heroList);
    //     setHeroes(heroList);
    // });
   
    return (
        <div>
        <h1>React Superhero Table</h1>
        {Object.keys(heroes).length > 0 && <HeroTable data={heroes} />}
        {Object.keys(heroes).length === 0 && <h2>Hero list loading...</h2>}
      </div>
    );

}
  
export default HeroList;