import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';

import { FiArrowRightCircle } from 'react-icons/fi';

import { useLessons } from '../../config/LessonsConfig';
import { getTaskIcon, getTaskNumber } from '../../utils/utils';

function Header() {
    const { lessons, currentLesson, setCurrentLesson, currentTask, setCurrentTask } = useLessons();
    let history = useHistory();

    function nextTask () {
        if(!currentLesson) return;
        let currentTaskIndex = currentLesson.tasks.indexOf(currentTask);
        let nextTaskIndex = currentTaskIndex + 1;
        if(nextTaskIndex === currentLesson.tasks.length) {
            if(lessons.indexOf(currentLesson) + 1 === lessons.length) {
                alert("As aulas acabaram");
                return;
            }
            nextLesson();
        } else {
            currentLesson.tasks[nextTaskIndex].watched = true;
            setCurrentTask(currentLesson.tasks[nextTaskIndex]);

            history.push(`/lesson/${currentLesson.id}/task/${currentLesson.tasks[nextTaskIndex].id}`);
        }
    }

    function nextLesson() {
        let nextLessonIndex = lessons.indexOf(currentLesson) + 1;
        let nextLesson = lessons[nextLessonIndex];
        console.log(nextLesson);
        setCurrentLesson(nextLesson);
        nextLesson.tasks[0].watched = true;
        setCurrentTask(nextLesson.tasks[0])
        history.push(`/lesson/${nextLesson.id}/task/1`);
    }
    
    return(
        <div className="header">
            <div>
                {currentTask && getTaskIcon(currentTask)}
                <span className="taskNumber">{getTaskNumber(currentLesson?.tasks.indexOf(currentTask))}</span>
                <span>{currentTask ? currentTask.name : '' }</span>
            </div>
            <Button name={"Próxima Atividade"} icon={<FiArrowRightCircle />} color="#32a7e5" onClick={nextTask} />
        </div>
    );
}

export default Header;