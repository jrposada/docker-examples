const express = require("express");

const router = express.Router();

/**
 * @swagger
 * /api:
 *  get:
 *      description: Returns html for the default ExpressJS welcome page.
 *      responses:
 *          200:
 *              description: html content
 */
router.get("/", function (req, res, next) {
  res.send("Hello World!");
});

module.exports = router;