"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
export default function Navbar() {
  const [data, setData] = useState([]);
  const [menuOpen, SetMenuOpen] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const genres = await getCategory();
        setData(genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
        setData([]);
      }
    }

    fetchData();
  }, []);
  function toggleMenu() {
    SetMenuOpen(!menuOpen);
  }
  return (
    <div className="sm:hidden flex justify-center items-center p-5">
      <button className="z-[999999] bg-slate-800 absolute right-5  hover:bg-slate-600 transition p-2 rounded-lg ml-5">
        {" "}
        <svg
          onClick={toggleMenu}
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div>
        <h1 className="text-3xl font-bold">Mercado Libre</h1>
      </div>
      <nav
        className={`bg-slate-900 w-full ${
          menuOpen ? "block" : "hidden"
        } fixed h-screen top-0 bottom-0 flex items-center p-5 flex-col gap-3`}
      >
        <h1 className="text-3xl font-bold">Mercado Libre</h1>
        <div className="flex-grow text-center grid grid-cols-2 gap-3">
          {data.map((category) => (
            <Link
              key={category.id}
              className="bg-slate-600 rounded-md flex items-center justify-center"
              href={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
