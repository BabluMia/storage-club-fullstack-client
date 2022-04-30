import React from "react";
import "./Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="text-center footer mt-5 pt-2  bottom-0">
      <div className="row w-75 mx-auto mb-2">
        <div className="col-12 col-md-6">
        <img src="https://i.ibb.co/QYvfpNM/attachment-104180274-removebgww-preview.png" style={{width:'120px'}} alt="" />
          <p style={{color:'#F8CB2E'}}>Desgin By Bablu || React & nodejs </p>
        </div>
        <div className="col-12 col-md-6 ">
          <h5 style={{color:'#F8CB2E'}}>Go To Storage Club ......</h5>
          <a className="custom-icon"  href={'https://github.com/BabluMia'}>
            <GrFacebookOption />
          </a>
          <a className="custom-icon" href="https://github.com/BabluMia">
            <BsTwitter />
          </a>
          <a className="custom-icon" href="https://github.com/BabluMia">
            <BsGithub />
          </a>

          <a className="custom-icon" href="https://github.com/BabluMia">
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;