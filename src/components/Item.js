import ItemCount from './ItemCount.js'
import Card from '@mui/material/Card';
import { CardContent, CardHeader, CardMedia } from '@mui/material';

function Item({items}){
    console.log(items.title)
    return<>
        
        <Card variant="outlined" sx={{ maxWidth:345 }} className="Item-container">
                <CardMedia
                component="img"
                height="500"
                width="500"
                image={items.pictureUrl}
                alt="Paella dish"
            />
            <CardContent><h1>{items.title}</h1></CardContent>
            <CardContent><ItemCount stock={15} initial={1}/></CardContent>

        </Card>
    </>
}
export default Item