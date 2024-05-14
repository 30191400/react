import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello chai biscuit</h1>    
    </div>
  )
}

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   Children:'click me to visit google'
// }

const anotherelement=(
  <a href="https://google.com" target="_blank">visit google</a>
)

// global
const anotherUser="chai aur code"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to google visit',anotherUser
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp/>
    {reactElement}
    {anotherelement}
    
  </React.StrictMode>
);
