import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

       <main id='home'>


           <Navbar/>
           <section className='home'>   
                 <h1> Home   </h1>
           
            </section>
           <section className='about' id='about'>   
                <h1>about </h1>  
             </section>
           <section className='Projects '   id='project'> 
                 <h1> Projects </h1>   
           </section>
           <section className='contacts' id='contact'>  
                 <h1>Contacts  </h1>   
             </section>


           <section className='rest' id='rest'> 
                        contacts  
            </section>















       </main>
      




    </div>
  );
}

export default App;
