import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log("Transformed ingr: ", transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start to add ingredients</p>;
  }

  // const arrayOfIngrNames = Object.keys(props.ingredients);

  // console.log("\n\n Array Of Ingredient Names: ", arrayOfIngrNames);

  // const qtyOfIngridientsArray = arrayOfIngrNames.map((igKey) => {
  //   console.log(
  //     "Gettog the number of each ingredient: ",
  //     igKey,
  //     props.ingredients[igKey]
  //   );
  //   return [...Array(props.ingredients[igKey])];
  // });

  // console.log("\n\nQuantity Of ingredients: ", qtyOfIngridientsArray);

  // const burgerIngredients = qtyOfIngridientsArray.map((_, index) => {
  //   return arrayOfIngrNames.map((ingredient) => {
  //     return <BurgerIngredient key={ingredient + index} type={ingredient} />;
  //   });
  // });

  // console.log("\n\nArray of Burger Ingredient components: ", burgerIngredients);
  // console.log(
  //   "\n\nArray of Burger Ingredient components: ",
  //   transformedIngredients
  // );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
