import React from 'react';
import { useCursorContext } from '../context/cursor';

const useCursorStyle = () => {
  const [state, dispatch] = useCursorContext();
  const addCursorBorder = React.useCallback(() => {
    dispatch({ type: 'ADD_CURSOR_BORDER' });
  }, [dispatch]);

  const removeCursorBorder = React.useCallback(() => {
    dispatch({ type: 'REMOVE_CURSOR_BORDER' });
  }, [dispatch]);

  const resetCursorColor = React.useCallback(() => {
    dispatch({ type: 'RESET_CURSOR_COLOR' });
  }, [dispatch]);

  const lockCursorPosition = React.useCallback(
    coordinates => {
      dispatch({type : 'LOCK_CURSOR_POSITION', payload: coordinates});
    },
    [dispatch],
  );
  
  return {
    ...state,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder,
    lockCursorPosition,
  };
};

export default useCursorStyle;
