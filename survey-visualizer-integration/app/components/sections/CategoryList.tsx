import getCategories from "@/app/api/categories";
import Tag from "../Tag";

export default async function CategoryListSection() {
  const categories = await getCategories() ?? [];

  const colors = [
    ["#F54927", "white"],
    ["#D3F527", undefined],
    ["#27D3F5", "white"],
    ["#4927F5", "white"],
    ["#27F5B0", undefined],
  ];

  const tags = categories.map(
    (cat, index) =>
      <Tag
        key={cat.id}
        bg={colors[index % colors.length][0]}
        fg={colors[index % colors.length][1]}
      >
        {cat.name}
      </Tag>
  )

  return (
    <section className="border-b-4">
      <div className="container mx-auto sm:border-x-4">
        <div className="py-12 px-4 space-y-12 ">
          <p className="text-center text-lg font-semibold mx-auto max-w-3xl">
            The following list shows all the categories our trivia questions cover. Each one offers a unique set of challenges — from general knowledge to niche topics. Dive into your favorite subjects or test your skills across them all!
          </p>
          <div className="flex justify-center flex-wrap gap-2 max-w-5xl mx-auto">
            {tags}
          </div>
        </div>
      </div>
    </section>
  )
}
