import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 text-sm py-5">
      <div className="mb-4 md:mb-0">
        <ul className="flex flex-row  gap-4 md:gap-5">
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            Terms
          </li>
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            Privacy
          </li>
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            Docs
          </li>
          <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer">
            Get Support
          </li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <p>Follow on</p>
        <FaXTwitter className="text-lg hover:text-[#06F9F9] hover:scale-105 cursor-pointer" />
        <FaDiscord className="text-xl hover:text-[#06F9F9] hover:scale-105 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
