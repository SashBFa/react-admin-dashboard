import { createContext, useContext, useState } from 'react';

type ContextProps = {
  children?: JSX.Element | JSX.Element[];
};

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateCtx = createContext<any>(null);

export const ContextProvider = ({ children }: ContextProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateCtx.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateCtx.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateCtx);
  if (!context) {
    throw new Error('contect not provided');
  }
  return context;
};
