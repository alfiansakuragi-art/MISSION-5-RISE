import "../../styles/courses/courses.css"

function Courses(props) {
  return (
    <div className="coursesWrapper">
      <section className="coursesHead">
        <h1>{props.coursesHead}</h1>
        <p>{props.coursesSubHead}</p>
        <span>{props.courseRate}</span>
      </section>
      <section className="courseAction">
        <h1>{props.coursesHead}</h1>
        <div className="coursesActionPricing">
          <span>{props.coursesPrice}</span>
          <span>{props.coursesBeforeDisc}</span>
          <span>{props.coursesDisc}</span>
        </div>
        <p>penawaran tersisa: {props.offeringLimit}</p>
        <div className="coursesActionBtn">
          <button>Beli Sekarang</button>
          <button>Bagikan Kelas</button>
        </div>
        <div className="coursesActionBennefit">
          <h3>Kelas Ini Sudah Termasuk</h3>
          <ul>
            <li>
              <span>
                <ion-icon name="document-text-outline"></ion-icon>
              </span>
              Ujian Akhir
            </li>
            <li>
              <span>
                <ion-icon name="document-text-outline"></ion-icon>
              </span>
              7 Document
            </li>
            <li>
              <span>
                <ion-icon name="document-text-outline"></ion-icon>
              </span>
              Pretest
            </li>
            <li>
              <span>
                <ion-icon name="document-text-outline"></ion-icon>
              </span>
              {props.courseTotal}
            </li>
            <li>
              <span>
                <ion-icon name="document-text-outline"></ion-icon>
              </span>
              Sertifikat
            </li>
          </ul>
          <h3>Bahasa Pengantar</h3>
          <span>
            <ion-icon name="earth-outline"></ion-icon>Bahasa Indonesia
          </span>
        </div>
      </section>
      <section className="coursesDeskriptionIntro">
        <h1>Deskripsi</h1>
        <p>{props.intro}</p>
      </section>
      <section className="coursesTutor">
        <h1>Belajar bersama Tutor Profesional</h1>
        <div className="tutorCard">
          <div className="tutorCardHead">
            <img src={props.tutorPic} alt={props.tutorName} />
            <p>{props.tutorName}</p>
            <p>{props.tutorProfession}</p>
          </div>
          <p>{props.tutorExp}</p>
        </div>
      </section>
      <section className="coursesVideo">
        <h1>Kamu akan Mempelajari</h1>
        <div className="coursesVideoBox">
          <h3>
            Introduction to Course 1: Foundations of User Experience Design
          </h3>
          <ul>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
          </ul>
        </div>
        <div className="coursesVideoBox">
          <h3>
            Introduction to Course 1: Foundations of User Experience Design
          </h3>
          <ul>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
          </ul>
        </div>
        <div className="coursesVideoBox">
          <h3>
            Introduction to Course 1: Foundations of User Experience Design
          </h3>
          <ul>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
          </ul>
        </div>
        <div className="coursesVideoBox">
          <h3>
            Introduction to Course 1: Foundations of User Experience Design
          </h3>
          <ul>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
            <li>
              The basics of user experience design{" "}
              <span>
                <ion-icon name="play-circle-outline"></ion-icon>Video
              </span>
              <ion-icon name="time-outline"></ion-icon>12 menit<span></span>
            </li>
          </ul>
        </div>
        <span></span>
      </section>
      <section className="coursesRate">
        <h1>Rating dan Review</h1>
        <div className="rater">
          <img src="../asset/avatar.png" alt="ava" />
          <div className="raterProfil">
            <h3>Gregorius Edrik Lawanto</h3>
            <p>Alumni Batch 2</p>
          </div>
          <p>
            Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
            sebagai Senior Talent Acquisition Specialist di Wings Group
            Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
          </p>
          <span>{props.courseRate}</span>
        </div>
      </section>
    </div>
  );
}

export default Courses;
