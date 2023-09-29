
import './CourseList.css';
import Course from './Course';

const CourseList = ({ courses, selected, toggleSelected }) => {
    return (
        <div className='course-list'>
            {Object.entries(courses).map(([courseCode, course]) => (
                <Course key={courseCode} courseCode={courseCode} course={course} 
                selected={selected} toggleSelected={toggleSelected}/>
            ))}
        </div>
    );
}

export default CourseList;
