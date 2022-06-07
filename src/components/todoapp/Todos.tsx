import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

type JsonTodo = {
  todo: {
    description: string;
    title: string;
    status: boolean;
    _id: number;
    user: number;
  };
};
type TodoType = {
  description: string;
  title: string;
  status: boolean;
  _id: number;
  user: number;
};
const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      let token = localStorage.getItem('token');
      let config: any = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return <div className='page-style'></div>;
};

const Todo = (props: JsonTodo) => {
  return (
    <div>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.description}</p>
    </div>
  );
};
export default Todos;
