import React from 'react';
import './Sidebar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveLessonAndModule, setActiveModule } from '../../features/modules/modulesSlice';



export default function Counter() {
    const course = useSelector((state) => state.course)
    const dispatch = useDispatch()

    return (

        <aside className="Sidebar">
                {course.modules.map(module => (
                <div key={module.id}>
                    <strong onClick={() => dispatch(setActiveModule(module))}>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id} onClick={() => dispatch(setActiveLessonAndModule({module: module, lesson:lesson}))}>
                                {lesson.title}
                            </li>
                        ))}
                    </ul>
                </div>
            ))} 
        </aside>
    )
}
