const express = require("express");
const controllers = require("../../../controllers/TASK/index");

const router = express.Router();

router.get("/", controllers.allTaskController);
router.post("/", controllers.createTodo);

module.exports = router;
