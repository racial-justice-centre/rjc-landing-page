import React from "react";
import Link from "next/link";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E4E3DB] pt-16 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
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
                href="https://www.linkedin.com/company/racial-justice-centre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b0666] hover:text-purple-600 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.instagram.com/racialjustice.au/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b0666] hover:text-purple-600 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-4 pt-2 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Racial Justice Centre ABN: 62 659 851 699
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
