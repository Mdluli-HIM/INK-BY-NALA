"use client";

import {
  FormEvent,
  useState,
} from "react";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ConsultationSection() {
  const [previewed, setPreviewed] =
    useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setPreviewed(true);
  }

  return (
    <section
      id="consultation"
      data-cursor-tone="light"
      className="consultation-v2"
    >
      <div
        aria-hidden="true"
        className="consultation-v2__background"
        style={{
          backgroundImage:
            "url('/images/consultation/consultation-studio.jpg')",
        }}
      />

      <div
        aria-hidden="true"
        className="consultation-v2__overlay"
      />

      <div className="hype-shell consultation-v2__inner">
        {/* ==========================================
            HEADING
        ========================================== */}
        <header className="consultation-v2__header">
          <div className="consultation-v2__eyebrow">
            <span>
              Appointment only
            </span>

            <span />

            <span />
          </div>

          <h2>
            Start your
            <br />
            tattoo project
          </h2>

          <p>
            Your idea. Your story. A custom design.
          </p>
        </header>

        {/* ==========================================
            LOWER COMPOSITION
        ========================================== */}
        <div className="consultation-v2__panels">
          {/* CYAN COPY PANEL */}
          <aside
            data-cursor-tone="dark"
            className="consultation-v2__info"
          >
            <span className="consultation-v2__info-kicker">
              Custom work from the first conversation
            </span>

            <h3>
              Bring us your
              <br />
              idea. We&apos;ll help
              <br />
              turn it into
              <br />
              original ink
            </h3>

            <p>
              Send us your concept, references and placement.
              We&apos;ll discuss the project, prepare a quote
              and develop a custom design or stencil before
              your appointment.
            </p>

            <div className="consultation-v2__info-meta">
              <span>[ Custom consultation ]</span>

              <span>[ Appointment only ]</span>
            </div>
          </aside>

          {/* FORM */}
          <form
            data-cursor-tone="dark"
            aria-labelledby="consultation-demo-heading"
            aria-describedby="consultation-demo-note"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
            onChange={() => setPreviewed(false)}
            className="consultation-v2__form"
          >
            <h3 id="consultation-demo-heading" className="sr-only">
              Consultation form demonstration
            </h3>

            <p id="consultation-demo-note" className="mb-6 text-sm leading-6">
              Concept preview — this form is a demo. No enquiry is sent.
              <br />
              No personal information is needed. Leave the fields blank or
              use sample details.
            </p>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-name">
                Full name (sample)
              </label>

              <input
                id="consultation-name"
                type="text"
                autoComplete="off"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-email">
                E-mail (sample)
              </label>

              <input
                id="consultation-email"
                type="email"
                autoComplete="off"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-phone">
                Phone number (sample)
              </label>

              <input
                id="consultation-phone"
                type="tel"
                autoComplete="off"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-instagram">
                Instagram (sample)
              </label>

              <input
                id="consultation-instagram"
                type="text"
                autoComplete="off"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-project">
                About project (sample)
              </label>

              <textarea
                id="consultation-project"
                rows={2}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="consultation-v2__submit group"
            >
              <span>
                Preview request (demo)
              </span>

              <span>
                <ArrowUpRight
                  size={27}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </button>

            <p role="status" aria-live="polite" className="mt-4 text-sm leading-6">
              {previewed ? "Demo only. No enquiry has been sent." : ""}
            </p>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              Contact studio on WhatsApp
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
