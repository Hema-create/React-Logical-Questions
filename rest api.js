import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'


function FetchHook(){
    const[post,setPost]=useState([])
    const[id,setId]=useState({})
    useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res=>{
         console.log(res)
         setPost(res.data)
     })
     .catch(err=>{
         console.log(err)
     })
    },[])
    return(
        <div>
            <h1>List of posts</h1>
            {/* <input type="text" value={id} onChange={e=>setId(e.target.value)}/> */}
            <ul>
                {
                    post.map(post=>(<li key={post.id}>{post.title}</li>))
                }
            </ul>

        </div> 
    )
}
export default FetchHook;