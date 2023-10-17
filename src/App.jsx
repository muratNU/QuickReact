import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Banner';
import TermPage from './TermPage';
import CourseEditor from './CourseEditor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDbData } from './utilities/firebase';

const App = () => {
  const [data, error] = useDbData("/courses/");
  
  if (error) {
    return <p>Error occurred: {error.message}</p>;
  }

  if (!data) {
    return null;
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Banner title="CS Courses for 2018-2019" />
            <TermPage courses={data}/>
          </div>
        } />
        <Route path="/CourseEditor/:courseCode" element={<CourseEditor/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;