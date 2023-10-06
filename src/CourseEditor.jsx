import { useFormData } from './utilities/useFormData';
import { useNavigate } from 'react-router-dom';

// this example is for user data validation
// I would have to change it for title and meeting times for a course
const validateCourseData = (key, val) => {
  switch (key) {
    case 'firstName': case 'lastName':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'email':
      return /^\w+@\w+[.]\w+/.test(val) ? '' : 'must contain name@domain.top-level-domain';
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseEditor = ({courseInput}) => {
  //const [update, result] = useDbUpdate(`/users/${user.id}`);
  const [state, change] = useFormData(validateCourseData, courseInput);
  const navigate = useNavigate(); 

  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      //update(state.values);
    }
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="courseTitle" text="Course Title" state={state} change={change} />
      <InputField name="courseMeets" text="Meeting times for the course" state={state} change={change} />
      {/* <ButtonBar message={result?.message} /> */}
      <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate('/')}>Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
};

export default CourseEditor;