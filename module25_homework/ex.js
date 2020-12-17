const fs = require('fs/promises');

require('yargs')
    .option("headfoot", {alias: 'hf', type: 'boolean', description: 'Добавить Header и Footer'})
    .option("state", {alias: 'st', string: "true", description: 'Добавить state'})
    .option("fragm", {alias: 'fr', type: 'boolean', description: 'Обернуть в Fragments'})
    .option("rout", {alias: 'r', type: 'boolean', description: 'Теги для Rout'})
    .option("folder", {alias: 'f', string: "true", description: 'Допдиректория'})
    .option("sass", {alias: ["cs","scss"], type: 'boolean', description: 'Добавить одноимённый Sass file'})
    .command(['component <component>', 'c'], 'create react-component', {}, (yargs) => {

/* С первой заглавной буквы */
let Component = yargs.component[0].toUpperCase() + yargs.component.slice(1),
    State = (yargs.state ? yargs.state[0].toUpperCase() + yargs.state.slice(1) : "");

fs.appendFile(`D:/SkillDrive/module25_homework/${yargs.folder ? yargs.folder : ""}/${Component}.js`, 

 `import React from 'react';
 ${yargs.rout ? 
 `import {
     Switch,
     Route,
 } from "react-router-dom";
 import NotFound from './NotFound'
 import Home from './Home'` : ""}
 
 const ${Component} = () => {
     ${yargs.state ? 
     `let[${yargs.state}, set${State}] = React.useState(false);
     const handleClick = () => {
         set${State}(${yargs.state} = true)
     }` : ""}
 
     return (
         ${yargs.fragm ? "<Fragment>" : ""}
             ${yargs.headfoot ? "<Header />" : ""}
             ${yargs.rout ? 
             `<Switch>
                 <Route exact path="/" component={Home} />
                 <Route path="/" component={} />
                 <Route component={NotFound} /> 
             </Switch>` : ""}
 
             ${yargs.headfoot ? "<Footer />" : ""}
         ${yargs.fragm ? "</Fragment>" : ""}
     )
 }
  
 export default ${yargs.component};
 `)
 .then (function() {
    console.log(`React ${yargs.component} is created!`)
 })
 .catch(err => console.log(err))

 if(yargs.sass) fs.appendFile(`D:/SkillDrive/module25_homework/${yargs.folder ? yargs.folder : ""}/${Component}.scss`, "")
 .then (function() {
     console.log(`Sass ${yargs.component} is created!`)})
 .catch(err => console.log(err));
})
 .argv;