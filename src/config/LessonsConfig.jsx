import React, { createContext, useContext, useState } from 'react';

const LessonsConfig = createContext();

export default function LessonsContext({ children }) {
    const [lessons, setLessons] = useState(
        [{
            id: 1, name: '01.Iniciando com Functions components', tasks: [
                { id: 1, name: 'Introdução', type: 'video', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', duration: '04min', watched: false },
                { id: 2, name: 'Primeiro Function Component', type: 'video', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', duration: '12min', watched: false },
                { id: 3, name: 'Formas de criar componentes', type: 'list', url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf', duration: '', watched: false },
                { id: 4, name: 'Facilitando a prototipação', type: 'video', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', duration: '09min', watched: false },
                { id: 5, name: 'Faça como eu fiz na aula', type: 'users', url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf', duration: '', watched: false },
                { id: 6, name: 'O que aprendemos?', type: 'edit', url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf', duration: '', watched: false }]
        },
        {
            id: 2, name: '02.Utilizando o Material UI', tasks: [
                { id: 1, name: 'Projeto da aula anterior', type: 'video', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', duration: '04min', watched: false },
                { id: 2, name: 'Primeiro Function Component', type: 'video', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', duration: '12min', watched: false },
                { id: 3, name: 'Utilizando a documentação da lib', type: 'list', url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf', duration: '', watched: false },
                { id: 4, name: 'Layout e containers', type: 'video', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', duration: '09min', watched: false }, { id: 5, name: 'Faça como eu fiz na aula', type: 'users', url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf', duration: '', watched: false },
                { id: 6, name: 'Formas de customização', type: 'edit', url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf', duration: '', watched: false }]
        },
        ]
    );

    const [currentLesson, setCurrentLesson] = useState();
    const [currentTask, setCurrentTask] = useState();
    const [progress, setProgress] = useState();

    return (
        <LessonsConfig.Provider value={{ lessons, setLessons, currentLesson, setCurrentLesson, currentTask, setCurrentTask, progress, setProgress }} >
            {children}
        </LessonsConfig.Provider>
    )
}

export function useLessons() {
    const context = useContext(LessonsConfig);
    const { lessons, setLessons, currentLesson, setCurrentLesson, currentTask, setCurrentTask, progress, setProgress } = context;
    return { lessons, setLessons, currentLesson, setCurrentLesson, currentTask, setCurrentTask, progress, setProgress };
}