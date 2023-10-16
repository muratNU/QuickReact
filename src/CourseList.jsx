
import './CourseList.css';
import Course from './Course';
import { getConflictingCourses } from './utilities/catchConflicts';
import { useAuthState } from "./utilities/firebase"

const CourseList = ({ courses, selected, toggleSelected }) => {

    // Whenever a new course is selected or deselected this component
    // will get re-render so there is no need useState for conflicting courses
    const conflictingCourses = getConflictingCourses(courses, selected);
    const [user] = useAuthState();

    return (
        <div className='course-list'>
            {Object.entries(courses).map(([courseCode, course]) => (
                <Course key={courseCode} courseCode={courseCode} course={course} 
                unselectable={conflictingCourses.has(courseCode)} selected={selected} 
                authUser={!!user} toggleSelected={toggleSelected}/>
            ))}
        </div>
    );
}

export default CourseList;
