const GENERATION=6;
const GAME_ID='oras';
const GAMES=[
	['Omega Ruby',,'Omega Rubin',,'Rubí Omega',,'欧米伽红宝石'],
	['Alpha Sapphire',,'Alpha Saphir',,'Zafiro Alfa',,'阿尔法蓝宝石']
];
const REGIONAL_DEXES=[
	[['Hoenn (VI) Pokédex',,'Hoenn-Pokédex (VI)',,'Pokédex de Hoenn (VI)',,'丰缘地区宝可梦(VI)'], [252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,475,283,284,285,286,287,288,289,63,64,65,290,291,292,293,294,295,296,297,118,119,129,130,298,183,184,74,75,76,299,476,300,301,41,42,169,72,73,302,303,304,305,306,66,67,68,307,308,309,310,311,312,81,82,462,100,101,313,314,43,44,45,182,84,85,406,315,407,316,317,318,319,320,321,322,323,218,219,324,88,89,109,110,325,326,27,28,327,227,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,174,39,40,349,350,351,120,121,352,353,354,355,356,477,357,433,358,359,37,38,172,25,26,54,55,360,202,177,178,203,231,232,127,214,111,112,464,361,362,478,363,364,365,366,367,368,369,222,170,171,370,116,117,230,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386]],
	[['Extras',,,,,,'额外'], [14,17,19,20,35,46,49,50,53,56,58,77,79,86,87,95,97,98,114,132,133,137,138,140,142,152,155,158,168,175,190,191,198,200,201,205,208,223,224,225,226,234,236,239,240,243,244,245,249,250,387,390,393,402,404,408,410,421,422,425,427,431,432,436,440,441,442,443,451,456,458,480,481,482,483,484,485,486,487,488,495,498,501,506,517,519,523,524,525,530,531,532,535,538,539,540,546,548,551,555,556,557,558,559,563,564,566,568,570,572,574,585,592,594,595,599,602,605,610,613,621,626,627,628,629,633,636,638,639,640,641,642,643,644,645,646,688,690,692,696,698,707,708]]
];
const NATIONAL_DEX=true;
const MAX_NATIONAL=721;


const Icons={
	IMAGE:'../core/icons_3ds.png',
	WIDTH:1280,
	HEIGHT:960,
	IS_BIG:false,
	ICON_WIDTH:40,
	ICON_HEIGHT:30,

	ICONS:[0,1,2,3,5,6,7,10,11,12,14,15,16,17,18,19,21,22,23,25,27,29,30,31,32,33,47,49,51,53,54,55,56,57,58,59,60,61,63,65,66,67,68,69,70,71,72,73,74,75,76,78,80,82,84,85,86,87,88,89,90,91,92,93,94,95,97,98,99,100,101,102,103,104,105,107,109,111,112,113,114,116,117,118,119,120,121,122,123,125,127,128,129,130,131,133,134,135,136,137,138,139,140,141,143,144,146,147,148,149,150,151,152,153,154,155,157,158,159,160,161,162,163,164,165,166,167,168,170,171,172,174,175,176,178,179,180,181,182,183,184,185,186,188,189,190,191,192,193,194,195,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,221,222,223,224,225,226,227,228,229,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,278,279,280,281,282,283,284,286,287,288,289,291,292,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,330,331,332,333,334,335,337,338,339,341,342,343,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,389,391,392,393,395,396,398,399,401,402,403,404,405,406,407,408,409,411,412,413,414,416,417,418,419,420,421,422,423,424,425,426,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,448,449,450,452,453,454,455,456,458,459,460,462,463,464,465,466,467,468,469,470,471,472,474,475,476,478,479,480,481,483,485,487,489,491,492,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,524,527,528,529,530,531,532,533,534,536,538,540,541,542,543,544,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,564,565,566,568,569,570,571,572,573,574,575,576,577,578,579,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,597,598,599,600,606,607,608,609,610,611,612,613,615,616,617,618,619,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,651,652,653,654,655,656,657,658,659,660,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,682,683,684,685,686,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,721,725,726,727,728,729,730,732,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,783,785,786,787,789,792,794,796,797,798,799,800,801,802,803,804,805,807,808,809,810,811,812,813,814,834,835,837,842,848,853,854,855,856,857,867,868,870,871,872,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,910,911,914,916,918]
}