SELECT 
	ncaaresults.gameId, ncaaresults.Season, ncaaresults.Team1, ncaa2019.AdjTempo, ncaa2019.AdjOE, ncaa2019.OffeFGPct, ncaa2019.OffTOPct, ncaa2019.OffORPct, ncaa2019.OffFTRate, ncaa2019.AdjDE, ncaa2019.DefeFGPct, ncaa2019.DefTOPct, ncaa2019.DefORPct, ncaa2019.DefFTRate, ncaaresults.Team1Score
FROM ncaaresults 
LEFT JOIN ncaa2019 ON (ncaa2019.TeamName = ncaaresults.Team1) AND (ncaaresults.Season = ncaa2019.Season)
WHERE ncaaresults.Season = 2019;

SELECT 
	ncaaresults.gameId, ncaaresults.Season, ncaaresults.Team2, ncaa2019.AdjTempo, ncaa2019.AdjOE, ncaa2019.OffeFGPct, ncaa2019.OffTOPct, ncaa2019.OffORPct, ncaa2019.OffFTRate, ncaa2019.AdjDE, ncaa2019.DefeFGPct, ncaa2019.DefTOPct, ncaa2019.DefORPct, ncaa2019.DefFTRate, ncaaresults.Team2Score
FROM ncaaresults 
LEFT JOIN ncaa2019 ON (ncaa2019.TeamName = ncaaresults.Team2) AND (ncaaresults.Season = ncaa2019.Season)
WHERE ncaaresults.Season = 2019;