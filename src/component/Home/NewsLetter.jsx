import "../../styles/home/newsletter.css"
function NewsLetter() {
  return (
    <>
      <div className="newsletter">
        <p>NEWSLETTER</p>
        <h1>Mau Belajar Lebih Banyak?</h1>
        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>
        <div className="newsletter-form-container">
          <input
            className="newsletter-input"
            type="email"
            placeholder="Masukan Emailmu"
          />
          <button className="newsletter-btn" type="button">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
