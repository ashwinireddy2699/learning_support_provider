import { Children, useEffect, useState } from "react";
import { fetchproviders } from "../api/providers_fetch";
import { provider_Context } from "./provider_context";


export const ProviderContext = ({ children }) => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchproviders().then((data) => {
            setProviders(data)
            setLoading(false)
        })
    }, [])

    return (
        <provider_Context.Provider value={{ providers, loading }}>
            {children}

        </provider_Context.Provider>

    )

}
