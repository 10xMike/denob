import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts } from "../utils/posts.ts";
import { h } from "preact"

export const handler: Handlers = {
    async GET(_, ctx) {
      const posts = await getPosts();
      return ctx.render({ posts });
    },
  };
  

  export default function BlogPage(props: PageProps) {
    const { posts } = props.data;
  
    return (
      <div class="container">
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/blog/${post.id}`}>{post.title}</a> - {post.date}
            </li>
          ))}
        </ul>
        <a href="/">Torna a Home</a>
      </div>
    );
  }
