import Link from "next/link";
import { heebo } from "../lib/fonts";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href={"/"}>
          <FaFacebookSquare className="footer-nav-icon" />
        </Link>
        <Link href={"/"}>
          <FaInstagram className="footer-nav-icon" />
        </Link>
        <Link href={"/"}>
          <FaTwitter className="footer-nav-icon" />
        </Link>
        <Link href={"/"}>
          <FaLinkedin className="footer-nav-icon" />
        </Link>
      </nav>
      <p className={`${heebo.className} footer-text`}>
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  );
}
