import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

type PostType = {
  body: string;
  title: string;
  id: number;
  userId: number;
};

const JsonAPI = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const sendGetRequest = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setPosts(response.data);
    console.log(response);
  };

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())

    //   .then((responseData) => {
    //     setPosts(responseData);

    //     console.log(responseData);
    //   });

    // axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //   setPosts(response.data);
    //   console.log(response);
    // });
    sendGetRequest();
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
