import React from "react";
import coursesData from "../../data/VideoCourse";
import VideoCard from "../Course/VideoCard";
import { useParams } from "react-router-dom";

function CourseBox() {
  const { id } = useParams();
  const items = coursesData.find((items) => items.id === Number(id));
  console.log(id);
  return (
    <>
      <section className="courseAction">
        <h1>{items.deskription}</h1>
        <div className="coursesActionPricing">
          <span>{items.coursesData.pricing.Price}</span>
          <span>{items.coursesData.pricing.specialPrice}</span>
          <span>{items.coursesData.pricing.discount}</span>
        </div>
        <p>penawaran tersisa: {items.coursesData.pricing.limitDisc}</p>
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
              {items.coursesData.courseTotal}
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
    </>
  );
}
export default CourseBox;
