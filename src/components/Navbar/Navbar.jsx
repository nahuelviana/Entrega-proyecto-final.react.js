import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
function Navbar () {
    /*  */
    return (
        <header>
            <nav className="navbar">
                <Link className="liNav" to="/" >
                    <div className="iconoLogo" >
                        <img src="../public/img/Logo.jpg" alt="" />
                    </div>
                </Link>
                <ul className="ulNav">
                    <li><Link className="liNav" to="/" ><button>inicio</button></Link></li>
                    <li><Link className="liNav" to="/catalogo"><button>catalogo</button></Link></li>
                    <li><Link className="liNav" to="/productos/auriculares"><button>Auriculares</button></Link></li>
                    <li><Link className="liNav" to="/productos/teclados"><button>Teclados</button></Link></li>
                    <li><Link className="liNav" to="/productos/mouses"><button>Mouse</button></Link></li>
                    <li><CartWidget/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
