import { heebo } from "@/app/lib/fonts";

type PostPropsType = {
  title: string;
  date: string;
  tags: string;
  content: string;
};
export function Post({ title, date, tags, content }: PostPropsType) {
  return (
    <div className={`${heebo.className} post-card`}>
      <h3 className="post-card-heading">{title}</h3>
      <p className="post-card-date">
        <span>
          {date} {" | "}
        </span>
        <span>{tags}</span>
      </p>
      <p className="post-card-content">{content}</p>
    </div>
  );
}
