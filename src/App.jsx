
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Banner';
import CourseList from './CourseList';
import { useJsonQuery } from './utilities/fetch';

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
      <div>
        <Banner title={data.title} />
        <CourseList courses={data.courses} />
      </div>
    );
};

export default App;
