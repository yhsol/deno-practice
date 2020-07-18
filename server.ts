import { serve } from "https://deno.land/std/http/server.ts";

type StoryT = {
  title: string;
  url: string;
  created_at_i: number;
};

const url = "http://hn.algolia.com/api/v1/search?query=javascript";

const server = serve({ port: 8000 });

for await (const req of server) {
  const result = await fetch(url).then((result) => result.json());

  const stories = result.hits.map((hit: StoryT) => ({
    title: hit.title,
    url: hit.url,
    createdAt: hit.created_at_i,
  }));

  req.respond({ body: JSON.stringify(stories) });
}
