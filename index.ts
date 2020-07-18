// console.log("Hello Deno");

type StoryT = {
  title: string;
  url: string;
  created_at_i: number;
};

const url = "http://hn.algolia.com/api/v1/search?query=javascript";

const result = await fetch(url).then((result) => result.json());

const stories = result.hits.map((hit: StoryT) => ({
  title: hit.title,
  url: hit.url,
  createdAt: hit.created_at_i,
}));

console.log(stories);
