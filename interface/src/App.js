import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function App() {
  const [allProducts, setProducts] = useState([])
  const [allProductsBrand, setProductsBrand] = useState([])
  const [childBool, setChildBool] = useState(false)
  const [child, setChild] = useState([])

  useEffect( ()=>{
  getDataFromMongo()
  },[])

const getDataFromMongo = async () =>{
  const resp = await fetch("http://localhost:3000/v1/products/all")
  const call = await resp.json()
  let brandNames = Object.keys(call.data.products[0])
  setProductsBrand(brandNames)
  let onlyTwelve =  call.data.products[0].bmw['x6/hybrid'].slice(1, 13)
  setProducts(onlyTwelve)
}

const ChildComp = (val)=> {

setChildBool(true)
setChild(val)
console.log(val)

}
  return (
    <>
        {
                  !childBool?<>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={allProductsBrand}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search Brands" />}
          />
          <Box sx={{ width: 500, minHeight: 829 }}>
            <Masonry columns={3} spacing={2}>
              {allProducts?.map((item, index) => (
                <div style={{border:'1px solid black'}} key={index} onClick={()=>{ChildComp(item)}} >
                
                  <h4>{item.model} </h4>
                  <h4>{item.msrp} </h4>
                  <img src={item.image} />
                </div>
              ))}
            </Masonry>
          </Box>
</>

:
      <>
      <h1>{child.model}</h1>
      <h2>{child.make}</h2>
      <img src={child.image} />
      </>
}
    </>
  )
}

export default App