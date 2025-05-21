
import HeaderComponent from "../components/HeaderComponent";
import CategoryRow from "../components/CategoryComponent";

function CategoryPage() {
  const categories = [
    { cod: 1, nom: "Horror" },
    { cod: 2, nom: "Comedy" },
    { cod: 3, nom: "Action" },
    { cod: 4, nom: "Drama" },
  ];

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <h3 className="border-bottom pb-3 mb-3">Categorías</h3>
        {categories.map((item) => (
          <CategoryRow key={item.cod} category={item} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
