import Header from "../component/Header";
import Courses from "../component/Courses";
import Footer from "../component/Footer";
import courses from "../data/videoCourse";
import { useParams } from "react-router-dom";


function Course(props) {
  const { id } = useParams();
  const selectedCourse = courses.find((item) => item.id === Number(id));
  console.log(selectedCourse)
  console.log(id)
  return (
    <div>
      <Header />
      <Courses
        coursesHead={selectedCourse.coursesData.coursesHead}
        coursesSubHead={selectedCourse.coursesData.coursesSubHead}
        courseRate={selectedCourse.coursesData.courseRate}
        coursesPrice={selectedCourse.coursesData.coursesPrice}
        coursesBeforeDisc={selectedCourse.coursesData.coursesBeforeDisc}
        coursesDisc={selectedCourse.coursesData.coursesDisc}
        offeringLimit={selectedCourse.coursesData.offeringLimit}
        courseTotal={selectedCourse.coursesData.courseTotal}
        intro={selectedCourse.coursesData.intro}
        tutorPic={selectedCourse.coursesData.tutor.pic}
        tutorName={selectedCourse.coursesData.tutor.name}
        tutorProfession={selectedCourse.coursesData.tutor.profession}
        tutorExp={selectedCourse.coursesData.tutor.exp}
        rate={selectedCourse.rate}
      />
      <Footer />
    </div>
  );
}

export default Course;
