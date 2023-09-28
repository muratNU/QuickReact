
import CourseList from './CourseList';
import TermSelector from'./TermSelector';
import {useState} from 'react';

// to-do: Gives a warning 
// due to inconsistent export usage,
// read and understand the reason
export const terms = {
    fall: "Fall",
    spring: "Spring",
    winter: "Winter"
}

const Term = ({selection}) => (
    <div className="card" >
        { terms[selection] }
    </div>
);

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    return (
      <div>
        <TermSelector selection={selection} setSelection={setSelection} />
        <Term selection={selection} />
        <CourseList courses={
            Object.fromEntries(Object.entries(courses).filter(
                ([, value]) => (
                    value.term === terms[selection]
                )
            ))
        } />
      </div>
    );
}

export default TermPage;
