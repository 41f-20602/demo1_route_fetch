/**
 * Module de gestion des données et des requêtes des taches et des usagers
 *
 * @module Tache
 */

export default class Tache {
    /**
     * URL de base du service Web utilisé pour les appels de l'API.
     * @static
     * @memberof Tache
     */
    static api_url = "https://api-nodejs-todolist.herokuapp.com";
    
    /**
     * Token de connection
     * @static
     * @memberof Tache
     */
    static token ="";
    
    /**
     * Création du compte de l'usager sur le service Web
     *
     * @static
     * @param {object} usager
     * @param {string} usager.name
     * @param {string} usager.email
     * @param {string} usager.passworg
     * @param {string} usager.age
     * @returns {Promise} 
     * @memberof Tache
     */
    static setUsager(usager, cb){
        usager = {  
                    email : "jmartel1@test.test",
                    password: "123456789",
                    age : "104",
                    name : "Jonathan"
            };
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        
        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(usager),
            redirect: 'follow'
          };
          
          return fetch(this.api_url + "/user/register", reqOptions)
            .then((reponse)=>reponse.json())
            //.then ((data)=> new Promise());
            /*.then((data)=> {
                console.log(data);
                if(cb)
                {
                    cb(data);
                } 
            });*/
            /*.then(function(reponse){ 
                    return reponse.json();
                })*/
            
    }   
    
    /**
     * Connection de l'usager sur le service Web.
     *
     * @static
     * @param {object} usager
     * @param {string} usager.email
     * @param {string} usager.password
     * @returns {Promise} 
     * @memberof Tache
     */
    static logUsager(usager){
        usager = {  
            email : "jmartel1@test.test",
            password: "123456789"
        };
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        
        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(usager),
            redirect: 'follow'
          };

          return fetch(this.api_url + "/user/login", reqOptions)
            .then((reponse)=>reponse.json())
            .then((data)=> {
                console.log(data);
                this.token = data.token;
            });

    }   
    
    /**
     * Effacer le compte de l'usager sur le service Web
     *
     * @static
     * @returns {Promise}
     * @memberof Tache
     */
    static delUsager(auth){
        auth = this.token;
        const entete = new Headers();
        entete.append("Authorization", "Bearer "+this.token);

        const reqOptions = {
            method: 'DELETE',
            headers: entete,
            redirect: 'follow'
        };

        return fetch(this.api_url + "/user/me", reqOptions)
            .then((reponse)=>reponse.json())
            .then((data)=> {
                console.log(data);
                this.token = "";
            });
    }   

    

    
    /**
     * Ajoute une tâche sur le service Web pour un usager spécifique
     *
     * @static
     * @param {object} tache
     * @param {string} tache.description
     * @returns {Promise}
     * @memberof Tache
     */
    static setTache (tache){
        
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+this.token);

        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(tache),
            redirect: 'follow'
          };
          
    }
    
    /**
     * Récupérer l'ensemble des tâches sur le service Web pour un usager spécifique
     *
     * @static
     * @returns {Promise}
     * @memberof Tache
     */
    static getListeTache (){
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+this.token);

        const reqOptions = {
            method: 'GET',
            headers: entete,
            redirect: 'follow'
          };
          
    }
}
