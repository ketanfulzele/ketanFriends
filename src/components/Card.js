import React from 'react'
import 'tachyons'

const Card = ({name , email ,id } ) => {
                    // or 
    // const {name , email ,id } = props ; // take each key from props object and call ir by key whenever it is require no need to  do props.name 
    return (
        <div className='bg-light-green tc dib br2 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='Photos' />
            <div>
                {/* <h2>{props.name}</h2> */}
                <h2>{name}</h2>
                {/* <p>{props.email}</p> */}
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;