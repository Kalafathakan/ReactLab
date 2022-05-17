type HeaderProps = {
  title: string;
  totalItems: number;
};

// interface  HeaderProps{
//     title: string;
//   item: number;
// }

const Header = ({ title, totalItems }: HeaderProps) => {
  // console.log(props);
  return (
    <header>
      <h1>{title}</h1>
      <span>Items: {totalItems}</span>
    </header>
  );
};

export default Header;
