import {  useEffect, useState } from "react";
import { fetchproviders } from "../api/ProvidersFetch";
import { ProviderContext } from "./ProviderContext";


export const ProviderContextProvider  = ({ children }) => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchproviders().then((data) => {
            console.log(data)
            setProviders(data)
            setLoading(false)
        }).catch((error)=>{
            setLoading(false)
        })
    }, [])

    return (
        <ProviderContext.Provider value={{ providers, loading }}>
            {children}

        </ProviderContext.Provider>

    )

}
