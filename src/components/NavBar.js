let styles = {
    margin: '10px'
   
   }
function NavBar(){
    return<>
        <div className="App-spacer">
            <h>
                Productos | 
            </h>
            
            <h style={{marginLeft: '20px'}}>
                Categorías |
            </h>
            <h style={{marginLeft: '20px'}}>
                Sobre Nosotros |
            </h>
            <h style={{marginLeft: '20px'}}> 
                Contacto |
            </h>
            <h style={{marginLeft: '20px'}}>Login
            </h>
        </div>

    </>
}
export default NavBar;