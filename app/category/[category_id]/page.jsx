async function getProductsCategory({ category_id }) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=${category_id}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function Category({ params }) {
  const { category_id } = params;
  const data = await getProductsCategory({ category_id });
  return (
    <div className=" grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
      {data.map((product) => (
        <a
          href={product.permalink}
          key={product.id}
          className="border h-[300px] md:w-[200px] w-[150px] p-3 flex-col justify-center hover:scale-105 transition items-center flex"
        >
          <img src={product.thumbnail} />
          <p>{product.title}</p>
        </a>
      ))}
    </div>
  );
}
