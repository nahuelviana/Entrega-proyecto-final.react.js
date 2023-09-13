import "./Footer.css"

function Footer () {
    return(
    <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="textoFooter">
                    <h5 className="h5Footer">Encontranos en  nuestras redes sociales</h5>
                </div>
                <div className="redes">
                    <ul className="ulRedes" >
                        <li><a href="#!"><img className="iconoFacebook" src="../img/facebook.png" alt=""/></a></li>
                        <li><a href="#!"><img className="iconoTwitter"src="../img/gorjeo.png" alt=""/></a></li>
                        <li><a href="#!"><img className="iconoInstagram"src="../img/instagram.png" alt=""/></a></li>
                        <li><a href="#!"><img className="iconoGitHub"src="../img/logoGitHub.png" alt=""/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="containerCopyright">
                ©Astrotech
            </div>
        </div>
    </footer>
    )
}

export default Footer