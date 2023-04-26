import  express  from "express";
const app = express();
const port = 3000;

export const persons = [
    {
       name: "PK",
       age: 10,
       votingStatus: false
    },
    {
       name: "SK",
       age: 20,
       votingStatus: false
    },
    {
       name: "AA",
       age: 70,
       votingStatus: false
    },
    {
       name: "SC",
       age: 5,
       votingStatus: false
    },
    {
       name: "HO",
       age: 40,
       votingStatus: false
    }
 ]




app.post("/person",(req,res)=>{
    
    const {age}=req.query;

    const man = persons.filter((person)=>{
        if(person.age>age){
            person.votingStatus = true
      
        }
        if(person.votingStatus===true){
            return person
        }
    }).map((person)=>{
        return person.name
    })
    
   

   res.send({ man})

})



app.listen(3000,()=>{
    console.log("hello");
})