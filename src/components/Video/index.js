import React from 'react';
import { useSelector } from 'react-redux';
import './Video.css';

export default function Video() {
    const module = useSelector(state => state.course.activeModule);
    const lesson = useSelector(state => state.course.activeLesson);

    return (
        <aside className="Video">
                <strong>{module.title}</strong>
                <p>{lesson.title}</p>

                <div className='player'></div>
        </aside>
    );
}
