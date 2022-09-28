import React, {useReducer}from 'react'

const userProfile={
    SET_USER_PROFILE_DATA:'SET_USER_PROFILE_DATA',
    UPDATE_USER_PROFILE_DATA:'UPDATE_USER_PROFILE_DATA',
    ERROR:'ERROR',
    SUCCESS:'SUCESS',
    FAILED:'FAILED'
}

const initialSate={
    loading:false,
    userData:[],
    imgUrl:'',
    error:'' 
}

const reducer=(state,action)=>{
    switch(action.type){   
    }
}

export default function UserProfileDataProvider({children}) {
    return (
        <>
            
        </>
    )
}
