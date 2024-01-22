import Link from "next/link";

async function getCategory() {
  try {
    const response = await fetch("https://api.mercadolibre.com/sites/MLA/");
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function Sidebar() {
  const categories = await getCategory();

  return (
    <div className="hidden sm:flex w-80 ">
      <ul className="flex flex-col gap-4 p-5">
        {categories.map((category, index) => (
          <li key={category.id}>
            <Link
              className="hover:text-neutral-300 transition-colors text-lg"
              key={category.id}
              href={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
