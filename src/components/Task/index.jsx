import React from 'react';
import ReactPlayer from 'react-player';

import { useLessons } from '../../config/LessonsConfig';

function Task() {

    const { currentTask } = useLessons();

    return(
        <div className={currentTask?.type !== 'video' ? 'task' : 'task video'}>
            {currentTask && currentTask.type === 'video' && currentTask.url &&
                <ReactPlayer url={currentTask.url} /> }

             {currentTask && currentTask.type !== 'video' && currentTask.url &&
                <iframe src={currentTask.url} title={currentTask.name} />}
        </div>
    );
}

export default Task;