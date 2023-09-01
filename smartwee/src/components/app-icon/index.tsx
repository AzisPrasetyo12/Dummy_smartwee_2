import React from "react";
import { Link } from 'react-router-dom';

export const AppIcon: React.FC = () => {
  return (
    <>
    <div className="header-logo text-center">
      <Link to="/home"><img src="src/assets/img/logo/logo_putih.png" className="img-fluid-logo text-center" alt="logo not found" />
      </Link>
    </div>
    </>
  );
};
