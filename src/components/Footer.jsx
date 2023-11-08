import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { IoLocationSharp, IoPhonePortrait, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useTheme } from "../hooks";
import logoLight from "../assets/wislio.png";

export default function Footer() {
  const { currentTheme = "light" } = {};

  return (
    <footer className="p-10 pt-14 pb-0 bg-primary/20 text-base-content">
      <div className="footer text-base">
        <aside>
          <Link to="/">
            <img
              className="w-36"
              src={currentTheme === "light" ? logoLight : "logoDark"}
              alt="Volt Realm"
            />
          </Link>
          <ul className="py-6 text-lg max-w-sm space-y-6">
            <li className="flex gap-4 items-center">
              <IoLocationSharp className="h-8 w-8 text-primary-content hover:text-primary" />
              <address className="leading-tight">
                Rose Building, Street # 02, NY 10036, United States
              </address>
            </li>
            <li className="flex gap-4 items-center">
              <IoPhonePortrait className="h-7 w-7 mr-1 text-primary-content hover:text-primary" />
              <a className="hover:underline" href="tel:#">
                +4 2034 - 4500 - 672
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <IoMail className="h-7 w-7 mx-0.5 text-primary-content hover:text-primary" />
              <a className="hover:underline" href="mailto:#">
                support@wislio.com
              </a>
            </li>
          </ul>
        </aside>
        <nav>
          <header className="footer-title">Information</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Authors</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <header className="footer-title">Quick Links</header>
          <a className="link link-hover">All Books</a>
          <a className="link link-hover">Science Fiction</a>
          <a className="link link-hover">Health & Fitness</a>
          <a className="link link-hover">Biographies</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of service</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </div>
      <div className="flex items-center justify-between py-6">
        <p>©{new Date().getFullYear()} Wislio™. All Rights Reserved.</p>
        <ul className="flex items-center gap-5">
          <Link className="text-base-content/70 hover:text-base-content">
            <BsFacebook className="text-2xl" />
          </Link>
          <Link className="text-base-content/70 hover:text-base-content">
            <BsTwitter className="text-2xl" />
          </Link>
          <Link className="text-base-content/70 hover:text-base-content">
            <BsInstagram className="text-2xl" />
          </Link>
          <Link className="text-base-content/70 hover:text-base-content">
            <BsYoutube className="text-2xl" />
          </Link>
        </ul>
      </div>
    </footer>
  );
}
