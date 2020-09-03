// import cors from 'cors';
var cors = require("cors")
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;


var app = express();

app.use(bodyParser.json());
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/gateway", { useUnifiedTopology: true }, function (err, client) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = client.db();
    console.log("Database connection ready");

    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});
// app.use(function (req, res, next) {

//     // res.header('Access-Control-Allow-Origin', "http://localhost:4200");
//     // res.header('Access-Control-Allow-Headers', true);
//     // res.header('Access-Control-Allow-Credentials', true);

//     res.header('GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });
app.use(cors());

app.get("/api/user", function (req, res) {
    db.collection('users').find({ user: req.query.user }).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get data.");
        } else {
            res.status(200).json(docs);
        }
    });
})

app.put("/api/app/add", function (req, res) {
    console.log(req.body)
    // db.collection('users').updateOne({ user: req.body.user }, { installed: [1] }).toArray(function (err, docs) {
    //     if (err) {
    //         handleError(res, err.message, "Failed to get data.");
    //     } else {
    //         res.status(200).json(docs);
    //     }
    // });

    db.collection('users').updateOne({ user: req.body.user }, { $set: { installed: req.body.app } }, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        // db.close();
    });
    // db.collection('users').update(
    //     { user: req.body.user },
    //     {$set:{installed: [1]}}
    //     )(function (err, docs) {
    //         if (err) {
    //             handleError(res, err.message, "Failed to get data.");
    //         } else {
    //             res.status(200).json(docs);
    //         }
    //     });
})

app.get("/api/apps", function (req, res) {
    const ids = req.query.access.map(d => parseInt(d));
    db.collection('apps').find(
        { id: { $in: ids } }).toArray(function (err, docs) {
            if (err) {
                handleError(res, err.message, "Failed to get data.");
            } else {
                res.status(200).json(docs);
            }
        });
});

// app.put("/api/balanceConfig/:id", function (req, res) {
//     var updateDoc = req.body;
//     delete updateDoc._id;

//     var ObjectID = require('mongodb').ObjectID;
//     var myquery = { _id: ObjectID("5e70e87be8bec84084436dbf") };

//     db.collection('balanceConfig').updateOne({ _id: new ObjectID(req.params.id) }, { $set: updateDoc }, function (err, doc) {
//         if (err) {
//             handleError(res, err.message, "Failed to update spend");
//         } else {
//             updateDoc._id = req.params.id;
//             res.status(200).json(doc);
//         }
//     });
// });

// app.delete("/api/spends/:id", function (req, res) {
//     db.collection('spends').deleteOne({ _id: new ObjectID(req.params.id) }, function (err, result) {
//         if (err) {
//             handleError(res, err.message, "Failed to delete spend");
//         } else {
//             res.status(200).json(req.params.id);
//         }
//     });
// });


//#endregion

// #region redirect
app.all('/*', function (req, res, next) {
    // res.sendFile(path.join(__dirname, 'dist/index.html'));
    res.sendFile('dist/gateway/index.html', { root: __dirname });

    // res.sendFile(path.join(__dirname, 'dist/project-name/index.html'));
});
//#endregion

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}