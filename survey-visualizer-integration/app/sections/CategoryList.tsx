import Tag from "../components/Tag";
import BaseSection from "../components/BaseSection";
import { Category } from "../api/models";

interface Props {
  categories: Array<Category>
}

export default async function CategoryListSection({categories}: Props) {
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
    <BaseSection>
      <p className="text-center text-lg font-semibold mx-auto max-w-3xl">
        The following list shows all the categories our trivia questions cover. Each one offers a unique set of challenges — from general knowledge to niche topics. Dive into your favorite subjects or test your skills across them all!
      </p>
      <div className="flex justify-center flex-wrap gap-2 max-w-5xl mx-auto">
        {tags}
      </div>
    </BaseSection>
  )
}
