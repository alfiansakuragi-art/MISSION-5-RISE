import "../styles/filter.css"
function Filter() {
  return (
    <>
      <div className="filter">
        <div className="filter_head">
            <h3>Filter</h3>
            <button>Reset</button>
        </div>
        <div className="filter_card">
            <span className='filter_icon'><ion-icon name="book-outline"></ion-icon></span> <span>Bidang study</span>
            <ul>
                <li><input type="checkbox" />Pemasaran</li>
                <li><input type="checkbox" />Digital & Teknologi </li>
                <li><input type="checkbox" />Pengembangan diri</li>
                <li><input type="checkbox" />bisnis manajement</li>
            </ul>
        </div>
        <div className="filter_card">
            <span className='filter_icon'><ion-icon name="mail-outline"></ion-icon> </span><span>Harga</span>
            <ul>
                <li><input type="checkbox" />Pemasaran</li>
                <li><input type="checkbox" />Digital & Teknologi </li>
                <li><input type="checkbox" />Pengembangan diri</li>
                <li><input type="checkbox" />bisnis manajement</li>
            </ul>
        </div>
        <div className="filter_card">
            <span className='filter_icon'><ion-icon name="time-outline"></ion-icon></span> <span>Durasi</span>
            <ul>
                <li><input type="checkbox" />Pemasaran</li>
                <li><input type="checkbox" />Digital & Teknologi </li>
                <li><input type="checkbox" />Pengembangan diri</li>
                <li><input type="checkbox" />bisnis manajement</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Filter;
