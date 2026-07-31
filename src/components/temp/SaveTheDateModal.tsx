"use client";

/**
 * ============================================================================
 *  TEMPORARY COMPONENT — 2026 Racial Justice Conference "Save the Date" modal
 * ============================================================================
 *
 * This modal is only relevant for promoting the conference on
 * September 3-4, 2026. It is intentionally isolated in `src/components/temp/`
 * so it can be removed quickly and cleanly once the event has passed.
 *
 * HOW TO REMOVE THIS FUNCTIONALITY AFTER SEPTEMBER 4, 2026:
 *   1. Delete this file (and the `src/components/temp/` folder, if this is
 *      the only file left in it).
 *   2. Open `src/app/page.tsx` and remove:
 *        - the import: `import SaveTheDateModal from "@/components/temp/SaveTheDateModal";`
 *        - the usage:  `<SaveTheDateModal />`
 *   3. (Optional cleanup) `src/components/ui/dialog.tsx` (the shadcn Dialog
 *      primitive) was added to support this modal. It's a generic,
 *      reusable UI component, so it's safe to keep for future use — only
 *      remove it if nothing else in the codebase depends on it.
 *   4. Run the app and confirm no scroll-triggered modal appears and there
 *      are no build/lint errors from the removed import.
 * ============================================================================
 */

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SCROLL_THRESHOLD = 50;
const SESSION_KEY = "rjc-save-the-date-shown";

const SaveTheDateModal: React.FC = () => {
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
      <DialogContent className="max-w-md sm:max-w-lg gap-0 overflow-hidden rounded-2xl border-none bg-white p-0 md:rounded-3xl [&>button]:text-white">
        <div className="bg-[#3B0666] px-6 py-7 sm:px-8 sm:py-9">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#dd9f85] sm:text-sm">
            Save the Date
          </p>
          <DialogTitle className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
            2026 Racial Justice Conference
          </DialogTitle>
        </div>

        <div className="space-y-6 px-6 py-9 text-center sm:px-8 sm:py-12">
          <p className="text-3xl font-bold text-[#35075B] sm:text-4xl">
            September 3 &ndash; 4
          </p>
          <p className="text-sm font-medium text-gray-600 sm:text-base">
            Tea Rooms QVB, Sydney
          </p>
          <DialogDescription className="mx-auto max-w-sm text-sm leading-relaxed text-gray-600 sm:text-base">
            Join us for two days of conversation, connection, and action as
            we continue the fight for racial justice.
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SaveTheDateModal;
