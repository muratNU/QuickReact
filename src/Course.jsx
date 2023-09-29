
import './Course.css'

const Course = ({courseCode, course, selected, toggleSelected}) => (
    <div key={courseCode} className={`card ${selected.includes(courseCode) ? 'selected' : ''}`} 
    onClick={() => toggleSelected(courseCode)}>
    {/* //<div key={courseCode} className='card'
    // onClick={() => toggleSelected(courseCode)}> */}
        <h5 className="card-title">{`${course.term} CS ${course.number}`}</h5>
        <div className='card-body'>
            <p className="card-text">{course.title}</p>
            <p className="card-text">{course.meets}</p>
        </div>
    </div>
);

export default Course;