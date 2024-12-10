import logoReact from './logo.svg';
import logoAngular from './angular.svg'
import LogoVue from './link-icon.png';
import { useEffect, useState } from 'react';

const frameworkz = [
  {
    name: "React",
    version: "18.2.0",
    description: "A JavaScript library for building user interfaces",
    author: "Facebook",
    link: "https://reactjs.org",
    logo: logoReact
  },
  {
    name: "Angular",
    version: "15.2.0",
    description: "A framework for building single-page applications",
    author: "Google",
    link: "https://angular.io",
    logo: logoAngular
  },
  {
    name: "Vue",
    version: "3.2.45",
    description: "A progressive JavaScript framework for building user interfaces",
    author: "Evan You",
    link: "https://vuejs.org",
    logo: LogoVue
  }
];


const Myname = (props) => {
  return <h1> My Name is {props.name} </h1>
}


const Framework = ({ name, description, author, link }) => {
  return (
    <div className='flex flex-col gap-2 hover:bg-slate-100 cursor-pointer w-96 px-5 py-3 rounded-lg'>
      <div className='text-2xl font-bold text-red-800'> {name} </div>
      <div className='text-sm'> Description : {description} </div>
      <div className='text-sm'> Author : {author} </div>
      <a href={link}> Link :  {link} </a>
    </div>
  )
}


const Clock = (props) => {
  return (
    <p>{`${props.newDate}`}</p>
  )
}




const App = () => {

  const [date, setDate] = useState(new Date().toLocaleTimeString());   // signal
  const [isVisible, setVisible] = useState(true);   // signal

  const logoHeader = frameworkz[0].logo;

  useEffect(() => {                       
    // OnInit
    const interval = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    
    // OnDestroy --- return a function
    return () => clearInterval(interval);
  }, []);                                         // empty dependencies for the mount

  const onChangeLogo = (value) => {
    console.log(value);
  }

  const toggleVisibility = () => {
    setVisible(!isVisible);
  }

  return (
    <div className="App">
      <header className="flex flex-col justify-center w-screen min-h-screen items-center gap-5">

        <img src={logoHeader} className="App-logo" alt="logo" width="100px" />

        <Myname name="Elgissio Franito" />
 
        {/* voir uniquement l'heure si c'est visible=true */}
        {isVisible && <Clock newDate={date} /> }
        {isVisible && <button onClick={() => setDate(new Date().toLocaleTimeString())} className='border bg-green-400 px-5 py-2 rounded-md w-52'> Update Time </button> }

        {/* ternaire */}
        <button onClick={toggleVisibility} className='border bg-green-400 px-5 py-2 rounded-md w-52'> {isVisible ? "Hide Time" : "Show Time"} </button>

        {
          frameworkz.map((value, index) => {
            // return <Framework key={index} {...value} />        // à éviter
            return <Framework key={value.link} {...value} onClick={ () => console.log(value.logo)} />
          })
        }

      </header>
    </div>
  );
}

export default App;
