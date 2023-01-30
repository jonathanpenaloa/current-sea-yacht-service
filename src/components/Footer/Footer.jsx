import "./Footer.css";

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
                        <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>9800 Harbour Place Suite #205</p>
                            <p>Mukilteo WA 98275</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/> 425-290-1001
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/> the@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>Let discuss the best way to own your yacht</h4>
                    <p>Luxury pre-owned Yachts, New special order Yachts, Yacht donation specialist, </p>
                    <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}