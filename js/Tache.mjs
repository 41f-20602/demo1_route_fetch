export default class Tache {
    static api_url = "https://api-nodejs-todolist.herokuapp.com";
    static token ="";
    
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

    static delUsager(auth){
        auth = this.token;
        const entete = new Headers();
        entete.append("Authorization", "Bearer "+auth);

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

    static getUsager(auth){
       
    }   

    

    static setTache (tache, auth){
        
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(tache),
            redirect: 'follow'
          };
          
    }

    static getListeTache (auth){
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'GET',
            headers: entete,
            redirect: 'follow'
          };
          
    }
}
