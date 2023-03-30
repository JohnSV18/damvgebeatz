
import '../Footer/Footer.css'
import insta from '../../assets/img/instagram.svg'
import youtube from '../../assets/img/youtube.svg'
import twitter from '../../assets/img/twitter.svg'


function Footer () {
    return (
        <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Contact</h5>
                            <p>For bookings and inquiries, send me an email at <a href="mailto:officialdamvgebeatz@gmail.com">OfficialDamvgeBeatz@gmail.com</a></p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://instagram.com/damvgebeatz?igshid=YmMyMTA2M2Y="><img src={insta} alt='instalogo'/></a></li>
                                <li><a href="https://www.youtube.com/@damvgebeatz"><img src={youtube} alt='youtubelogo'/></a></li>
                                <li><a href="https://www.youtube.com/@damvgebeatz"><img src={twitter} alt='twitterlogo'/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="https://damvge.com/"> Damvge.com</a>
                </div>

            </footer>
        
    )
};
export default Footer;