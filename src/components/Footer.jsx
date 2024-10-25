import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="bg-[#2B3440] text-white">
      <footer className="footer max-w-7xl mx-auto w-full text-base-100 text-sm lg:text-lg py-10 px-4">
        <aside className="md:min-w-[20vw]">
          <img src={Logo} alt="" className="lg:w-52 md:w-36 sm:w-32 w-28" />
          <nav>
            <div className="grid grid-flow-col gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/enggenv/posts/?feedView=all"
                alt="linkedin-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn Page"
              >
                <FaLinkedin className="fill-current cursor-pointer" size={24} />
              </a>

              <a
                href="https://twitter.com/enggenvs"
                alt="twitter-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <FaXTwitter className="fill-current cursor-pointer" size={24} />
              </a>

              <a
                href="https://www.instagram.com/enggenv.solution"
                alt="instargram-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram
                  className="fill-current cursor-pointer"
                  size={24}
                />
              </a>

              <a
                href="https://www.facebook.com/share/84Egbe9276siyNDd/?mibextid=qi2Omg"
                alt="facebook-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Like us on Facebook"
              >
                <FaFacebook className="fill-current cursor-pointer" size={24} />
              </a>
            </div>
          </nav>
        </aside>

        <nav>
          <h1 className="footer-title">Services</h1>
          <Link to="#" className="link link-hover">
            Facility Management
          </Link>
          <Link to="#" className="link link-hover">
            Road & Infrastructure
          </Link>
          <Link to="#" className="link link-hover">
            Agriculture Projects & Trading
          </Link>
          <Link to="#" className="link link-hover">
            Heavy Equipment
          </Link>
          <Link to="#" className="link link-hover">
            Camel Race Track
          </Link>
          <Link to="#" className="link link-hover">
            Cleaning Services
          </Link>
          <Link to="#" className="link link-hover">
            Construction
          </Link>
          <Link to="#" className="link link-hover">
            Agency & Representation
          </Link>
        </nav>

        <nav>
          <h1 className="footer-title">Company</h1>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/contact-us" className="link link-hover">
            Contact
          </Link>
          <Link to="/gallery" className="link link-hover">
            Gallery
          </Link>
          <Link to="/JoinUs/career" className="link link-hover">
            Jobs
          </Link>
          <Link to="/projects" className="link link-hover">
            Projects
          </Link>
        </nav>

        <nav>
          <h1 className="footer-title">Contact Us</h1>
          <Link to="tel:+974 44128899" className="link link-hover mb-4">
            <FaPhoneAlt className="inline-block mr-2" />
            +974 44128899
          </Link>
          <Link to="mailto:info@albaidagroup.com" className="link link-hover mb-4">
            <FiMail className="inline-block mr-2" />
            info@albaidagroup.com
          </Link>
          <Link
            to="https://maps.app.goo.gl/caKQH2CpnGBUQMUS6"
            className="link link-hover"
            target="_blank"
          >
            <FiMapPin className="inline-block mr-2" />
            PO Box# 37772
            <br />
            Doha, Qatar
          </Link>
        </nav>
      </footer>

      <footer className="footer footer-center max-w-7xl mx-auto w-full text-base-100 lg:text-lg bg-[#2B3440] rounded p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by Al
            Baida Group
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
