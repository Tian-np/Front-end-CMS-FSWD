import CategoriesContext from "../Context/CategoryContext";
import { sanitize } from "dompurify";
import React, { Fragment } from "react";
import { useContext } from "react";
import Categories from "../Components/Categories";
import { Route, Switch, NavLink } from "react-router-dom";

const Categoriespage = () => {
  const { categories, createCategories, getCategories } =
    useContext(CategoriesContext);

  createCategories("CategoriesComplete");

  return (
    <>
      {categories.map((category, index) => (
          <Fragment key={index}>
            <li><NavLink to={`/category/${category.slug.toLowerCase()}`}>
              <div dangerouslySetInnerHTML={{__html: sanitize(category.slug)} }></div>
              {/* <Categories></Categories> */}
            </NavLink></li>
          </Fragment>
      ))}
    </>
  );
};

export default Categoriespage;
