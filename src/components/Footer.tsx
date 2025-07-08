import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E4E3DB] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Logo and Contact Info */}
          <div className="space-y-6">
            <Image
              src="/images/icons/rjc_icon.png"
              alt="Racial Justice Centre"
              width={100}
              height={100}
            />

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <ImLocation className="w-6 h-6 text-[#3b0666]" />
                </div>
                <div className="text-gray-700">
                  <div>Level 21/133 Castlereagh St</div>
                  <div>Sydney NSW 2000</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <ImLocation className="w-6 h-6 text-[#3b0666]" />
                </div>
                <div className="text-gray-700">
                  <div>Ground Floor</div>
                  <div>470 St Kilda Road</div>
                  <div>Melbourne VIC 3004</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex-shrink-0">
                <MdEmail className="w-6 h-6 text-[#3b0666]" />
              </div>
              <Link
                href="mailto:info@racialjustice.au"
                className="text-gray-700 hover:text-purple-600"
              >
                info@racialjustice.au
              </Link>
            </div>
          </div>

          {/* Middle Column - Menu */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-6">Menu</h3>
            <nav className="space-y-3">
              <Link
                href="/purpose"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Our Purpose
              </Link>
              <Link
                href="/team"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/events"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Event & Education
              </Link>
              <Link
                href="/media"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Media
              </Link>
              <Link
                href="/#cta"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Donate
              </Link>
            </nav>
          </div>

          {/* Right Column - Acknowledgment and Social */}
          <div className="space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              We acknowledge the First Nations people of Australia. We
              acknowledge sovereignty was never ceded. Always was and always
              will be First Nations Land.
            </p>

            <div className="flex space-x-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center transition-colors"
              >
                <GrLinkedin className="w-5 h-5" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Racial Justice Centre ABN: 62 659 851 699
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
