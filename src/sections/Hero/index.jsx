import "./index.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="main-container hero-container">
        <div className="hero-text-content">
          <div className="hero-rating">
            <img src="/images/stars.webp" alt="five stars rating" />
            <p>103,743+ Happy Noor Customers!</p>
          </div>
          <h1>
            <span className="accent">
              The Korean Needle-Free Botox Alternative:{" "}
            </span>
            Lift Deep Wrinkles and Revives a Youthful, Natural Look... In a Few
            Days*
          </h1>
          <div className="hero-image-mobile-wrapper">
            <picture>
              <img
                src="/images/hero.webp"
                alt="Two women holding Noor face cream"
                loading="lazy"
              />
            </picture>
          </div>
          <ul className="hero-benefits">
            <li>✔️ Visible Results in as little as 2-4 Days*</li>
            <li>✔️ Relaxes muscles without any risk*</li>
            <li>
              ✔️ Powered by Syn-Ake™ Peptide: Clinically shown to reduce
              wrinkle depth by 52% in 28 days¹
            </li>
            <li>✔️ Works For All Skin Types At Any Age*</li>
            <li>✔️ Hydrating + Skin-Firming Without Fillers or Freezing</li>
          </ul>

          <div className="cta-wrapper">
            <button
              className="cta-button"
              onClick={() => navigate("/skin-cream/offers")}
            >
              50% OFF FOR EXISTING CUSTOMERS!
            </button>
            <p className="guarantee">
              100% Satisfaction. 180-Day Money Back Guarantee
            </p>
            <div
              className="payment-methods"
              aria-label="Accepted payment methods"
            >
              <img
                src="/images/paymentMethods.png"
                alt="logos of accepted payment methods"
              />
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <picture>
            <img
              src="/images/hero.webp"
              alt="Two women holding Noor face cream"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
