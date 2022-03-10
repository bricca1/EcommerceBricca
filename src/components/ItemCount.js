import React ,{ useEffect , useState } from 'react';
import Button from '@mui/material/Button';
function ItemCount({initial, stock}){
    const [count, setCount] = useState(initial)
    const handleAdd = () => {
        if (count <= stock){
            setCount(count + 1)
        }
     }
     const handleSubstract = () => {
        if (count > 0){
            setCount(count - 1)
        }
     }
    return<>
        <div >
            <h3>stock {count}</h3>
            <Button variant="outlined" color="error" onClick={handleSubstract}>
                -
            </Button>
            <Button variant="contained" color="success" onClick={handleAdd}>
                +
            </Button>




        </div>
    </>

}
export default ItemCount;