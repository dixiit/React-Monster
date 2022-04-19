import React from 'react'
import './card.style.css'

export let Card = props =>(
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2?size=140x140`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)