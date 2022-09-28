import {REACT_APP_BASE_URL} from '../Config'
import {create} from "apisauce"

export const useApi=(props)=>{
    const createUserClient=(baseURL= REACT_APP_BASE_URL)=>{
        const api=create({
            baseURL,
            timeOut:15000,
        })
        
    const setHeaders = (params) => {
        for (const key in params) {
          api.setHeader(key, params[key])
        }
      }
    
    return {
        setHeaders,
        login: (body) => api.post("/auth/login", body),
        logout: (body) => api.post("/auth/logout", body),
        createUser: (body) => api.post("/user", body),
      }
    }
    return { ...createUserClient() }
}