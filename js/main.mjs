import Affichage from './Affichage.mjs';
import _App from './App.mjs';
import Tache from './Tache.mjs';

import page from "//unpkg.com/page/page.mjs";

(function(){
    let App = {};


    const aRoutes = [
        {path: "/enregistrer", fichier:"enregistrer.html", tmpl : "", cb:cbEnregistrer}, 
        {path: "/connecter", fichier:"connecter.html", tmpl : "", cb:cbConnecter}, 
        {path: "/tache", fichier:"tache.html", tmpl : "", cb:cbTache}, 
        {path: "/ajouter", fichier:"ajouter.html", tmpl : "", cb:cbAjouter}, 
        {path: "/", fichier:"tache.html", tmpl : "", cb:cbAccueil}, // Pas optimal, chargement du tache.html fait deux fois
    ];

    function cbEnregistrer(ctx){
        console.log("Enregistrer");
        // 1. Chercher template
        
        // 2. Chercher les données
        // 3. Faire l'affichage

        
    }
    
    function cbConnecter(ctx){
        console.log("Connecter");
    }
    
    function cbAccueil(ctx){
        console.log("Accueil");
    }

    function cbAjouter(ctx){
        console.log("Ajouter");
    }

    function cbTache(ctx){
        console.log("Tache");
    }

    document.addEventListener("DOMContentLoaded", ()=>{

       /* 
       page("/", cbAccueil);
        page("/connecter", cbConnecter);
        page("/enregistrer", cbEnregistrer);
        page("/ajouter", cbAjouter);
        page("/tache", cbTache)
        
        page({
            hashbang:true
        });
        */

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
            ()=>{
                Affichage.AfficherTemplate(aRoutes[3].tmpl,{}, noeud);
                aRoutes.forEach(uneRoute => {
                    page(uneRoute.path, uneRoute.cb);
                });
                page({
                    hashbang:true
                });    
            }
        );
    });
})()
