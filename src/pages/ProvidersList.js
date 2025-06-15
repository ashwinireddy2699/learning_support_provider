import React from 'react'
import { useState, useContext } from 'react'
import { ProviderContext } from '../context/ProviderContext'
import Searchbar from '../components/Searchbar'
import styles from '../styles/Providers_list.module.css'
import Provider_card from '../components/ProviderCard'
import banner from '../assests/learnbox.png'


function Providers_list() {
    const { providers, loading } = useContext(ProviderContext)
    const [search, setSearchTerm] = useState("");
    const filterProviders = search ? providers.filter((p) => {
        return (
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.specialization.toLowerCase().includes(search.toLowerCase())
        )


    }) : providers;

    if (loading) {
        return <div className={styles.loading_container}>
            <div className={styles.spinner}></div>
            <p className={styles.loading_text}>Loading providers...</p>
        </div>

    }

    return (
        <div className={styles.Conatainer}>
            <div className={styles.header}><p>Learning providers</p></div>
            <div className={styles.banner} style={{ backgroundImage: `url(${banner})` }}>
                <h1>Discover the learning support providers</h1>
                <Searchbar search={search} setSearchTerm={setSearchTerm} />
            </div>

            {filterProviders.length > 0 ?
                <div className={styles.providersContainer}>
                    {filterProviders.map((provider) => (
                        <Provider_card key={provider.id} providers={provider} />
                    ))}
                </div> : (<p className={styles.notFound}>No providers match your search.</p>)}

        </div>
    )
}

export default Providers_list
