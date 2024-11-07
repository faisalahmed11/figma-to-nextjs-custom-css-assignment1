import { heebo } from "@/app/lib/fonts";
import { FeaturedWork } from "./featured-work";

export function FeaturedWorkSection() {
  return (
    <section className="featured-works-section">
      <div className="featured-works-container">
        <h2 className={`${heebo.className} featured-works-title`}>
          Featured Works
        </h2>
        <div className="featured-works-container">
          <FeaturedWork
            title="Designing Dashboards"
            type="Dashboard"
            imgSrc="/images/feature-work1.png"
            year="2020"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeaturedWork
            title="Designing Dashboards"
            type="Dashboard"
            imgSrc="/images/feature-work3.png"
            year="2020"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeaturedWork
            title="Designing Dashboards"
            type="Dashboard"
            imgSrc="/images/feature-work3.png"
            year="2020"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </div>
    </section>
  );
}
