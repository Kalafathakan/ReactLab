type HeaderProps = {
  title: string;
  item: number;
};

// interface  HeaderProps{
//     title: string;
//   item: number;
// }

const Header = ({ title, item }: HeaderProps) => {
  // console.log(props);
  return (
    <header>
      <h1>{title}</h1>
      <span>Items: {item}</span>
    </header>
  );
};

export default Header;
