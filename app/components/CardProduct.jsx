async function getProducts() {
  try {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326"
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function CarProduct() {
  const data = await getProducts();
  return (
    <div className=" grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
      {data.slice(0, 28).map((product) => (
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
