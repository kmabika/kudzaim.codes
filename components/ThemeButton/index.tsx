import {GiSun, GiMoonBats} from "react-icons/gi";
import { ThemeMode } from 'types/interfaces';
import { ButtonThemeContainer, TextTheme } from './styled';
import useSound from "use-sound";

const ButtonThemeMode = ({ callback, darkMode }: ThemeMode) => {
  
  const [play] = useSound("/audio/theme-mode-toggle-sound.mp3", {
		volume: 0.05,
		sprite: {
			on: [0, 300],
			off: [500, 300],
		},
	});

  const toggleSound = () => {
		darkMode ? play({ id: "on" }) : play({ id: "off" });
	};

  return (
    <ButtonThemeContainer onClick={callback} title={`Lights ${darkMode ? 'on' : 'off'}`}>
      {darkMode ? <GiSun onClick={toggleSound}/> : <GiMoonBats onClick={toggleSound}/>} <TextTheme>Lights {darkMode ? 'on' : 'off'}</TextTheme>
    </ButtonThemeContainer>
  );
};

export default ButtonThemeMode;
