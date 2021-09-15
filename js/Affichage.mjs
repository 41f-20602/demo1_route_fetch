
export default class Affichage {
    static AfficherEnregistrer(){
        const template = document.querySelector("#tmplEnregistrer").innerHTML;
        const render = Mustache.render(template, {test:"allo"});
        document.querySelector("main").innerHTML = render;
    }

    static AfficherTemplate(sTmpl, oData, domNoeud){
        const rendu = Mustache.render(sTmpl, oData);
        domNoeud.innerHTML = rendu;
    }
    
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

        console.log(htmlTemplate);
        return Promise.all(htmlTemplate);
    }

}