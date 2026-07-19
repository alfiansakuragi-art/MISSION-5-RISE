import Header from "../component/BaseComponent/Header";
import Courses from "../component/Course/Courses";
import Footer from "../component/BaseComponent/Footer";
import CoursesData from "../data/VideoCourse";
import Sidebar from "../component/BaseComponent/Sidebar";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Course(props) {
  const { id } = useParams();
  const selectedCourse = CoursesData.find((item) => item.id === Number(id));
  const [isOpen, setIsOpen] = useState(false);
  console.log(selectedCourse.coursesData.tutor)
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <Courses
        coursesHead={selectedCourse.coursesData.coursesHead}
        coursesSubHead={selectedCourse.coursesData.coursesSubHead}
        courseRate={selectedCourse.coursesData.courseRate}
        coursesPrice={selectedCourse.price}
        coursesBeforeDisc={selectedCourse.coursesData.pricing.Price}
        coursesDisc={selectedCourse.coursesData.pricing.discount}
        offeringLimit={selectedCourse.coursesData.pricing.limitDisc}
        courseTotal={selectedCourse.coursesData.courseTotal}
        intro={selectedCourse.coursesData.intro}
        tutorPic={selectedCourse.coursesData.tutor.Pic}
        tutorName={selectedCourse.author.Name}
        tutorProfession={selectedCourse.coursesData.tutor.Profession}
        tutorExp={selectedCourse.coursesData.tutor.Exp}
        rate={selectedCourse.rate}
      />
      <Footer />
    </div>
  );
}

export default Course;
