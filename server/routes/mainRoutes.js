const router = require("express").Router();
const server = require("../server");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const pool = server.getPool();

// Test endpoint to verify frontend to backend is working

router.get("/api/ncaa2019", (request, response) => {
  pool.query("SELECT * FROM ncaa2019", function (error, results, fields) {
    if (error) throw error;
    response.json(results);
  });
});

router.post("/api/getModel", (request, response) => {
  console.log(request.body)
    response.json(request);
});

// Test endpoint to verify frontend to backend is working

router.get("/api/ncaa2019/:team", (request, response) => {
  const teamName = request.params.team;
  const sql = "SELECT * FROM ncaa2019 WHERE TeamName = ?";
  pool.query(sql, teamName, function (error, results, fields) {
    if (error) throw error;
    response.json(results);
  });
});

/* This endpoint is used to pull all of the data from multiple tables needed to 
   generate the model.  The results are then pushed into the two arrays for the 
   stats and final scores to be able to be fed straight into the training model. */

router.get("/api/ncaaResultsForModel", (request, response) => {
  sql = `SELECT 
    ncaaresultsforteam1.gameId, 
    ncaaresultsforteam1.Season, 
    ncaaresultsforteam1.Team1, 
    ncaaresultsforteam1.AdjTempo AS AdjTempo1, 
    ncaaresultsforteam1.AdjOE AS AdjOE1, 
    ncaaresultsforteam1.OffeFGPct AS OffeFGPct1, 
    ncaaresultsforteam1.OffTOPct AS OffTOPct1,
    ncaaresultsforteam1.OffORPct AS OffORPct1,
    ncaaresultsforteam1.OffFTRate AS OffFTRate1,
    ncaaresultsforteam1.AdjDE AS AdjDE1, 
    ncaaresultsforteam1.DefeFGPct AS DefeFGPct1, 
    ncaaresultsforteam1.DefTOPct AS DefTOPct1, 
    ncaaresultsforteam1.DefORPct AS DefORPct1, 
    ncaaresultsforteam1.DefFTRate AS DefFTRate1,
    ncaaresultsforteam1.Team1Score,
    ncaaresultsforteam2.Team2, 
    ncaaresultsforteam2.AdjTempo AS AdjTempo2,
    ncaaresultsforteam2.AdjOE AS AdjOE2, 
    ncaaresultsforteam2.OffeFGPct AS OffeFGPct2, 
    ncaaresultsforteam2.OffTOPct AS OffTOPct2,
    ncaaresultsforteam2.OffORPct AS OffORPct2,
    ncaaresultsforteam2.OffFTRate AS OffFTRate2,
    ncaaresultsforteam2.AdjDE AS AdjDE2, 
    ncaaresultsforteam2.DefeFGPct AS DefeFGPct2, 
    ncaaresultsforteam2.DefTOPct AS DefTOPct2, 
    ncaaresultsforteam2.DefORPct AS DefORPct2, 
    ncaaresultsforteam2.DefFTRate AS DefFTRate2, 
    ncaaresultsforteam2.Team2Score
  FROM 
    ncaaresultsforteam1
  LEFT JOIN
    ncaaresultsforteam2 ON (ncaaresultsforteam1.gameId = ncaaresultsforteam2.gameId)`

  pool.query(sql, function (error, results, fields) {
    let statistics = [];
    let finalScores = [];
    if (error) throw error;
    results.forEach(game => {
      statistics.push(
        game.AdjTempo1, 
        game.AdjOE1,
        game.OffeFGPct1,
        game.OffTOPct1,
        game.OffORPct1,
        game.OffFTRate1,
        game.AdjTempo2, 
        game.AdjDE2,
        game.DefeFGPct2,
        game.DefTOPct2,
        game.DefORPct2,
        game.DefFTRate2,
        game.AdjTempo2, 
        game.AdjOE2,
        game.OffeFGPct2,
        game.OffTOPct2,
        game.OffORPct2,
        game.OffFTRate2,
        game.AdjTempo1, 
        game.AdjDE1,
        game.DefeFGPct1,
        game.DefTOPct1,
        game.DefORPct1,
        game.DefFTRate1
      );
      finalScores.push(
        game.Team1Score,
        game.Team2Score
      )
    })
    response.json(statistics);
  });
});

router.get("/api/ncaaResultsForTest", (request, response) => {
  sql = `SELECT 
    ncaa2019Team1.gameId, 
    ncaa2019Team1.Season, 
    ncaa2019Team1.Team1, 
    ncaa2019Team1.AdjTempo AS AdjTempo1, 
    ncaa2019Team1.AdjOE AS AdjOE1, 
    ncaa2019Team1.OffeFGPct AS OffeFGPct1, 
    ncaa2019Team1.OffTOPct AS OffTOPct1,
    ncaa2019Team1.OffORPct AS OffORPct1,
    ncaa2019Team1.OffFTRate AS OffFTRate1,
    ncaa2019Team1.AdjDE AS AdjDE1, 
    ncaa2019Team1.DefeFGPct AS DefeFGPct1, 
    ncaa2019Team1.DefTOPct AS DefTOPct1, 
    ncaa2019Team1.DefORPct AS DefORPct1, 
    ncaa2019Team1.DefFTRate AS DefFTRate1,
    ncaa2019Team1.Team1Score,
    ncaa2019Team2.Team2, 
    ncaa2019Team2.AdjTempo AS AdjTempo2,
    ncaa2019Team2.AdjOE AS AdjOE2, 
    ncaa2019Team2.OffeFGPct AS OffeFGPct2, 
    ncaa2019Team2.OffTOPct AS OffTOPct2,
    ncaa2019Team2.OffORPct AS OffORPct2,
    ncaa2019Team2.OffFTRate AS OffFTRate2,
    ncaa2019Team2.AdjDE AS AdjDE2, 
    ncaa2019Team2.DefeFGPct AS DefeFGPct2, 
    ncaa2019Team2.DefTOPct AS DefTOPct2, 
    ncaa2019Team2.DefORPct AS DefORPct2, 
    ncaa2019Team2.DefFTRate AS DefFTRate2, 
    ncaa2019Team2.Team2Score
  FROM 
    ncaa2019Team1
  LEFT JOIN
    ncaa2019Team2 ON (ncaa2019Team1.gameId = ncaa2019Team2.gameId)`

  pool.query(sql, function (error, results, fields) {
    let statistics = [];
    let finalScores = [];
    if (error) throw error;
    results.forEach(game => {
      statistics.push(
        game.AdjTempo1, 
        game.AdjOE1,
        game.OffeFGPct1,
        game.OffTOPct1,
        game.OffORPct1,
        game.OffFTRate1,
        game.AdjTempo2, 
        game.AdjDE2,
        game.DefeFGPct2,
        game.DefTOPct2,
        game.DefORPct2,
        game.DefFTRate2,
        game.AdjTempo2, 
        game.AdjOE2,
        game.OffeFGPct2,
        game.OffTOPct2,
        game.OffORPct2,
        game.OffFTRate2,
        game.AdjTempo1, 
        game.AdjDE1,
        game.DefeFGPct1,
        game.DefTOPct1,
        game.DefORPct1,
        game.DefFTRate1
      );
      finalScores.push(
        game.Team1Score,
        game.Team2Score
      )
    })
    response.json(finalScores);
  });
});

module.exports = router;