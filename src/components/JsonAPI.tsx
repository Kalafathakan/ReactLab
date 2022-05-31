import React, { useState, useEffect } from 'react';
import Post from './Post';

type PostType = {
  body: string;
  title: string;
  id: number;
  userId: number;
};

const JsonAPI = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())

      .then((responseData) => {
        setPosts(responseData);

        console.log(responseData);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default JsonAPI;
