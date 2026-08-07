"use client";

/**
 * ============================================================================
 *  TEMPORARY COMPONENT — 2026 Racial Justice Conference "Book Now" modal
 * ============================================================================
 *
 * This modal promotes ticket sales for the conference on September 3-4, 2026.
 * It is intentionally isolated in `src/components/temp/` so it can be removed
 * quickly and cleanly once the event has passed.
 *
 * HOW TO REMOVE THIS FUNCTIONALITY AFTER SEPTEMBER 4, 2026:
 *   1. Delete this file (and the `src/components/temp/` folder, if this is
 *      the only file left in it).
 *   2. Open `src/app/page.tsx` and remove:
 *        - the import: `import ConferenceBookNowModal from "@/components/temp/ConferenceBookNowModal";`
 *        - the usage:  `<ConferenceBookNowModal />`
 *   3. (Optional cleanup) `src/components/ui/dialog.tsx` (the shadcn Dialog
 *      primitive) was added to support this modal. It's a generic,
 *      reusable UI component, so it's safe to keep for future use — only
 *      remove it if nothing else in the codebase depends on it.
 *   4. Run the app and confirm no scroll-triggered modal appears and there
 *      are no build/lint errors from the removed import.
 * ============================================================================
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const SCROLL_THRESHOLD = 50;
const SESSION_KEY = "rjc-book-now-shown";
const TICKETING_URL =
  "https://www.zeffy.com/en-AU/ticketing/racial-justice-conference--2026";

const ConferenceBookNowModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

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
            <p
              className={`${greatVibes.className} mb-8 text-5xl leading-tight text-[#dd9f85] sm:mb-10 sm:text-6xl`}
            >
              You&apos;re Invited
            </p>
            <DialogTitle className="text-2xl font-bold leading-tight text-[#35075B] sm:text-3xl">
              Racial Justice Conference 2026
            </DialogTitle>
          </div>

          <div className="mt-8 space-y-2.5 text-left text-sm font-medium text-[#35075B] sm:mt-10 sm:space-y-3 sm:text-base">
            <p className="flex items-start gap-2.5">
              <Calendar
                className="mt-0.5 h-4 w-4 shrink-0 text-[#765194] sm:h-5 sm:w-5"
                aria-hidden="true"
              />
              <span>3&ndash;4 September 2026</span>
            </p>
            <p className="flex items-start gap-2.5">
              <Clock
                className="mt-0.5 h-4 w-4 shrink-0 text-[#765194] sm:h-5 sm:w-5"
                aria-hidden="true"
              />
              <span>8:30 AM &ndash; 5:30 PM AEST</span>
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-[#765194] sm:h-5 sm:w-5"
                aria-hidden="true"
              />
              <span>Tea Rooms QVB, Sydney</span>
            </p>
          </div>

          <DialogDescription className="mx-auto mt-6 max-w-sm text-center text-sm leading-relaxed text-gray-600 sm:mt-8 sm:text-base">
            Join us for a gathering dedicated to advancing racial justice,
            building community power, and driving actionable anti-racism
            strategies.
          </DialogDescription>

          <div className="mt-6 flex justify-center sm:mt-8">
            <Link
              href={TICKETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#35075B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4A0D75] sm:text-base"
              onClick={() => setOpen(false)}
            >
              Secure Your Ticket
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConferenceBookNowModal;
