import React from 'react';
import ReactPlayer from 'react-player';

import { useLessons } from '../../config/LessonsConfig';
import { useMenu } from '../../config/MenuConfig';

import MenuButton from '../MenuButton/MenuButton';

function Task() {

    const { currentTask } = useLessons();
    const { menuOpened, setMenuOpened } = useMenu();

    return(
        <div className={currentTask?.type !== 'video' ? 'task' : 'task video'}>
            {currentTask && currentTask.type === 'video' && currentTask.url &&
                <ReactPlayer width="100%" height="100%" url={currentTask.url} /> }

            {currentTask && currentTask.type !== 'video' && currentTask.url &&
                <iframe src={currentTask.url} title={currentTask.name} />}
            <MenuButton menuToggle={true} onClick={() => setMenuOpened(!menuOpened)} />
        </div>
    );
}

export default Task;