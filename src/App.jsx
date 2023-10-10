
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Banner';
import TermPage from './TermPage';
import { useJsonQuery } from './utilities/fetch';
import CourseEditor from './CourseEditor';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, isLoading, error] = 
    useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
            <Banner title={data.title} />
            <TermPage courses={data.courses}/>
          </div>
        } />
        <Route path="/CourseEditor" element={<CourseEditor courseInput={{title: "", meets: ""}} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
