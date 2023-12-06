import React, { useMemo } from 'react'
import { HeroCard } from '.';
import { getHeroesByPublisher } from '../helpers'

export const HeroeList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
      <>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            { heroes.map((heroe) => {
                // return <li key={heroe.id}>{heroe.superhero}</li>
                return <HeroCard key={heroe.id} {...heroe}/>
            }) }
        </div>
      </>
  )
}
