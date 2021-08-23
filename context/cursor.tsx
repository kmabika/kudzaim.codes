/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import COLOUR from 'styles';
import {Action, DispatchActionType, State} from 'types/interfaces';

const INITIAL_STATE: State = {
  cursorStyle: {
    bordered: false,
    color: COLOUR.blue_universe,
  },
  position: null,
};

const rootReducer = (state : State, action : Action) :State => {
  
  switch (action?.type) {
    case 'ADD_CURSOR_BORDER': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: true,
        },
      };
    }
    case 'REMOVE_CURSOR_BORDER': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: false,
        },
      };
    }
    case 'RESET_CURSOR_COLOR': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          color: INITIAL_STATE.cursorStyle.color,
        },
      };
    }
    case 'LOCK_CURSOR_POSITION': {
      return {
        ...state,
          position: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const CursorContext = React.createContext<{state: State; dispatch: DispatchActionType} | undefined>({state: INITIAL_STATE , dispatch: () => null});

export const CursorContextProvider = ({ children } : any) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);
  return (
    <CursorContext.Provider value={store}> {children} </CursorContext.Provider>
  );
};

export const useCursorContext = () => {
    const context = React.useContext(CursorContext);
    if (context === undefined) {
      throw new Error('useCursorContext must be used within a CursorProvider');
    }
    const {state, dispatch} = context;
    return [state , dispatch] as const;
};
