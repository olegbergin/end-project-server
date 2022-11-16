const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");
// const {check} = require('express-validator')
const roleMiddleware = require("../middlewares/roleMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/registration",
  // [
  //     check('email', "can not be empty").notEmpty().isEmail(),
  //     check('password', "need to be 4-10 symbols").isLength({min:4, max:10})
  // ],
  controller.registration
);

router.post("/login", controller.login);

router.get("/users", controller.getUsers);

router.post("/status", controller.updateStatus);

router.post("/findUser", controller.findTheUser);

router.post("/userbydepartment", controller.findUserByDepartment);

// router.put('/makeadmin/:username', authMiddleware, controller.makeAdmin)

module.exports = router;
