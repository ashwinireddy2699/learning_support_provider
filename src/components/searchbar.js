import React from 'react'
import styles from '../styles/serachbar.module.css'

function Searchbar({search,setSearchTerm}) {
    return (
        <div className={styles.SearchContainer}>
             <input 
             type="text"
             value={search}
             onChange={(e)=>setSearchTerm(e.target.value)}
             className={styles.searchInput}
             placeholder='Search by name or specialization'
             />
            
     

        </div>
    )
}

export default Searchbar
