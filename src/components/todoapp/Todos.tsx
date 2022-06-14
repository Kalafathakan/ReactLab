import { useState, useEffect, useContext } from 'react';
import AuthContext, { AuthContextType } from '../../context/AuthContext';
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
  const auth = useContext(AuthContext) as AuthContextType;
  console.log(auth);
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

      const response = await axios.get(
        'http://localhost:5000/api/todos/',
        config
      );
      setTodos(response.data);
      console.log(response.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return (
    <div className='page-style'>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo._id} />
      ))}
    </div>
  );
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
