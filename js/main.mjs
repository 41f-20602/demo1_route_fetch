import Affichage from './Affichage.mjs';
import _App from './App.mjs';
import Tache from './Tache.mjs';

import page from "//unpkg.com/page/page.mjs";

(function(){
    let App = {};


    const aRoutes = [
        {path: "/", fichier:"tache.html", tmpl : "", cb:cbAccueil}, // Pas optimal, chargement du tache.html fait deux fois
        {path: "/tache", fichier:"tache.html", tmpl : "", cb:cbTache}, 
        {path: "/ajouter", fichier:"ajouter.html", tmpl : "", cb:cbAjouter}, 
        {path: "/connecter", fichier:"connecter.html", tmpl : "", cb:cbConnecter}, 
        {path: "/enregistrer", fichier:"enregistrer.html", tmpl : "", cb:cbEnregistrer}, 
        
       
    ];
    /**
     * Retourne le template pour affichage avec Mustache. Appeler par le router
     * @param {Object} ctx 
     * @return {String}
     */
    function getTemplate(ctx, next){
        let template = "";
        aRoutes.forEach(uneRoute => {
            if(uneRoute.path === ctx.path) {
                template = uneRoute.tmpl;
            }
        });
        ctx.template = template;    // Ajouter la propriété template à l'objet ctx
        next(); // Le prochain callback...
        //return template;
    }
    function cbEnregistrer(ctx){
        console.log("Enregistrer");
        console.log(ctx);
        //let template = getTemplate(ctx);
        let template = ctx.template;
        Affichage.AfficherTemplate(template, {}, document.querySelector("main"))
    }
    

    function cbConnecter(ctx){
        console.log("Connecter");
        //let template = getTemplate(ctx);
        let template = ctx.template;
        Affichage.AfficherTemplate(template, {}, document.querySelector("main"))
    }
    
    function cbAccueil(ctx){
        console.log("Accueil");
        //let template = getTemplate(ctx);
        let template = ctx.template;
        Affichage.AfficherTemplate(template, {}, document.querySelector("main"))
    }

    function cbAjouter(ctx){
        console.log("Ajouter");
        //let template = getTemplate(ctx);
        let template = ctx.template;
        Affichage.AfficherTemplate(template, {}, document.querySelector("main"))
    }

    function cbTache(ctx){
        console.log("Tache");
        //let template = getTemplate(ctx);
        let template = ctx.template;
        Affichage.AfficherTemplate(template, {}, document.querySelector("main"))
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
            function(){
                aRoutes.forEach(uneRoute => {
                    page(uneRoute.path, getTemplate, uneRoute.cb);  // deux callback qui seront appelés
                });
                page({
                    hashbang:true
                });    
            }
        );

        document.querySelector("main").addEventListener("click", function(evt){
            console.log(evt.target);

            if(evt.target.classList.contains("actionConnecter")){
                console.log("login")
                Tache.logUsager();
            }
            if(evt.target.classList.contains("actionEffacerUsager")){
                console.log("delete")
                Tache.delUsager();
            }
            if(evt.target.classList.contains("actionEnregistrer")){
                console.log("set")
                Tache.setUsager();
            }

        })

    });
})()
