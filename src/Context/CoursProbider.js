
import React, {createContext, useState } from 'react'

export const CoursContext = createContext();

const CoursProbider = () => {
  const [cart, setCart] = useState()
  return <CoursContext.Provider value={[cart, setCart]}></CoursContext.Provider>;
};

export default CoursProbider;
