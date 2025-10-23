import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-20 text-sm py-5">
      <div>
        <ul className="flex gap-5">
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
