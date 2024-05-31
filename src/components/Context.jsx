import React from 'react'
import A from './A'
export const nameContext= React.createContext();
function Context() {
  return (
    <>
        <h1>USe Context Hook</h1>
        <nameContext.Provider value={["kiet","vishwas"]}>
    <A/>
            </nameContext.Provider>   
      
 </>
  )
}

export default Context
