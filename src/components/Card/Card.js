import React from 'react'

import './Card.scss'

function Card(props) {
    const {card} = props
    return(
        <li className="card-item">
            {card.cover && <img src={card.cover} className="card-cover" alt=""></img>}
            {/* <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" className="card-cover" alt=""></img> */}
            {card.title}
        </li>
    )
}

export default Card;