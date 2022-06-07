import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { title, description } = formData;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let token = localStorage.getItem('token');
    let config: any = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    };

    let data = {
      title,
      description,
    };
    try {
      console.log('task added');
    } catch (e: any) {
      console.log(e.response.data.errors);
    }
  };
  return (
    <>
      <h1>Add Task</h1>
      <p>Create a new task</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type='description'
            placeholder='description'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Add Task' />
      </form>
    </>
  );
};

export default AddTodo;