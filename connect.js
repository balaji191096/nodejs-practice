const {MongoClient} = require ("mongodb");

module.exports = {
      
        async connect(){
            try{
           const client= await MongoClient.connect(process.env.MONGODB_URL);
           console.log(client);
           return client;
          //  const selectedDb = client.db("guvi");
          //  console.log(selectedDb);
        }
         catch(err){
            console.error(err);
        }
}
}
