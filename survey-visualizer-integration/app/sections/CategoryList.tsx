import Tag from "../components/Tag";
import BaseSection from "../components/BaseSection";
import { Category } from "../api/models";

interface Props {
  categories: Array<Category>
}

export default async function CategoryListSection({categories}: Props) {
  const classes = [
    "badge-primary",
    "badge-secondary",
    "badge-accent",
    "badge-error",
    "badge-warning",
    "badge-success",
    "badge-info",
    "badge-neutral",
  ];

  const tags = categories.map(
    (cat, index) =>
      <span key={cat.id} className={`badge ${classes[index % classes.length]}`}>{cat.name}</span>
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
