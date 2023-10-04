import './TermSelector.css'

export const terms = {
    fall: "Fall",
    spring: "Spring",
    winter: "Winter"
}

const TermButton = ({term, selection, setSelection}) => (
    <div> 
        <input type="radio" name="term" id={term} className="btn-check" 
            checked={term === selection} autoComplete="off" 
            onChange={() => setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
            {term}
        </label>
    </div>
);

const TermSelector = ({selection, setSelection}) => (
    <div className="btn-group">
        { 
        Object.keys(terms).map(term => <TermButton key={term} term={term} 
            selection={selection} setSelection={setSelection} />)
        }
    </div>
);

export default TermSelector;
