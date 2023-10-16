import { useFormData } from './utilities/useFormData';
import { useNavigate, useParams } from 'react-router-dom';
import { useDbUpdate } from './utilities/firebase';
import { useLocation } from 'react-router-dom';

const validateMeetingSchedule = (val) => {
  const dateTime = val.split(" ");
  if (dateTime.length !== 2)
    return [false, "Meeting times should include the meeting days and times, adopting this format: 'day(s) 00:00-23:59'"];
  if(dateTime[0].indexOf('M') === -1 && dateTime[0].indexOf('W') === -1 && dateTime[0].indexOf('F') === -1 
      && dateTime[0].indexOf('Tu') === -1 && dateTime[0].indexOf('Th') === -1 )
    return [false, "Meeting day should include at least one of the following expressions to represent the meeting day(s) \
              M Tu W Th F"];
  if((dateTime[0].indexOf('M') > -1 || dateTime[0].indexOf('W') > -1 
      || dateTime[0].indexOf('F') > -1) && !/^(M)?(W)?(F)?$/.test(dateTime[0]))
    return [false, "Courses that meet on Mondays or Wednesdays or Fridays can only be combined with each other and \
          should be typed as M or W or F following the order"];
  if((dateTime[0].indexOf('Tu') > -1 || dateTime[0].indexOf('Th') > -1 ) && !/^(Tu)?(Th)?$/.test(dateTime[0]))
    return [false, "Courses that meet on Tuesday or Thursdays can only be combined with each other and should be typed as\
            Tu or Th following the order"];

  if(dateTime[1].split("-").length !== 2)
    return [false, "Meeting times must have the following format: 00:00-23:59"]
  
  const [start, end] = dateTime[1].split("-");
  if(!/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(start) || !/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(end))
    return [false, "Meeting times must have the following format: 00:00-23:59"]  
  
  const startTime = Number(start.split(':')[0])*60 + Number(start.split(':')[1]);
  const endTime = Number(end.split(':')[0])*60 + Number(end.split(':')[1])

  if (startTime >= endTime)
    return [false, "starting time should be strictly less than the ending time"];
  if (endTime - startTime > 180)
    return [false, "No course can meet longer than 3 hours"];
  
  return [true, ''];
}

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      return  val.length >= 2 ? '' : 'must be least two characters';
    case 'meets':
      const [isCorrectFormat, errorMessage] = validateMeetingSchedule(val);
      return (val === '' || isCorrectFormat) ? '' : errorMessage;
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
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate("/")}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

//{courseInput}
const CourseEditor = () => {
  const location = useLocation();
  const [update, result] = useDbUpdate(`/courses/${location.state.courseCode}`);
  const [state, change] = useFormData(validateCourseData, {title: location.state.title, meets: location.state.meets});

  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="title" text="Course Title" state={state} change={change} />
      <InputField name="meets" text="Meeting times for the course" state={state} change={change} />
      <ButtonBar message={result?.message}/>
    </form>
  );
};

export default CourseEditor;