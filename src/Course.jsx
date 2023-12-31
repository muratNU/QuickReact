
import './Course.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Course = ({courseCode, course, unselectable, selected, admin, toggleSelected}) => {
    return (
        <div key={courseCode} className={unselectable ? 
        'card unselectable' :
        `card ${selected.includes(courseCode) ? 'selected' : ''}` } 
        onClick={() => {!unselectable && toggleSelected(courseCode)}}
        data-cy="course">
            <h5 className="card-title">{`${course.term} CS ${course.number}`}</h5>
            <div className='card-body'>
                <p className="card-text">{course.title}</p>
                <p className="card-text">{course.meets}</p>
            </div>
            {admin &&
            <Link to={`/CourseEditor/${courseCode}`}  
            state={{ courseCode: courseCode, title: course.title, meets: course.meets }}>
                Edit Course
            </Link>}
        </div>);
};

export default Course;