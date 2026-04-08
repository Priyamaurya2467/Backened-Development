import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'




function Feed() {
    const [posts , setPosts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1773332585754-f1436987743b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Beauthiful Scenery",

        }
    ])


    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            console.log(res.data)
            setPosts(res.data.posts || res.data)
        })
    },[])
  return (
    <div>
        {
            posts.length > 0 ? (
                posts.map((posts)=>(
                    <div key={posts._id} className='post-card'>
                        <img src={posts.image} alt={posts.caption}/>
                        <p>{posts.caption}</p>

                         
                    </div>
                ))
            ) : (
                <h1>No posts yet...</h1>
            )
        }
        



    </div>
  )
}

export default Feed