import './CourseList.css';
import Course from './Course';
import { getConflictingCourses } from './utilities/catchConflicts';
import { useProfile } from './utilities/profile';

const CourseList = ({ courses, selected, toggleSelected }) => {

    // Whenever a new course is selected or deselected this component
    // will get re-render so there is no need useState for conflicting courses
    const conflictingCourses = getConflictingCourses(courses, selected);

    // syntax does not allow [{,isAdmin}]
    const [{user,isAdmin}] = useProfile();
    
    return (
        <div className='course-list'>
            {Object.entries(courses).map(([courseCode, course]) => (
                <Course key={courseCode} courseCode={courseCode} course={course} 
                unselectable={conflictingCourses.has(courseCode)} selected={selected} 
                admin={!!isAdmin} toggleSelected={toggleSelected}/>
            ))}
        </div>
    );
}

export default CourseList;
