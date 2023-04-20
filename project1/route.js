import { welcome } from "./logger/logger.js";
import { printDate,printMonth,getBatchInfo } from "./util/helper.js"
import {stringManipulator} from "./validator/formatter.js"
import { cool } from "./loadash/loadash.js";

import express from "express";

const app = express();


app.listen(4000, () => {
    console.log("server is on")
})

app.get("/", (req, res) => {
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.send(welcome()); // send Hello World to this route
}
)

app.get("/test-me", (req, res) => {
    const day = printDate()
    const month = printMonth()
    const batch = getBatchInfo()
    const come = cool()
    const {trimmedName,
        lowerName,
        upperName} = stringManipulator();
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.json({
       day,month,batch ,trimmedName,
       lowerName,
       upperName,
       come,

    }); // send Hello World to this route
}
)

