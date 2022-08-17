import React from "react";
import './Contact.css';


function Contact() {
    return(
        <div className="contact">
            <div>
                <a href="tel:">
                    <p>PHONE:+905060279767</p>
                </a>
            </div>
            <div>
                <a href="mailto:">
                    <p>E-MAIL:<span className="a-down">koymatlisenanur@gmail.com</span></p>
                </a>
                <div>
                    <a href="https://www.instagram.com/" target="_blank">
                        <p><span className="a-down">
                            <ion-icon  clasName='insta-icon' name="logo-instagram"></ion-icon>
                        </span></p>
                    </a>
                </div>
            </div>
        </div>
      
    )


    

}

export default Contact

