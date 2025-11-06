import { HOST } from "./constants";
import { Category } from "./models";
import { resolve } from "./utils";

export default async function getCategories() {
    const resp = await resolve(`${HOST}/api_category.php`);

    return resp !== null && "trivia_categories" in resp ?
        resp.trivia_categories as Array<Category> :
        null;
}