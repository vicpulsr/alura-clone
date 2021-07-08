import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { BsBoxArrowUpRight } from 'react-icons/bs';
import { GiErlenmeyer } from 'react-icons/gi';
import { RiBookOpenLine } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';

import { useLessons } from '../../config/LessonsConfig';

import TaskItem from '../TaskItem';
import MenuButton from '../MenuButton/MenuButton';

function SideMenu() {

    const { lessons, currentLesson, setCurrentLesson, setCurrentTask, progress, setProgress } = useLessons();
    const [currentLessonId, setCurrentLessonId] = useState();
    let history = useHistory();

    useEffect(() => {
        if(!currentLessonId) {
            return;
        }
        let tempCurrentLesson = lessons.filter((lesson) => {
            return currentLessonId === lesson.id.toString()
        })
        tempCurrentLesson[0].tasks[0].watched = true;

        setCurrentLesson(tempCurrentLesson[0]);
        setCurrentTask(tempCurrentLesson[0].tasks[0])
    }, [currentLessonId])

    useEffect(() => { 
        setCurrentLessonId(lessons[0].id.toString())
    }, []);

    function getProgress() {
        if(!currentLesson){
            return;
        }

        let watchedTasks = currentLesson.tasks.filter((task) => {
            return task.watched === true;
        });

        if(watchedTasks.length === 0) return; 
        let progressNumber = Math.floor((watchedTasks.length) / (currentLesson.tasks.length) * 100);
        setProgress(progressNumber);
    }
    
    return(
        <div className="sideMenu">
            <div className="sideMenuHeader">
                <div>
                    <MenuButton />
                    <FaReact className="logo"/>
                    <span>React: Function Components, em uma obordagem moderna</span>
                </div>
                {getProgress()}
                <div className="progressDiv">
                    <span className="progressNumber">{!progress ? '0%' : `${progress}%`}</span>
                    <div className="progressBar">
                        <div className="progress" style={{ width: `${progress}%` }}> </div>
                    </div>
                </div>
                <div className="inputSearch">
                    <label for="search">Buscar neste curso</label>
                    <div>
                        <input type="text" id="search" name="search" />
                        <button>Buscar <BsBoxArrowUpRight /> </button>
                    </div>
                </div>
            </div>
            <div className="sideMenuLessons">
                <h2 className="sideMenuItem"><RiBookOpenLine /> Aula atual</h2>
                <select onChange={(event) => {
                    setCurrentLessonId(event.target.value);
                    history.push(`/lesson/${event.target.value}/task/1`);
                }}>
                    {lessons.map((lesson) => {
                        return(
                            <option value={lesson.id}>{lesson.name}</option>
                        )
                    })
                    }
                </select>
            </div>
            <div className="sideMenuTasks">
                <h2 className="sideMenuItem"> <GiErlenmeyer /> Atividades</h2>
                <ul className="tasksItems">{currentLesson && currentLesson.tasks.map((task, index) => { return <TaskItem task={task} index={index} /> })}</ul>
            </div>
        </div>
    );
}

export default SideMenu;