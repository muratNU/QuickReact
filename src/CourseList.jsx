
import './CourseList.css'

const CourseList = ({ courses, term }) => {
    return (
        <div className='course-list'>
            {Object.entries(courses).map(([key, value]) => (
                <div key={key} className='card'>
                    <h5 className="card-title">{`${value.term} CS ${value.number}`}</h5>
                    <div className='card-body'>
                        <p className="card-text">{value.title}</p>
                        <p className="card-text">{value.meets}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CourseList;
