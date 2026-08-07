/**
 * ============================================================================
 *  TEMPORARY COMPONENT — 2026 Racial Justice Conference header countdown
 * ============================================================================
 *
 * This is a thin data-only wrapper around the reusable `EventCountdown`
 * component (src/components/EventCountdown.tsx), supplying the details
 * specific to the September 3-4, 2026 conference. It is intentionally
 * isolated in `src/components/temp/` so it can be removed quickly once the
 * event has passed, without touching any reusable infrastructure.
 *
 * HOW TO REMOVE THIS FUNCTIONALITY AFTER SEPTEMBER 4, 2026:
 *   1. Delete this file (and the `src/components/temp/` folder, if this is
 *      the only file left in it).
 *   2. Open `src/components/Header.tsx` and remove:
 *        - the import: `import ConferenceCountdown from "@/components/temp/ConferenceCountdown";`
 *        - the usage:  `<ConferenceCountdown />`
 *   3. (Optional cleanup) `src/components/EventCountdown.tsx` and
 *      `src/hooks/useCountdown.ts` are generic and reusable for the next
 *      event's countdown — keep them unless nothing else uses them.
 *   4. Run the app and confirm the header no longer shows a countdown and
 *      there are no build/lint errors from the removed import.
 * ============================================================================
 */

import EventCountdown from "@/components/EventCountdown";

const ConferenceCountdown: React.FC = () => {
  return (
    <EventCountdown
      eventName="2026 Conference"
      targetDate="2026-09-03T00:00:00"
      endDate="2026-09-04T23:59:59"
      dateRangeLabel="Sep 3–4"
      ctaLabel="Book now!"
      href="https://www.zeffy.com/en-AU/ticketing/racial-justice-conference--2026"
      className="flex-shrink-0 self-stretch justify-center shadow-none"
    />
  );
};

export default ConferenceCountdown;
