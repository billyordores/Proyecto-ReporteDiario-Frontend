import React, {useState} from 'react';
import './css/App.css'
import Category from './components/Category'; /*Se cambiara de ruta*/

function App() {
  const[dropdown, setDropdown]=useState(false);
  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }
  
  return (
    <div>

      <div className="Header">
        <img className='Logo' src={process.env.PUBLIC_URL + 'Logo_EIA.png'} />
        <h1 className="Title">Plataforma de Gestión para Mantenimiento Aulas</h1>
      </div>

      <div className='Contens'>
        <ul>
          <Category name="Planta 1" item={[
            <div className='To_check'>
              <div className='Por_revisar'>
              <a>POR REVISAR</a>
              </div>


            
              <div className='Check'>
                <div className='Revisadas'>
                  <a>REVISADAS</a>
                </div>




              </div>
            </div>  
          ]}/>

          <Category name="Planta 0" item={[
            <div className='To_check'>
            <div className='Por_revisar'>
            <a>POR REVISAR</a>
            </div>


          
            <div className='Check'>
              <div className='Revisadas'>
                <a>REVISADAS</a>
              </div>




            </div>
          </div>
          ]}/>

          <Category name="Planta -1" item={[
            <div className='To_check'>
            <div className='Por_revisar'>
            <a>POR REVISAR</a>
            </div>


          
            <div className='Check'>
              <div className='Revisadas'>
                <a>REVISADAS</a>
              </div>




            </div>
          </div>
          ]}/>

          <Category name="Planta -2" item={[
            <div className='To_check'>
            <div className='Por_revisar'>
            <a>POR REVISAR</a>
            </div>


          
            <div className='Check'>
              <div className='Revisadas'>
                <a>REVISADAS</a>
              </div>




            </div>
          </div>
          ]}/>
        </ul>
      </div>


    </div>
  );
}

export default App;