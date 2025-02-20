const date = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 mins.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Remove from oven. Add the lettuce and serve.",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until cooked through.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese.",
    ],
  },
];

/*
// Данные, массив объектов Recipes
const data = [ ... ];

// Функциональный компонент, предназначенный для Recipes
function Recipe (props) {
	...
}

// Функциональный компонент, предназначенный для Menu
function Menu (props) {
	...
	}

	// Вызов ReactDOM.render для рендеринга Menu в текущей DOM-модели
	reactDOM.render(
		<Menu recipes={date} title="Delicious Recipes"/>,
		document.getElementById("root")
	);
	*/

function Menu(props) {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
    </article>
  );
}

<div className="recipes">
  {props.recipes.map((recipe, i) => (
    <Recipe
      key={i}
      name={recipe.name}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
    />
  ))}
</div>;

{
  props.recipes.map((recipe, i) => <Recipe key={i} {...recipe} />);
}
