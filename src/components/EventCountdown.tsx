"use client";

import Link from "next/link";
import { useCountdown } from "@/hooks/useCountdown";

export interface EventCountdownProps {
  /** Full event name, rendered as the first line of the card. */
  eventName: string;
  /** ISO date/time the countdown counts down to (event start). */
  targetDate: string;
  /** ISO date/time the event finishes; once passed, the widget hides itself. */
  endDate?: string;
  /** Human-readable date range shown next to the countdown, e.g. "Sep 3-4". */
  dateRangeLabel: string;
  /** Where the card should link to (e.g. an events page). */
  href: string;
  className?: string;
}

/**
 * Generic, reusable countdown widget intended to sit inline in a nav bar
 * (e.g. next to a logo). Not tied to any specific event - pass in the
 * target/end dates, label, and link for whichever event you're promoting.
 * Rendered as a square-cornered card that links to `href`.
 */
const EventCountdown: React.FC<EventCountdownProps> = ({
  eventName,
  targetDate,
  endDate,
  dateRangeLabel,
  href,
  className,
}) => {
  const { daysRemaining, hasStarted, hasEnded } = useCountdown(targetDate, endDate);

  if (hasEnded) {
    return null;
  }

  return (
    <Link
      href={href}
      aria-label={`Countdown to ${eventName}`}
      className={`flex flex-col items-start gap-1 rounded-none border-none bg-[#35075B] px-2.5 py-1.5 leading-tight text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#4A0D75] md:px-3 md:py-2 ${className ?? ""}`}
    >
      <span className="text-[10px] font-medium text-white md:text-xs lg:text-sm">
        {eventName}
      </span>
      {hasStarted ? (
        <span className="text-[10px] font-semibold uppercase tracking-wide text-white md:text-xs lg:text-sm">
          Happening now &middot; {dateRangeLabel}
        </span>
      ) : (
        <span className="text-[10px] font-semibold uppercase tracking-wide text-white md:text-xs lg:text-sm">
          {daysRemaining} {daysRemaining === 1 ? "day" : "days"} &middot; {dateRangeLabel}
        </span>
      )}
    </Link>
  );
};

export default EventCountdown;
