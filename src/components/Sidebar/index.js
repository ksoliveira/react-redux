import React from 'react';
import './Sidebar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveLessonAndModule } from '../../features/modules/modulesSlice';



export default function Counter() {
    const course = useSelector((state) => state.course);
    const activeModule = useSelector((state) => state.course.activeModule);
    const activeLesson = useSelector((state) => state.course.activeLesson);
    
    const dispatch = useDispatch();

    return (

        <aside className="Sidebar">
                {course.modules.map(module => (
                <div key={module.id}>
                    <strong className={module.id === activeModule.id  ? 'active' : ''}>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li 
                                key={lesson.id} 
                                onClick={() => dispatch(setActiveLessonAndModule({module: module, lesson:lesson}))}
                                className={lesson.id === activeLesson.id  ? 'active' : ''}
                            >
                                {lesson.title}
                            </li>
                        ))}
                    </ul>
                </div>
            ))} 
        </aside>
    )
}
