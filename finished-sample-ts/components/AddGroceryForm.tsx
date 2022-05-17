import { useState } from 'react';
type AddProps = {
  onAddGrocery: (name: string) => void;
};
const AddGroceryForm = (props: AddProps) => {
  const [groceryName, setGroceryName] = useState('');

  //you automatically get event object just like event listeners in js
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setGroceryName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //by default it will submit the form, so prevent
    e.preventDefault();
    props.onAddGrocery(groceryName);
    setGroceryName('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <fieldset>
        <legend>Add Grocery</legend>
        {/* <two way data binding with value attribute /> */}
        <input
          type='text'
          value={groceryName}
          onChange={handleChange}
          placeholder='Enter Grocery'
        />

        <input type='submit' value='Add Grocery' />
      </fieldset>
    </form>
  );
};

export default AddGroceryForm;
