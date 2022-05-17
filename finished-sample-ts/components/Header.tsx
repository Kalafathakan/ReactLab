import { useContext } from 'react';
import LanguageContext from '../context/LanguageContect';
import ColorContext from '../context/ColorContext';

type HeaderProps = {
  title: string;
  totalItems: number;
};

// interface  HeaderProps{
//     title: string;
//   item: number;
// }

const Header = ({ title, totalItems }: HeaderProps) => {
  const colors = useContext(ColorContext);
  const language = useContext(LanguageContext);
  const onLang = () => {
    return language === 'English'
      ? 'This is english content'
      : 'this is a french content';
  };
  console.group(colors, language);
  return (
    <header>
      <h1>{title}</h1>
      <span>Items: {totalItems}</span>
      <span>{onLang()}</span>
    </header>
  );
};

export default Header;
