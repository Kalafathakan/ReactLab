import Quantity from './Quantity';

type GroceryProps = {
  name: string;
  quantity: number;
  id: number;
};
const Grocery = (props: GroceryProps) => {
  console.log(props);
  return (
    <div className='grocery'>
      <span className='grocery-name'>{props.name}</span>
      <Quantity quantity={props.quantity} id={props.id} />
    </div>
  );
};

export default Grocery;
