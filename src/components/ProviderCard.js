import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/provider_card.module.css'

function Provider_card({providers}) {
    const {id,name,specialization,location,rating}=providers

    return (
       <Link to={`/provider/${id}`} className={styles.providerCard}>
        <div className={styles.CardContent}>
            <h3 className={styles.name}>
                 {name}
            </h3>
            <p className={styles.specialization}>{specialization}</p>
            <p className={styles.location}>{location}</p>
            <p className={styles.rating}>{rating}</p>


        </div>
       </Link>
    )
}

export default Provider_card
