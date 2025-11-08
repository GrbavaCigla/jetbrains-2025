import { getCategories } from "@/app/api/client";

import CategoryDistributionSection from "./sections/CategoryDistribution";
import CategoryListSection from "./sections/CategoryList";
import DifficultyDistributionSection from "./sections/DifficultyDistribution";

export default async function Home() {
  const categories = (await getCategories()) ?? [];

  return (
    <main>
      <CategoryListSection categories={categories} />
      <CategoryDistributionSection categories={categories} />
      <DifficultyDistributionSection categories={categories} />
      <section>
        <div className="container mx-auto sm:border-x-(length:--border)">
          <div className="py-12 px-4">
            <h3 className="text-center">
              Made by{" "}
              <a
                href="https://github.com/GrbavaCigla"
                className="link link-info"
              >
                GrbavaCigla
              </a>{" "}
              for Jetbrains 2025 Internship.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
