const userController = require("../controllers/userController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const asyncHandler = require('express-async-handler');
const db = require('..')
const router = require("express").Router();
//GET ALL USERS
// router.get("/", verifyToken, userController.getAllUsers);

router.get(
  "/",
  asyncHandler(async (req, res) => {
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
  })
);

//DELETE USER
router.delete(
  "/:id",
  verifyTokenAndUserAuthorization,
  userController.deleteUser
);

module.exports = router;
