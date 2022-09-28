import React from 'react'
import axios from 'axios'

const usePost=({requestConfig,applyData})=>{
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(null)
    
    const getRequest=async()=>{
        setIsLoading(true)
        setError(null)
        try{
            const response=await axios.get(requestConfig.url,{
                method:requestConfig.method?requestConfig.method:'GET',
                headers:requestConfig.headers?requestConfig.headers:{},
                body:requestConfig.body?JSON.stringify(requestConfig):null
            });
            if(!response.ok){
                throw new Error('Request Failed')
            }
            const data=await response.data
            applyData(data)
        }catch(err){
            setIsLoading(false)
            setError(err.message || 'Something Went Wrong!')
            console.log(err)
        }
    }
    return{
        isLoading,
        error,
        getRequest
    }
}
export default usePost;