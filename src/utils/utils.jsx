import { RiVideoLine } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi';

export function getTaskIcon(task) {
    let icon = '';
    switch (task.type) {
        case 'video':
            icon = <RiVideoLine />;
            break;
        case 'list':
            icon = <AiOutlineUnorderedList />;
            break;
        case 'edit':
            icon = <FaUserEdit />;
            break;
        case 'users':
            icon = <HiOutlineUsers />;
            break;
        default:
            icon = '';
    }
    return icon;
}

export function getTaskNumber(index) {
    let number = index + 1
    if(number < 10) {
        return `0${number}`;
    } else {
        return `${number}`;
    }
}
