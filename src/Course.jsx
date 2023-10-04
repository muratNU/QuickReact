
import './Course.css'

const Course = ({courseCode, course, unselectable, selected, toggleSelected,}) => (
    <div key={courseCode} className={unselectable ? 
        'card unselectable' :
        `card ${selected.includes(courseCode) ? 'selected' : ''}` } 
    onClick={() => {!unselectable && toggleSelected(courseCode)}}>
        <h5 className="card-title">{`${course.term} CS ${course.number}`}</h5>
        <div className='card-body'>
            <p className="card-text">{course.title}</p>
            <p className="card-text">{course.meets}</p>
        </div>
    </div>
);

export default Course;