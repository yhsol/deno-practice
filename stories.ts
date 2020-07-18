import format from "https://deno.land/x/date_fns/format/index.js";

type StoryT = {
  title: string;
  url: string;
  created_at_i: number;
};

export const mapStory = (sotry: StoryT) => ({
  title: sotry.title,
  url: sotry.url,
  createdAt: format(
    new Date(sotry.created_at_i * 1000),
    "yyyy-MM-dd",
    "",
  ),
});
