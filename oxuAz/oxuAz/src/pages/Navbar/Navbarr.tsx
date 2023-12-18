import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./Navbarr.scss";

type Props = {};

const Navbarr = (props: Props) => {
  return (
    <>
      <div>
        <Container>
          <div className="nav1">
            <div className="title">
              <p>OXU.AZ</p>
              <img src="https://cdn.oxu.az/xb64.png" alt="" />
            </div>
            <div className="titleRight">
              <Link to={""}>Haqqimizda</Link>
              <Link to={""}>Reklam</Link>
              <div className="face">
                <AiFillFacebook />
              </div>

              <div className="face">
                <FaTwitter />
              </div>
              <div className="face">
                <FaTelegramPlane />
              </div>
              <div className="face">
                <FaInstagram />
              </div>
              <div className="face">
                <IoLogoAndroid />
              </div>
              <div className="face">
                <FaApple />
              </div>
              <div className="inp">
                <input type="text" />
                <div className="search">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
          <div className="nav2">
            <Link to={""}>Baş səhifə</Link>
            <Link to={"siyaset"}>Siyaset</Link>
            <Link to={"iqtisadiyyat"}>İqtisadiyyat</Link>
            <Link to={"cemiyyet"}>Cəmiyyet</Link>
            <Link to={"soubiznes"}>Şou-biznes</Link>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Navbarr;
