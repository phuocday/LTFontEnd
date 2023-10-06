import {NavLink} from "react-router-dom"
function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <img id="img" src="red-1618916_640.webp" className="img-thumbnail" alt="..." />
              <li className="nav-item">
                <NavLink to='/' className="nav-link active">Trang chủ</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/vechungtoi' className="nav-link active">Về chúng tôi</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/sanpham' className="nav-link active">Sản phẩm</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/tintuc' className="nav-link active">Tin tức</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/lienhe' className="nav-link active">Liên hệ</NavLink>
              </li>
            </ul>
            <NavLink to='/giohang' className="nav-link active"><svg  width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            </NavLink>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Home;