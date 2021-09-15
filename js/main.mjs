import _App from './App.mjs';
import Tache from './Tache.mjs';

(function(){
    let App = {};
    document.addEventListener("DOMContentLoaded", ()=>{
        //App = new _App();
        //Tache.setUsager({}, (data)=>{console.log(data, "nouvel usager")});
        /*Tache.setUsager({})
            .then((data)=>{console.log("nouvel usager", data)});*/
        Tache.logUsager()
            .then(()=>{
                console.log("connecté");
                Tache.delUsager()
            });
        //setTimeout(function(){Tache.delUsager()}, 5000);
        //Tache.delUsager();
    })
})()
