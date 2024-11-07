import Image from "next/image";
import { heebo } from "../lib/fonts";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        {/* Background overlay */}
        <div className="hero-bg-overlay"></div>

        <Image
          src="/images/profile.png"
          alt="Profile image"
          width={400}
          height={400}
          className="hero-profile-image"
        />
      </div>

      <div className={`${heebo.className} hero-text-container`}>
        <h1 className="hero-heading">Hi, I am John, Creative Technologist</h1>
        <p className="hero-paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="hero-button">Download Resume</button>
      </div>
    </section>
  );
}
