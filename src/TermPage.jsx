
import CourseList from './CourseList';
import TermSelector, { terms } from'./TermSelector';
import Modal from './Modal';
import Cart from './Cart';
import {useState} from 'react';
import './TermPage.css'

const Term = ({selection}) => (
    <div className="card" >
        { terms[selection] }
    </div>
);

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const toggleSelected = (courseCode) => setSelected(
      selected.includes(courseCode)
      ? selected.filter(x => x !== courseCode)
      : [...selected, courseCode]
    );
    
    return (
      <div>
        <div className='btn-container'>
            <TermSelector selection={selection} setSelection={setSelection} />
            <button className="btn btn-outline-dark" 
            onClick={openModal}><i className="bi bi-cart4"> 
                Shopping Cart
                </i>
            </button>
        </div>
        <Modal open={open} close={closeModal}>
            <Cart selected={Object.entries(courses).filter(([key]) => (selected.includes(key))) } />
        </Modal>
        <Term selection={selection} />
        <CourseList courses={

            // Using Object.entries instead Object.values
            // because CourseList component makes use of the keys
            Object.fromEntries(Object.entries(courses).filter(
                ([, value]) => (
                    value.term === terms[selection]
                )
            ))

        } selected={
            selected.filter(courseCode => terms[selection][0] === courseCode[0])
        } toggleSelected={toggleSelected} />
      </div>
    );
}

export default TermPage;
