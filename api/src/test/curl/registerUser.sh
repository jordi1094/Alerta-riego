#sucess
curl -X POST http://localhost:8080/users -H "Content-Type: application/json" -d '{"name":"Papa","surname":"Gayo","email":"papa@gallo.com","username":"papagallo","password":"Ai123123123.","passwordRepeat":"Ai123123123."}' -v

#fail name cant be a numbver, password needs an especial character.
curl -X POST http://localhost:3000/api/hello -H "Content-Type: application/json" -d '{"name":3,"surname":"Gayo","email":"papa@gallo.com","username":"papagallo","password":"Ai123123123","passwordRepeat":"Ai123123123"}' -v
