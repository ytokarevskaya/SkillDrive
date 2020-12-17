const fs = require('fs/promises');

require('yargs')
    .option("header", {alias: 'h', type: 'boolean', description: 'Добавить Header'})
    .option("footer", {alias: 'f', type: 'boolean', description: 'Добавить Footer'})
    .option("folder", {alias: 'fld', string: "true", description: 'Допдиректория'})
    .option("state", {alias: 'st', string: "true", description: 'Добавить state'})
    .option("sass", {alias: ["cs","scss"], type: 'boolean', description: 'Добавить одноимённый Sass file'})
    .option("fragm", {alias: 'fr', type: 'boolean', description: 'Обернуть в Fragments'})
    .option("rout", {alias: 'r', type: 'boolean', description: 'Теги для Rout'})

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
 ${yargs.header ? 
"import Header from '../global/Header';" : ""}
 ${yargs.footer? 
"import Footer from '../global/Footer';" : ""}

 const ${Component} = () => {
     ${yargs.state ? 
     `let[${yargs.state}, set${State}] = React.useState(false);
     const handleClick = () => {
         set${State}(${yargs.state} = true)
     }` : ""}
     return (
${yargs.fragm ? `<Fragment>` : ""}
${yargs.header ? `<Header />` : ""}
${yargs.rout ? 
        `<Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} /> 
        </Switch>` : ""}
${yargs.footer ? `<Footer />` : ""}
${yargs.fragm ? `</Fragment>` : ""}
     )
 }
  
 export default ${Component};
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