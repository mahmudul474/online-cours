
import React, {createContext, useState } from 'react'

export const CoursContext = createContext();

const CoursProbider = ({children}) => {
  const [cart, setCart] = useState([])
  console.log(cart)
  return <CoursContext.Provider value={[cart, setCart]}>
 {
children
 }


  </CoursContext.Provider>;
};

export default CoursProbider;
