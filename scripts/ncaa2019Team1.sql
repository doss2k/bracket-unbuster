CREATE TABLE IF NOT EXISTS ncaa2019Team1 (
    `gameId` INT,
    `Season` INT,
    `Team1` VARCHAR(15) CHARACTER SET utf8,
    `AdjTempo` NUMERIC(6, 4),
    `AdjOE` NUMERIC(7, 4),
    `OffeFGPct` NUMERIC(10, 8),
    `OffTOPct` NUMERIC(10, 8),
    `OffORPct` NUMERIC(10, 8),
    `OffFTRate` NUMERIC(10, 8),
    `AdjDE` NUMERIC(6, 4),
    `DefeFGPct` NUMERIC(10, 8),
    `DefTOPct` NUMERIC(10, 8),
    `DefORPct` NUMERIC(10, 8),
    `DefFTRate` NUMERIC(10, 8),
    `Team1Score` INT
);
INSERT INTO ncaa2019Team1 VALUES
    (2171,2019,'Auburn',67.5646,119.2830,54.38745231,16.82116879,31.59399571,30.86053412,97.1706,51.72496406,24.62175476,32.86494926,36.32007667,78),
    (2202,2019,'Auburn',67.5646,119.2830,54.38745231,16.82116879,31.59399571,30.86053412,97.1706,51.72496406,24.62175476,32.86494926,36.32007667,77),
    (2156,2019,'Buffalo',73.8244,115.0060,53.03423237,17.27898359,25.75757576,33.86929461,94.6738,49.22305764,16.64372684,27.61506276,32.43107769,91),
    (2165,2019,'Cincinnati',63.3006,111.1710,48.95936571,15.96396081,37.39565943,37.56194252,95.0163,48.58212948,20.81875437,29.28942808,30.49759230,72),
    (2143,2019,'Duke',72.2812,120.2040,53.59801489,17.51473768,35.60171920,33.20926385,88.2449,44.98964803,19.38106219,29.51251647,23.97515528,85),
    (2175,2019,'Duke',72.2812,120.2040,53.59801489,17.51473768,35.60171920,33.20926385,88.2449,44.98964803,19.38106219,29.51251647,23.97515528,77),
    (2191,2019,'Duke',72.2812,120.2040,53.59801489,17.51473768,35.60171920,33.20926385,88.2449,44.98964803,19.38106219,29.51251647,23.97515528,75),
    (2199,2019,'Duke',72.2812,120.2040,53.59801489,17.51473768,35.60171920,33.20926385,88.2449,44.98964803,19.38106219,29.51251647,23.97515528,67),
    (2154,2019,'Florida St.',68.3149,113.1050,50.48364809,18.93536670,32.84161491,35.83602027,90.5492,47.24238026,20.32088134,26.99849170,35.65553943,76),
    (2182,2019,'Florida St.',68.3149,113.1050,50.48364809,18.93536670,32.84161491,35.83602027,90.5492,47.24238026,20.32088134,26.99849170,35.65553943,90),
    (2151,2019,'Gonzaga',69.8432,125.2580,58.97722197,14.91823840,31.53384747,35.32827155,92.3982,44.17109929,18.96963817,26.77111717,25.88652482,87),
    (2179,2019,'Gonzaga',69.8432,125.2580,58.97722197,14.91823840,31.53384747,35.32827155,92.3982,44.17109929,18.96963817,26.77111717,25.88652482,83),
    (2193,2019,'Gonzaga',69.8432,125.2580,58.97722197,14.91823840,31.53384747,35.32827155,92.3982,44.17109929,18.96963817,26.77111717,25.88652482,72),
    (2200,2019,'Gonzaga',69.8432,125.2580,58.97722197,14.91823840,31.53384747,35.32827155,92.3982,44.17109929,18.96963817,26.77111717,25.88652482,69),
    (2169,2019,'Houston',66.2386,114.6460,52.13345438,16.50032196,34.36555891,31.63867453,91.2253,42.53071253,18.19059884,25.95473833,37.29729730,84),
    (2189,2019,'Houston',66.2386,114.6460,52.13345438,16.50032196,34.36555891,31.63867453,91.2253,42.53071253,18.19059884,25.95473833,37.29729730,74),
    (2172,2019,'Iowa St.',67.6737,119.1220,52.66699900,17.16781540,29.83471074,42.32303091,97.2626,51.49714829,18.33926633,29.36951317,28.80228137,59),
    (2170,2019,'Kansas',69.9998,112.8850,52.58458647,18.81601309,30.05595524,32.47180451,92.1354,47.81917310,18.15375176,27.88184438,27.80554294,87),
    (2190,2019,'Kansas',69.9998,112.8850,52.58458647,18.81601309,30.05595524,32.47180451,92.1354,47.81917310,18.15375176,27.88184438,27.80554294,75),
    (2162,2019,'Kansas St.',63.1135,108.0770,49.33439830,17.43708778,28.53380158,30.56443024,87.8459,48.23495370,22.82673309,25.69060773,30.72916667,64),
    (2168,2019,'Kentucky',65.9094,118.3580,52.95121951,18.60752986,36.78357571,41.90243902,90.8807,46.64948454,17.92871439,25.46816479,26.80412371,79),
    (2188,2019,'Kentucky',65.9094,118.3580,52.95121951,18.60752986,36.78357571,41.90243902,90.8807,46.64948454,17.92871439,25.46816479,26.80412371,62),
    (2198,2019,'Kentucky',65.9094,118.3580,52.95121951,18.60752986,36.78357571,41.90243902,90.8807,46.64948454,17.92871439,25.46816479,26.80412371,62),
    (2149,2019,'Louisville',67.1950,113.5030,49.77691021,16.98293451,29.42206655,35.91745678,92.4983,49.29298643,19.24732578,28.79484821,30.20361991,76),
    (2145,2019,'LSU',69.9424,118.6200,49.45717732,19.33798968,29.43589744,36.73100121,97.6208,49.56359102,21.62162162,27.18940937,36.22194514,79),
    (2177,2019,'LSU',69.9424,118.6200,49.45717732,19.33798968,29.43589744,36.73100121,97.6208,49.56359102,21.62162162,27.18940937,36.22194514,69),
    (2155,2019,'Marquette',68.6533,114.2700,53.45352971,19.34922783,29.39632546,35.14474352,95.8589,46.31188119,16.59093365,26.13026820,35.89108911,64),
    (2148,2019,'Maryland',65.6956,113.9460,51.41435306,19.31715834,34.11131059,32.84442116,93.9660,45.93516209,14.05687953,24.84276730,26.63341646,79),
    (2152,2019,'Michigan',64.6520,115.7160,51.59372027,13.94176409,24.67948718,27.54519505,86.0482,44.06657019,17.96661860,24.82967449,24.07139411,74),
    (2180,2019,'Michigan',64.6520,115.7160,51.59372027,13.94176409,24.67948718,27.54519505,86.0482,44.06657019,17.96661860,24.82967449,24.07139411,64),
    (2194,2019,'Michigan',64.6520,115.7160,51.59372027,13.94176409,24.67948718,27.54519505,86.0482,44.06657019,17.96661860,24.82967449,24.07139411,44),
    (2144,2019,'Michigan St.',67.6316,121.6810,55.17937220,18.50105781,33.89694042,33.58744395,90.5738,43.94449117,14.93594525,26.36594663,27.50210261,76),
    (2176,2019,'Michigan St.',67.6316,121.6810,55.17937220,18.50105781,33.89694042,33.58744395,90.5738,43.94449117,14.93594525,26.36594663,27.50210261,70),
    (2192,2019,'Michigan St.',67.6316,121.6810,55.17937220,18.50105781,33.89694042,33.58744395,90.5738,43.94449117,14.93594525,26.36594663,27.50210261,80),
    (2203,2019,'Michigan St.',67.6316,121.6810,55.17937220,18.50105781,33.89694042,33.58744395,90.5738,43.94449117,14.93594525,26.36594663,27.50210261,51),
    (2166,2019,'Mississippi',68.4026,112.8570,53.09548793,18.15563217,30.21515435,30.90241343,97.8407,50.96308186,20.51237289,29.26186292,33.54735152,72),
    (2147,2019,'Mississippi St.',67.4913,117.4960,54.59132190,19.22103659,34.68667255,32.64379415,96.8328,50.30975736,19.51936754,29.61373391,32.11151265,76),
    (2157,2019,'Nevada',69.2830,114.1250,54.38278008,13.46785923,24.76547842,24.06639004,95.1961,54.97012493,16.81191951,25.64870259,27.05051602,61),
    (2167,2019,'North Carolina',74.3542,120.0260,52.86307054,17.20760094,35.32008830,30.20746888,90.8372,48.93238434,18.30362647,22.85513361,28.42526690,88),
    (2187,2019,'North Carolina',74.3542,120.0260,52.86307054,17.20760094,35.32008830,30.20746888,90.8372,48.93238434,18.30362647,22.85513361,28.42526690,81),
    (2197,2019,'North Carolina',74.3542,120.0260,52.86307054,17.20760094,35.32008830,30.20746888,90.8372,48.93238434,18.30362647,22.85513361,28.42526690,80),
    (2161,2019,'Purdue',65.6852,121.2120,53.58974359,15.83993764,34.50760608,29.88344988,95.1747,48.99849775,18.62543848,26.97262480,31.74762143,61),
    (2185,2019,'Purdue',65.6852,121.2120,53.58974359,15.83993764,34.50760608,29.88344988,95.1747,48.99849775,18.62543848,26.97262480,31.74762143,87),
    (2158,2019,'Syracuse',66.1282,110.3280,49.55427373,18.50498085,30.15612161,36.75930781,94.0270,48.03657881,23.08758224,33.36079077,34.26573427,69),
    (2160,2019,'Tennessee',67.7089,123.5210,55.29709811,15.84408785,31.64983165,33.30262552,95.1912,48.12382739,17.97770567,30.20231214,34.89681051,77),
    (2184,2019,'Tennessee',67.7089,123.5210,55.29709811,15.84408785,31.64983165,33.30262552,95.1912,48.12382739,17.97770567,30.20231214,34.89681051,83),
    (2196,2019,'Tennessee',67.7089,123.5210,55.29709811,15.84408785,31.64983165,33.30262552,95.1912,48.12382739,17.97770567,30.20231214,34.89681051,94),
    (2153,2019,'Texas Tech',66.6081,112.8260,53.48341232,17.75248491,27.49576988,32.89099526,86.0594,43.04390725,22.76358021,28.62398823,36.65515540,72),
    (2181,2019,'Texas Tech',66.6081,112.8260,53.48341232,17.75248491,27.49576988,32.89099526,86.0594,43.04390725,22.76358021,28.62398823,36.65515540,78),
    (2205,2019,'Texas Tech',66.6081,112.8260,53.48341232,17.75248491,27.49576988,32.89099526,86.0594,43.04390725,22.76358021,28.62398823,36.65515540,77),
    (2186,2019,'UC Irvine',65.1511,106.7300,51.30579297,17.47851599,33.68336026,28.72744539,97.2616,44.05916586,16.64620571,27.05627706,32.92919496,54),
    (2174,2019,'Utah St.',67.8638,113.1150,49.47251527,16.37661381,26.13430127,26.20766241,96.4583,49.50058754,18.06741464,28.40909091,35.60517039,61),
    (2150,2019,'VCU',68.2479,104.4270,48.88082275,20.20066482,26.66666667,32.12341198,88.7410,49.91103203,18.93202403,27.08537782,31.67259786,58),
    (2164,2019,'Villanova',63.6750,117.0950,52.57332595,16.83026246,27.25581395,35.91588268,98.3195,48.70422535,19.11698290,22.18148488,27.49295775,61),
    (2159,2019,'Virginia',59.3365,123.6930,53.19465082,16.85115167,30.28571429,34.42298167,88.0404,50.39761431,18.03073229,27.73246330,28.18091451,71),
    (2183,2019,'Virginia',59.3365,123.6930,53.19465082,16.85115167,30.28571429,34.42298167,88.0404,50.39761431,18.03073229,27.73246330,28.18091451,63),
    (2195,2019,'Virginia',59.3365,123.6930,53.19465082,16.85115167,30.28571429,34.42298167,88.0404,50.39761431,18.03073229,27.73246330,28.18091451,53),
    (2201,2019,'Virginia',59.3365,123.6930,53.19465082,16.85115167,30.28571429,34.42298167,88.0404,50.39761431,18.03073229,27.73246330,28.18091451,80),
    (2204,2019,'Virginia',59.3365,123.6930,53.19465082,16.85115167,30.28571429,34.42298167,88.0404,50.39761431,18.03073229,27.73246330,28.18091451,63),
    (2146,2019,'Virginia Tech',63.3196,118.5510,55.17996109,14.70667283,30.36649215,29.08560311,94.0834,44.68671679,17.37279481,25.36398467,26.26566416,66),
    (2178,2019,'Virginia Tech',63.3196,118.5510,55.17996109,14.70667283,30.36649215,29.08560311,94.0834,44.68671679,17.37279481,25.36398467,26.26566416,67),
    (2163,2019,'Wisconsin',63.6610,110.9310,51.13110540,14.61952464,24.50558899,27.30077121,87.2639,45.20512821,17.20468449,26.45161290,25.79487179,54),
    (2173,2019,'Wofford',65.7033,118.4830,57.47516989,16.07223373,31.82711198,27.75744903,97.7629,49.88655701,19.13143731,25.21739130,31.76403857,84);
