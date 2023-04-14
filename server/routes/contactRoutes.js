const express = require("express");
const asyncHandler = require('express-async-handler');
const contactRoutes = require("express").Router();
const db = require('..')

// get All Order
contactRoutes.get("/", asyncHandler(
    async (req, res) => {
        db.Connection()
            .then(async (collections) => {
                const result = await collections.find((clt) => clt.collectionName === 'contacts').find({}).toArray();
                res.json(result);
            })
            .catch(() => {
                res.status(500)
            })
    }
))


// // get Single Order
// contactRoutes.get("/:id", asyncHandler(
//     async (req, res) => {
//         db.Connection()
//             .then(async (collections) => {
//                 const result = await collections.find((clt) => clt.collectionName === 'orders').findOne({ _id: new ObjectId(req.params.id) });
//                 res.json(result);
//             })
//             .catch(() => {
//                 res.status(500)
//             })
//     }
// ))

module.exports = contactRoutes;