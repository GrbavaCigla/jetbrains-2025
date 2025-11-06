import { HOST } from "./constants";
import { Category } from "./models";
import { resolve } from "./utils";

export default async function getCategories() {
    const resp = await resolve(`${HOST}/api_category.php`);

    return resp !== null && resp.trivia_categories !== undefined ?
        resp.trivia_categories as Array<Category> :
        null;
}