import React, { createContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categorySnapshot = await getDocs(collection(db, 'category'));
        const categoryData = categorySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategory(categoryData);
      } catch (error) { 
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, []);

  return (
    <CategoryContext.Provider value={category}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };