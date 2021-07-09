import React, { createContext, useContext, useState } from 'react';

const MenuConfig = createContext();

export default function MenuContext({ children }) {
    const [menuOpened, setMenuOpened] = useState(window.innerWidth < 1024 ? false : true);
    return (
        <MenuConfig.Provider value={{ menuOpened, setMenuOpened }} >
            {children}
        </MenuConfig.Provider>
    )
}

export function useMenu() {
    const context = useContext(MenuConfig);
    const { menuOpened, setMenuOpened } = context;
    return { menuOpened, setMenuOpened };
}