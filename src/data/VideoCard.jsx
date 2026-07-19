import "../styles/videocard.css";
import course1 from "./VideoCourse";
import { useNavigate } from "react-router-dom";
function VideoCard() {
  const navigate = useNavigate();

  return (
    <>
      {course1.map((items) => {
        return (
          <article onClick={()=> {navigate(`/course/${items.id}`)}} key={items.id} className="course-card">
            <img
              className="course-card__thumbnail"
              src={items.picture}
              alt=""
            />

            <div className="course-card__content">
              <h3 className="course-card__title">{items.title}</h3>

              <p className="course-card__description">{items.deskription}</p>

              <div className="course-card__mentor">
                <img
                  className="mentor__avatar"
                  src={items.author.picture}
                  alt="avatar"
                />

                <div className="mentor__info">
                  <h4 className="mentor__name">{items.author.name}</h4>
                  <p className="mentor__job">{items.author.profesion}</p>
                </div>
              </div>

              <div className="course-card__footer">
                <div className="course-card__rating">
                  {items.star}
                  <span>{items.rate}</span>
                </div>

                <p className="course-card__price">{items.price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default VideoCard;
