import React, { useState } from 'react'
import useFetch from './useFetchCustomHook'

const ShowPost = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts")
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const showBody = (id) => {
        setId(id)
        setShow(true);
    
      
      
      }
  return (
      <div>
          {data
              ? data.map((post) => (
                    <li
                        key={post.id}
                        onClick={() => showBody(post.id)}
                        className="p-2 bg-pink-200 cursor-pointer"
                    >
                        {post.title}
                        {show && post.id == id && (
                            <div className="p-4 bg-gray-300">{post.body}</div>
                        )}
                    </li>
                ))
              : "loading..."}
      </div>
  );
}

export default ShowPost
