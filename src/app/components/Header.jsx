import Image from "next/image";
import logo from "@/assets/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
    return (
      <>
        <div className="flex w-full justify-between items-center py-3 px-6">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Jenii Logo" className="h-20 w-20 sm:w-[70%] md:w-auto object-contain sm:px-6 md:px-10 lg:px-20" />
          </div>
  
          {/* Navigation Links */}
          <div className=" text-base sm:text-lg">
            <ul className="flex gap-5 sm:gap-8 items-center">
              {/* About Us */}
              <Link  href="https://jeniijewellery.bio.link/" className="text-[#C41E56]  font-medium cursor-pointer hover:underline">
                About Us
              </Link>
              {/* Visit Store Button */}
              <li>
                <Link href='https://www.google.co.in/search?sca_esv=33073fab614d76a8&sxsrf=ADLYWIIMq3Vq9If5q0PF5G76Ey-vH0tCYw%3A1728886235066&kgmid=%2Fg%2F11ltsgqj64&q=Jenii%20(%20J.P%20Sterling%20Silver%20)&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F2&kgs=a3d3e64e119ef526'><button className="bg-[#C41E56] text-white px-4 py-1.5 sm:py-2 my-auto rounded-full font-medium hover:bg-[#a71745] transition flex ">
                  <span className="mt-1 mr-2 hidden sm:block"><FaLocationDot size={20} /></span>
                  <p>Visit Store</p>
                </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Header;