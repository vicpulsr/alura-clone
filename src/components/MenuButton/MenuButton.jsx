import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useMenu } from '../../config/MenuConfig';

function MenuButton({ menuToggle, onClick }) {
    const {menuOpened, setMenuOpened} = useMenu();
    return(
        <button onClick={() => {
            setMenuOpened(!menuOpened);
        }} className={menuOpened ? 'menuButton opened' : 'menuButton'}>
            <IoIosArrowRoundBack />
            <AiOutlineMenu className="menu" />
        </button>
    );
}

export default MenuButton;