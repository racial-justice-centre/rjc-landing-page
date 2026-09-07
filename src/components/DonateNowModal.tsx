"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SCROLL_THRESHOLD = 50;
const SESSION_KEY = "rjc-donate-now-shown";
const DONATE_URL = "/#cta";

const DonateNowModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (window.location.pathname !== "/") return;

    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setOpen(true);
        sessionStorage.setItem(SESSION_KEY, "1");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md sm:max-w-lg gap-0 overflow-hidden rounded-none border-none bg-white p-5 sm:rounded-none sm:p-6 [&>button]:right-8 [&>button]:top-8 [&>button]:text-[#35075B] sm:[&>button]:right-9 sm:[&>button]:top-9">
        <div className="flex flex-col border-2 border-[#35075B] px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col items-center text-center">
            <p className="mb-8 text-5xl leading-tight text-[#dd9f85] sm:mb-10 sm:text-6xl">
              Support Our Work
            </p>
            <DialogTitle className="text-2xl font-bold leading-tight text-[#35075B] sm:text-3xl">
              Help Advance Racial Justice
            </DialogTitle>
          </div>

          <DialogDescription className="mx-auto mt-8 max-w-sm text-center text-sm leading-relaxed text-gray-600 sm:mt-10 sm:text-base">
            Your donation helps us provide free legal support, run community
            programs, and drive real change against racism in Australia.
          </DialogDescription>

          <div className="mt-6 flex justify-center sm:mt-8">
            <Link
              href={DONATE_URL}
              className="inline-block bg-[#35075B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4A0D75] sm:text-base"
              onClick={() => setOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateNowModal;
