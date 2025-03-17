import { extract } from "https://deno.land/std@0.145.0/encoding/front_matter.ts";
import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts";

export async function getPosts() {
  const files = [...Deno.readDirSync("./posts")].filter(f => f.isFile);
  
  return Promise.all(files.map(async (file) => {
    const text = await Deno.readTextFile(`./posts/${file.name}`);
    const { attrs, body } = extract(text);
    return { id: file.name.replace(".md", ""), title: attrs.title, date: attrs.date, content: body };
  }));
}
