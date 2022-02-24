
import CartWidget from './CartWidget.js'
function NavBar(){
    return<>
        <div className="App-spacer">
            <a href="">
                Productos | 
            </a> 
            <a  href="" style={{marginLeft: '20px'}}>
                Categorías |
            </a>
            <a  href="" style={{marginLeft: '20px'}}>
                Sobre Nosotros |
            </a>
            <a  href="" style={{marginLeft: '20px'}}> 
                Contacto |
            </a>
            <a  href="" style={{marginLeft: '20px'}}>Login
            </a>
            <CartWidget/>
        </div>

    </>
}
export default NavBar;