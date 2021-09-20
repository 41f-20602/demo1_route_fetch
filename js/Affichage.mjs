/**
 * Module de gestion de l'affichage
 *
 * @Module Affichage
 * @requires Mustache.js {https://unpkg.com/mustache@latest}
 */

export default class Affichage {
    /**
     * Affichage du template enregistrer
     * @deprecated
     * @static
     */
    static AfficherEnregistrer(){
        const template = document.querySelector("#tmplEnregistrer").innerHTML;
        const render = Mustache.render(template, {test:"allo"});
        document.querySelector("main").innerHTML = render;
    }
    /**
     * Convertie un template Mustache.js en Element et l'insère dans un noeud.
     * @static
     * @param  {String} sTmpl Contenu du template mustache
     * @param  {Object} oData Données à afficher
     * @param  {Element} domNoeud Noeud d'insertion du template
     */
    static AfficherTemplate(sTmpl, oData, domNoeud){
        const rendu = Mustache.render(sTmpl, oData);
        domNoeud.innerHTML = rendu;
    }
    
    
    /**
     * Permet le chargement asynchrone des templates pour Mustache.js
     * @static
     * @param  {{fichier: String, tmpl:String}[]} aTemplates - Tableau qui contient la liste des fichiers à charger
     * @returns {Promise} Promesse de résolution de fin de chargement des templates
     */
    static chargementTemplate(aTemplates){
        let htmlTemplate = [];
        aTemplates.forEach(uneRoute=>{
            htmlTemplate.push(fetch("./vues/"+uneRoute.fichier)
                .then(reponse=>reponse.text())
                .then(template=> { 
                                    uneRoute.tmpl = template; 
                                    console.log(uneRoute)
                                }));
        });

        return Promise.all(htmlTemplate);
    }

}