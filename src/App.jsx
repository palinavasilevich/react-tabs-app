import axios from "axios";
import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <section className="jobs-center">
          <Loading />
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="jobs-center">
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />

        {jobs && <JobInfo jobs={jobs} currentItem={currentItem} />}
      </section>
    </main>
  );
};
export default App;
