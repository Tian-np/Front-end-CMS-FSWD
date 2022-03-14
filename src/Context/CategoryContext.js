import { createContext, useEffect, useState } from "react";

const URL = "https://fswd-wp.devnss.com/wp-json/wp/v2/categories";

const CategoriesContext = createContext();

export const CategoriesContextProvider = (props) => {
  /*const [isLoading, setIsLoading] = useState(true); */
  const [categories, setCategories] = useState([]);

  const createCategories= (name) => {
    console.log(name);
  };

  const getCategories= (categoriesId) => {
    return categories.find((categories) => categories.id === categoriesId);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      /* setIsLoading(true); */
      const response = await fetch(URL, {
        method: "GET"
      });

      const data = await response.json();

      setCategories(data);
      /*  setIsLoading(false); */
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        /*isLoading,*/
        categories,
        createCategories,
        getCategories      
    }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
