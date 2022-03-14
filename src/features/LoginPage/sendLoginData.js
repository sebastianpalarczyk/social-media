

export const sendLoginData = (user) => {
   fetch(`http://localhost:8080/login`,{
        method: "POST", 
        body: JSON.stringify(user),
        
    }).then(Response => console.log(Response))
    .catch(error => console.log(error));

}