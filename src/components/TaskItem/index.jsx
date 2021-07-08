import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLessons } from '../../config/LessonsConfig';
import { getTaskIcon, getTaskNumber } from '../../utils/utils';
 
function TaskItem({ task, index }) {

    const { currentLesson, setCurrentTask } = useLessons();

    return (
        <li onClick={() => {
            task.watched = true;
            setCurrentTask(task);
        }}>
            <NavLink to={`/lesson/${currentLesson.id}/task/${task.id}`} className={task.watched ? 'taskItem watched' : 'taskItem'} activeClassName="active">
                <span>{getTaskIcon(task)}</span>
                <div>
                    <div>
                        <span className="taskItemNumber">{getTaskNumber(index)}</span>
                        <span className="taskItemName">{task.name}</span>
                    </div>
                    {task.duration && <span className="taskItemDuration">{task.duration}</span>}
                </div>
            </NavLink>
        </li>
    );
}

export default TaskItem;