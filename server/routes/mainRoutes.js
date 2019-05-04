const router = require("express").Router();
const server = require("../server");
const pool = server.getPool();

router.get("/api/ncaa2019", (request, response) => {
  pool.query("SELECT * FROM ncaa2019", function (error, results, fields) {
    if (error) throw error;
    response.json(results);
  });
});

module.exports = router;