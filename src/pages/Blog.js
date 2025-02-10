import React from "react";

const articles = [
  {
    id: 1,
    title: "Article 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Article 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Article 3",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

function Blog() {
  return (
    <section className="blog-container">
      <h1>Blog</h1>
      <p>
        Welcome to our blog! Here you can find the latest articles and news.
      </p>

      {articles.map((article) => (
        <article key={article.id} className="blog-article">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </article>
      ))}
    </section>
  );
}

export default Blog;
