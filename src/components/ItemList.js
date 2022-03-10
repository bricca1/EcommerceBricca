
import React ,{ useEffect , useState } from 'react';
import Item from './Item.js'
function ItemList(){
    const [item, setItem] = useState([
        {id:1 ,title:'Iphone 5', description:'iphone5 vga', price: 45667, pictureUrl:'https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a02.png?raw=true' },
        {id:2 ,title:'Iphone XR', description:'Iphone xr description', price: 88000, pictureUrl:'https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a02.png?raw=true' },
        {id:3 ,title:'Samsung A5', description:'Samsung A5 description', price: 9000, pictureUrl:'https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a02.png?raw=true' }

    ])
    console.log(item)
    return(
        <>
            {item.length ? item.map( (data) => <Item key={data.id} items={data}/> ) : -1} 
        </>
            
       
    )

        
}
export default ItemList;