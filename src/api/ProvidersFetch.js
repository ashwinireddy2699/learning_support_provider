import providers from '../data/ProvodersData.json'


export function fetchproviders(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(providers)
        }, 1000);
    })
}

export function fetch_providers_by_id(id){
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            const provider=providers.find(p=>p.id===id);
            if(provider){
                console.log(provider)
                resolve(provider)
            }else{
                reject(new Error('provider not found'))
            }
        }, 1000);        
    })
}