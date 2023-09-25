
import './CourseList.css'

const CourseList = ({courses}) => {
    return (
        <div className="course-list">
            <div className='card'>
                <div className='card-body'>
                    <h5 className="card-title">{`Fall CS ${courses.F101.number}`}</h5>
                    <p className="card-text">{courses.F101.title}</p>
                    <p className="card-text">{courses.F101.meets}</p>
                </div> 
            </div>
            <div className='card'>
                <div className='card-body'>
                    <h5 className="card-title">{`Fall CS ${courses.F110.number}`}</h5>
                    <p className="card-text">{courses.F110.title}</p>
                    <p className="card-text">{courses.F110.meets}</p>
                </div> 
            </div>
            <div className='card'>
                <div className='card-body'>
                    <h5 className="card-title">{`Spring CS ${courses.S313.number}`}</h5>
                    <p className="card-text">{courses.S313.title}</p>
                    <p className="card-text">{courses.S313.meets}</p>
                </div> 
            </div>
            <div className='card'>
                <div className='card-body'>
                    <h5 className="card-title">{`Spring CS ${courses.S314.number}`}</h5>
                    <p className="card-text">{courses.S314.title}</p>
                    <p className="card-text">{courses.S314.meets}</p>
                </div> 
            </div>
        </div>
    );
}

export default CourseList;
