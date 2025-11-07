import { HOST } from "./constants";
import { Category, GlobalCount } from "./models";
import { resolve } from "./utils";

export async function getCategories(): Promise<Array<Category> | null> {
  const resp = await resolve(`${HOST}/api_category.php`);

  return resp !== null && "trivia_categories" in resp ?
    resp.trivia_categories as Array<Category> :
    null;
}

export async function getGlobalCount(): Promise<GlobalCount | null> {
  const resp = await resolve(`${HOST}/api_count_global.php`);

  return resp !== null ? resp as GlobalCount : null;
}
