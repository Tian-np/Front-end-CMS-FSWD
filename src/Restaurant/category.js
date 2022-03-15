import CategoriesContext from "../Context/CategoryContext";
import { sanitize } from "dompurify";
import React, { Fragment } from "react";
import { useContext } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

const Categoriespage = () => {
  const { categories, createCategories } =
    useContext(CategoriesContext);

  createCategories("CategoriesComplete");

  return (
    <>
      {categories.map((category, index) => (
        <Fragment key={index}>
          <li>
            <NavLink to={`/category/${category.slug.toLowerCase()}`}>
              <div
                dangerouslySetInnerHTML={{ __html: sanitize(category.slug) }}
              ></div>
            </NavLink>
          </li>
        </Fragment>
      ))}
    </>
  );
};

export default Categoriespage;
