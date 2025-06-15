import React from 'react'
import { useState, useEffect } from 'react'
import { data, useParams } from 'react-router-dom'
import { fetch_providers_by_id } from '../api/ProvidersFetch'
import styles from '../styles/Providers_details.module.css'
import  providerPic from '../assests/learnbox.png'


function Providers_details() {
    const { id } = useParams();
    const [providersDetails, setProvidersDetails] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    useEffect(() => {
        fetch_providers_by_id(id).then((data) => {
            setProvidersDetails(data);
            setLoading(false)
        }).catch((error) => {
            setError(error.message)
        })
    }, [id])

    if (loading) {
        return (
           <div className={styles.loading_container}>
                       <div className={styles.spinner}></div>
                       <p className={styles.loading_text}>Loading providers details...</p>
                   </div>

        )
    }

    if (error)   return (
        <div>Failed to load providers details</div>
    )
        return (
            <div className={styles.detailContainer}>
                <div className={styles.card}>
                    <img src={providerPic} alt={providersDetails.name} className={styles.image} />
                    <div className={styles.info}>
                        <h2 className={styles.name}>{providersDetails.name}</h2>
                        <p className={styles.specialization}>{providersDetails.specialization}</p>
                        <p className={styles.description}>{providersDetails.longDescription}</p>
                           <p className={styles.shortDescription}>{providersDetails.shortDescription}</p>
                        <p className={styles.phoneNumber}>Phone Number: {providersDetails.phoneNumber} years</p>
                        <p className={styles.location}>Location: {providersDetails.location}</p>
                    </div>
                </div>
            </div>
        )
    }

  


export default Providers_details
