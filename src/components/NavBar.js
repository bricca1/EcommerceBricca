
import CartWidget from './CartWidget.js'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function NavBar(){
    return<>
        <div className="App-spacer">
            <h3>CELLFIX <PhoneIphoneIcon/></h3>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                <Button><a href="">
                    Productos 
                </a> </Button>
                <Button><a  href="">
                    Categorías
                </a></Button>
                <Button>
                    <a  href="" >
                    Sobre Nosotros
                    </a>
                </Button>
                <Button>
                    <a  href="" > 
                        Contacto
                    </a>
                </Button>
                <Button>
                    <a  href="" >Login
                    </a>
                </Button>
                <Button> 
                    <CartWidget/>
                </Button>
            </ButtonGroup>

        </div>

    </>
}

export default NavBar;