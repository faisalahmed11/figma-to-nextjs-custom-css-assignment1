import { heebo } from "@/app/lib/fonts";
import { Post } from "./post";

export function PostSection() {
  return (
    <section className="section-recent-posts">
      <div className="recent-posts-container">
        <div className={`${heebo.className} recent-posts-header`}>
          <h2>Recent Post</h2>
          <button>View all</button>
        </div>
        <div className="recent-posts-grid">
          <Post
            title="Making a design system from scratch"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            tags="Design , Pattern"
            date="12 Feb 2020"
          />
          <Post
            title="Making a design system from scratch"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            tags="Design , Pattern"
            date="12 Feb 2020"
          />
        </div>
      </div>
    </section>
  );
}
