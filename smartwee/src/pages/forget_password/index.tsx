import React from "react";
import { Link } from 'react-router-dom';

const forgetpassword : React.FC<any> = () => {
    return (
        <div className="row">
            <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s"></div>
                <div className="header-logo text-center  ">
                <Link to="/home"><img src="src/assets/img/logo/logo_hijau.png" className="img-fluid-logo text-center" alt="logo not found" />
                </Link>
            </div>
        </div>
    )
}

export default forgetpassword;