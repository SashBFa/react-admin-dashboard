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
  const localMode = localStorage.getItem('themeMode')
    ? localStorage.getItem('themeMode')
    : 'Light';
  const localColor = localStorage.getItem('colorMode')
    ? localStorage.getItem('colorMode')
    : '#03C9D7';
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(localColor);
  const [currentMode, setCurrentMode] = useState(localMode);
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };

  const handleClick = (clicked: string) => {
    if (Object.values(isClicked).every((item) => item === false)) {
      setIsClicked({ ...initialState, [clicked]: true });
    } else {
      setIsClicked(initialState);
    }
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
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
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
