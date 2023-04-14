const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("..");

const userController = {
  //GET ALL USER
  getAllUsers: async (req, res) => {
    // try {
    //   const users = await db.collection("users").find().toArray();
    //   res.status(200).json(users);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
    db.Connection()
      .then(async (collections) => {
        const result = await collections
          .find((clt) => clt.collectionName === "users")
          .find({})
          .toArray();
        res.json(result);
      })
      .catch(() => {
        res.status(500);
      });
  },

  //DELETE A USER
  deleteUser: async (req, res) => {
    try {
      const result = await db
        .collection("users")
        .deleteOne({ _id: ObjectId(req.params.id) });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "User deleted" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
// deleteUser: asyncHandler(async (req, res) => {
//   db.Connection()
//     .then(async (collections) => {
//       const result = await collections
//         .find((clt) => clt.collectionName === "users")
//         .findOneAndDelete({ _id: new ObjectId(req.params.id) });
//       console.log(result);
//       res.json(result);
//     })
//     .catch(() => {
//       res.status(500);
//     });
// })
// }



module.exports = userController;
