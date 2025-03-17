import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const posts = await getPosts();
    const post = posts.find((p) => p.id === ctx.params.id);
    if (!post) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function BlogPost(props: PageProps) {
  const post = props.data;

  return (
    <div class="container">
      <h1>{post.title}</h1>
      <p class="date">{post.date}</p>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
      <a href="/blog">← Torna al blog</a>
    </div>
  );
}
