import Affichage from './Affichage.mjs';
import _App from './App.mjs';
import Tache from './Tache.mjs';

(function(){
    let App = {};

    const aRoutes = [
        {fichier:"enregistrer.html", tmpl : ""}, 
        {fichier:"connecter.html", tmpl : ""}, 
        {fichier:"tache.html", tmpl : ""}, 
        {fichier:"ajouter.html", tmpl : ""}, 
    ];

    document.addEventListener("DOMContentLoaded", ()=>{
        //App = new _App();
        //Tache.setUsager({}, (data)=>{console.log(data, "nouvel usager")});
        /*Tache.setUsager({})
            .then((data)=>{console.log("nouvel usager", data)});*/
        /*Tache.logUsager()
            .then(()=>{
                console.log("connecté");
                Tache.delUsager()
            });*/

        //setTimeout(function(){Tache.delUsager()}, 5000);
        //Tache.delUsager();

        //const tmpl = document.querySelector("#tmplEnregistrer").innerHTML;
        const noeud = document.querySelector("main");
        //Affichage.AfficherTemplate(tmpl,{}, noeud);
        
        Affichage.chargementTemplate(aRoutes)
        .then(
            ()=>Affichage.AfficherTemplate(aRoutes[1].tmpl,{}, noeud));        
        });
})()
