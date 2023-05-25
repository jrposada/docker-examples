const express = require("express");
const { Client } = require('pg')


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

/**
 * @swagger
 * /api/get:
 *  get:
 *      description: Returns html for the default ExpressJS welcome page.
 *      responses:
 *          200:
 *              description: html content
 */
router.get("/get", async function (req, res, next) {
  const client = new Client()
  await client.connect()

  const data = await client.query('SELECT * FROM public."Test"');

  res.send(data.rows)

  await client.end()
});

module.exports = router;