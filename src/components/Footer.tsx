import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-6 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between sm:items-end">
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

        <div className="mt-4 md:mt-0">
          <p className="text-sm">Towards a Literate Bangladesh</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 mt-4 flex justify-between items-center border-t pt-4">
        <div className="flex flex-col">
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

        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank">
            <FacebookOutlined />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <InstagramOutlined />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
