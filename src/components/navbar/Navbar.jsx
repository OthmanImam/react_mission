import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <div className='logo-side'>
          <div className="logo-container">
            <span>R- <strong className='logo-name'>Mission</strong></span>
          </div>
          <div className='nav-items'>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Mission</a>
          <a href="">Contact Us</a>
          </div>
        </div>
      <div className='search'>
        <input type="text" className='search-box' placeholder="Search..."/>
        <button className='btn-search'>Search</button>
      </div>
    </nav>
    
  )
}


export default Navbar
