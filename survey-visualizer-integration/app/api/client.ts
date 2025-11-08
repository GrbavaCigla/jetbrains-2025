import { HOST } from "./constants";
import { Category, CategoryCountItem, GlobalCount } from "./models";
import { resolve } from "./utils";

export async function getCategories(): Promise<Array<Category> | null> {
  const resp = await resolve(`${HOST}/api_category.php`);

  return resp !== null && "trivia_categories" in resp
    ? (resp.trivia_categories as Array<Category>)
    : null;
}

export async function getGlobalCount(): Promise<GlobalCount | null> {
  const resp = await resolve(`${HOST}/api_count_global.php`);

  return resp !== null ? (resp as GlobalCount) : null;
}

export async function getCategoryCount(
  categoryId: number
): Promise<CategoryCountItem | null> {
  const resp = await resolve(`${HOST}/api_count.php?category=${categoryId}`);

  return resp !== null && "category_question_count" in resp
    ? {
        ...(resp.category_question_count as CategoryCountItem),
        category_id: categoryId,
      }
    : null;
}
