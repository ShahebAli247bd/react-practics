
import React, { useEffect, useState } from 'react'
import { getData } from '../utils/FetchData'

const Posts = () => {
const [posts, setPosts] = useState([])
      useEffect( () => {
            const getPost = async () => {
                  const data =await getData("posts");
                  setPosts(data);
            }
            getPost()
      }, [])
 
  return (
      <div>
          {posts && posts.length > 0? (
          <ul>
              {posts.map((post, index) => (
                  <div key={post.id} className="text-left">
                      <li>Title:---{post.title}</li>
                      <li className='px-8'>Body:---{post.body}</li>
                  </div>
              ))}
              </ul>):(<p>Loading...</p>)
          }
      </div>
  );
}

export default Posts
