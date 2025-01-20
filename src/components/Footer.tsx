import Link from "next/link";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-6 mt-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between md:items-end  px-4 lg:px-0">
        <div>
          <h4 className="font-semibold mb-2">Learn About AlterYouth</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/how-it-works">How It works</Link>
            </li>
            <li>
              <Link href="/scholarship-policy">Scholarship Policy</Link>
            </li>
            <li>
              <Link href="/get-app">Get the app</Link>
            </li>
          </ul>
        </div>
        <div className="border-t mt-2" />
        <div className="mt-4 md:mt-0">
          <p className="text-sm ">Towards a Literate Bangladesh</p>
          <div className="flex space-x-2 md:hidden mt-2 ">
            <Link href="/#" target="_blank">
              <Image
                src={Facebook}
                alt="facebook"
                width={500}
                height={500}
                priority
                className="w-4 h-4"
              />
            </Link>
            <Link href="/#" target="_blank">
              <Image
                src={Instagram}
                alt="instagram"
                width={500}
                height={500}
                priority
                className="w-4 h-4"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-4 flex justify-between items-center border-t px-4 lg:px-0">
        <div className="flex flex-col mt-4">
          <p className="text-sm">© 2025 AlterYouth Limited</p>
          <div className="flex gap-1">
            <Link
              href="/terms-of-service"
              className="text-sm hover:text-[#1dc468]"
            >
              Terms of Service
            </Link>
            <span>·</span>
            <Link
              href="/privacy-policy"
              className="text-sm hover:text-[#1dc468]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className=" space-x-2 lg:block hidden ">
          <div className="flex space-x-2">
            <Link href="/#" target="_blank">
              <Image
                src={Facebook}
                alt="facebook"
                width={500}
                height={500}
                priority
                className="w-4 h-4"
              />
            </Link>
            <Link href="/#" target="_blank">
              <Image
                src={Instagram}
                alt="instagram"
                width={500}
                height={500}
                priority
                className="w-4 h-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
