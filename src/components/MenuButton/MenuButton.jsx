import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowRoundBack } from 'react-icons/io';

function MenuButton() {
    return(
        <button className="menuButton">
            <IoIosArrowRoundBack />
            <AiOutlineMenu className="menu" />
        </button>
    );
}

export default MenuButton;