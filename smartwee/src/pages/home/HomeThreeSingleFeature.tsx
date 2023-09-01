import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSingleFeature = ({icon,title, jabatan, img1}) => {
   return (
      <>
         <div className="col-xl-2 col-sm-6">
            <div className="tp-feature-three text-center  wow fadeInUp" data-wow-delay=".4s">
               <div className="tp-feature-three-icon ">
                  <img src="src/assets/img/icon/bgstruktur.png" className="img-fluid" alt="img not found"/>
                  <i><img src={img1} className="img-fluid-team text-center" alt="img not found"/></i>
               </div>
               <div className="tp-feature-three-text">
                  <h4 className="tp-feature-three-title ">
                     <Link to="/home">{title}</Link></h4>
                  <p>{jabatan}</p><br/><br/>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSingleFeature;