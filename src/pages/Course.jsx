import Header from "../component/BaseComponent/Header";
import Courses from "../component/Course/Courses";
import Footer from "../component/BaseComponent/Footer";
import CoursesData from "../data/videoCourse";
import Sidebar from "../component/BaseComponent/Sidebar";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Course(props) {
  const { id } = useParams();
  const selectedCourse = CoursesData.find((item) => item.id === Number(id));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
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
        tutorName={selectedCourse.author.name}
        tutorProfession={selectedCourse.coursesData.tutor.profession}
        tutorExp={selectedCourse.coursesData.tutor.exp}
        rate={selectedCourse.rate}
      />
      <Footer />
    </div>
  );
}

export default Course;
