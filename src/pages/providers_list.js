import React from 'react'
import { useState,useContext } from 'react'
import { ProviderContext } from '../context/provider'
import Searchbar from '../components/searchbar'
import styles from '../styles/Providers_list.module.css'


function Providers_list() {
    const {providers,loading}=useContext(ProviderContext)
    comst [search, setSearchTerm]=useState("");
    
    return (
       <div>

       </div> 
    )
}

export default Providers_list
