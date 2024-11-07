import { heebo } from "@/app/lib/fonts";
import Image from "next/image";

type FeaturedWorkPropsType = {
  title: string;
  imgSrc: string;
  year: string;
  type: string;
  description: string;
};

export function FeaturedWork({
  title,
  imgSrc,
  year,
  type,
  description,
}: FeaturedWorkPropsType) {
  return (
    <div className={`${heebo.className} feature-card`}>
      <div className="feature-card-image">
        <Image
          alt="feature work image"
          fill
          src={imgSrc}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="feature-card-content">
        <h3 className="feature-card-title">{title}</h3>
        <p className="space-x-2">
          <span className="feature-card-year">{year}</span>
          <span className="feature-card-type">{type}</span>
        </p>
        <p className="feature-card-description">{description}</p>
      </div>
    </div>
  );
}
