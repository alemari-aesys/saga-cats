import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCat } from "./redux/reducers/catsReducer"


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCat());
  }, [dispatch]);

  const cat = useSelector((state) => state.cat);
  console.log(cat && cat[0].url);

  const newCat = () => {
    dispatch(getCat());
  }

  return (
    <div>
      {cat && <img style={{width: "300px", height: "300px"}} src={cat[0].url}></img>}
      <button onClick={newCat}>NEW CAT</button>
    </div>
  );
}

export default App;
