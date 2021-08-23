import * as React from "react";
import {GiSun, GiMoonBats} from "react-icons/gi";
import { ThemeMode } from 'types/interfaces';
import { ButtonThemeContainer, TextTheme } from './styled';
import useSound from "use-sound";
import useCursorStyle from "hooks";
import {Icon} from '@iconify/react';

const ButtonThemeMode = ({ callback, darkMode }: ThemeMode) => {
  
  const [play] = useSound("/audio/theme-mode-toggle-sound.mp3", {
		volume: 0.25,
		sprite: {
			on: [0, 300],
			off: [500, 300],
		},
	});

  const toggleSound = () => {
		darkMode ? play({ id: "on" }) : play({ id: "off" });
	};

	const {
		addCursorBorder,
		removeCursorBorder,
	  } = useCursorStyle();
	
	  
	  const onMouseEnter = React.useCallback(() => {
		addCursorBorder();
	  }, [addCursorBorder]);
	
	  const onMouseLeave = React.useCallback(() => {
		removeCursorBorder();
	  }, [addCursorBorder]);

  return (
    <ButtonThemeContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={callback} title={`Lights ${darkMode ? 'on' : 'off'}`}>
      {darkMode ? <Icon icon="fxemoji:sunrays" onClick={toggleSound}/> : <Icon icon="fxemoji:newmoon" onClick={toggleSound}/>} <TextTheme>Lights {darkMode ? 'on' : 'off'}</TextTheme>
    </ButtonThemeContainer>
  );
};

export default ButtonThemeMode;
