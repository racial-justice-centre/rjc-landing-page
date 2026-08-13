"use client";

import { useEffect } from "react";

const ZEFFY_SCRIPT_SRC = "https://www.zeffy.com/embed/v2/zeffy-embed.js";
const ZEFFY_FORM_PATH = "/embed/donation-form/donate-to-change-lives-19764";
const ZEFFY_EMBED_SRC =
  "https://www.zeffy.com/embed/donation-form/donate-to-change-lives-19764";

function showZeffyFallback() {
  document.querySelectorAll("[data-zeffy-embed-fallback]").forEach((el) => {
    (el as HTMLElement).style.display = "block";
    el.querySelectorAll("iframe[data-zeffy-embed-src]").forEach((iframe) => {
      const src = iframe.getAttribute("data-zeffy-embed-src");
      if (src) {
        (iframe as HTMLIFrameElement).src = src;
      }
    });
  });
}

const ZeffyDonationForm: React.FC = () => {
  useEffect(() => {
    const existing = document.querySelector(
      `script[src="${ZEFFY_SCRIPT_SRC}"]`
    );
    if (existing) {
      return;
    }

    const script = document.createElement("script");
    script.src = ZEFFY_SCRIPT_SRC;
    script.async = true;
    script.onerror = showZeffyFallback;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div data-zeffy-embed data-form-url={ZEFFY_FORM_PATH} />
      <div data-zeffy-embed-fallback style={{ display: "none" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "450px",
            width: "100%",
          }}
        >
          <iframe
            title="Donation form powered by Zeffy"
            style={{
              position: "absolute",
              border: 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
            }}
            data-zeffy-embed-src={ZEFFY_EMBED_SRC}
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
};

export default ZeffyDonationForm;
