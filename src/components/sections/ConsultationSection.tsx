"use client";

import {
  FormEvent,
  useState,
} from "react";

import { ArrowUpRight } from "lucide-react";

export function ConsultationSection() {
  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitted(true);
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
              Tattoo studio
            </span>

            <span />

            <span />
          </div>

          <h2>
            Get a free
            <br />
            consultation
          </h2>

          <p>
            Your idea. Our artists. A unique design.
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
              In addition to the consultation
            </span>

            <h3>
              A team of our
              <br />
              artists will help
              <br />
              you create a free
              <br />
              sketch
            </h3>

            <p>
              We&apos;ll discuss your concept,
              help refine the idea and match you
              with an artist whose style is
              suitable for the project.
            </p>

            <div className="consultation-v2__info-meta">
              <span>[ Free consultation ]</span>

              <span>[ Custom design ]</span>
            </div>
          </aside>

          {/* FORM */}
          <form
            data-cursor-tone="dark"
            onSubmit={handleSubmit}
            className="consultation-v2__form"
          >
            <div className="consultation-v2__field">
              <label htmlFor="consultation-name">
                Full Name*
              </label>

              <input
                id="consultation-name"
                name="name"
                type="text"
                required
                autoComplete="name"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-email">
                E-mail*
              </label>

              <input
                id="consultation-email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-phone">
                Phone number*
              </label>

              <input
                id="consultation-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-instagram">
                Instagram
                <span>
                  {" "}(optional)
                </span>
              </label>

              <input
                id="consultation-instagram"
                name="instagram"
                type="text"
              />
            </div>

            <div className="consultation-v2__field">
              <label htmlFor="consultation-project">
                About Project
                <span>
                  {" "}(optional)
                </span>
              </label>

              <textarea
                id="consultation-project"
                name="project"
                rows={2}
              />
            </div>

            {submitted ? (
              <div className="consultation-v2__success">
                <span>
                  [ Submitted ]
                </span>

                <strong>
                  Thank you. We&apos;ll be in touch.
                </strong>
              </div>
            ) : (
              <button
                type="submit"
                className="consultation-v2__submit group"
              >
                <span>
                  Book a consultation
                </span>

                <span>
                  <ArrowUpRight
                    size={27}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
