import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../services/firebase/firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: []
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCatgories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    }

    getCatgories();
  }, []);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
