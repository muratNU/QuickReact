
const CourseList = ({courses}) => {
    return <>
        <div>{`${courses.F101.term} CS  ${courses.F101.number}: ${courses.F101.title}`}</div>
        <div>{`${courses.F110.term} CS  ${courses.F110.number}: ${courses.F110.title}`}</div>
        <div>{`${courses.S313.term} CS  ${courses.S313.number}: ${courses.S313.title}`}</div>
        <div>{`${courses.S314.term} CS  ${courses.S314.number}: ${courses.S314.title}`}</div>
    </>
}

export default CourseList;
