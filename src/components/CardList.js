import React from 'react'
import Card from './Card'

// for each card we need to give an key so react can identidy the each card uniwuely 
const CardList = ({ robots }) => {
    const cardsComponents = robots.map(
        (user , i) => {
            return <Card key = {i} id={user.id} name={robots[i].name} email={robots[i].email} username={robots[i].username} /> ;
        }
    )
    return (
        <div>
            {cardsComponents}
        </div>
    ); 
    
}


export default CardList;