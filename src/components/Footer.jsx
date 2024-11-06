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
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  
  return (
    <section className="bg-black text-white">
      <footer className="footer max-w-7xl mx-auto w-full 3xl:text-lg 2xl:text-base text-sm transition-all duration-300 py-10 px-4">
        <aside className="md:min-w-[20vw]">
          <img src={Logo} alt={t('footer.sections.0.logo.alt')} className="3xl:w-52 2xl:w-44 xl:w-40 w-28 transition-all duration-300" />
          <nav>
            <div className="grid grid-flow-col gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/enggenv/posts/?feedView=all"
                alt="linkedin-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.sections.0.socialLinks.0.ariaLabel')}
              >
                <FaLinkedin className="fill-current cursor-pointer" size={24} />
              </a>

              <a
                href="https://twitter.com/enggenvs"
                alt="twitter-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.sections.0.socialLinks.1.ariaLabel')}
              >
                <FaXTwitter className="fill-current cursor-pointer" size={24} />
              </a>

              <a
                href="https://www.instagram.com/enggenv.solution"
                alt="instargram-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.sections.0.socialLinks.2.ariaLabel')}
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
                aria-label={t('footer.sections.0.socialLinks.3.ariaLabel')}
              >
                <FaFacebook className="fill-current cursor-pointer" size={24} />
              </a>
            </div>
          </nav>
        </aside>

        <nav>
          <h1 className="footer-title">{t('footer.sections.1.title')}</h1>
          {t('footer.sections.1.links', { returnObjects: true }).map((link, index) => (
            <Link key={index} to="#" className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>
        <nav>
          <h1 className="footer-title">{t('footer.sections.2.title')}</h1>
          {t('footer.sections.2.links', { returnObjects: true }).map((link, index) => (
            <Link key={index} to="#" className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>

        <nav>
          <h1 className="footer-title">{t('footer.sections.3.title')}</h1>
          <Link to="tel:+974 44128899" className="link link-hover mb-4" dir={isRtl ? "ltr" : "auto"}>
            <FaPhoneAlt className="inline-block mr-2" />
            {t('footer.sections.3.contactDetails.0.label')}
          </Link>
          <Link to="mailto:info@albaidagroup.com" className="link link-hover mb-4" dir={isRtl ? "ltr" : "auto"}>
            <FiMail className="inline-block mr-2" />
            {t('footer.sections.3.contactDetails.1.label')}
          </Link>
          <Link
            to="https://maps.app.goo.gl/caKQH2CpnGBUQMUS6"
            className="link link-hover"
            target="_blank"
          >
            <FiMapPin className="inline-block mr-2" />
            {t('footer.sections.3.contactDetails.2.label')}
          </Link>
        </nav>
      </footer>

      <footer className="footer footer-center max-w-7xl mx-auto w-full text-base-100 l3xl:text-lg 2xl:text-base text-sm transition-all duration-300 bg-black rounded p-4">
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
