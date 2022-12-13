import express from "express";
import mysql from "mysql-await";
import cors from "cors";
import env from "dotenv";

const app = express();

const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
})

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.json("Hello This is Flexmoney Backend !");
})


app.post("/api/person",(req,res)=>{
    const query = "SELECT * FROM person,membership WHERE email = ? AND password = ? AND person.memid = membership.id";

    const email = req.body.email;
    const pass = req.body.pass;

    db.query(query, [email,pass], (err,data)=>{
        if(err) return res.json(err);
        
        if(data.length === 0)
            return res.status(500).json("User Does'nt Exists !");
        return res.json(data);
    })
})


app.post("/api/register",async(req,res)=>{

        const query1 = "INSERT INTO person (`uname`, `phone`, `email`, `last_fees_date`, `validity_date`, `password`) VALUES (?);";

        const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.fees_date,
        req.body.valid_date,
        req.body.pass
        ];

        const query2 = "SELECT memid FROM person WHERE email = ? AND password = ?"

        const query3 = "INSERT INTO membership (`id`,`uname`, `batch_selected`, `date_of_joining`) VALUES (?);"

        // db.on(`error`, (err) => {
        //     console.error(`Connection error ${err.code}`);
        // });


        await db.awaitQuery(query1,[values]);

        var result = await db.awaitQuery(query2,[req.body.email,req.body.pass]);

        const values1 = [
            result[0].memid,
            req.body.name,
            req.body.batch,
            req.body.fees_date
        ]
        db.awaitQuery(query3,[values1]);

        res.json(result[0].memid);
})

app.post("/api/update_membership",(req,res)=>{
    const query = `UPDATE person SET last_fees_date = '${req.body.fees_date}' , validity_date = date_add('${req.body.fees_date}',INTERVAL 1 MONTH) where email = '${req.body.email}' AND ((SELECT DATEDIFF((SELECT curdate()), (SELECT validity_date from person where memid= ${req.body.id} ))) = 1);`;

    

    db.awaitQuery(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
})

app.post("/api/update_batch",async(req,res)=>{

    const query = "UPDATE membership SET batch_selected = ? where id = ? AND ((SELECT DATEDIFF((SELECT curdate()), (SELECT validity_date from person where memid= ? ))) = 1);";

    console.log(req.body.batch);

    try{
        db.awaitQuery(query,[req.body.batch,req.body.id,req.body.id],(err,data)=>{
            return res.status(200);
        });
    }
    catch(e){
        return res.json(e);
    }
})

app.listen(process.env.PORT || 8800,()=>{
    console.log("Connected to backend !");
})