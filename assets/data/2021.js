const players = [
	{
		"name": "Chase McLaughlin",
		"number": "3",
		"position": "K",
		"status": "ACT",
		"side": "SPT"
	},
	{
		"name": "Chris Nagger",
		"number": "1",
		"position": "K",
		"status": "RES",
		"side": "SPT"
	},
	{
		"name": "Anthony Walker",
		"number": "4",
		"position": "LB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Case Keenum",
		"number": "5",
		"position": "QB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Baker Mayfield",
		"number": "6",
		"position": "QB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Jamie Gillan",
		"number": "7",
		"position": "P",
		"status": "ACT",
		"side": "SPT"
	},
	{
		"name": "Anthony Schwartz",
		"number": "10",
		"position": "WR",
		"status": "IR",
		"side": "OFF"
	},
	{
		"name": "Donovan Peoples-Jones",
		"number": "11",
		"position": "WR",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Ryan Switzer",
		"number": "15",
		"position": "WR",
		"status": "IR",
		"side": "OFF"
	},
	{
		"name": "Derrick Willies",
		"number": "16",
		"position": "WR",
		"status": "RES",
		"side": "OFF"
	},
	{
		"name": "JoJo Natson",
		"number": "19",
		"position": "WR",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Greg Newsome II",
		"number": "20",
		"position": "CB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Denzel Ward",
		"number": "21",
		"position": "CB",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Grant Delpit",
		"number": "22",
		"position": "S",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Troy Hill",
		"number": "23",
		"position": "CB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Nick Chubb",
		"number": "24",
		"position": "RB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Demetric Felton",
		"number": "25",
		"position": "KR",
		"status": "ACT",
		"side": "SPT"
	},
	{
		"name": "Greedy Williams",
		"number": "26",
		"position": "CB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Kareem Hunt",
		"number": "27",
		"position": "RB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Jeremiah Owusu-Koramoah",
		"number": "28",
		"position": "LB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Herb Miller",
		"number": "29",
		"position": "CB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "D'Ernest Johnson",
		"number": "30",
		"position": "RB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Andy Janovich",
		"number": "31",
		"position": "FB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Ronnie Harrison Jr.",
		"number": "33",
		"position": "DB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Tim Harris",
		"number": "34",
		"position": "CB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Jovante Moffatt",
		"number": "35",
		"position": "S",
		"status": "RES",
		"side": "DEF"
	},
	{
		"name": "M.J. Stewart Jr.",
		"number": "36",
		"position": "CB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "A.J. Green",
		"number": "38",
		"position": "CB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Richard LeCounte III",
		"number": "39",
		"position": "S",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Johnny Stanton",
		"number": "40",
		"position": "FB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Montrel Meander",
		"number": "41",
		"position": "LB",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Tony Fields II",
		"number": "42",
		"position": "LB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "John Johnson III",
		"number": "43",
		"position": "S",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Sione Takitaki",
		"number": "44",
		"position": "LB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Charley Hughlett",
		"number": "47",
		"position": "LS",
		"status": "ACT",
		"side": "SPT"
	},
	{
		"name": "Brian Hill",
		"number": "48",
		"position": "RB",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "John Kelly",
		"number": "49",
		"position": "RB",
		"status": "WAV",
		"side": "OFF"
	},
	{
		"name": "Jacob Phillips",
		"number": "50",
		"position": "LB",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Mack Wilson Sr.",
		"number": "51",
		"position": "LB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Elijah Lee",
		"number": "52",
		"position": "LB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Nick Harris",
		"number": "53",
		"position": "C",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Takkarist McKinley",
		"number": "55",
		"position": "DE",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Malcolm Smith",
		"number": "56",
		"position": "LB",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Ifeadi Odenigbo",
		"number": "57",
		"position": "DE",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Malik McDowell",
		"number": "58",
		"position": "DT",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Trevon Young",
		"number": "59",
		"position": "DE",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Curtis Weaver",
		"number": "59",
		"position": "DE",
		"status": "DEV",
		"side": "DEF"
	},
	{
		"name": "Alex Taylor",
		"number": "60",
		"position": "OT",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Blake Hance",
		"number": "62",
		"position": "OT",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "JC Tretter",
		"number": "64",
		"position": "C",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "James Hudson III",
		"number": "66",
		"position": "OT",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Michael Dunn",
		"number": "68",
		"position": "OG",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Drake Dorbeck",
		"number": "68",
		"position": "OG",
		"status": "BAK",
		"side": "OFF"
	},
	{
		"name": "Jedrick Wills Jr.",
		"number": "71",
		"position": "OT",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Hjalte Froholdt",
		"number": "72",
		"position": "OG",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Chris Hubbard",
		"number": "74",
		"position": "OT",
		"status": "IR",
		"side": "OFF"
	},
	{
		"name": "Joel Bitonio",
		"number": "75",
		"position": "OG",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Wyatt Teller",
		"number": "77",
		"position": "OG",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Jack Conklin",
		"number": "78",
		"position": "OT",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Drew Forbes",
		"number": "79",
		"position": "OG",
		"status": "IR",
		"side": "OFF"
	},
	{
		"name": "Jarvis Landry",
		"number": "80",
		"position": "WR",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Austin Hooper",
		"number": "81",
		"position": "TE",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Rashard Higgins",
		"number": "82",
		"position": "WR",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Lawrence Cager",
		"number": "83",
		"position": "WR",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Ja'Marcus Bradley",
		"number": "84",
		"position": "WR",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "David Njoku",
		"number": "85",
		"position": "TE",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Connor Davis",
		"number": "86",
		"position": "TE",
		"status": "RES",
		"side": "OFF"
	},
	{
		"name": "Jordan Franks",
		"number": "87",
		"position": "TE",
		"status": "DEV",
		"side": "OFF"
	},
	{
		"name": "Harrison Bryant",
		"number": "88",
		"position": "TE",
		"status": "ACT",
		"side": "OFF"
	},
	{
		"name": "Stephen Carlson",
		"number": "89",
		"position": "TE",
		"status": "IR",
		"side": "OFF"
	},
	{
		"name": "Jadeveon Clowney",
		"number": "90",
		"position": "DE",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Joe Jackson",
		"number": "91",
		"position": "DE",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Sheldon Day",
		"number": "92",
		"position": "DT",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Tommy Togiai",
		"number": "93",
		"position": "DT",
		"status": "IR",
		"side": "DEF"
	},
	{
		"name": "Porter Gustin",
		"number": "94",
		"position": "DE",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Myles Garrett",
		"number": "95",
		"position": "DE",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Jordan Elliott",
		"number": "96",
		"position": "DT",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Malik Jackson",
		"number": "97",
		"position": "DT",
		"status": "ACT",
		"side": "DEF"
	},
	{
		"name": "Andrew Billings",
		"number": "99",
		"position": "DT",
		"status": "WAV",
		"side": "DEF"
	}
]