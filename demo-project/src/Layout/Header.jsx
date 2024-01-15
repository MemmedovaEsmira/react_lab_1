import "./Header.css";

const Header = () => {
    return <div className="Header">
       <div className="header_logo"> 
<h2 className="header_logo_title">Accounting </h2>
</div>
    <nav className="nav"> 
        <ul className="nav_menu">
        <li className="nav_menu_item"> <a href="#">Features </a></li> 
        <li className="nav_menu_item"> <a href="#">Pricing</a></li>  
        <li className="nav_menu_item"> <a href="#">Our advantages</a></li>
        <li className="nav_menu_item"> <a href="#">Partners</a></li>  
        <li className="nav_menu_item"> <a href="#">FAQ</a></li> 
        </ul>
    </nav>
    <div className=" header_button"> 
      <button > btn </button>
</div>
    </div>; 
};

export default Header;