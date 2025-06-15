import React from 'react'
import { useState, useContext } from 'react'
import { provider_Context } from '../context/provider_context'
import Searchbar from '../components/searchbar'
import styles from '../styles/Providers_list.module.css'
import Provider_card from '../components/provider_card'


function Providers_list() {
    const { providers, loading } = useContext(provider_Context)
    const [search, setSearchTerm] = useState("");
    const filterProviders = search ? providers.filter((p) => {
        return (
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.specialization.toLowerCase().includes(search.toLowerCase())
        )


    }) : providers;

    if (loading) {
        return <p>Loading providers...</p>;
    }

    return (
        <div >
            <Searchbar search={search} setSearchTerm={setSearchTerm} />
            {filterProviders.length > 0 ?
                <div>
                    {filterProviders.map((provider) => (
                        <Provider_card key={provider.id} providers={provider} />
                    ))}
                </div> : (<p>Providers not found</p>)}

        </div>
    )
}

export default Providers_list
