/**
 * ============================================================================
 *  TEMPORARY COMPONENT — 2026 Racial Justice Conference event details
 * ============================================================================
 *
 * Homepage section promoting the September 3-4, 2026 conference. Isolated in
 * `src/components/temp/` so it can be removed quickly once the event has passed.
 *
 * HOW TO REMOVE THIS FUNCTIONALITY AFTER SEPTEMBER 4, 2026:
 *   1. Delete this file.
 *   2. Delete `public/images/events/racial-justice-conference-2026-poster.jpg`.
 *   3. Open `src/app/page.tsx` and remove:
 *        - the import: `import ConferenceEventDetails from "@/components/temp/ConferenceEventDetails";`
 *        - the usage:  `<ConferenceEventDetails />`
 *   4. Open `src/app/(sub)/events/page.tsx` and remove:
 *        - the import: `import ConferenceEventDetails from "@/components/temp/ConferenceEventDetails";`
 *        - the usage:  `<ConferenceEventDetails />`
 *   5. Run the app and confirm neither page shows this section and
 *      there are no build/lint errors from the removed imports.
 * ============================================================================
 */

import Image from "next/image";
import Link from "next/link";

const TICKETING_URL =
  "https://www.zeffy.com/en-AU/ticketing/racial-justice-conference--2026";

const KEY_THEMES = [
  "Unequal By Design: Race and International Law",
  "Race on the Political Agenda",
  "Racial Dignity",
  "Decoding Race in the Media we Consume",
  "Not-so-equal Opportunity in the Workplace",
  "Inquests: Findings of Racism",
  "Impacts of Racism",
];

const bodyClass =
  "text-[#3B0666] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-left font-normal";

const headingClass =
  "text-[#35075B] text-lg sm:text-xl md:text-2xl font-bold text-left";

const ConferenceEventDetails: React.FC = () => {
  return (
    <section className="w-full bg-[#D9F3DD] pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="w-full sm:w-[85%] md:w-[75%] lg:w-[70%] text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#35075B] border-b-2 sm:border-b-3 md:border-b-4 border-[#FD9D3D] py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8">
          Racial Justice Conference 2026
        </h2>

        <p className="w-full text-[#3B0666] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-normal mb-8 sm:mb-10 md:mb-12">
          Join us for the Racial Justice Conference 2026, a gathering dedicated
          to advancing racial justice, building community power, and driving
          actionable anti-racism strategies. This landmark event brings together
          lawyers, academics, policymakers, researchers, civil society
          organisations, community leaders, activists and community members to
          influence the discourse with thought leadership and foster deep
          solidarity. Through workshops and truth-telling panel discussions, we
          will empower communities and build communities of change-makers.
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="w-full space-y-3 sm:space-y-4">
              <h3 className={headingClass}>Event Details</h3>
              <div className={`${bodyClass} space-y-2`}>
                <p>Date: 3&ndash;4 September 2026</p>
                <p>Time: 8:30 AM &ndash; 5:30 PM AEST</p>
                <p>
                  Location: Tea Rooms QVB, Level 3/455 George St, Sydney NSW
                  2000
                </p>
              </div>
            </div>

            <div className="w-full space-y-3 sm:space-y-4">
              <h3 className={headingClass}>
                Continuing Professional Development
              </h3>
              <p className={bodyClass}>
                Lawyers attending the Racial Justice Conference 2026 will be
                eligible to claim Continuing Professional Development (CPD)
                units for attendance at conference sessions.
              </p>
            </div>

            <div className="w-full space-y-3 sm:space-y-4">
              <h3 className={headingClass}>Key Themes</h3>
              <ul
                className={`${bodyClass} list-disc list-inside space-y-1 sm:space-y-2 marker:text-[#35075B]`}
              >
                {KEY_THEMES.map((theme) => (
                  <li key={theme}>{theme}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-2 pt-2 sm:pt-4">
              <Link
                href={TICKETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#35075B] px-6 py-3 text-sm sm:text-base md:text-lg font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#4A0D75]"
              >
                Secure Your Ticket
              </Link>
              <p className="text-sm text-[#3B0666]">
                Early bird tickets end Monday 17 September 2026
              </p>
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/images/events/racial-justice-conference-2026-poster.jpg"
              alt="Racial Justice Conference 2026 poster"
              width={699}
              height={1024}
              className="w-full h-auto rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem]"
              sizes="(max-width: 1023px) 100vw, 40vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceEventDetails;
