import { GrSolaris } from "react-icons/gr";
import {GiSun, GiMoonBats} from "react-icons/gi";
import { ThemeMode } from 'types/interfaces';
import { ButtonThemeContainer, TextTheme } from './styled';

const ButtonThemeMode = ({ callback, darkMode }: ThemeMode) => {
  return (
    <ButtonThemeContainer onClick={callback} title={`Lights ${darkMode ? 'on' : 'off'}`}>
      {darkMode ? <GiSun/> : <GiMoonBats/>} <TextTheme>Lights {darkMode ? 'on' : 'off'}</TextTheme>
    </ButtonThemeContainer>
  );
};

export default ButtonThemeMode;
