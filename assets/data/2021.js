const players = [
	{
		"name": "Chase McLaughlin",
		"number": "3",
		"position": "K",
		"status": "RES"
	},
	{
		"name": "Chris Nagger",
		"number": "1",
		"position": "K",
		"status": "ACT"
	},
	{
		"name": "Anthony Walker",
		"number": "4",
		"position": "MLB",
		"status": "ACT"
	},
	{
		"name": "Case Keenum",
		"number": "5",
		"position": "QB",
		"status": "ACT"
	},
	{
		"name": "Baker Mayfield",
		"number": "6",
		"position": "QB",
		"status": "ACT"
	},
	{
		"name": "Jamie Gillan",
		"number": "7",
		"position": "P",
		"status": "ACT"
	},
	{
		"name": "Anthony Schwartz",
		"number": "10",
		"position": "WR",
		"status": "ACT"
	},
	{
		"name": "Donovan Peoples-Jones",
		"number": "11",
		"position": "WR",
		"status": "ACT"
	},
	{
		"name": "Odell Beckham Jr.",
		"number": "13",
		"position": "WR",
		"status": "ACT"
	},
	{
		"name": "Ryan Switzer",
		"number": "15",
		"position": "WR",
		"status": "RES"
	},
	{
		"name": "Derrick Willies",
		"number": "16",
		"position": "WR",
		"status": "ACT"
	},
	{
		"name": "JoJo Natson",
		"number": "19",
		"position": "WR",
		"status": "DEV"
	},
	{
		"name": "Greg Newsome II",
		"number": "20",
		"position": "CB",
		"status": "ACT"
	},
	{
		"name": "Denzel Ward",
		"number": "21",
		"position": "CB",
		"status": "ACT"
	},
	{
		"name": "Grant Delpit",
		"number": "22",
		"position": "SAF",
		"status": "ACT"
	},
	{
		"name": "Troy Hill",
		"number": "23",
		"position": "CB",
		"status": "ACT"
	},
	{
		"name": "Nick Chubb",
		"number": "24",
		"position": "RB",
		"status": "ACT"
	},
	{
		"name": "Demetric Felton",
		"number": "25",
		"position": "RB",
		"status": "ACT"
	},
	{
		"name": "Greedy Williams",
		"number": "26",
		"position": "CB",
		"status": "ACT"
	},
	{
		"name": "Kareem Hunt",
		"number": "27",
		"position": "RB",
		"status": "ACT"
	},
	{
		"name": "Jeremiah Owusu-Koramoah",
		"number": "28",
		"position": "LB",
		"status": "ACT"
	},
	{
		"name": "D'Ernest Johnson",
		"number": "30",
		"position": "RB",
		"status": "ACT"
	},
	{
		"name": "Andy Janovich",
		"number": "31",
		"position": "FB",
		"status": "ACT"
	},
	{
		"name": "Ronnie Harrison",
		"number": "33",
		"position": "DB",
		"status": "ACT"
	},
	{
		"name": "Jovante Moffatt",
		"number": "35",
		"position": "SAF",
		"status": "DEV"
	},
	{
		"name": "M.J. Stewart",
		"number": "36",
		"position": "CB",
		"status": "ACT"
	},
	{
		"name": "A.J. Green",
		"number": "38",
		"position": "CB",
		"status": "ACT"
	},
	{
		"name": "Richard LeCounte III",
		"number": "39",
		"position": "SAF",
		"status": "ACT"
	},
	{
		"name": "Johnny Stanton",
		"number": "40",
		"position": "RB",
		"status": "ACT"
	},
	{
		"name": "Montrel Meander",
		"number": "41",
		"position": "LB",
		"status": "RES"
	},
	{
		"name": "Tony Fields II",
		"number": "42",
		"position": "LB",
		"status": "ACT"
	},
	{
		"name": "John Johnson",
		"number": "43",
		"position": "SS",
		"status": "ACT"
	},
	{
		"name": "Sione Takitaki",
		"number": "44",
		"position": "LB",
		"status": "ACT"
	},
	{
		"name": "Charley Hughlett",
		"number": "47",
		"position": "LS",
		"status": "ACT"
	},
	{
		"name": "John Kelly",
		"number": "49",
		"position": "RB",
		"status": "DEV"
	},
	{
		"name": "Jacob Phillips",
		"number": "50",
		"position": "LB",
		"status": "RES"
	},
	{
		"name": "Mack Wilson",
		"number": "51",
		"position": "LB",
		"status": "ACT"
	},
	{
		"name": "Elijah Lee",
		"number": "52",
		"position": "OLB",
		"status": "DEV"
	},
	{
		"name": "Nick Harris",
		"number": "53",
		"position": "C",
		"status": "ACT"
	},
	{
		"name": "Takkarist McKinley",
		"number": "55",
		"position": "DE",
		"status": "ACT"
	},
	{
		"name": "Malcolm Smith",
		"number": "56",
		"position": "OLB",
		"status": "ACT"
	},
	{
		"name": "Malik McDowell",
		"number": "58",
		"position": "DT",
		"status": "ACT"
	},
	{
		"name": "Trevon Young",
		"number": "59",
		"position": "DE",
		"status": "ACT"
	},
	{
		"name": "Curtis Weaver",
		"number": "59",
		"position": "DE",
		"status": "DEV"
	},
	{
		"name": "Blake Hance",
		"number": "62",
		"position": "OG",
		"status": "ACT"
	},
	{
		"name": "JC Tretter",
		"number": "64",
		"position": "C",
		"status": "ACT"
	},
	{
		"name": "James Hudson",
		"number": "66",
		"position": "OT",
		"status": "ACT"
	},
	{
		"name": "Michael Dunn",
		"number": "68",
		"position": "OG",
		"status": "ACT"
	},
	{
		"name": "Drake Dorbeck",
		"number": "68",
		"position": "OG",
		"status": "ACT"
	},
	{
		"name": "Jedrick Wills",
		"number": "71",
		"position": "OT",
		"status": "ACT"
	},
	{
		"name": "Chris Hubbard",
		"number": "74",
		"position": "OT",
		"status": "ACT"
	},
	{
		"name": "Joel Bitonio",
		"number": "75",
		"position": "OG",
		"status": "ACT"
	},
	{
		"name": "Wyatt Teller",
		"number": "77",
		"position": "OG",
		"status": "ACT"
	},
	{
		"name": "Jack Conklin",
		"number": "78",
		"position": "OT",
		"status": "ACT"
	},
	{
		"name": "Drew Forbes",
		"number": "79",
		"position": "OG",
		"status": "RES"
	},
	{
		"name": "Jarvis Landry",
		"number": "80",
		"position": "WR",
		"status": "ACT"
	},
	{
		"name": "Austin Hooper",
		"number": "81",
		"position": "TE",
		"status": "ACT"
	},
	{
		"name": "Rashard Higgins",
		"number": "82",
		"position": "WR",
		"status": "ACT"
	},
	{
		"name": "Ja'Marcus Bradley",
		"number": "84",
		"position": "WR",
		"status": "DEV"
	},
	{
		"name": "David Njoku",
		"number": "85",
		"position": "TE",
		"status": "ACT"
	},
	{
		"name": "Connor Davis",
		"number": "86",
		"position": "TE",
		"status": "RES"
	},
	{
		"name": "Jordan Franks",
		"number": "87",
		"position": "TE",
		"status": "DEV"
	},
	{
		"name": "Harrison Bryant",
		"number": "88",
		"position": "TE",
		"status": "ACT"
	},
	{
		"name": "Stephen Carlson",
		"number": "89",
		"position": "TE",
		"status": "RES"
	},
	{
		"name": "Jadeveon Clowney",
		"number": "90",
		"position": "LB",
		"status": "ACT"
	},
	{
		"name": "Joe Jackson",
		"number": "91",
		"position": "DE",
		"status": "ACT"
	},
	{
		"name": "Sheldon Day",
		"number": "92",
		"position": "DT",
		"status": "DEV"
	},
	{
		"name": "Tommy Togiai",
		"number": "93",
		"position": "DT",
		"status": "ACT"
	},
	{
		"name": "Porter Gustin",
		"number": "94",
		"position": "DE",
		"status": "DEV"
	},
	{
		"name": "Myles Garrett",
		"number": "95",
		"position": "DE",
		"status": "ACT"
	},
	{
		"name": "Jordan Elliott",
		"number": "96",
		"position": "DT",
		"status": "ACT"
	},
	{
		"name": "Malik Jackson",
		"number": "97",
		"position": "DT",
		"status": "ACT"
	},
	{
		"name": "Andrew Billings",
		"number": "99",
		"position": "DT",
		"status": "ACT"
	},
]