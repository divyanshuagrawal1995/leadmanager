import {GET_ITEM,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from './types';
import {tokenConfig} from './userAction';
import {returnErrors} from './errorAction'
import axios from 'axios'
export const getItems=()=>{
    return dispatch=>{
        dispatch(setItemsLoading())
        axios.get('/api/items')
        .then(res=>
            dispatch({
             type:GET_ITEM,
             payload:res.data
            })
            )
            .catch(err=>{
                dispatch(returnErrors(err.response.data,err.response.status))
            })

    }
   
}
export const addItems=(newItem)=>{
   return (dispatch,getState)=>{
       axios.post('/api/items',newItem,tokenConfig(getState))
       .then(res=>
        dispatch({
            type:ADD_ITEM,
            payload:res.data
        })
        ).catch(err=>{
            dispatch(returnErrors(err.response.data,err.response.status))
        })
   }
}
export const deleteItems=(id)=>{
    return (dispatch,getState)=>{
    axios.delete(`/api/items/${id}`,tokenConfig(getState))
    .then(res=>{
        dispatch({
            type:DELETE_ITEM,
            payload:id

        })
    }).catch(err=>{
        dispatch(returnErrors(err.response.data,err.response.status))
    })
}
}
export const setItemsLoading=()=>{
    return{
        type:ITEMS_LOADING
    }
}