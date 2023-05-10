const mongoose = require("mongoose")
//mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://avenger:9179677895@cluster0.oh25cr9.mongodb.net/project11?retryWrites=true&w=majority')
    .then(() =>
        console.log('database connected')).catch((err) => console.log(err))

