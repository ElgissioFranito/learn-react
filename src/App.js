import logoReact from './logo.svg';
import logoAngular from './angular.svg'
import LogoVue from './link-icon.png';
import { useState } from 'react';

const frameworkz = {
  react: {
    name: "React",
    version: "18.2.0",
    description: "A JavaScript library for building user interfaces",
    author: "Facebook",
    link: "https://reactjs.org",
    logo: logoReact
  },
  angular: {
    name: "Angular",
    version: "15.2.0",
    description: "A framework for building single-page applications",
    author: "Google",
    link: "https://angular.io",
    logo: logoAngular
  },
  vue: {
    name: "Vue",
    version: "3.2.45",
    description: "A progressive JavaScript framework for building user interfaces",
    author: "Evan You",
    link: "https://vuejs.org",
    logo: LogoVue
  }
};


const Myname = (props) => {
  return <h1> My Name is {props.name} </h1>
}


const Framework = (props) => {
  return (
    <div className='flex flex-col gap-2 hover:bg-slate-100 cursor-pointer w-96 px-5'>
      <div className='text-2xl font-bold text-red-800'> {props.framework.name} </div>
      <div className='text-sm'> Description : {props.framework.description} </div>
      <div className='text-sm'> Author : {props.framework.author} </div>
      <a href={props.framework.link}> Link :  {props.framework.link} </a>
    </div>
  )
}


const Clock = (props) => {
  return (
    <p>{`${props.newDate}`}</p>
  )
}


const App = () => {

  const [date, setDate] = useState(new Date());

  const logoHeader = frameworkz.react.logo;

  const onChangeLogo = () => {
    console.log("haha");
  }

  return (
    <div className="App">
      <header className="flex flex-col justify-center w-screen min-h-screen items-center gap-5">

        <img src={logoHeader} className="App-logo" alt="logo" width="100px" />

        <Myname name="Elgissio Franito" />

        <Clock newDate={date} />
        <button onClick={() => setDate(new Date())} className='border bg-green-400 px-5 py-2 rounded-md w-52'> update Date </button>

        <Framework framework={frameworkz.react} onClick={onChangeLogo} /> <br />
        <Framework framework={frameworkz.angular} onClick={onChangeLogo} /> <br />
        <Framework framework={frameworkz.vue} onClick={onChangeLogo} /> <br />

      </header>
    </div>
  );
}

export default App;
