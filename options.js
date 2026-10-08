/**
 * Project Name
 * https://github.com/GBAS-BCN/vTools-Helper
 *
 * @file      options.js
 * @author    Gil Ben Ami
 * @date      2026-10-09
 * @license   GPL-3.0
 */

// Mapping of Country ID to States/Provinces
const countryStatesMap = {
  "1": [
    {
      "id": "1",
      "name": "Badakhshan"
    },
    {
      "id": "2",
      "name": "Badghis"
    },
    {
      "id": "3",
      "name": "Baghlan"
    },
    {
      "id": "4",
      "name": "Balkh"
    },
    {
      "id": "5",
      "name": "Bamian"
    },
    {
      "id": "6",
      "name": "Farah"
    },
    {
      "id": "7",
      "name": "Faryab"
    },
    {
      "id": "8",
      "name": "Ghazni"
    },
    {
      "id": "9",
      "name": "Ghowr"
    },
    {
      "id": "10",
      "name": "Helmand"
    },
    {
      "id": "11",
      "name": "Herat"
    },
    {
      "id": "12",
      "name": "Jowzjan"
    },
    {
      "id": "13",
      "name": "Kabol"
    },
    {
      "id": "14",
      "name": "Kandahar"
    },
    {
      "id": "15",
      "name": "Kapisa"
    },
    {
      "id": "16",
      "name": "Khowst"
    },
    {
      "id": "17",
      "name": "Konar"
    },
    {
      "id": "18",
      "name": "Kondoz"
    },
    {
      "id": "19",
      "name": "Laghman"
    },
    {
      "id": "20",
      "name": "Lowgar"
    },
    {
      "id": "21",
      "name": "Nangarhar"
    },
    {
      "id": "22",
      "name": "Nimruz"
    },
    {
      "id": "23",
      "name": "Nurestan"
    },
    {
      "id": "24",
      "name": "Oruzgan"
    },
    {
      "id": "25",
      "name": "Paktia"
    },
    {
      "id": "26",
      "name": "Paktika"
    },
    {
      "id": "27",
      "name": "Parvan"
    },
    {
      "id": "28",
      "name": "Samangan"
    },
    {
      "id": "29",
      "name": "Sar-e Pol"
    },
    {
      "id": "30",
      "name": "Takhar"
    },
    {
      "id": "31",
      "name": "Unknown"
    },
    {
      "id": "32",
      "name": "Vardak"
    },
    {
      "id": "33",
      "name": "Zabol"
    }
  ],
  "2": [
    {
      "id": "34",
      "name": "Beratit"
    },
    {
      "id": "35",
      "name": "Dibres"
    },
    {
      "id": "36",
      "name": "Durresit"
    },
    {
      "id": "37",
      "name": "Elbasanit"
    },
    {
      "id": "38",
      "name": "Fierit"
    },
    {
      "id": "39",
      "name": "Gjirokastres"
    },
    {
      "id": "40",
      "name": "Korces"
    },
    {
      "id": "41",
      "name": "Kukesit"
    },
    {
      "id": "42",
      "name": "Lezhes"
    },
    {
      "id": "43",
      "name": "Shkodres"
    },
    {
      "id": "44",
      "name": "Tiranes"
    },
    {
      "id": "45",
      "name": "Vlores"
    }
  ],
  "3": [
    {
      "id": "46",
      "name": "Adrar"
    },
    {
      "id": "47",
      "name": "Ain Defla"
    },
    {
      "id": "48",
      "name": "Ain Temouchent"
    },
    {
      "id": "49",
      "name": "Alger"
    },
    {
      "id": "50",
      "name": "Annaba"
    },
    {
      "id": "51",
      "name": "Batna"
    },
    {
      "id": "52",
      "name": "Bechar"
    },
    {
      "id": "53",
      "name": "Bejaia"
    },
    {
      "id": "54",
      "name": "Biskra"
    },
    {
      "id": "55",
      "name": "Blida"
    },
    {
      "id": "56",
      "name": "Bordj Bou Arreridj"
    },
    {
      "id": "57",
      "name": "Bouira"
    },
    {
      "id": "58",
      "name": "Chlef"
    },
    {
      "id": "59",
      "name": "Constantine"
    },
    {
      "id": "60",
      "name": "Djelfa"
    },
    {
      "id": "61",
      "name": "El Bayadh"
    },
    {
      "id": "62",
      "name": "El Oued"
    },
    {
      "id": "63",
      "name": "Ghardaia"
    },
    {
      "id": "64",
      "name": "Guelma"
    },
    {
      "id": "65",
      "name": "Illizi"
    },
    {
      "id": "66",
      "name": "Jijel"
    },
    {
      "id": "67",
      "name": "Khenchela"
    },
    {
      "id": "68",
      "name": "Laghouat"
    },
    {
      "id": "69",
      "name": "M'Sila"
    },
    {
      "id": "70",
      "name": "Mascara"
    },
    {
      "id": "71",
      "name": "Medea"
    },
    {
      "id": "72",
      "name": "Mila"
    },
    {
      "id": "73",
      "name": "Mostaganem"
    },
    {
      "id": "74",
      "name": "Naama"
    },
    {
      "id": "75",
      "name": "Oran"
    },
    {
      "id": "76",
      "name": "Ouargla"
    },
    {
      "id": "77",
      "name": "Oum el Bouaghi"
    },
    {
      "id": "78",
      "name": "Relizane"
    },
    {
      "id": "79",
      "name": "Saida"
    },
    {
      "id": "80",
      "name": "Setif"
    },
    {
      "id": "81",
      "name": "Sidi Bel Abbes"
    },
    {
      "id": "82",
      "name": "Skikda"
    },
    {
      "id": "83",
      "name": "Souk Ahras"
    },
    {
      "id": "84",
      "name": "Tamanghasset"
    },
    {
      "id": "85",
      "name": "Tebessa"
    },
    {
      "id": "86",
      "name": "Tiaret"
    },
    {
      "id": "87",
      "name": "Tindouf"
    },
    {
      "id": "88",
      "name": "Tipaza"
    },
    {
      "id": "89",
      "name": "Tissemsilt"
    },
    {
      "id": "90",
      "name": "Tizi Ouzou"
    },
    {
      "id": "91",
      "name": "Tlemcen"
    }
  ],
  "4": [
    {
      "id": "92",
      "name": "Andorra"
    }
  ],
  "5": [
    {
      "id": "93",
      "name": "Benguela"
    },
    {
      "id": "94",
      "name": "Huambo"
    },
    {
      "id": "95",
      "name": "Luanda"
    },
    {
      "id": "96",
      "name": "Lunda Sul"
    }
  ],
  "6": [
    {
      "id": "97",
      "name": "Anguilla"
    }
  ],
  "7": [
    {
      "id": "98",
      "name": "Antigua & Barbuda"
    }
  ],
  "8": [
    {
      "id": "99",
      "name": "Buenos Aires"
    },
    {
      "id": "100",
      "name": "Catamarca"
    },
    {
      "id": "101",
      "name": "Chaco"
    },
    {
      "id": "102",
      "name": "Chubut"
    },
    {
      "id": "103",
      "name": "Cordoba"
    },
    {
      "id": "104",
      "name": "Corrientes"
    },
    {
      "id": "105",
      "name": "Distrito Federal"
    },
    {
      "id": "106",
      "name": "Entre Rios"
    },
    {
      "id": "107",
      "name": "Formosa"
    },
    {
      "id": "108",
      "name": "Jujuy"
    },
    {
      "id": "109",
      "name": "La Pampa"
    },
    {
      "id": "110",
      "name": "La Rioja"
    },
    {
      "id": "111",
      "name": "Mendoza"
    },
    {
      "id": "112",
      "name": "Misiones"
    },
    {
      "id": "113",
      "name": "Neuquen"
    },
    {
      "id": "114",
      "name": "Rio Negro"
    },
    {
      "id": "115",
      "name": "Salta"
    },
    {
      "id": "116",
      "name": "San Juan"
    },
    {
      "id": "117",
      "name": "San Luis"
    },
    {
      "id": "118",
      "name": "Santa Cruz"
    },
    {
      "id": "119",
      "name": "Santa Fe"
    },
    {
      "id": "120",
      "name": "Santiago del Estero"
    },
    {
      "id": "121",
      "name": "Tierra del Fuego"
    },
    {
      "id": "122",
      "name": "Tucuman"
    }
  ],
  "9": [
    {
      "id": "123",
      "name": "Aragatsotni"
    },
    {
      "id": "124",
      "name": "Ararati"
    },
    {
      "id": "125",
      "name": "Armaviri"
    },
    {
      "id": "126",
      "name": "Geghark'unik'i"
    },
    {
      "id": "127",
      "name": "K'aghak' Yerevan"
    },
    {
      "id": "128",
      "name": "Kalininskiy Rayon"
    },
    {
      "id": "129",
      "name": "Kotayk'i"
    },
    {
      "id": "130",
      "name": "Lorru"
    },
    {
      "id": "131",
      "name": "Shiraki"
    },
    {
      "id": "132",
      "name": "Syunik'i"
    },
    {
      "id": "133",
      "name": "Tavushi"
    },
    {
      "id": "134",
      "name": "Vayots' Dzori"
    }
  ],
  "10": [
    {
      "id": "135",
      "name": "Aruba"
    }
  ],
  "11": [
    {
      "id": "136",
      "name": "Australian Capital Territory"
    },
    {
      "id": "137",
      "name": "New South Wales"
    },
    {
      "id": "138",
      "name": "Northern Territory"
    },
    {
      "id": "139",
      "name": "Queensland"
    },
    {
      "id": "140",
      "name": "South Australia"
    },
    {
      "id": "141",
      "name": "Tasmania"
    },
    {
      "id": "142",
      "name": "Victoria"
    },
    {
      "id": "143",
      "name": "Western Australia"
    }
  ],
  "12": [
    {
      "id": "144",
      "name": "Burgenland"
    },
    {
      "id": "145",
      "name": "Karnten"
    },
    {
      "id": "146",
      "name": "Niederosterreich"
    },
    {
      "id": "147",
      "name": "Oberosterreich"
    },
    {
      "id": "148",
      "name": "Salzburg"
    },
    {
      "id": "149",
      "name": "Steiermark"
    },
    {
      "id": "150",
      "name": "Tirol"
    },
    {
      "id": "151",
      "name": "Vorarlberg"
    },
    {
      "id": "152",
      "name": "Wien"
    }
  ],
  "13": [
    {
      "id": "153",
      "name": "Abseron"
    },
    {
      "id": "154",
      "name": "Agcabadi"
    },
    {
      "id": "155",
      "name": "Agdam"
    },
    {
      "id": "156",
      "name": "Agdas"
    },
    {
      "id": "157",
      "name": "Agstafa"
    },
    {
      "id": "158",
      "name": "Agsu"
    },
    {
      "id": "159",
      "name": "Ali Bayramli Sahari"
    },
    {
      "id": "160",
      "name": "Astara"
    },
    {
      "id": "161",
      "name": "Baki Sahari"
    },
    {
      "id": "162",
      "name": "Balakan"
    },
    {
      "id": "163",
      "name": "Barda"
    },
    {
      "id": "164",
      "name": "Beylaqan"
    },
    {
      "id": "165",
      "name": "Bilasuvar"
    },
    {
      "id": "166",
      "name": "Cabrayil"
    },
    {
      "id": "167",
      "name": "Calilabad"
    },
    {
      "id": "168",
      "name": "Daskasan"
    },
    {
      "id": "169",
      "name": "Davaci"
    },
    {
      "id": "170",
      "name": "Fuzuli"
    },
    {
      "id": "171",
      "name": "Gadabay"
    },
    {
      "id": "172",
      "name": "Ganca Sahari"
    },
    {
      "id": "173",
      "name": "Goranboy"
    },
    {
      "id": "174",
      "name": "Goycay"
    },
    {
      "id": "175",
      "name": "Haciqabul"
    },
    {
      "id": "176",
      "name": "Imisli"
    },
    {
      "id": "177",
      "name": "Ismayilli"
    },
    {
      "id": "178",
      "name": "Kalbacar"
    },
    {
      "id": "179",
      "name": "Kurdamir"
    },
    {
      "id": "180",
      "name": "Lacin"
    },
    {
      "id": "181",
      "name": "Lankaran"
    },
    {
      "id": "182",
      "name": "Lankaran Sahari"
    },
    {
      "id": "183",
      "name": "Lerik"
    },
    {
      "id": "184",
      "name": "Masalli"
    },
    {
      "id": "185",
      "name": "Mingacevir Sahari"
    },
    {
      "id": "186",
      "name": "Naftalan Sahari"
    },
    {
      "id": "187",
      "name": "Naxcivan Muxtar Respublikasi"
    },
    {
      "id": "188",
      "name": "Neftcala"
    },
    {
      "id": "189",
      "name": "Oguz"
    },
    {
      "id": "190",
      "name": "Qabala"
    },
    {
      "id": "191",
      "name": "Qax"
    },
    {
      "id": "192",
      "name": "Qazax"
    },
    {
      "id": "193",
      "name": "Qobustan"
    },
    {
      "id": "194",
      "name": "Quba"
    },
    {
      "id": "195",
      "name": "Qubadli"
    },
    {
      "id": "196",
      "name": "Qusar"
    },
    {
      "id": "197",
      "name": "Saatli"
    },
    {
      "id": "198",
      "name": "Sabirabad"
    },
    {
      "id": "199",
      "name": "Saki"
    },
    {
      "id": "200",
      "name": "Saki Sahari"
    },
    {
      "id": "201",
      "name": "Salyan"
    },
    {
      "id": "202",
      "name": "Samaxi"
    },
    {
      "id": "203",
      "name": "Samkir"
    },
    {
      "id": "204",
      "name": "Samux"
    },
    {
      "id": "205",
      "name": "Siyazan"
    },
    {
      "id": "206",
      "name": "Susa"
    },
    {
      "id": "207",
      "name": "Tartar"
    },
    {
      "id": "208",
      "name": "Tovuz"
    },
    {
      "id": "209",
      "name": "Ucar"
    },
    {
      "id": "210",
      "name": "Xacmaz"
    },
    {
      "id": "211",
      "name": "Xankandi Sahari"
    },
    {
      "id": "212",
      "name": "Xanlar"
    },
    {
      "id": "213",
      "name": "Xizi"
    },
    {
      "id": "214",
      "name": "Xocali"
    },
    {
      "id": "215",
      "name": "Xocavand"
    },
    {
      "id": "216",
      "name": "Yardimli"
    },
    {
      "id": "217",
      "name": "Yevlax"
    },
    {
      "id": "218",
      "name": "Yevlax Sahari"
    },
    {
      "id": "219",
      "name": "Zangilan"
    },
    {
      "id": "220",
      "name": "Zaqatala"
    },
    {
      "id": "221",
      "name": "Zardab"
    }
  ],
  "14": [
    {
      "id": "222",
      "name": "Abaco"
    },
    {
      "id": "223",
      "name": "Andros"
    },
    {
      "id": "224",
      "name": "Bimini Islands"
    },
    {
      "id": "225",
      "name": "Cat Island"
    },
    {
      "id": "226",
      "name": "Eleuthera"
    },
    {
      "id": "227",
      "name": "Exuma & Cays"
    },
    {
      "id": "228",
      "name": "Grand Bahama"
    },
    {
      "id": "229",
      "name": "Harbour Island & Spanish Wells"
    },
    {
      "id": "230",
      "name": "Inagua"
    },
    {
      "id": "231",
      "name": "Long Island"
    },
    {
      "id": "232",
      "name": "Mayaguana"
    },
    {
      "id": "233",
      "name": "New Providence"
    },
    {
      "id": "234",
      "name": "Ragged Islands"
    }
  ],
  "15": [
    {
      "id": "235",
      "name": "Al Hadd"
    },
    {
      "id": "236",
      "name": "Al Manamah"
    },
    {
      "id": "237",
      "name": "Al Mintaqah al Gharbiyah"
    },
    {
      "id": "238",
      "name": "Al Mintaqah al Wusta"
    },
    {
      "id": "239",
      "name": "Al Mintaqah ash Shamaliyah"
    },
    {
      "id": "240",
      "name": "Al Muharraq"
    },
    {
      "id": "241",
      "name": "Ar Rifa` wa al Mintaqah al Janubiyah"
    },
    {
      "id": "242",
      "name": "Jidd Hafs"
    },
    {
      "id": "244",
      "name": "Madinat `Isa"
    },
    {
      "id": "243",
      "name": "Madinat Hamad"
    },
    {
      "id": "245",
      "name": "Mintaqat Juzur Hawar"
    },
    {
      "id": "246",
      "name": "Sitrah"
    }
  ],
  "16": [
    {
      "id": "247",
      "name": "Chittagong"
    },
    {
      "id": "248",
      "name": "Dhaka"
    },
    {
      "id": "249",
      "name": "Khulna"
    },
    {
      "id": "250",
      "name": "Rajshahi"
    }
  ],
  "17": [
    {
      "id": "251",
      "name": "Christ Church"
    },
    {
      "id": "252",
      "name": "Saint Andrew"
    },
    {
      "id": "253",
      "name": "Saint George"
    },
    {
      "id": "254",
      "name": "Saint James"
    },
    {
      "id": "255",
      "name": "Saint John"
    },
    {
      "id": "256",
      "name": "Saint Joseph"
    },
    {
      "id": "257",
      "name": "Saint Lucy"
    },
    {
      "id": "258",
      "name": "Saint Michael"
    },
    {
      "id": "259",
      "name": "Saint Peter"
    },
    {
      "id": "260",
      "name": "Saint Philip"
    },
    {
      "id": "261",
      "name": "Saint Thomas"
    }
  ],
  "18": [
    {
      "id": "262",
      "name": "Brestskaya"
    },
    {
      "id": "263",
      "name": "Homyel'skaya"
    },
    {
      "id": "264",
      "name": "Hrodzyenskaya"
    },
    {
      "id": "265",
      "name": "Mahilyowskaya"
    },
    {
      "id": "266",
      "name": "Minskaya"
    },
    {
      "id": "267",
      "name": "Unknown"
    },
    {
      "id": "268",
      "name": "Vitsyebskaya"
    }
  ],
  "19": [
    {
      "id": "269",
      "name": "Antwerpen"
    },
    {
      "id": "2173",
      "name": "Brabant Wallon"
    },
    {
      "id": "270",
      "name": "Hainaut"
    },
    {
      "id": "271",
      "name": "Liege"
    },
    {
      "id": "272",
      "name": "Limburg"
    },
    {
      "id": "273",
      "name": "Luxembourg"
    },
    {
      "id": "274",
      "name": "Namur"
    },
    {
      "id": "275",
      "name": "Oost-Vlaanderen"
    },
    {
      "id": "276",
      "name": "Unknown"
    },
    {
      "id": "2172",
      "name": "Vlaams Brabant"
    },
    {
      "id": "277",
      "name": "West-Vlaanderen"
    }
  ],
  "20": [
    {
      "id": "278",
      "name": "Belize"
    },
    {
      "id": "279",
      "name": "Cayo"
    },
    {
      "id": "280",
      "name": "Corozal"
    },
    {
      "id": "281",
      "name": "Orange Walk"
    },
    {
      "id": "282",
      "name": "Stann Creek"
    },
    {
      "id": "283",
      "name": "Toledo"
    }
  ],
  "21": [
    {
      "id": "284",
      "name": "Unknown"
    }
  ],
  "22": [
    {
      "id": "285",
      "name": "Ayeyarwady"
    },
    {
      "id": "286",
      "name": "Bago"
    },
    {
      "id": "287",
      "name": "Chin"
    },
    {
      "id": "288",
      "name": "Kachin"
    },
    {
      "id": "289",
      "name": "Kayah"
    },
    {
      "id": "290",
      "name": "Kayin"
    },
    {
      "id": "291",
      "name": "Magway"
    },
    {
      "id": "292",
      "name": "Mandalay"
    },
    {
      "id": "293",
      "name": "Mon"
    },
    {
      "id": "294",
      "name": "Rakhine"
    },
    {
      "id": "295",
      "name": "Sagaing"
    },
    {
      "id": "296",
      "name": "Shan"
    },
    {
      "id": "297",
      "name": "Tanintharyi"
    },
    {
      "id": "298",
      "name": "Unknown"
    }
  ],
  "23": [
    {
      "id": "299",
      "name": "Devonshire"
    },
    {
      "id": "300",
      "name": "Hamilton"
    },
    {
      "id": "301",
      "name": "Paget"
    },
    {
      "id": "302",
      "name": "Pembroke"
    },
    {
      "id": "303",
      "name": "Saint Georges"
    },
    {
      "id": "304",
      "name": "Sandys"
    },
    {
      "id": "305",
      "name": "Smiths"
    },
    {
      "id": "306",
      "name": "Southampton"
    },
    {
      "id": "307",
      "name": "Warwick"
    }
  ],
  "24": [
    {
      "id": "308",
      "name": "Bhutan"
    }
  ],
  "25": [
    {
      "id": "309",
      "name": "Beni"
    },
    {
      "id": "310",
      "name": "Chuquisaca"
    },
    {
      "id": "311",
      "name": "Cochabamba"
    },
    {
      "id": "312",
      "name": "La Paz"
    },
    {
      "id": "313",
      "name": "Oruro"
    },
    {
      "id": "314",
      "name": "Pando"
    },
    {
      "id": "315",
      "name": "Potosi"
    },
    {
      "id": "316",
      "name": "Santa Cruz"
    },
    {
      "id": "317",
      "name": "Tarija"
    }
  ],
  "26": [
    {
      "id": "318",
      "name": "Bosnia and Herzegovina"
    },
    {
      "id": "2171",
      "name": "Brcko District"
    },
    {
      "id": "2170",
      "name": "Federation of BiH"
    },
    {
      "id": "319",
      "name": "Republika Srpska"
    },
    {
      "id": "320",
      "name": "Unknown"
    }
  ],
  "27": [
    {
      "id": "321",
      "name": "Gaborone"
    },
    {
      "id": "322",
      "name": "Unknown"
    }
  ],
  "28": [
    {
      "id": "323",
      "name": "Acre"
    },
    {
      "id": "324",
      "name": "Alagoas"
    },
    {
      "id": "325",
      "name": "Amapa"
    },
    {
      "id": "326",
      "name": "Amazonas"
    },
    {
      "id": "327",
      "name": "Bahia"
    },
    {
      "id": "328",
      "name": "Ceara"
    },
    {
      "id": "329",
      "name": "Distrito Federal"
    },
    {
      "id": "330",
      "name": "Espirito Santo"
    },
    {
      "id": "331",
      "name": "Goias"
    },
    {
      "id": "332",
      "name": "Maranhao"
    },
    {
      "id": "333",
      "name": "Mato Grosso"
    },
    {
      "id": "334",
      "name": "Mato Grosso do Sul"
    },
    {
      "id": "335",
      "name": "Minas Gerais"
    },
    {
      "id": "336",
      "name": "Para"
    },
    {
      "id": "337",
      "name": "Paraiba"
    },
    {
      "id": "338",
      "name": "Parana"
    },
    {
      "id": "339",
      "name": "Pernambuco"
    },
    {
      "id": "340",
      "name": "Piaui"
    },
    {
      "id": "341",
      "name": "Rio de Janeiro"
    },
    {
      "id": "342",
      "name": "Rio Grande do Norte"
    },
    {
      "id": "343",
      "name": "Rio Grande do Sul"
    },
    {
      "id": "344",
      "name": "Rondonia"
    },
    {
      "id": "345",
      "name": "Roraima"
    },
    {
      "id": "346",
      "name": "Santa Catarina"
    },
    {
      "id": "347",
      "name": "Sao Paulo"
    },
    {
      "id": "348",
      "name": "Sergipe"
    },
    {
      "id": "349",
      "name": "Tocantins"
    }
  ],
  "29": [
    {
      "id": "350",
      "name": "British Virgin Islands"
    }
  ],
  "30": [
    {
      "id": "351",
      "name": "Brunei"
    }
  ],
  "31": [
    {
      "id": "352",
      "name": "Blagoevgrad"
    },
    {
      "id": "353",
      "name": "Burgas"
    },
    {
      "id": "354",
      "name": "Dobrich"
    },
    {
      "id": "355",
      "name": "Gabrovo"
    },
    {
      "id": "356",
      "name": "Khaskovo"
    },
    {
      "id": "357",
      "name": "Kurdzhali"
    },
    {
      "id": "358",
      "name": "Kyustendil"
    },
    {
      "id": "359",
      "name": "Lovech"
    },
    {
      "id": "360",
      "name": "Montana"
    },
    {
      "id": "361",
      "name": "Pazardzhik"
    },
    {
      "id": "362",
      "name": "Pernik"
    },
    {
      "id": "363",
      "name": "Pleven"
    },
    {
      "id": "364",
      "name": "Plovdiv"
    },
    {
      "id": "365",
      "name": "Razgrad"
    },
    {
      "id": "366",
      "name": "Ruse"
    },
    {
      "id": "367",
      "name": "Shumen"
    },
    {
      "id": "368",
      "name": "Silistra"
    },
    {
      "id": "369",
      "name": "Sliven"
    },
    {
      "id": "370",
      "name": "Smolyan"
    },
    {
      "id": "371",
      "name": "Sofiya"
    },
    {
      "id": "372",
      "name": "Sofiya-Grad"
    },
    {
      "id": "373",
      "name": "Stara Zagora"
    },
    {
      "id": "374",
      "name": "Turgovishte"
    },
    {
      "id": "375",
      "name": "Varna"
    },
    {
      "id": "376",
      "name": "Veliko Turnovo"
    },
    {
      "id": "377",
      "name": "Vidin"
    },
    {
      "id": "378",
      "name": "Vratsa"
    },
    {
      "id": "379",
      "name": "Yambol"
    }
  ],
  "32": [
    {
      "id": "380",
      "name": "Burkina Faso"
    }
  ],
  "33": [
    {
      "id": "381",
      "name": "Burundi"
    }
  ],
  "34": [
    {
      "id": "382",
      "name": "Batdambang"
    },
    {
      "id": "383",
      "name": "Kampong Cham"
    },
    {
      "id": "384",
      "name": "Kampong Chhnang"
    },
    {
      "id": "385",
      "name": "Kampong Spoe"
    },
    {
      "id": "386",
      "name": "Kampong Thum"
    },
    {
      "id": "387",
      "name": "Kampot"
    },
    {
      "id": "388",
      "name": "Kandal"
    },
    {
      "id": "389",
      "name": "Kaoh Kong"
    },
    {
      "id": "390",
      "name": "Kracheh"
    },
    {
      "id": "391",
      "name": "Mondol Kiri"
    },
    {
      "id": "392",
      "name": "Pouthisat"
    },
    {
      "id": "393",
      "name": "Preah Vihear"
    },
    {
      "id": "394",
      "name": "Prey Veng"
    },
    {
      "id": "395",
      "name": "Rotanah Kiri"
    },
    {
      "id": "396",
      "name": "Siem Reab"
    },
    {
      "id": "397",
      "name": "Stoeng Treng"
    },
    {
      "id": "398",
      "name": "Svay Rieng"
    },
    {
      "id": "399",
      "name": "Takev"
    },
    {
      "id": "400",
      "name": "Unknown"
    }
  ],
  "35": [
    {
      "id": "401",
      "name": "Cameroon"
    }
  ],
  "36": [
    {
      "id": "402",
      "name": "Alberta"
    },
    {
      "id": "403",
      "name": "British Columbia"
    },
    {
      "id": "404",
      "name": "Manitoba"
    },
    {
      "id": "405",
      "name": "New Brunswick"
    },
    {
      "id": "406",
      "name": "Newfoundland and Labrador"
    },
    {
      "id": "407",
      "name": "Northwest Territories"
    },
    {
      "id": "408",
      "name": "Nova Scotia"
    },
    {
      "id": "409",
      "name": "Nunavut"
    },
    {
      "id": "410",
      "name": "Ontario"
    },
    {
      "id": "411",
      "name": "Prince Edward Island"
    },
    {
      "id": "412",
      "name": "Quebec"
    },
    {
      "id": "413",
      "name": "Saskatchewan"
    },
    {
      "id": "414",
      "name": "Yukon"
    }
  ],
  "37": [
    {
      "id": "415",
      "name": "Cape Verde"
    }
  ],
  "38": [
    {
      "id": "416",
      "name": "Cayman Islands"
    }
  ],
  "39": [
    {
      "id": "417",
      "name": "Central African Republic"
    }
  ],
  "40": [
    {
      "id": "418",
      "name": "Batha"
    },
    {
      "id": "419",
      "name": "Biltine"
    },
    {
      "id": "420",
      "name": "Borkou-Ennedi-Tibesti"
    },
    {
      "id": "421",
      "name": "Chari-Baguirmi"
    },
    {
      "id": "422",
      "name": "Guera"
    },
    {
      "id": "423",
      "name": "Kanem"
    },
    {
      "id": "424",
      "name": "Lac"
    },
    {
      "id": "425",
      "name": "Logone Occidental"
    },
    {
      "id": "426",
      "name": "Logone Oriental"
    },
    {
      "id": "427",
      "name": "Mayo-Kebbi"
    },
    {
      "id": "428",
      "name": "Moyen-Chari"
    },
    {
      "id": "429",
      "name": "Ouaddai"
    },
    {
      "id": "430",
      "name": "Salamat"
    },
    {
      "id": "431",
      "name": "Tandjile"
    }
  ],
  "41": [
    {
      "id": "432",
      "name": "Aisen del General Carlos Ibanez del Campo"
    },
    {
      "id": "433",
      "name": "Antofagasta"
    },
    {
      "id": "434",
      "name": "Araucania"
    },
    {
      "id": "435",
      "name": "Atacama"
    },
    {
      "id": "436",
      "name": "Bio-Bio"
    },
    {
      "id": "437",
      "name": "Coquimbo"
    },
    {
      "id": "438",
      "name": "Libertador G.B. O'Higgins"
    },
    {
      "id": "439",
      "name": "Los Lagos"
    },
    {
      "id": "440",
      "name": "Magallanes y de la Antartica Chilena"
    },
    {
      "id": "441",
      "name": "Maule"
    },
    {
      "id": "442",
      "name": "Region Metropolitana"
    },
    {
      "id": "443",
      "name": "Tarapaca"
    },
    {
      "id": "444",
      "name": "Valparaiso"
    }
  ],
  "42": [
    {
      "id": "445",
      "name": "Anhui"
    },
    {
      "id": "446",
      "name": "Beijing"
    },
    {
      "id": "447",
      "name": "Chongqing"
    },
    {
      "id": "448",
      "name": "Fujian"
    },
    {
      "id": "449",
      "name": "Gansu"
    },
    {
      "id": "450",
      "name": "Guangdong"
    },
    {
      "id": "451",
      "name": "Guangxi"
    },
    {
      "id": "452",
      "name": "Guizhou"
    },
    {
      "id": "453",
      "name": "Hainan"
    },
    {
      "id": "454",
      "name": "Hebei"
    },
    {
      "id": "455",
      "name": "Heilongjiang"
    },
    {
      "id": "456",
      "name": "Henan"
    },
    {
      "id": "2164",
      "name": "Hong Kong"
    },
    {
      "id": "457",
      "name": "Hubei"
    },
    {
      "id": "458",
      "name": "Hunan"
    },
    {
      "id": "459",
      "name": "Inner Mongolia"
    },
    {
      "id": "460",
      "name": "Jiangsu"
    },
    {
      "id": "461",
      "name": "Jiangxi"
    },
    {
      "id": "462",
      "name": "Jilin"
    },
    {
      "id": "463",
      "name": "Liaoning"
    },
    {
      "id": "2165",
      "name": "Macau"
    },
    {
      "id": "2166",
      "name": "Nei Mongol"
    },
    {
      "id": "464",
      "name": "Ningxia"
    },
    {
      "id": "465",
      "name": "Qinghai"
    },
    {
      "id": "466",
      "name": "Shaanxi"
    },
    {
      "id": "467",
      "name": "Shandong"
    },
    {
      "id": "2167",
      "name": "Shanghai"
    },
    {
      "id": "468",
      "name": "Shanxi"
    },
    {
      "id": "469",
      "name": "Sichuan"
    },
    {
      "id": "2168",
      "name": "Tianjin"
    },
    {
      "id": "470",
      "name": "Tibet"
    },
    {
      "id": "471",
      "name": "Unknown"
    },
    {
      "id": "472",
      "name": "Xinjiang"
    },
    {
      "id": "2169",
      "name": "Xizang"
    },
    {
      "id": "473",
      "name": "Yunnan"
    },
    {
      "id": "474",
      "name": "Zhejiang"
    }
  ],
  "43": [
    {
      "id": "475",
      "name": "Christmas Island"
    }
  ],
  "44": [
    {
      "id": "476",
      "name": "Cocos Islands"
    }
  ],
  "45": [
    {
      "id": "2107",
      "name": "Amazonas"
    },
    {
      "id": "477",
      "name": "Antioquia"
    },
    {
      "id": "2108",
      "name": "Arauca"
    },
    {
      "id": "478",
      "name": "Atlantico"
    },
    {
      "id": "480",
      "name": "Bolivar"
    },
    {
      "id": "2109",
      "name": "Boyaca"
    },
    {
      "id": "2110",
      "name": "Caldas"
    },
    {
      "id": "2111",
      "name": "Caqueta"
    },
    {
      "id": "2112",
      "name": "Casanare"
    },
    {
      "id": "481",
      "name": "Cauca"
    },
    {
      "id": "2113",
      "name": "Cesar"
    },
    {
      "id": "2114",
      "name": "Choco"
    },
    {
      "id": "482",
      "name": "Cundinamarca"
    },
    {
      "id": "2174",
      "name": "Departamento de Córdoba"
    },
    {
      "id": "479",
      "name": "Distrito Capital de Bogota"
    },
    {
      "id": "2115",
      "name": "Guainia"
    },
    {
      "id": "2116",
      "name": "Guaviare"
    },
    {
      "id": "2117",
      "name": "Huila"
    },
    {
      "id": "2118",
      "name": "La Guajira"
    },
    {
      "id": "483",
      "name": "Magdalena"
    },
    {
      "id": "484",
      "name": "Meta"
    },
    {
      "id": "2119",
      "name": "Narino"
    },
    {
      "id": "2120",
      "name": "Norte de Santander"
    },
    {
      "id": "2121",
      "name": "Putumayo"
    },
    {
      "id": "2122",
      "name": "Quindio"
    },
    {
      "id": "2123",
      "name": "Risaralda"
    },
    {
      "id": "2124",
      "name": "San Andres y Providencia"
    },
    {
      "id": "485",
      "name": "Santander"
    },
    {
      "id": "2125",
      "name": "Sucre"
    },
    {
      "id": "2126",
      "name": "Tolima"
    },
    {
      "id": "486",
      "name": "Valle del Cauca"
    },
    {
      "id": "2127",
      "name": "Vaupes"
    },
    {
      "id": "2128",
      "name": "Vichada"
    }
  ],
  "46": [
    {
      "id": "487",
      "name": "Comoros"
    }
  ],
  "47": [
    {
      "id": "488",
      "name": "Bouenza"
    },
    {
      "id": "489",
      "name": "Brazzaville"
    },
    {
      "id": "490",
      "name": "Cuvette"
    },
    {
      "id": "491",
      "name": "Kouilou"
    },
    {
      "id": "492",
      "name": "Lekoumou"
    },
    {
      "id": "493",
      "name": "Likouala"
    },
    {
      "id": "494",
      "name": "Niari"
    },
    {
      "id": "495",
      "name": "Plateaux"
    },
    {
      "id": "496",
      "name": "Pool"
    },
    {
      "id": "497",
      "name": "Sangha"
    }
  ],
  "48": [
    {
      "id": "498",
      "name": "Bandundu"
    },
    {
      "id": "499",
      "name": "Bas-Congo"
    },
    {
      "id": "500",
      "name": "Equateur"
    },
    {
      "id": "501",
      "name": "Kasai-Occidental"
    },
    {
      "id": "502",
      "name": "Katanga"
    },
    {
      "id": "503",
      "name": "Kinshasa"
    },
    {
      "id": "504",
      "name": "Kivu"
    },
    {
      "id": "505",
      "name": "Maniema"
    },
    {
      "id": "506",
      "name": "Nord-Kivu"
    },
    {
      "id": "507",
      "name": "Orientale"
    },
    {
      "id": "508",
      "name": "Sud-Kivu"
    }
  ],
  "49": [
    {
      "id": "509",
      "name": "Cook Islands"
    }
  ],
  "50": [
    {
      "id": "510",
      "name": "Alajuela"
    },
    {
      "id": "511",
      "name": "Cartago"
    },
    {
      "id": "512",
      "name": "Guanacaste"
    },
    {
      "id": "513",
      "name": "Heredia"
    },
    {
      "id": "514",
      "name": "Limon"
    },
    {
      "id": "515",
      "name": "Puntarenas"
    },
    {
      "id": "516",
      "name": "San Jose"
    }
  ],
  "51": [
    {
      "id": "517",
      "name": "Cote D'Ivoire"
    }
  ],
  "52": [
    {
      "id": "518",
      "name": "Bjelovarsko-Bilogorska"
    },
    {
      "id": "519",
      "name": "Brodsko-Posavska"
    },
    {
      "id": "520",
      "name": "Dubrovacko-Neretvanska"
    },
    {
      "id": "521",
      "name": "Grad Zagreb"
    },
    {
      "id": "522",
      "name": "Istarska"
    },
    {
      "id": "523",
      "name": "Karlovacka"
    },
    {
      "id": "524",
      "name": "Koprivnicko-Krizevacka"
    },
    {
      "id": "525",
      "name": "Krapinsko-Zagorska"
    },
    {
      "id": "526",
      "name": "Licko-Senjska"
    },
    {
      "id": "527",
      "name": "Medimurska"
    },
    {
      "id": "528",
      "name": "Osjecko-Baranjska"
    },
    {
      "id": "529",
      "name": "Pozesko-Slavonska"
    },
    {
      "id": "530",
      "name": "Primorsko-Goranska"
    },
    {
      "id": "531",
      "name": "Sibensko-Kninska"
    },
    {
      "id": "532",
      "name": "Sisacko-Moslavacka"
    },
    {
      "id": "533",
      "name": "Splitsko-Dalmatinska"
    },
    {
      "id": "534",
      "name": "Varazdinska"
    },
    {
      "id": "535",
      "name": "Viroviticko-Podravska"
    },
    {
      "id": "536",
      "name": "Vukovarsko-Srijemska"
    },
    {
      "id": "537",
      "name": "Zagrebacka"
    }
  ],
  "53": [
    {
      "id": "538",
      "name": "Camaguey"
    },
    {
      "id": "539",
      "name": "Ciego de Avila"
    },
    {
      "id": "540",
      "name": "Cienfuegos"
    },
    {
      "id": "541",
      "name": "Ciudad de la Habana"
    },
    {
      "id": "542",
      "name": "Granma"
    },
    {
      "id": "543",
      "name": "Guantanamo"
    },
    {
      "id": "544",
      "name": "Holguin"
    },
    {
      "id": "545",
      "name": "Isla de la Juventud"
    },
    {
      "id": "546",
      "name": "La Habana"
    },
    {
      "id": "547",
      "name": "Las Tunas"
    },
    {
      "id": "548",
      "name": "Matanzas"
    },
    {
      "id": "549",
      "name": "Pinar del Rio"
    },
    {
      "id": "550",
      "name": "Sancti Spiritus"
    },
    {
      "id": "551",
      "name": "Santiago de Cuba"
    },
    {
      "id": "552",
      "name": "Villa Clara"
    }
  ],
  "54": [
    {
      "id": "553",
      "name": "Cyprus"
    }
  ],
  "55": [
    {
      "id": "554",
      "name": "Czech Republic"
    }
  ],
  "56": [
    {
      "id": "555",
      "name": "Arhus Amt"
    },
    {
      "id": "556",
      "name": "Bornholms Amt"
    },
    {
      "id": "557",
      "name": "Frederiksberg Kommune"
    },
    {
      "id": "558",
      "name": "Frederiksborg Amt"
    },
    {
      "id": "559",
      "name": "Fyns Amt"
    },
    {
      "id": "560",
      "name": "Kobenhavns Amt"
    },
    {
      "id": "561",
      "name": "Kobenhavns Kommune"
    },
    {
      "id": "562",
      "name": "Nordjyllands Amt"
    },
    {
      "id": "563",
      "name": "Ribe Amt"
    },
    {
      "id": "564",
      "name": "Ringkobing Amt"
    },
    {
      "id": "565",
      "name": "Roskilde Amt"
    },
    {
      "id": "566",
      "name": "Sonderjyllands Amt"
    },
    {
      "id": "567",
      "name": "Storstroms Amt"
    },
    {
      "id": "568",
      "name": "Vejle Amt"
    },
    {
      "id": "569",
      "name": "Vestsjaellands Amt"
    },
    {
      "id": "570",
      "name": "Viborg Amt"
    }
  ],
  "57": [
    {
      "id": "571",
      "name": "Djibouti"
    }
  ],
  "58": [
    {
      "id": "572",
      "name": "Dominica"
    }
  ],
  "59": [
    {
      "id": "573",
      "name": "Azua"
    },
    {
      "id": "574",
      "name": "Baoruco"
    },
    {
      "id": "575",
      "name": "Barahona"
    },
    {
      "id": "576",
      "name": "Dajabon"
    },
    {
      "id": "577",
      "name": "Distrito Nacional"
    },
    {
      "id": "578",
      "name": "Duarte"
    },
    {
      "id": "579",
      "name": "El Seibo"
    },
    {
      "id": "580",
      "name": "Elias Pina"
    },
    {
      "id": "581",
      "name": "Espaillat"
    },
    {
      "id": "582",
      "name": "Hato Mayor"
    },
    {
      "id": "583",
      "name": "Independencia"
    },
    {
      "id": "584",
      "name": "La Altagracia"
    },
    {
      "id": "585",
      "name": "La Romana"
    },
    {
      "id": "586",
      "name": "La Vega"
    },
    {
      "id": "587",
      "name": "Maria Trinidad Sanchez"
    },
    {
      "id": "588",
      "name": "Monsenor Nouel"
    },
    {
      "id": "589",
      "name": "Monte Cristi"
    },
    {
      "id": "590",
      "name": "Monte Plata"
    },
    {
      "id": "591",
      "name": "Pedernales"
    },
    {
      "id": "592",
      "name": "Peravia"
    },
    {
      "id": "593",
      "name": "Puerto Plata"
    },
    {
      "id": "594",
      "name": "Salcedo"
    },
    {
      "id": "595",
      "name": "Samana"
    },
    {
      "id": "596",
      "name": "San Cristobal"
    },
    {
      "id": "597",
      "name": "San Juan"
    },
    {
      "id": "598",
      "name": "San Pedro de Macoris"
    },
    {
      "id": "599",
      "name": "Sanchez Ramirez"
    },
    {
      "id": "600",
      "name": "Santiago"
    },
    {
      "id": "601",
      "name": "Santiago Rodriguez"
    },
    {
      "id": "602",
      "name": "Valverde"
    }
  ],
  "60": [
    {
      "id": "603",
      "name": "East Timor"
    }
  ],
  "61": [
    {
      "id": "604",
      "name": "Azuay"
    },
    {
      "id": "605",
      "name": "Bolivar"
    },
    {
      "id": "606",
      "name": "Canar"
    },
    {
      "id": "607",
      "name": "Carchi"
    },
    {
      "id": "608",
      "name": "Chimborazo"
    },
    {
      "id": "609",
      "name": "Cotopaxi"
    },
    {
      "id": "610",
      "name": "El Oro"
    },
    {
      "id": "611",
      "name": "Esmeraldas"
    },
    {
      "id": "612",
      "name": "Galapagos"
    },
    {
      "id": "613",
      "name": "Guayas"
    },
    {
      "id": "614",
      "name": "Imbabura"
    },
    {
      "id": "615",
      "name": "Loja"
    },
    {
      "id": "616",
      "name": "Los Rios"
    },
    {
      "id": "617",
      "name": "Manabi"
    },
    {
      "id": "618",
      "name": "Morona-Santiago"
    },
    {
      "id": "619",
      "name": "Napo"
    },
    {
      "id": "620",
      "name": "Orellana"
    },
    {
      "id": "621",
      "name": "Pastaza"
    },
    {
      "id": "622",
      "name": "Pichincha"
    },
    {
      "id": "2101",
      "name": "Santa Elena"
    },
    {
      "id": "2102",
      "name": "Santo Domingo de los Tsachilas"
    },
    {
      "id": "623",
      "name": "Sucumbios"
    },
    {
      "id": "2103",
      "name": "Tungurahua"
    },
    {
      "id": "624",
      "name": "Zamora-Chinchipe"
    }
  ],
  "62": [
    {
      "id": "625",
      "name": "Ad-Daqahiyah"
    },
    {
      "id": "626",
      "name": "Al-Bahr al-Ahmar"
    },
    {
      "id": "627",
      "name": "Al-Buhayrah"
    },
    {
      "id": "628",
      "name": "Al-Fayyum"
    },
    {
      "id": "629",
      "name": "Al-Gharbiyah"
    },
    {
      "id": "630",
      "name": "Al-Iskandariyah"
    },
    {
      "id": "631",
      "name": "Al-Isma'iliyah"
    },
    {
      "id": "632",
      "name": "Al-Jizah"
    },
    {
      "id": "633",
      "name": "Al-Minufiyah"
    },
    {
      "id": "634",
      "name": "Al-Minya"
    },
    {
      "id": "635",
      "name": "Al-Qahirah"
    },
    {
      "id": "636",
      "name": "Al-Qalyubyah"
    },
    {
      "id": "637",
      "name": "Al-Wadi al-Jadid"
    },
    {
      "id": "638",
      "name": "As-Suways"
    },
    {
      "id": "639",
      "name": "Ash-Sharqiyah"
    },
    {
      "id": "640",
      "name": "Aswan"
    },
    {
      "id": "641",
      "name": "Asyut"
    },
    {
      "id": "642",
      "name": "Bani Suwayf"
    },
    {
      "id": "643",
      "name": "Bur Sa'id"
    },
    {
      "id": "644",
      "name": "Dumyat"
    },
    {
      "id": "645",
      "name": "Kafr ash-Shaykh"
    },
    {
      "id": "646",
      "name": "Marsa Matruh"
    },
    {
      "id": "647",
      "name": "Qina"
    },
    {
      "id": "648",
      "name": "Sawhaj"
    },
    {
      "id": "649",
      "name": "Sina' al-Janubiyah"
    },
    {
      "id": "650",
      "name": "Sina' ash-Shamaliyah"
    }
  ],
  "63": [
    {
      "id": "651",
      "name": "Ahuachapan"
    },
    {
      "id": "652",
      "name": "Cabanas"
    },
    {
      "id": "653",
      "name": "Chalatenango"
    },
    {
      "id": "654",
      "name": "Cuscatlan"
    },
    {
      "id": "655",
      "name": "La Libertad"
    },
    {
      "id": "656",
      "name": "La Paz"
    },
    {
      "id": "657",
      "name": "La Union"
    },
    {
      "id": "658",
      "name": "Morazan"
    },
    {
      "id": "659",
      "name": "San Miguel"
    },
    {
      "id": "660",
      "name": "San Salvador"
    },
    {
      "id": "661",
      "name": "San Vicente"
    },
    {
      "id": "662",
      "name": "Santa Ana"
    },
    {
      "id": "663",
      "name": "Sonsonate"
    },
    {
      "id": "664",
      "name": "Usulutan"
    }
  ],
  "64": [
    {
      "id": "665",
      "name": "Equatorial Guinea"
    }
  ],
  "65": [
    {
      "id": "666",
      "name": "Eritea"
    }
  ],
  "66": [
    {
      "id": "667",
      "name": "Estonia"
    }
  ],
  "67": [
    {
      "id": "668",
      "name": "Ethiopia"
    }
  ],
  "68": [
    {
      "id": "669",
      "name": "Falkland Islands"
    }
  ],
  "69": [
    {
      "id": "670",
      "name": "Faroe Islands"
    }
  ],
  "70": [
    {
      "id": "671",
      "name": "Fiji"
    }
  ],
  "71": [
    {
      "id": "672",
      "name": "Alands Lan"
    },
    {
      "id": "673",
      "name": "Lapplands Lan"
    },
    {
      "id": "674",
      "name": "Ostra Finlands Lan"
    },
    {
      "id": "675",
      "name": "Sodra Finlands Lan"
    },
    {
      "id": "676",
      "name": "Uleaborgs Lan"
    },
    {
      "id": "677",
      "name": "Vastra Finlands Lan"
    }
  ],
  "72": [
    {
      "id": "678",
      "name": "Alsace"
    },
    {
      "id": "679",
      "name": "Aquitaine"
    },
    {
      "id": "680",
      "name": "Auvergne"
    },
    {
      "id": "681",
      "name": "Basse-Normandie"
    },
    {
      "id": "682",
      "name": "Bourgogne"
    },
    {
      "id": "683",
      "name": "Bretagne"
    },
    {
      "id": "684",
      "name": "Centre"
    },
    {
      "id": "685",
      "name": "Champagne-Ardenne"
    },
    {
      "id": "686",
      "name": "Corse"
    },
    {
      "id": "687",
      "name": "Franche-Comte"
    },
    {
      "id": "688",
      "name": "Haute-Normandie"
    },
    {
      "id": "689",
      "name": "Ile-de-France"
    },
    {
      "id": "690",
      "name": "Languedoc-Roussillon"
    },
    {
      "id": "691",
      "name": "Limousin"
    },
    {
      "id": "692",
      "name": "Lorraine"
    },
    {
      "id": "693",
      "name": "Midi-Pyrenees"
    },
    {
      "id": "694",
      "name": "Nord-Pas-de-Calais"
    },
    {
      "id": "695",
      "name": "Pays-de-la Loire"
    },
    {
      "id": "696",
      "name": "Picardie"
    },
    {
      "id": "697",
      "name": "Poitou-Charentes"
    },
    {
      "id": "698",
      "name": "Provence-Alpes-Cote d'Azur"
    },
    {
      "id": "699",
      "name": "Rhooe-Alpes"
    },
    {
      "id": "700",
      "name": "Unknown"
    }
  ],
  "73": [
    {
      "id": "701",
      "name": "French Guiana"
    }
  ],
  "74": [
    {
      "id": "702",
      "name": "French Polynesia"
    }
  ],
  "75": [
    {
      "id": "703",
      "name": "Gabon"
    }
  ],
  "76": [
    {
      "id": "704",
      "name": "Gambia"
    }
  ],
  "77": [
    {
      "id": "705",
      "name": "Gaza Strip"
    }
  ],
  "78": [
    {
      "id": "706",
      "name": "Georgia"
    }
  ],
  "79": [
    {
      "id": "707",
      "name": "Baden-Wurttemberg"
    },
    {
      "id": "708",
      "name": "Bayern"
    },
    {
      "id": "709",
      "name": "Berlin"
    },
    {
      "id": "710",
      "name": "Brandenburg"
    },
    {
      "id": "711",
      "name": "Bremen"
    },
    {
      "id": "712",
      "name": "Hamburg"
    },
    {
      "id": "713",
      "name": "Hessen"
    },
    {
      "id": "714",
      "name": "Mecklenburg-Vorpommern"
    },
    {
      "id": "715",
      "name": "Niedersachsen"
    },
    {
      "id": "716",
      "name": "Nordrhein-Westfalen"
    },
    {
      "id": "717",
      "name": "Rheinland-Pfalz"
    },
    {
      "id": "718",
      "name": "Saarland"
    },
    {
      "id": "719",
      "name": "Sachsen"
    },
    {
      "id": "720",
      "name": "Sachsen-Anhalt"
    },
    {
      "id": "721",
      "name": "Schleswig-Holstein"
    },
    {
      "id": "722",
      "name": "Thuringen"
    }
  ],
  "80": [
    {
      "id": "723",
      "name": "Ghana"
    }
  ],
  "81": [
    {
      "id": "724",
      "name": "Gibraltar"
    }
  ],
  "82": [
    {
      "id": "725",
      "name": "Aegean Islands"
    },
    {
      "id": "726",
      "name": "Attiki"
    },
    {
      "id": "727",
      "name": "Central Greece & Evvoia"
    },
    {
      "id": "728",
      "name": "Crete"
    },
    {
      "id": "729",
      "name": "Epirus"
    },
    {
      "id": "730",
      "name": "Ionia Islands"
    },
    {
      "id": "731",
      "name": "Macedonia"
    },
    {
      "id": "732",
      "name": "Peloponnesus"
    },
    {
      "id": "733",
      "name": "Thessalia"
    },
    {
      "id": "734",
      "name": "Thrace"
    }
  ],
  "83": [
    {
      "id": "735",
      "name": "Greenland"
    }
  ],
  "84": [
    {
      "id": "736",
      "name": "Grenada"
    }
  ],
  "85": [
    {
      "id": "737",
      "name": "Guadeloupe"
    }
  ],
  "86": [
    {
      "id": "738",
      "name": "Alta Verapaz"
    },
    {
      "id": "739",
      "name": "Baja Verapaz"
    },
    {
      "id": "740",
      "name": "Chimaltenango"
    },
    {
      "id": "741",
      "name": "Chiquimula"
    },
    {
      "id": "742",
      "name": "El Progreso"
    },
    {
      "id": "743",
      "name": "Escuintla"
    },
    {
      "id": "744",
      "name": "Guatemala"
    },
    {
      "id": "745",
      "name": "Huehuetenango"
    },
    {
      "id": "746",
      "name": "Izabal"
    },
    {
      "id": "747",
      "name": "Jalapa"
    },
    {
      "id": "748",
      "name": "Jutiapa"
    },
    {
      "id": "749",
      "name": "Peten"
    },
    {
      "id": "750",
      "name": "Quetzaltenango"
    },
    {
      "id": "751",
      "name": "Quiche"
    },
    {
      "id": "752",
      "name": "Retalhuleu"
    },
    {
      "id": "753",
      "name": "Sacatepequez"
    },
    {
      "id": "754",
      "name": "San Marcos"
    },
    {
      "id": "755",
      "name": "Santa Rosa"
    },
    {
      "id": "756",
      "name": "Solola"
    },
    {
      "id": "757",
      "name": "Suchitepequez"
    },
    {
      "id": "758",
      "name": "Totonicapan"
    },
    {
      "id": "759",
      "name": "Zacapa"
    }
  ],
  "87": [
    {
      "id": "760",
      "name": "Guernsey"
    }
  ],
  "88": [
    {
      "id": "761",
      "name": "Guinea"
    }
  ],
  "89": [
    {
      "id": "762",
      "name": "Guinea-Bissau"
    }
  ],
  "90": [
    {
      "id": "763",
      "name": "Guyana"
    }
  ],
  "91": [
    {
      "id": "764",
      "name": "Haiti"
    }
  ],
  "92": [
    {
      "id": "765",
      "name": "Atlantida"
    },
    {
      "id": "766",
      "name": "Choluteca"
    },
    {
      "id": "767",
      "name": "Colon"
    },
    {
      "id": "768",
      "name": "Comayagua"
    },
    {
      "id": "769",
      "name": "Copan"
    },
    {
      "id": "770",
      "name": "El Paraiso"
    },
    {
      "id": "771",
      "name": "Francisco Morazan"
    },
    {
      "id": "772",
      "name": "Gracias a Dios"
    },
    {
      "id": "773",
      "name": "Intibuca"
    },
    {
      "id": "774",
      "name": "Islas de la Bahia"
    },
    {
      "id": "775",
      "name": "La Paz"
    },
    {
      "id": "776",
      "name": "Lempira"
    },
    {
      "id": "777",
      "name": "Ocotepeque"
    },
    {
      "id": "778",
      "name": "Olancho"
    },
    {
      "id": "779",
      "name": "Santa Barbara"
    },
    {
      "id": "780",
      "name": "Valle"
    },
    {
      "id": "781",
      "name": "Yoro"
    }
  ],
  "93": [
    {
      "id": "782",
      "name": "Hong Kong"
    }
  ],
  "94": [
    {
      "id": "783",
      "name": "Bacs-Kiskun Megye"
    },
    {
      "id": "784",
      "name": "Baranya Megye"
    },
    {
      "id": "785",
      "name": "Bekes Megye"
    },
    {
      "id": "786",
      "name": "Borsod-Abauj-Zemplen Megye"
    },
    {
      "id": "787",
      "name": "Budapest Fovaros"
    },
    {
      "id": "788",
      "name": "Csongrad Megye"
    },
    {
      "id": "789",
      "name": "Debrecen Megyei Varos"
    },
    {
      "id": "790",
      "name": "Fejer Megye"
    },
    {
      "id": "791",
      "name": "Gyor Megyei Varos"
    },
    {
      "id": "792",
      "name": "Gyor-Moson-Sopron Megye"
    },
    {
      "id": "793",
      "name": "Hajdu-Bihar Megye"
    },
    {
      "id": "794",
      "name": "Heves Megye"
    },
    {
      "id": "795",
      "name": "Jasz-Nagykun-Szolnok Megye"
    },
    {
      "id": "796",
      "name": "Komarom-Esztergom Megye"
    },
    {
      "id": "797",
      "name": "Miskolc Megyei Varos"
    },
    {
      "id": "798",
      "name": "Nograd Megye"
    },
    {
      "id": "799",
      "name": "Pecs Megyei Varos"
    },
    {
      "id": "800",
      "name": "Pest Megye"
    },
    {
      "id": "801",
      "name": "Somogy Megye"
    },
    {
      "id": "802",
      "name": "Szabolcs-Szatmar-Bereg Megye"
    },
    {
      "id": "803",
      "name": "Szeged Megyei Varos"
    },
    {
      "id": "804",
      "name": "Tolna Megye"
    },
    {
      "id": "805",
      "name": "Vas Megye"
    },
    {
      "id": "806",
      "name": "Veszprem Megye"
    },
    {
      "id": "807",
      "name": "Zala Megye"
    }
  ],
  "95": [
    {
      "id": "808",
      "name": "Arnessysla"
    },
    {
      "id": "809",
      "name": "Austur-Bardhastrandarsysla"
    },
    {
      "id": "810",
      "name": "Austur-Hunavatnssysla"
    },
    {
      "id": "811",
      "name": "Austur-Skaftafellssysla"
    },
    {
      "id": "812",
      "name": "Borgarfjardharsysla"
    },
    {
      "id": "813",
      "name": "Dalasysla"
    },
    {
      "id": "814",
      "name": "Eyjafjardharsysla"
    },
    {
      "id": "815",
      "name": "Gullbringusysla"
    },
    {
      "id": "816",
      "name": "Kjosarsysla"
    },
    {
      "id": "817",
      "name": "Myrasysla"
    },
    {
      "id": "818",
      "name": "Nordhur-Isafjardharsysla"
    },
    {
      "id": "819",
      "name": "Nordhur-Mulasysla"
    },
    {
      "id": "820",
      "name": "Nordhur-Thingeyjarsysla"
    },
    {
      "id": "821",
      "name": "Rangarvallasysla"
    },
    {
      "id": "822",
      "name": "Skagafjardharsysla"
    },
    {
      "id": "823",
      "name": "Snaefellsnessysla- og Hnappadalssysla"
    },
    {
      "id": "824",
      "name": "Strandasysla"
    },
    {
      "id": "825",
      "name": "Sudhur-Mulasysla"
    },
    {
      "id": "826",
      "name": "Sudhur-Thingeijjar"
    },
    {
      "id": "827",
      "name": "Vestur-Bardhastrandarsysla"
    },
    {
      "id": "828",
      "name": "Vestur-Hunavatnssysla"
    },
    {
      "id": "829",
      "name": "Vestur-Isafjardharsysla"
    },
    {
      "id": "830",
      "name": "Vestur-Skaftafellssysla"
    }
  ],
  "96": [
    {
      "id": "831",
      "name": "Andaman & Nicobar Islands"
    },
    {
      "id": "832",
      "name": "Andhra Pradesh"
    },
    {
      "id": "833",
      "name": "Arunachal Pradesh"
    },
    {
      "id": "834",
      "name": "Assam"
    },
    {
      "id": "835",
      "name": "Bihar"
    },
    {
      "id": "836",
      "name": "Chandigarh"
    },
    {
      "id": "2175",
      "name": "Chhattisgarh"
    },
    {
      "id": "837",
      "name": "Dadra & Nagar Haveli"
    },
    {
      "id": "838",
      "name": "Delhi"
    },
    {
      "id": "839",
      "name": "Goa"
    },
    {
      "id": "840",
      "name": "Gujarat"
    },
    {
      "id": "841",
      "name": "Haryana"
    },
    {
      "id": "842",
      "name": "Himachal Pradesh"
    },
    {
      "id": "843",
      "name": "Jammu & Kashmir"
    },
    {
      "id": "844",
      "name": "Jharkhand"
    },
    {
      "id": "845",
      "name": "Karnataka"
    },
    {
      "id": "846",
      "name": "Kerala"
    },
    {
      "id": "847",
      "name": "Lakshadweep"
    },
    {
      "id": "848",
      "name": "Madhya Pradesh"
    },
    {
      "id": "849",
      "name": "Maharashtra"
    },
    {
      "id": "850",
      "name": "Manipur"
    },
    {
      "id": "851",
      "name": "Meghalaya"
    },
    {
      "id": "852",
      "name": "Mizoram"
    },
    {
      "id": "853",
      "name": "Nagaland"
    },
    {
      "id": "854",
      "name": "Orissa"
    },
    {
      "id": "855",
      "name": "Pondicherry"
    },
    {
      "id": "856",
      "name": "Punjab"
    },
    {
      "id": "857",
      "name": "Rajasthan"
    },
    {
      "id": "858",
      "name": "Sikkim"
    },
    {
      "id": "859",
      "name": "Tamil Nadu"
    },
    {
      "id": "2183",
      "name": "Telengana"
    },
    {
      "id": "860",
      "name": "Tripura"
    },
    {
      "id": "861",
      "name": "Uttar Pradesh"
    },
    {
      "id": "862",
      "name": "Uttaranchal"
    },
    {
      "id": "863",
      "name": "West Bengal"
    }
  ],
  "97": [
    {
      "id": "864",
      "name": "Aceh"
    },
    {
      "id": "865",
      "name": "Bali"
    },
    {
      "id": "866",
      "name": "Bengkulu"
    },
    {
      "id": "867",
      "name": "Jambi"
    },
    {
      "id": "868",
      "name": "Jawa Barat"
    },
    {
      "id": "869",
      "name": "Jawa Tengah"
    },
    {
      "id": "870",
      "name": "Jawa Timur"
    },
    {
      "id": "871",
      "name": "Kalimantan Barat"
    },
    {
      "id": "872",
      "name": "Kalimantan Selatan"
    },
    {
      "id": "873",
      "name": "Kalimantan Tengah"
    },
    {
      "id": "874",
      "name": "Kalimantan Timur"
    },
    {
      "id": "875",
      "name": "Lampung"
    },
    {
      "id": "876",
      "name": "Maluku"
    },
    {
      "id": "877",
      "name": "Nusa Tenggara Barat"
    },
    {
      "id": "878",
      "name": "Nusa Tenggara Timur"
    },
    {
      "id": "879",
      "name": "Papua"
    },
    {
      "id": "880",
      "name": "Riau"
    },
    {
      "id": "881",
      "name": "Sulawesi Selatan"
    },
    {
      "id": "882",
      "name": "Sulawesi Tengah"
    },
    {
      "id": "883",
      "name": "Sulawesi Tenggara"
    },
    {
      "id": "884",
      "name": "Sulawesi Utara"
    },
    {
      "id": "885",
      "name": "Sumatera Barat"
    },
    {
      "id": "886",
      "name": "Sumatera Utara"
    },
    {
      "id": "887",
      "name": "Unknown"
    },
    {
      "id": "888",
      "name": "Yogyakarta"
    }
  ],
  "98": [
    {
      "id": "894",
      "name": "Ardabil"
    },
    {
      "id": "1998",
      "name": "Bushehr"
    },
    {
      "id": "1996",
      "name": "Chahar Mahaal and Bakhtiari"
    },
    {
      "id": "896",
      "name": "East Azarbaijan"
    },
    {
      "id": "2004",
      "name": "Esfahan"
    },
    {
      "id": "1999",
      "name": "Fars"
    },
    {
      "id": "2007",
      "name": "Golestan"
    },
    {
      "id": "893",
      "name": "Guilan"
    },
    {
      "id": "1991",
      "name": "Hamadan"
    },
    {
      "id": "2000",
      "name": "Hormozgan"
    },
    {
      "id": "1993",
      "name": "Ilam"
    },
    {
      "id": "2002",
      "name": "Kerman"
    },
    {
      "id": "1992",
      "name": "Kermanshah"
    },
    {
      "id": "2008",
      "name": "Khorasan"
    },
    {
      "id": "1995",
      "name": "Khuzestan"
    },
    {
      "id": "1997",
      "name": "Kohkiluyeh and Buyer Ahmad"
    },
    {
      "id": "1990",
      "name": "Kordestan"
    },
    {
      "id": "1994",
      "name": "Lorestan"
    },
    {
      "id": "891",
      "name": "Markazi"
    },
    {
      "id": "2006",
      "name": "Mazandaran"
    },
    {
      "id": "892",
      "name": "Qazvin"
    },
    {
      "id": "890",
      "name": "Qom"
    },
    {
      "id": "2005",
      "name": "Semnan"
    },
    {
      "id": "2001",
      "name": "Sistan and Baluchistan"
    },
    {
      "id": "889",
      "name": "Tehran"
    },
    {
      "id": "1989",
      "name": "West Azarbaijan"
    },
    {
      "id": "2003",
      "name": "Yazd"
    },
    {
      "id": "895",
      "name": "Zanjan"
    }
  ],
  "99": [
    {
      "id": "897",
      "name": "Anbar"
    },
    {
      "id": "898",
      "name": "Arbil"
    },
    {
      "id": "899",
      "name": "Babil"
    },
    {
      "id": "900",
      "name": "Baghdad"
    },
    {
      "id": "901",
      "name": "Basrah"
    },
    {
      "id": "902",
      "name": "Dahuk"
    },
    {
      "id": "903",
      "name": "Dhi Qar"
    },
    {
      "id": "904",
      "name": "Diyala"
    },
    {
      "id": "905",
      "name": "Karbala'"
    },
    {
      "id": "906",
      "name": "Maysan"
    },
    {
      "id": "907",
      "name": "Muthanna"
    },
    {
      "id": "908",
      "name": "Najaf"
    },
    {
      "id": "909",
      "name": "Ninawa"
    },
    {
      "id": "910",
      "name": "Qadisiyah"
    },
    {
      "id": "911",
      "name": "Salah ad Din"
    },
    {
      "id": "912",
      "name": "Sulaymaniyah"
    },
    {
      "id": "913",
      "name": "Ta'mim"
    },
    {
      "id": "914",
      "name": "Wasit"
    }
  ],
  "100": [
    {
      "id": "915",
      "name": "Carlow"
    },
    {
      "id": "916",
      "name": "Cavan"
    },
    {
      "id": "917",
      "name": "Clare"
    },
    {
      "id": "918",
      "name": "Cork"
    },
    {
      "id": "919",
      "name": "Donegal"
    },
    {
      "id": "920",
      "name": "Dublin"
    },
    {
      "id": "921",
      "name": "Galway"
    },
    {
      "id": "922",
      "name": "Kerry"
    },
    {
      "id": "923",
      "name": "Kildare"
    },
    {
      "id": "924",
      "name": "Kilkenny"
    },
    {
      "id": "925",
      "name": "Laois"
    },
    {
      "id": "926",
      "name": "Leitrim"
    },
    {
      "id": "927",
      "name": "Limerick"
    },
    {
      "id": "928",
      "name": "Longford"
    },
    {
      "id": "929",
      "name": "Louth"
    },
    {
      "id": "930",
      "name": "Mayo"
    },
    {
      "id": "931",
      "name": "Meath"
    },
    {
      "id": "932",
      "name": "Monaghan"
    },
    {
      "id": "933",
      "name": "Offaly"
    },
    {
      "id": "934",
      "name": "Roscommon"
    },
    {
      "id": "935",
      "name": "Sligo"
    },
    {
      "id": "936",
      "name": "Tipperary"
    },
    {
      "id": "937",
      "name": "Unknown"
    },
    {
      "id": "938",
      "name": "Waterford"
    },
    {
      "id": "939",
      "name": "Westmeath"
    },
    {
      "id": "940",
      "name": "Wexford"
    },
    {
      "id": "941",
      "name": "Wicklow"
    }
  ],
  "101": [
    {
      "id": "942",
      "name": "Isle of Man"
    }
  ],
  "102": [
    {
      "id": "943",
      "name": "Central District"
    },
    {
      "id": "944",
      "name": "Haifa District"
    },
    {
      "id": "945",
      "name": "Jerusalem District"
    },
    {
      "id": "946",
      "name": "Northern District"
    },
    {
      "id": "947",
      "name": "Southern District"
    },
    {
      "id": "948",
      "name": "Tel Aviv District"
    }
  ],
  "103": [
    {
      "id": "949",
      "name": "Abruzzi"
    },
    {
      "id": "950",
      "name": "Basilicata"
    },
    {
      "id": "951",
      "name": "Calabria"
    },
    {
      "id": "952",
      "name": "Campania"
    },
    {
      "id": "953",
      "name": "Emilia-Romagna"
    },
    {
      "id": "954",
      "name": "Friuli-Venezia Giulia"
    },
    {
      "id": "955",
      "name": "Lazio"
    },
    {
      "id": "956",
      "name": "Liguria"
    },
    {
      "id": "957",
      "name": "Lombardia"
    },
    {
      "id": "958",
      "name": "Marche"
    },
    {
      "id": "959",
      "name": "Molise"
    },
    {
      "id": "960",
      "name": "Piemonte"
    },
    {
      "id": "961",
      "name": "Puglia"
    },
    {
      "id": "962",
      "name": "Sardegna"
    },
    {
      "id": "963",
      "name": "Sicilia"
    },
    {
      "id": "964",
      "name": "Toscana"
    },
    {
      "id": "965",
      "name": "Trentino-Alto Adige"
    },
    {
      "id": "966",
      "name": "Umbria"
    },
    {
      "id": "967",
      "name": "Valle d'Aosta"
    },
    {
      "id": "968",
      "name": "Veneto"
    }
  ],
  "104": [
    {
      "id": "969",
      "name": "Clarendon"
    },
    {
      "id": "970",
      "name": "Hanover"
    },
    {
      "id": "971",
      "name": "Kingston"
    },
    {
      "id": "972",
      "name": "Manchester"
    },
    {
      "id": "973",
      "name": "Portland"
    },
    {
      "id": "974",
      "name": "Saint Andrews"
    },
    {
      "id": "975",
      "name": "Saint Ann"
    },
    {
      "id": "976",
      "name": "Saint Catherine"
    },
    {
      "id": "977",
      "name": "Saint Elizabeth"
    },
    {
      "id": "978",
      "name": "Saint James"
    },
    {
      "id": "979",
      "name": "Saint Mary"
    },
    {
      "id": "980",
      "name": "Saint Thomas"
    },
    {
      "id": "981",
      "name": "Trelawny"
    },
    {
      "id": "982",
      "name": "Westmoreland"
    }
  ],
  "105": [
    {
      "id": "983",
      "name": "Aichi"
    },
    {
      "id": "984",
      "name": "Akita"
    },
    {
      "id": "985",
      "name": "Aomori"
    },
    {
      "id": "986",
      "name": "Chiba"
    },
    {
      "id": "987",
      "name": "Ehime"
    },
    {
      "id": "988",
      "name": "Fukui"
    },
    {
      "id": "989",
      "name": "Fukuoka"
    },
    {
      "id": "990",
      "name": "Fukushima"
    },
    {
      "id": "991",
      "name": "Gifu"
    },
    {
      "id": "992",
      "name": "Gumma"
    },
    {
      "id": "993",
      "name": "Hiroshima"
    },
    {
      "id": "994",
      "name": "Hokkaido"
    },
    {
      "id": "995",
      "name": "Hyogo"
    },
    {
      "id": "996",
      "name": "Ibaraki"
    },
    {
      "id": "997",
      "name": "Ishikawa"
    },
    {
      "id": "998",
      "name": "Iwate"
    },
    {
      "id": "999",
      "name": "Kagawa"
    },
    {
      "id": "1000",
      "name": "Kagoshima"
    },
    {
      "id": "1001",
      "name": "Kanagawa"
    },
    {
      "id": "1002",
      "name": "Kochi"
    },
    {
      "id": "1003",
      "name": "Kumamoto"
    },
    {
      "id": "1004",
      "name": "Kyoto"
    },
    {
      "id": "1005",
      "name": "Mie"
    },
    {
      "id": "1006",
      "name": "Miyagi"
    },
    {
      "id": "1007",
      "name": "Miyazaki"
    },
    {
      "id": "1008",
      "name": "Nagano"
    },
    {
      "id": "1009",
      "name": "Nagasaki"
    },
    {
      "id": "1010",
      "name": "Nara"
    },
    {
      "id": "1011",
      "name": "Niigata"
    },
    {
      "id": "1012",
      "name": "Oita"
    },
    {
      "id": "1013",
      "name": "Okayama"
    },
    {
      "id": "1014",
      "name": "Okinawa"
    },
    {
      "id": "1015",
      "name": "Osaka"
    },
    {
      "id": "1016",
      "name": "Saga"
    },
    {
      "id": "1017",
      "name": "Saitama"
    },
    {
      "id": "1018",
      "name": "Shiga"
    },
    {
      "id": "1019",
      "name": "Shimane"
    },
    {
      "id": "1020",
      "name": "Shizuoka"
    },
    {
      "id": "1021",
      "name": "Tochigi"
    },
    {
      "id": "1022",
      "name": "Tokushima"
    },
    {
      "id": "1023",
      "name": "Tokyo"
    },
    {
      "id": "1024",
      "name": "Tottori"
    },
    {
      "id": "1025",
      "name": "Toyama"
    },
    {
      "id": "1026",
      "name": "Wakayama"
    },
    {
      "id": "1027",
      "name": "Yamagata"
    },
    {
      "id": "1028",
      "name": "Yamaguchi"
    },
    {
      "id": "1029",
      "name": "Yamanashi"
    }
  ],
  "106": [
    {
      "id": "1030",
      "name": "Jersey"
    }
  ],
  "107": [
    {
      "id": "1031",
      "name": "Jordan"
    }
  ],
  "108": [
    {
      "id": "1032",
      "name": "Kazakhstan"
    }
  ],
  "109": [
    {
      "id": "1033",
      "name": "Central"
    },
    {
      "id": "1034",
      "name": "Coast"
    },
    {
      "id": "1035",
      "name": "Eastern"
    },
    {
      "id": "1036",
      "name": "Nairobi"
    },
    {
      "id": "1037",
      "name": "North Eastern"
    },
    {
      "id": "1038",
      "name": "Nyanza"
    },
    {
      "id": "1039",
      "name": "Rift Valley"
    },
    {
      "id": "1040",
      "name": "Western"
    }
  ],
  "110": [
    {
      "id": "1041",
      "name": "Kiribati"
    }
  ],
  "111": [
    {
      "id": "1042",
      "name": "Al-Ahmadi"
    },
    {
      "id": "1043",
      "name": "Al-Farwaniyah"
    },
    {
      "id": "1044",
      "name": "Al-Kuwayt"
    },
    {
      "id": "1045",
      "name": "Bubiyan & Warbah"
    },
    {
      "id": "1046",
      "name": "Hawalli"
    }
  ],
  "112": [
    {
      "id": "1047",
      "name": "Kyrgyzstan"
    }
  ],
  "113": [
    {
      "id": "1048",
      "name": "Laos"
    }
  ],
  "114": [
    {
      "id": "1049",
      "name": "Latvia"
    }
  ],
  "115": [
    {
      "id": "1050",
      "name": "Lebanon"
    }
  ],
  "116": [
    {
      "id": "1051",
      "name": "Lesotho"
    }
  ],
  "117": [
    {
      "id": "1052",
      "name": "Liberia"
    }
  ],
  "118": [
    {
      "id": "1053",
      "name": "Libya"
    }
  ],
  "119": [
    {
      "id": "1054",
      "name": "Liechtenstein"
    }
  ],
  "120": [
    {
      "id": "1055",
      "name": "Lithuania"
    }
  ],
  "121": [
    {
      "id": "1056",
      "name": "Luxembourg"
    }
  ],
  "122": [
    {
      "id": "1057",
      "name": "Macau"
    }
  ],
  "123": [
    {
      "id": "1058",
      "name": "Macedonia"
    }
  ],
  "124": [
    {
      "id": "1059",
      "name": "Antananarivo"
    },
    {
      "id": "1060",
      "name": "Antsiranana"
    },
    {
      "id": "1061",
      "name": "Fianarantsoa"
    },
    {
      "id": "1062",
      "name": "Mahajanga"
    },
    {
      "id": "1063",
      "name": "Toamasina"
    },
    {
      "id": "1064",
      "name": "Toliary"
    }
  ],
  "125": [
    {
      "id": "1065",
      "name": "Malawi"
    }
  ],
  "126": [
    {
      "id": "1066",
      "name": "Johor"
    },
    {
      "id": "1067",
      "name": "Kedah"
    },
    {
      "id": "1068",
      "name": "Kelantan"
    },
    {
      "id": "1069",
      "name": "Melaka"
    },
    {
      "id": "1070",
      "name": "Pahang"
    },
    {
      "id": "1071",
      "name": "Perak"
    },
    {
      "id": "1072",
      "name": "Perlis"
    },
    {
      "id": "1073",
      "name": "Pulau Pinang"
    },
    {
      "id": "1074",
      "name": "Sabah"
    },
    {
      "id": "1075",
      "name": "Sarawak"
    },
    {
      "id": "1076",
      "name": "Selangor"
    },
    {
      "id": "1077",
      "name": "Sembilan"
    },
    {
      "id": "1078",
      "name": "Terengganu"
    },
    {
      "id": "1079",
      "name": "Unknown"
    },
    {
      "id": "1080",
      "name": "Wilayah Persekutuan"
    }
  ],
  "127": [
    {
      "id": "1081",
      "name": "Maldives"
    }
  ],
  "128": [
    {
      "id": "1082",
      "name": "Mali"
    }
  ],
  "129": [
    {
      "id": "1083",
      "name": "Malta"
    }
  ],
  "130": [
    {
      "id": "1084",
      "name": "Marshall Islands"
    }
  ],
  "131": [
    {
      "id": "1085",
      "name": "Martinique"
    }
  ],
  "132": [
    {
      "id": "1086",
      "name": "Mauritania"
    }
  ],
  "133": [
    {
      "id": "1087",
      "name": "Mauritius"
    }
  ],
  "134": [
    {
      "id": "1088",
      "name": "Mayotte"
    }
  ],
  "135": [
    {
      "id": "1089",
      "name": "Aguascalientes"
    },
    {
      "id": "1090",
      "name": "Baja California"
    },
    {
      "id": "1091",
      "name": "Baja California Sur"
    },
    {
      "id": "1092",
      "name": "Campeche"
    },
    {
      "id": "1093",
      "name": "Chiapas"
    },
    {
      "id": "1094",
      "name": "Chihuahua"
    },
    {
      "id": "1095",
      "name": "Coahuila"
    },
    {
      "id": "1096",
      "name": "Colima"
    },
    {
      "id": "1097",
      "name": "Distrito Federal"
    },
    {
      "id": "1098",
      "name": "Durango"
    },
    {
      "id": "1099",
      "name": "Guanajuato"
    },
    {
      "id": "1100",
      "name": "Guerrero"
    },
    {
      "id": "1101",
      "name": "Hidalgo"
    },
    {
      "id": "1102",
      "name": "Jalisco"
    },
    {
      "id": "1103",
      "name": "Mexico"
    },
    {
      "id": "1104",
      "name": "Michoacan de Ocampo"
    },
    {
      "id": "1105",
      "name": "Morelos"
    },
    {
      "id": "1106",
      "name": "Nayarit"
    },
    {
      "id": "1107",
      "name": "Nuevo Leon"
    },
    {
      "id": "1108",
      "name": "Oaxaca"
    },
    {
      "id": "1109",
      "name": "Puebla"
    },
    {
      "id": "1110",
      "name": "Queretaro de Arteaga"
    },
    {
      "id": "1111",
      "name": "Quintana Roo"
    },
    {
      "id": "1112",
      "name": "San Luis Potosi"
    },
    {
      "id": "1113",
      "name": "Sinaloa"
    },
    {
      "id": "1114",
      "name": "Sonora"
    },
    {
      "id": "1115",
      "name": "Tabasco"
    },
    {
      "id": "1116",
      "name": "Tamaulipas"
    },
    {
      "id": "1117",
      "name": "Tlaxcala"
    },
    {
      "id": "1118",
      "name": "Veracruz-Llave"
    },
    {
      "id": "1119",
      "name": "Yucatan"
    },
    {
      "id": "1120",
      "name": "Zacatecas"
    }
  ],
  "136": [
    {
      "id": "1121",
      "name": "Micronesia"
    }
  ],
  "137": [
    {
      "id": "1122",
      "name": "Moldova"
    }
  ],
  "138": [
    {
      "id": "1123",
      "name": "Monaco"
    }
  ],
  "139": [
    {
      "id": "1124",
      "name": "Mongolia"
    }
  ],
  "140": [
    {
      "id": "1125",
      "name": "Montserrat"
    }
  ],
  "141": [
    {
      "id": "1126",
      "name": "Chaouia-Ouardigha"
    },
    {
      "id": "1127",
      "name": "Doukkala-Abda"
    },
    {
      "id": "1128",
      "name": "Fes-Boulemane"
    },
    {
      "id": "1129",
      "name": "Gharb-Chrarda-Beni Hsen"
    },
    {
      "id": "1130",
      "name": "Grand Casablanca"
    },
    {
      "id": "1131",
      "name": "Marrakech-Tensift-El Haouz"
    },
    {
      "id": "1132",
      "name": "Meknes-Tafilalt"
    },
    {
      "id": "1133",
      "name": "Rabat-Sale-Zemmour-Zaer"
    },
    {
      "id": "1134",
      "name": "Sous-Massa-Draa"
    },
    {
      "id": "1135",
      "name": "Tanger-Tetouan"
    },
    {
      "id": "1136",
      "name": "Taza-Al Hoceima-Taounate"
    }
  ],
  "142": [
    {
      "id": "1137",
      "name": "Mozambique"
    }
  ],
  "143": [
    {
      "id": "1138",
      "name": "Namibia"
    }
  ],
  "144": [
    {
      "id": "1139",
      "name": "Nauru"
    }
  ],
  "145": [
    {
      "id": "1140",
      "name": "Nepal"
    }
  ],
  "146": [
    {
      "id": "1141",
      "name": "Drenthe"
    },
    {
      "id": "1142",
      "name": "Flevoland"
    },
    {
      "id": "1143",
      "name": "Friesland"
    },
    {
      "id": "1144",
      "name": "Gelderland"
    },
    {
      "id": "1145",
      "name": "Groningen"
    },
    {
      "id": "1146",
      "name": "Limburg"
    },
    {
      "id": "1147",
      "name": "Noord-Brabant"
    },
    {
      "id": "1148",
      "name": "Noord-Holland"
    },
    {
      "id": "1149",
      "name": "Overijssel"
    },
    {
      "id": "1150",
      "name": "Utrecht"
    },
    {
      "id": "1151",
      "name": "Zeeland"
    },
    {
      "id": "1152",
      "name": "Zuid-Holland"
    }
  ],
  "147": [
    {
      "id": "1153",
      "name": "Netherlands Antilles"
    }
  ],
  "148": [
    {
      "id": "1154",
      "name": "New Caledonia"
    }
  ],
  "149": [
    {
      "id": "1155",
      "name": "Chatham Islands"
    },
    {
      "id": "1156",
      "name": "North Island"
    },
    {
      "id": "1157",
      "name": "South Island"
    },
    {
      "id": "1158",
      "name": "Stewart Island"
    }
  ],
  "150": [
    {
      "id": "1159",
      "name": "Atlantico Norte"
    },
    {
      "id": "1160",
      "name": "Atlantico Sur"
    },
    {
      "id": "1161",
      "name": "Boaco"
    },
    {
      "id": "1162",
      "name": "Carazo"
    },
    {
      "id": "1163",
      "name": "Chinandega"
    },
    {
      "id": "1164",
      "name": "Chontales"
    },
    {
      "id": "1165",
      "name": "Esteli"
    },
    {
      "id": "1166",
      "name": "Granada"
    },
    {
      "id": "1167",
      "name": "Jinotega"
    },
    {
      "id": "1168",
      "name": "Leon"
    },
    {
      "id": "1169",
      "name": "Madriz"
    },
    {
      "id": "1170",
      "name": "Managua"
    },
    {
      "id": "1171",
      "name": "Masaya"
    },
    {
      "id": "1172",
      "name": "Matagalpa"
    },
    {
      "id": "1173",
      "name": "Nueva Segovia"
    },
    {
      "id": "1174",
      "name": "Rio San Juan"
    },
    {
      "id": "1175",
      "name": "Rivas"
    }
  ],
  "151": [
    {
      "id": "1176",
      "name": "Agadez"
    },
    {
      "id": "1177",
      "name": "Diffa"
    },
    {
      "id": "1178",
      "name": "Dosso"
    },
    {
      "id": "1179",
      "name": "Maradi"
    },
    {
      "id": "1180",
      "name": "Niamey"
    },
    {
      "id": "1181",
      "name": "Tahoua"
    },
    {
      "id": "1182",
      "name": "Tillaberi"
    },
    {
      "id": "1183",
      "name": "Zinder"
    }
  ],
  "152": [
    {
      "id": "2143",
      "name": "Abia"
    },
    {
      "id": "1185",
      "name": "Adamawa"
    },
    {
      "id": "2144",
      "name": "Akwa Ibom"
    },
    {
      "id": "2145",
      "name": "Anambra"
    },
    {
      "id": "1186",
      "name": "Bauchi"
    },
    {
      "id": "2146",
      "name": "Bayelsa"
    },
    {
      "id": "1187",
      "name": "Benue"
    },
    {
      "id": "1188",
      "name": "Borno"
    },
    {
      "id": "2147",
      "name": "Cross River"
    },
    {
      "id": "1189",
      "name": "Delta"
    },
    {
      "id": "2148",
      "name": "Ebonyi"
    },
    {
      "id": "2149",
      "name": "Edo"
    },
    {
      "id": "2150",
      "name": "Ekiti"
    },
    {
      "id": "2151",
      "name": "Enugu"
    },
    {
      "id": "1184",
      "name": "Federal Capital Territory"
    },
    {
      "id": "1190",
      "name": "Gombe"
    },
    {
      "id": "1191",
      "name": "Gongola"
    },
    {
      "id": "2152",
      "name": "Imo"
    },
    {
      "id": "1192",
      "name": "Jigawa"
    },
    {
      "id": "1193",
      "name": "Kaduna"
    },
    {
      "id": "1194",
      "name": "Kano"
    },
    {
      "id": "1195",
      "name": "Katsina"
    },
    {
      "id": "2153",
      "name": "Kebbi"
    },
    {
      "id": "2154",
      "name": "Kogi"
    },
    {
      "id": "1196",
      "name": "Kwara"
    },
    {
      "id": "1197",
      "name": "Lagos"
    },
    {
      "id": "1198",
      "name": "Nassarawa"
    },
    {
      "id": "1199",
      "name": "Niger"
    },
    {
      "id": "1200",
      "name": "Ogun"
    },
    {
      "id": "2155",
      "name": "Ondo"
    },
    {
      "id": "2156",
      "name": "Osun"
    },
    {
      "id": "1201",
      "name": "Oyo"
    },
    {
      "id": "1202",
      "name": "Plateau"
    },
    {
      "id": "2157",
      "name": "Rivers"
    },
    {
      "id": "1203",
      "name": "Sokoto"
    },
    {
      "id": "2158",
      "name": "Taraba"
    },
    {
      "id": "1204",
      "name": "Unknown"
    },
    {
      "id": "2159",
      "name": "Yobe"
    },
    {
      "id": "1205",
      "name": "Zamfara"
    }
  ],
  "153": [
    {
      "id": "1206",
      "name": "Niue"
    }
  ],
  "154": [
    {
      "id": "1207",
      "name": "Norfolk Island"
    }
  ],
  "155": [
    {
      "id": "1208",
      "name": "Chagang-do"
    },
    {
      "id": "1209",
      "name": "Hamgyong-bukto"
    },
    {
      "id": "1210",
      "name": "Hamgyong-namdo"
    },
    {
      "id": "1211",
      "name": "Hwanghae-bukto"
    },
    {
      "id": "1212",
      "name": "Hwanghae-namdo"
    },
    {
      "id": "1213",
      "name": "Kaesong-si"
    },
    {
      "id": "1214",
      "name": "Kangwon-do"
    },
    {
      "id": "1215",
      "name": "Najin Sonbong-si"
    },
    {
      "id": "1216",
      "name": "Namp'o-si"
    },
    {
      "id": "1217",
      "name": "P'yongan-bukto"
    },
    {
      "id": "1218",
      "name": "P'yongan-namdo"
    },
    {
      "id": "1219",
      "name": "P'yongyang-si"
    },
    {
      "id": "1220",
      "name": "Yanggang-do"
    }
  ],
  "156": [
    {
      "id": "1221",
      "name": "Akershus"
    },
    {
      "id": "1222",
      "name": "Aust-Agder"
    },
    {
      "id": "1223",
      "name": "Buskerud"
    },
    {
      "id": "1224",
      "name": "Finnmark"
    },
    {
      "id": "1225",
      "name": "Hedmark"
    },
    {
      "id": "1226",
      "name": "Hordaland"
    },
    {
      "id": "1227",
      "name": "More og Romsdal"
    },
    {
      "id": "1228",
      "name": "Nord-Trondelag"
    },
    {
      "id": "1229",
      "name": "Nordland"
    },
    {
      "id": "1230",
      "name": "Oppland"
    },
    {
      "id": "1231",
      "name": "Oslo"
    },
    {
      "id": "1232",
      "name": "Ostfold"
    },
    {
      "id": "1233",
      "name": "Rogaland"
    },
    {
      "id": "1234",
      "name": "Sogn og Fjordane"
    },
    {
      "id": "1235",
      "name": "Sor-Trondelag"
    },
    {
      "id": "1236",
      "name": "Telemark"
    },
    {
      "id": "1237",
      "name": "Troms"
    },
    {
      "id": "1238",
      "name": "Vest-Agder"
    },
    {
      "id": "1239",
      "name": "Vestfold"
    }
  ],
  "157": [
    {
      "id": "1240",
      "name": "Oman"
    }
  ],
  "158": [
    {
      "id": "1241",
      "name": "Balochistan"
    },
    {
      "id": "1242",
      "name": "Federally Administered Tribal Areas"
    },
    {
      "id": "1243",
      "name": "Islamabad Capital Territory"
    },
    {
      "id": "1244",
      "name": "North-West Frontier Province"
    },
    {
      "id": "1245",
      "name": "Punjab"
    },
    {
      "id": "1246",
      "name": "Sindh"
    }
  ],
  "159": [
    {
      "id": "1247",
      "name": "Palau"
    }
  ],
  "160": [
    {
      "id": "1248",
      "name": "Bocas del Toro"
    },
    {
      "id": "1249",
      "name": "Chiriqui"
    },
    {
      "id": "2160",
      "name": "Cocle"
    },
    {
      "id": "1250",
      "name": "Colon"
    },
    {
      "id": "1251",
      "name": "Darien"
    },
    {
      "id": "2161",
      "name": "Embera"
    },
    {
      "id": "1253",
      "name": "Guna Yala"
    },
    {
      "id": "1252",
      "name": "Herrera"
    },
    {
      "id": "1254",
      "name": "Los Santos"
    },
    {
      "id": "2162",
      "name": "Ngobe-Bugle"
    },
    {
      "id": "1255",
      "name": "Panama"
    },
    {
      "id": "2163",
      "name": "Panama Oeste"
    },
    {
      "id": "1256",
      "name": "Veraguas"
    }
  ],
  "161": [
    {
      "id": "1257",
      "name": "Papua New Guinea"
    }
  ],
  "162": [
    {
      "id": "1258",
      "name": "Alto Paraguay"
    },
    {
      "id": "1259",
      "name": "Alto Parana"
    },
    {
      "id": "1260",
      "name": "Amambay"
    },
    {
      "id": "1261",
      "name": "Boqueron"
    },
    {
      "id": "1262",
      "name": "Caaguazu"
    },
    {
      "id": "1263",
      "name": "Caazapa"
    },
    {
      "id": "1264",
      "name": "Canindeyu"
    },
    {
      "id": "1265",
      "name": "Central"
    },
    {
      "id": "1266",
      "name": "Concepcion"
    },
    {
      "id": "1267",
      "name": "Cordillera"
    },
    {
      "id": "1268",
      "name": "Guaira"
    },
    {
      "id": "1269",
      "name": "Itapua"
    },
    {
      "id": "1270",
      "name": "Misiones"
    },
    {
      "id": "1271",
      "name": "Neembucu"
    },
    {
      "id": "1272",
      "name": "Paraguari"
    },
    {
      "id": "1273",
      "name": "Presidente Hayes"
    },
    {
      "id": "1274",
      "name": "San Pedro"
    }
  ],
  "163": [
    {
      "id": "1275",
      "name": "Amazonas"
    },
    {
      "id": "1276",
      "name": "Ancash"
    },
    {
      "id": "1277",
      "name": "Apurimac"
    },
    {
      "id": "1278",
      "name": "Arequipa"
    },
    {
      "id": "1279",
      "name": "Ayacucho"
    },
    {
      "id": "1280",
      "name": "Cajamarca"
    },
    {
      "id": "1281",
      "name": "Callao"
    },
    {
      "id": "1282",
      "name": "Cusco"
    },
    {
      "id": "1283",
      "name": "Huancavelica"
    },
    {
      "id": "1284",
      "name": "Huanuco"
    },
    {
      "id": "1285",
      "name": "Ica"
    },
    {
      "id": "1286",
      "name": "Junin"
    },
    {
      "id": "1287",
      "name": "La Libertad"
    },
    {
      "id": "1288",
      "name": "Lambayeque"
    },
    {
      "id": "1289",
      "name": "Lima"
    },
    {
      "id": "1290",
      "name": "Loreto"
    },
    {
      "id": "1291",
      "name": "Madre de Dios"
    },
    {
      "id": "1292",
      "name": "Moquegua"
    },
    {
      "id": "1293",
      "name": "Pasco"
    },
    {
      "id": "1294",
      "name": "Piura"
    },
    {
      "id": "1295",
      "name": "Puno"
    },
    {
      "id": "1296",
      "name": "San Martin"
    },
    {
      "id": "1297",
      "name": "Tacna"
    },
    {
      "id": "1298",
      "name": "Tumbes"
    },
    {
      "id": "1299",
      "name": "Ucayali"
    }
  ],
  "164": [
    {
      "id": "1300",
      "name": "Abra"
    },
    {
      "id": "1301",
      "name": "Agusan del Norte"
    },
    {
      "id": "1302",
      "name": "Agusan del Sur"
    },
    {
      "id": "1303",
      "name": "Aklan"
    },
    {
      "id": "1304",
      "name": "Albay"
    },
    {
      "id": "1305",
      "name": "Angeles City"
    },
    {
      "id": "1306",
      "name": "Antique"
    },
    {
      "id": "1307",
      "name": "Aurora"
    },
    {
      "id": "1308",
      "name": "Bacolod City"
    },
    {
      "id": "1309",
      "name": "Bago City"
    },
    {
      "id": "1310",
      "name": "Baguio City"
    },
    {
      "id": "1311",
      "name": "Basilan"
    },
    {
      "id": "1312",
      "name": "Bataan"
    },
    {
      "id": "1313",
      "name": "Batanes"
    },
    {
      "id": "1314",
      "name": "Batangas"
    },
    {
      "id": "1315",
      "name": "Batangas City"
    },
    {
      "id": "1316",
      "name": "Benguet"
    },
    {
      "id": "1317",
      "name": "Bohol"
    },
    {
      "id": "1318",
      "name": "Bukidnon"
    },
    {
      "id": "1319",
      "name": "Bulacan"
    },
    {
      "id": "1320",
      "name": "Butuan City"
    },
    {
      "id": "1321",
      "name": "Cabanatuan City"
    },
    {
      "id": "1322",
      "name": "Cadiz City"
    },
    {
      "id": "1323",
      "name": "Cagayan"
    },
    {
      "id": "1324",
      "name": "Cagayan de Oro City"
    },
    {
      "id": "1325",
      "name": "Calbayog City"
    },
    {
      "id": "1326",
      "name": "Caloocan City"
    },
    {
      "id": "1327",
      "name": "Camarines Norte"
    },
    {
      "id": "1328",
      "name": "Camarines Sur"
    },
    {
      "id": "1329",
      "name": "Camiguin"
    },
    {
      "id": "1330",
      "name": "Canlaon City"
    },
    {
      "id": "1331",
      "name": "Capiz"
    },
    {
      "id": "1332",
      "name": "Catanduanes"
    },
    {
      "id": "1333",
      "name": "Cavite"
    },
    {
      "id": "1334",
      "name": "Cavite City"
    },
    {
      "id": "1335",
      "name": "Cebu"
    },
    {
      "id": "1336",
      "name": "Cebu City"
    },
    {
      "id": "1337",
      "name": "City of Manila"
    },
    {
      "id": "1338",
      "name": "Cotabato City"
    },
    {
      "id": "1339",
      "name": "Dagupan City"
    },
    {
      "id": "1340",
      "name": "Danao City"
    },
    {
      "id": "1341",
      "name": "Dapitan City"
    },
    {
      "id": "1342",
      "name": "Davao City"
    },
    {
      "id": "1343",
      "name": "Davao del Norte"
    },
    {
      "id": "1344",
      "name": "Davao del Sur"
    },
    {
      "id": "1345",
      "name": "Davao Oriental"
    },
    {
      "id": "1346",
      "name": "Dipolog City"
    },
    {
      "id": "1347",
      "name": "Dumaguete City"
    },
    {
      "id": "1348",
      "name": "Eastern Samar"
    },
    {
      "id": "1349",
      "name": "General Santos City"
    },
    {
      "id": "1350",
      "name": "Gingoog City"
    },
    {
      "id": "1351",
      "name": "Ifugao"
    },
    {
      "id": "1352",
      "name": "Iligan City"
    },
    {
      "id": "1353",
      "name": "Ilocos Norte"
    },
    {
      "id": "1354",
      "name": "Ilocos Sur"
    },
    {
      "id": "1355",
      "name": "Iloilo"
    },
    {
      "id": "1356",
      "name": "Iloilo City"
    },
    {
      "id": "1357",
      "name": "Iriga City"
    },
    {
      "id": "1358",
      "name": "Isabela"
    },
    {
      "id": "1359",
      "name": "Kalinga-Apayao"
    },
    {
      "id": "1360",
      "name": "La Carlota City"
    },
    {
      "id": "1361",
      "name": "La Union"
    },
    {
      "id": "1362",
      "name": "Laguna"
    },
    {
      "id": "1363",
      "name": "Lanao del Norte"
    },
    {
      "id": "1364",
      "name": "Lanao del Sur"
    },
    {
      "id": "1365",
      "name": "Laoag City"
    },
    {
      "id": "1366",
      "name": "Lapu-Lapu City"
    },
    {
      "id": "1367",
      "name": "Legaspi City"
    },
    {
      "id": "1368",
      "name": "Leyte"
    },
    {
      "id": "1369",
      "name": "Lipa City"
    },
    {
      "id": "1370",
      "name": "Lucena City"
    },
    {
      "id": "1371",
      "name": "Maguindanao"
    },
    {
      "id": "1372",
      "name": "Mandaue City"
    },
    {
      "id": "1373",
      "name": "Marawi City"
    },
    {
      "id": "1374",
      "name": "Marinduque"
    },
    {
      "id": "1375",
      "name": "Masbate"
    },
    {
      "id": "1376",
      "name": "Mindoro Occidental"
    },
    {
      "id": "1377",
      "name": "Mindoro Oriental"
    },
    {
      "id": "1378",
      "name": "Misamis Occidental"
    },
    {
      "id": "1379",
      "name": "Misamis Oriental"
    },
    {
      "id": "1380",
      "name": "Mountain Province"
    },
    {
      "id": "1381",
      "name": "Naga City"
    },
    {
      "id": "1382",
      "name": "Negros Occidental"
    },
    {
      "id": "1383",
      "name": "Negros Oriental"
    },
    {
      "id": "1384",
      "name": "North Cotabato"
    },
    {
      "id": "1385",
      "name": "Northern Samar"
    },
    {
      "id": "1386",
      "name": "Nueva Ecija"
    },
    {
      "id": "1387",
      "name": "Nueva Vizcaya"
    },
    {
      "id": "1388",
      "name": "Olongapo City"
    },
    {
      "id": "1389",
      "name": "Ormoc City"
    },
    {
      "id": "1390",
      "name": "Oroquieta City"
    },
    {
      "id": "1391",
      "name": "Ozamis City"
    },
    {
      "id": "1392",
      "name": "Pagadian City"
    },
    {
      "id": "1393",
      "name": "Palawan"
    },
    {
      "id": "1394",
      "name": "Palayan City"
    },
    {
      "id": "1395",
      "name": "Pampanga"
    },
    {
      "id": "1396",
      "name": "Pangasinan"
    },
    {
      "id": "1397",
      "name": "Pasay City"
    },
    {
      "id": "1398",
      "name": "Puerto Princesa City"
    },
    {
      "id": "1399",
      "name": "Quezon"
    },
    {
      "id": "1400",
      "name": "Quezon City"
    },
    {
      "id": "1401",
      "name": "Quirino"
    },
    {
      "id": "1402",
      "name": "Rizal"
    },
    {
      "id": "1403",
      "name": "Romblon"
    },
    {
      "id": "1404",
      "name": "Roxas City"
    },
    {
      "id": "1405",
      "name": "Samar"
    },
    {
      "id": "1406",
      "name": "San Carlos City"
    },
    {
      "id": "1407",
      "name": "San Pablo City"
    },
    {
      "id": "1408",
      "name": "Silay City"
    },
    {
      "id": "1409",
      "name": "Siquijor"
    },
    {
      "id": "1410",
      "name": "Sorsogon"
    },
    {
      "id": "1411",
      "name": "South Cotabato"
    },
    {
      "id": "1412",
      "name": "Southern Leyte"
    },
    {
      "id": "1413",
      "name": "Sultan Kudarat"
    },
    {
      "id": "1414",
      "name": "Sulu"
    },
    {
      "id": "1415",
      "name": "Surigao City"
    },
    {
      "id": "1416",
      "name": "Surigao del Norte"
    },
    {
      "id": "1417",
      "name": "Surigao del Sur"
    },
    {
      "id": "1418",
      "name": "Tacloban City"
    },
    {
      "id": "1419",
      "name": "Tagaytay City"
    },
    {
      "id": "1420",
      "name": "Tagbilaran City"
    },
    {
      "id": "1421",
      "name": "Tangub City"
    },
    {
      "id": "1422",
      "name": "Tarlac"
    },
    {
      "id": "1423",
      "name": "Tawi-Tawi"
    },
    {
      "id": "1424",
      "name": "Toledo City"
    },
    {
      "id": "1425",
      "name": "Trece Martires City"
    },
    {
      "id": "1426",
      "name": "Zambales"
    },
    {
      "id": "1427",
      "name": "Zamboanga City"
    },
    {
      "id": "1428",
      "name": "Zamboanga del Norte"
    },
    {
      "id": "1429",
      "name": "Zamboanga del Sur"
    }
  ],
  "165": [
    {
      "id": "1430",
      "name": "Pitcairn Islands"
    }
  ],
  "166": [
    {
      "id": "1431",
      "name": "Dolnoslaskie"
    },
    {
      "id": "1432",
      "name": "Kujawsko-Pomorskie"
    },
    {
      "id": "1433",
      "name": "Lodzkie"
    },
    {
      "id": "1434",
      "name": "Lubelskie"
    },
    {
      "id": "1435",
      "name": "Lubuskie"
    },
    {
      "id": "1436",
      "name": "Malopolskie"
    },
    {
      "id": "1437",
      "name": "Mazowieckie"
    },
    {
      "id": "1438",
      "name": "Opolskie"
    },
    {
      "id": "1439",
      "name": "Podkarpackie"
    },
    {
      "id": "1440",
      "name": "Podlaskie"
    },
    {
      "id": "1441",
      "name": "Pomorskie"
    },
    {
      "id": "1442",
      "name": "Slaskie"
    },
    {
      "id": "1443",
      "name": "Swietokrzyskie"
    },
    {
      "id": "1444",
      "name": "Warminsko-Mazurskie"
    },
    {
      "id": "1445",
      "name": "Wielkopolskie"
    },
    {
      "id": "1446",
      "name": "Zachodniopomorskie"
    }
  ],
  "167": [
    {
      "id": "1447",
      "name": "Acores"
    },
    {
      "id": "1448",
      "name": "Alentejo"
    },
    {
      "id": "1449",
      "name": "Algarve"
    },
    {
      "id": "1450",
      "name": "Centro"
    },
    {
      "id": "1451",
      "name": "Lisboa"
    },
    {
      "id": "1452",
      "name": "Madeira"
    },
    {
      "id": "1453",
      "name": "Norte"
    }
  ],
  "168": [
    {
      "id": "1454",
      "name": "Qatar"
    }
  ],
  "169": [
    {
      "id": "1455",
      "name": "Reunion"
    }
  ],
  "170": [
    {
      "id": "1456",
      "name": "Alba"
    },
    {
      "id": "1457",
      "name": "Arad"
    },
    {
      "id": "1458",
      "name": "Arges"
    },
    {
      "id": "1459",
      "name": "Bacau"
    },
    {
      "id": "1460",
      "name": "Bihor"
    },
    {
      "id": "1461",
      "name": "Bistrita-Nasaud"
    },
    {
      "id": "1462",
      "name": "Botosani"
    },
    {
      "id": "1463",
      "name": "Braila"
    },
    {
      "id": "1464",
      "name": "Brasov"
    },
    {
      "id": "1465",
      "name": "Buzau"
    },
    {
      "id": "1466",
      "name": "Calarasi"
    },
    {
      "id": "1467",
      "name": "Caras-Severin"
    },
    {
      "id": "1468",
      "name": "Cluj"
    },
    {
      "id": "1469",
      "name": "Constanta"
    },
    {
      "id": "1470",
      "name": "Covasna"
    },
    {
      "id": "1471",
      "name": "Dambovita"
    },
    {
      "id": "1472",
      "name": "Dolj"
    },
    {
      "id": "1473",
      "name": "Galati"
    },
    {
      "id": "1474",
      "name": "Giurgiu"
    },
    {
      "id": "1475",
      "name": "Gorj"
    },
    {
      "id": "1476",
      "name": "Harghita"
    },
    {
      "id": "1477",
      "name": "Hunedoara"
    },
    {
      "id": "1478",
      "name": "Ialomita"
    },
    {
      "id": "1479",
      "name": "Iasi"
    },
    {
      "id": "1480",
      "name": "Ilfov"
    },
    {
      "id": "1481",
      "name": "Maramures"
    },
    {
      "id": "1482",
      "name": "Mehedinti"
    },
    {
      "id": "1483",
      "name": "Municipiul Bucuresti"
    },
    {
      "id": "1484",
      "name": "Mures"
    },
    {
      "id": "1485",
      "name": "Neamt"
    },
    {
      "id": "1486",
      "name": "Olt"
    },
    {
      "id": "1487",
      "name": "Prahova"
    },
    {
      "id": "1488",
      "name": "Salaj"
    },
    {
      "id": "1489",
      "name": "Satu Mare"
    },
    {
      "id": "1490",
      "name": "Sibiu"
    },
    {
      "id": "1491",
      "name": "Suceava"
    },
    {
      "id": "1492",
      "name": "Teleorman"
    },
    {
      "id": "1493",
      "name": "Timis"
    },
    {
      "id": "1494",
      "name": "Tulcea"
    },
    {
      "id": "1495",
      "name": "Unknown"
    },
    {
      "id": "1496",
      "name": "Valcea"
    },
    {
      "id": "1497",
      "name": "Vaslui"
    },
    {
      "id": "1498",
      "name": "Vrancea"
    }
  ],
  "171": [
    {
      "id": "1499",
      "name": "Aginskiy Buryatskiy"
    },
    {
      "id": "1500",
      "name": "Altayskiy Kray"
    },
    {
      "id": "1501",
      "name": "Amurskaya"
    },
    {
      "id": "1502",
      "name": "Arkhangel'skaya"
    },
    {
      "id": "1503",
      "name": "Astrakhanskaya"
    },
    {
      "id": "1504",
      "name": "Belgorodskaya"
    },
    {
      "id": "1505",
      "name": "Bryanskaya"
    },
    {
      "id": "1506",
      "name": "Chechenskaya"
    },
    {
      "id": "1507",
      "name": "Chelyabinskaya"
    },
    {
      "id": "1508",
      "name": "Chitinskaya"
    },
    {
      "id": "1509",
      "name": "Chukotskiy"
    },
    {
      "id": "1510",
      "name": "Chuvashskaya"
    },
    {
      "id": "1511",
      "name": "Evenkiyskiy"
    },
    {
      "id": "1512",
      "name": "Gorod Moskva"
    },
    {
      "id": "1513",
      "name": "Gorod Sankt-Peterburg"
    },
    {
      "id": "1514",
      "name": "Irkutskaya"
    },
    {
      "id": "1515",
      "name": "Ivanovskaya"
    },
    {
      "id": "1516",
      "name": "Kabardino-Balkarskaya"
    },
    {
      "id": "1517",
      "name": "Kaliningradskaya"
    },
    {
      "id": "1518",
      "name": "Kaluzhskaya"
    },
    {
      "id": "1519",
      "name": "Kamchatskaya"
    },
    {
      "id": "1520",
      "name": "Karachayevo-Cherkesskaya"
    },
    {
      "id": "1521",
      "name": "Kemerovskaya"
    },
    {
      "id": "1522",
      "name": "Khabarovskiy Kray"
    },
    {
      "id": "1523",
      "name": "Khanty-Mansiyskiy"
    },
    {
      "id": "1524",
      "name": "Kirovskaya"
    },
    {
      "id": "1525",
      "name": "Komi-Permyatskiy"
    },
    {
      "id": "1526",
      "name": "Koryakskiy"
    },
    {
      "id": "1527",
      "name": "Kostromskaya"
    },
    {
      "id": "1528",
      "name": "Krasnodarskiy Kray"
    },
    {
      "id": "1529",
      "name": "Krasnoyarskiy Kray"
    },
    {
      "id": "1530",
      "name": "Kurganskaya"
    },
    {
      "id": "1531",
      "name": "Kurskaya"
    },
    {
      "id": "1532",
      "name": "Leningradskaya"
    },
    {
      "id": "1533",
      "name": "Lipetskaya"
    },
    {
      "id": "1534",
      "name": "Magadanskaya"
    },
    {
      "id": "1535",
      "name": "Moskovskaya"
    },
    {
      "id": "1536",
      "name": "Murmanskaya"
    },
    {
      "id": "1537",
      "name": "Nenetskiy"
    },
    {
      "id": "1538",
      "name": "Nizhegorodskaya"
    },
    {
      "id": "1539",
      "name": "Novgorodskaya"
    },
    {
      "id": "1540",
      "name": "Novosibirskaya"
    },
    {
      "id": "1541",
      "name": "Omskaya"
    },
    {
      "id": "1542",
      "name": "Orenburgskaya"
    },
    {
      "id": "1543",
      "name": "Orlovskaya"
    },
    {
      "id": "1544",
      "name": "Penzenskaya"
    },
    {
      "id": "1545",
      "name": "Permskaya"
    },
    {
      "id": "1546",
      "name": "Primorskiy Kray"
    },
    {
      "id": "1547",
      "name": "Pskovskaya"
    },
    {
      "id": "1548",
      "name": "Respublika Adygeya"
    },
    {
      "id": "1549",
      "name": "Respublika Altay"
    },
    {
      "id": "1550",
      "name": "Respublika Bashkortostan"
    },
    {
      "id": "1551",
      "name": "Respublika Buryatiya"
    },
    {
      "id": "1552",
      "name": "Respublika Dagestan"
    },
    {
      "id": "1553",
      "name": "Respublika Kalmykiya"
    },
    {
      "id": "1554",
      "name": "Respublika Kareliya"
    },
    {
      "id": "1555",
      "name": "Respublika Khakasiya"
    },
    {
      "id": "1556",
      "name": "Respublika Komi"
    },
    {
      "id": "1557",
      "name": "Respublika Mariy-El"
    },
    {
      "id": "1558",
      "name": "Respublika Mordoviya"
    },
    {
      "id": "1559",
      "name": "Respublika Sakha"
    },
    {
      "id": "1560",
      "name": "Respublika Severnaya Osetiya-Alaniya"
    },
    {
      "id": "1561",
      "name": "Respublika Tatarstan"
    },
    {
      "id": "1562",
      "name": "Respublika Tyva"
    },
    {
      "id": "1563",
      "name": "Rostovskaya"
    },
    {
      "id": "1564",
      "name": "Ryazanskaya"
    },
    {
      "id": "1565",
      "name": "Sakhalinskaya"
    },
    {
      "id": "1566",
      "name": "Samarskaya"
    },
    {
      "id": "1567",
      "name": "Saratovskaya"
    },
    {
      "id": "1568",
      "name": "Smolenskaya"
    },
    {
      "id": "1569",
      "name": "Stavropol'skiy Kray"
    },
    {
      "id": "1570",
      "name": "Sverdlovskaya"
    },
    {
      "id": "1571",
      "name": "Tambovskaya"
    },
    {
      "id": "1572",
      "name": "Taymyrskiy"
    },
    {
      "id": "1573",
      "name": "Tomskaya"
    },
    {
      "id": "1574",
      "name": "Tul'skaya"
    },
    {
      "id": "1575",
      "name": "Tverskaya"
    },
    {
      "id": "1576",
      "name": "Tyumenskaya"
    },
    {
      "id": "1577",
      "name": "Udmurtskaya"
    },
    {
      "id": "1578",
      "name": "Ul'yanovskaya"
    },
    {
      "id": "1579",
      "name": "Ust'-Ordynskiy Buryatskiy"
    },
    {
      "id": "1580",
      "name": "Vladimirskaya"
    },
    {
      "id": "1581",
      "name": "Volgogradskaya"
    },
    {
      "id": "1582",
      "name": "Vologodskaya"
    },
    {
      "id": "1583",
      "name": "Voronezhskaya"
    },
    {
      "id": "1584",
      "name": "Yamalo-Nenetskiy"
    },
    {
      "id": "1585",
      "name": "Yaroslavskaya"
    },
    {
      "id": "1586",
      "name": "Yevreyskaya"
    }
  ],
  "172": [
    {
      "id": "1587",
      "name": "Rwanda"
    }
  ],
  "173": [
    {
      "id": "1588",
      "name": "Saint Helena"
    }
  ],
  "174": [
    {
      "id": "1589",
      "name": "Saint Kitts & Nevis"
    }
  ],
  "175": [
    {
      "id": "1590",
      "name": "Saint Lucia"
    }
  ],
  "176": [
    {
      "id": "1591",
      "name": "Saint Pierre & Miquelon"
    }
  ],
  "177": [
    {
      "id": "1592",
      "name": "Saint Vincent & the Grenadines"
    }
  ],
  "178": [
    {
      "id": "1593",
      "name": "Samoa"
    }
  ],
  "179": [
    {
      "id": "1594",
      "name": "San Marino"
    }
  ],
  "180": [
    {
      "id": "1595",
      "name": "Sao Tome & Principe"
    }
  ],
  "181": [
    {
      "id": "1596",
      "name": "Al Bahah"
    },
    {
      "id": "1597",
      "name": "Al Hudud ash Shamaliyah"
    },
    {
      "id": "1598",
      "name": "Al Madinah"
    },
    {
      "id": "1599",
      "name": "Al Mintaqah ash Sharqiyah"
    },
    {
      "id": "1600",
      "name": "Al Qasim"
    },
    {
      "id": "1601",
      "name": "Al-Jawf"
    },
    {
      "id": "1602",
      "name": "Ar Riyad"
    },
    {
      "id": "1603",
      "name": "Ha'il"
    },
    {
      "id": "1604",
      "name": "Jizan"
    },
    {
      "id": "1605",
      "name": "Makkah"
    },
    {
      "id": "1606",
      "name": "Tabuk"
    }
  ],
  "182": [
    {
      "id": "1607",
      "name": "Dakar"
    },
    {
      "id": "1608",
      "name": "Saint-Louis"
    },
    {
      "id": "1609",
      "name": "Thies"
    }
  ],
  "183": [
    {
      "id": "1610",
      "name": "Serbia & Montenegro"
    }
  ],
  "184": [
    {
      "id": "1611",
      "name": "Seychelles"
    }
  ],
  "185": [
    {
      "id": "1612",
      "name": "Eastern Province"
    },
    {
      "id": "1613",
      "name": "Northern Province"
    },
    {
      "id": "1614",
      "name": "Southern Province"
    },
    {
      "id": "1615",
      "name": "Western Area"
    }
  ],
  "186": [
    {
      "id": "1616",
      "name": "Singapore"
    }
  ],
  "187": [
    {
      "id": "1617",
      "name": "Slovakia"
    }
  ],
  "188": [
    {
      "id": "1618",
      "name": "Slovenia"
    }
  ],
  "189": [
    {
      "id": "1619",
      "name": "Solomon Islands"
    }
  ],
  "190": [
    {
      "id": "1620",
      "name": "Bakool"
    },
    {
      "id": "1621",
      "name": "Banaadir"
    },
    {
      "id": "1622",
      "name": "Bari"
    },
    {
      "id": "1623",
      "name": "Bay"
    },
    {
      "id": "1624",
      "name": "Gedo"
    },
    {
      "id": "1625",
      "name": "Jubbada Dhexe"
    },
    {
      "id": "1626",
      "name": "Jubbada Hoose"
    },
    {
      "id": "1627",
      "name": "Shabeellaha Hoose"
    }
  ],
  "191": [
    {
      "id": "1628",
      "name": "Eastern Cape"
    },
    {
      "id": "1629",
      "name": "Free State"
    },
    {
      "id": "1630",
      "name": "Gauteng"
    },
    {
      "id": "1631",
      "name": "KwaZulu-Natal"
    },
    {
      "id": "1632",
      "name": "Limpopo"
    },
    {
      "id": "1633",
      "name": "Mpumalanga"
    },
    {
      "id": "1634",
      "name": "North-West"
    },
    {
      "id": "1635",
      "name": "Northern Cape"
    },
    {
      "id": "1636",
      "name": "Unknown"
    },
    {
      "id": "1637",
      "name": "Western Cape"
    }
  ],
  "192": [
    {
      "id": "1638",
      "name": "South Georgia & South Sandwich Islands"
    }
  ],
  "193": [
    {
      "id": "2129",
      "name": "Busan"
    },
    {
      "id": "1639",
      "name": "Ch'ungch'ong-bukto"
    },
    {
      "id": "1640",
      "name": "Ch'ungch'ong-namdo"
    },
    {
      "id": "1641",
      "name": "Cheju-do"
    },
    {
      "id": "1642",
      "name": "Cholla-bukto"
    },
    {
      "id": "1643",
      "name": "Cholla-namdo"
    },
    {
      "id": "2130",
      "name": "Chungcheongbuk-do"
    },
    {
      "id": "2131",
      "name": "Chungcheongnam-do"
    },
    {
      "id": "2132",
      "name": "Daegu"
    },
    {
      "id": "2133",
      "name": "Daejeon"
    },
    {
      "id": "2134",
      "name": "Gangwon-do"
    },
    {
      "id": "2135",
      "name": "Gwangju"
    },
    {
      "id": "2136",
      "name": "Gyeonggi-do"
    },
    {
      "id": "2137",
      "name": "Gyeongsangbuk-do"
    },
    {
      "id": "2138",
      "name": "Gyeongsangnam-do"
    },
    {
      "id": "1644",
      "name": "Inch'on"
    },
    {
      "id": "2139",
      "name": "Incheon"
    },
    {
      "id": "2140",
      "name": "Jeju-do"
    },
    {
      "id": "2141",
      "name": "Jeollabuk-do"
    },
    {
      "id": "2142",
      "name": "Jeollanam-do"
    },
    {
      "id": "1645",
      "name": "Kangwon-do"
    },
    {
      "id": "1646",
      "name": "Kwangju"
    },
    {
      "id": "1647",
      "name": "Kyonggi-do"
    },
    {
      "id": "1648",
      "name": "Kyongsang-bukto"
    },
    {
      "id": "1649",
      "name": "Kyongsang-namdo"
    },
    {
      "id": "1650",
      "name": "Pusan"
    },
    {
      "id": "1651",
      "name": "Seoul"
    },
    {
      "id": "1652",
      "name": "Taegu"
    },
    {
      "id": "1653",
      "name": "Taejon"
    },
    {
      "id": "1654",
      "name": "Ulsan"
    }
  ],
  "194": [
    {
      "id": "1655",
      "name": "Andalucia"
    },
    {
      "id": "1656",
      "name": "Aragon"
    },
    {
      "id": "1657",
      "name": "Asturias"
    },
    {
      "id": "1658",
      "name": "Baleares"
    },
    {
      "id": "1659",
      "name": "Canarias"
    },
    {
      "id": "1660",
      "name": "Cantabria"
    },
    {
      "id": "1661",
      "name": "Castilla y Leon"
    },
    {
      "id": "1662",
      "name": "Castilla-La Mancha"
    },
    {
      "id": "1663",
      "name": "Cataluna"
    },
    {
      "id": "1664",
      "name": "Ceuta y Melilla"
    },
    {
      "id": "1665",
      "name": "Extremadura"
    },
    {
      "id": "1666",
      "name": "Galicia"
    },
    {
      "id": "1667",
      "name": "La Rioja"
    },
    {
      "id": "1668",
      "name": "Madrid"
    },
    {
      "id": "1669",
      "name": "Murcia"
    },
    {
      "id": "1670",
      "name": "Navarra"
    },
    {
      "id": "1671",
      "name": "Pais Vasco"
    },
    {
      "id": "1672",
      "name": "Valencia"
    }
  ],
  "195": [
    {
      "id": "1673",
      "name": "Spratly Islands"
    }
  ],
  "196": [
    {
      "id": "1674",
      "name": "Sri Lanka"
    }
  ],
  "197": [
    {
      "id": "1675",
      "name": "Sudan"
    }
  ],
  "198": [
    {
      "id": "1676",
      "name": "Suriname"
    }
  ],
  "199": [
    {
      "id": "1677",
      "name": "Svalbard"
    }
  ],
  "200": [
    {
      "id": "1678",
      "name": "Swaziland"
    }
  ],
  "201": [
    {
      "id": "1679",
      "name": "Blekinge lan"
    },
    {
      "id": "1680",
      "name": "Dalarnas lan"
    },
    {
      "id": "1681",
      "name": "Gavleborgs lan"
    },
    {
      "id": "1682",
      "name": "Gotlands lan"
    },
    {
      "id": "1683",
      "name": "Hallands lan"
    },
    {
      "id": "1684",
      "name": "Jamtlands lan"
    },
    {
      "id": "1685",
      "name": "Jonkopings lan"
    },
    {
      "id": "1686",
      "name": "Kalmar lan"
    },
    {
      "id": "1687",
      "name": "Kronobergs lan"
    },
    {
      "id": "1688",
      "name": "Norrbottens lan"
    },
    {
      "id": "1689",
      "name": "Orebro lan"
    },
    {
      "id": "1690",
      "name": "Ostergotlands lan"
    },
    {
      "id": "1691",
      "name": "Skane lan"
    },
    {
      "id": "1692",
      "name": "Sodermanlands lan"
    },
    {
      "id": "1693",
      "name": "Stockholms lan"
    },
    {
      "id": "1694",
      "name": "Uppsala lan"
    },
    {
      "id": "1695",
      "name": "Varmlands lan"
    },
    {
      "id": "1696",
      "name": "Vasterbottens lan"
    },
    {
      "id": "1697",
      "name": "Vasternorrlands lan"
    },
    {
      "id": "1698",
      "name": "Vastmanlands lan"
    },
    {
      "id": "1699",
      "name": "Vastra Gotalands lan"
    }
  ],
  "202": [
    {
      "id": "1700",
      "name": "Switzerland"
    }
  ],
  "203": [
    {
      "id": "1701",
      "name": "Dar`a"
    },
    {
      "id": "1702",
      "name": "Dayr az Zawr"
    },
    {
      "id": "1703",
      "name": "Dimashq"
    },
    {
      "id": "1704",
      "name": "Hamah"
    },
    {
      "id": "1705",
      "name": "Hasakah"
    },
    {
      "id": "1706",
      "name": "Hims"
    },
    {
      "id": "1707",
      "name": "Ladhiqiyah"
    },
    {
      "id": "1708",
      "name": "Unknown"
    }
  ],
  "204": [
    {
      "id": "1709",
      "name": "Kao-hsiung"
    },
    {
      "id": "1710",
      "name": "T'ai-pei"
    },
    {
      "id": "1711",
      "name": "T'ai-wan"
    }
  ],
  "205": [
    {
      "id": "1712",
      "name": "Khatlon"
    },
    {
      "id": "1713",
      "name": "Mukhtori Kuhistoni Badakhshon"
    },
    {
      "id": "1714",
      "name": "Sughd"
    },
    {
      "id": "1715",
      "name": "Unknown"
    }
  ],
  "206": [
    {
      "id": "1716",
      "name": "Kagera"
    },
    {
      "id": "1717",
      "name": "Kigoma"
    },
    {
      "id": "1718",
      "name": "Mwanza"
    },
    {
      "id": "1719",
      "name": "Rukwa"
    },
    {
      "id": "1720",
      "name": "Shinyanga"
    },
    {
      "id": "1721",
      "name": "Tabora"
    },
    {
      "id": "1722",
      "name": "Unknown"
    }
  ],
  "207": [
    {
      "id": "1723",
      "name": "Bangkok Metropolis"
    },
    {
      "id": "1724",
      "name": "Central"
    },
    {
      "id": "1725",
      "name": "Northeastern"
    },
    {
      "id": "1726",
      "name": "Northern"
    },
    {
      "id": "1727",
      "name": "Southern"
    }
  ],
  "208": [
    {
      "id": "1728",
      "name": "Togo"
    }
  ],
  "209": [
    {
      "id": "1729",
      "name": "Tokelau"
    }
  ],
  "210": [
    {
      "id": "1730",
      "name": "Tonga"
    }
  ],
  "211": [
    {
      "id": "1731",
      "name": "Trinidad & Tobago"
    }
  ],
  "212": [
    {
      "id": "1732",
      "name": "Ariana"
    },
    {
      "id": "2009",
      "name": "Beja"
    },
    {
      "id": "2010",
      "name": "Ben Arous"
    },
    {
      "id": "2011",
      "name": "Bizerte"
    },
    {
      "id": "2012",
      "name": "Gabes"
    },
    {
      "id": "2013",
      "name": "Gafsa"
    },
    {
      "id": "2014",
      "name": "Jendouba"
    },
    {
      "id": "2015",
      "name": "Kairouan"
    },
    {
      "id": "2016",
      "name": "Kasserine"
    },
    {
      "id": "2017",
      "name": "Kebili"
    },
    {
      "id": "2018",
      "name": "Le Kef"
    },
    {
      "id": "1733",
      "name": "Mahdia"
    },
    {
      "id": "2019",
      "name": "Manouba"
    },
    {
      "id": "2020",
      "name": "Medenine"
    },
    {
      "id": "2021",
      "name": "Monastir"
    },
    {
      "id": "2022",
      "name": "Nabeul"
    },
    {
      "id": "2023",
      "name": "Sfax"
    },
    {
      "id": "2024",
      "name": "Sidi Bou Zid"
    },
    {
      "id": "2025",
      "name": "Siliana"
    },
    {
      "id": "1734",
      "name": "Sousse"
    },
    {
      "id": "2026",
      "name": "Tataouine"
    },
    {
      "id": "2027",
      "name": "Tozeur"
    },
    {
      "id": "1735",
      "name": "Tunis"
    },
    {
      "id": "1736",
      "name": "Unknown"
    },
    {
      "id": "2028",
      "name": "Zaghouan"
    }
  ],
  "213": [
    {
      "id": "1737",
      "name": "Adana"
    },
    {
      "id": "2043",
      "name": "Adiyaman"
    },
    {
      "id": "2044",
      "name": "Afyonkarahisar"
    },
    {
      "id": "2045",
      "name": "Agri"
    },
    {
      "id": "2046",
      "name": "Aksaray"
    },
    {
      "id": "2047",
      "name": "Amasya"
    },
    {
      "id": "1738",
      "name": "Ankara"
    },
    {
      "id": "1739",
      "name": "Antalya"
    },
    {
      "id": "2048",
      "name": "Ardahan"
    },
    {
      "id": "2049",
      "name": "Artvin"
    },
    {
      "id": "1740",
      "name": "Aydin"
    },
    {
      "id": "2050",
      "name": "Balikesir"
    },
    {
      "id": "2051",
      "name": "Bartin"
    },
    {
      "id": "2052",
      "name": "Batman"
    },
    {
      "id": "2053",
      "name": "Bayburt"
    },
    {
      "id": "1741",
      "name": "Bilecik"
    },
    {
      "id": "2054",
      "name": "Bingol"
    },
    {
      "id": "2055",
      "name": "Bitlis"
    },
    {
      "id": "2056",
      "name": "Bolu"
    },
    {
      "id": "2057",
      "name": "Burdur"
    },
    {
      "id": "1742",
      "name": "Bursa"
    },
    {
      "id": "2058",
      "name": "Canakkale"
    },
    {
      "id": "2059",
      "name": "Cankiri"
    },
    {
      "id": "2060",
      "name": "Corum"
    },
    {
      "id": "2061",
      "name": "Denizli"
    },
    {
      "id": "1743",
      "name": "Diyarbakir"
    },
    {
      "id": "2062",
      "name": "Duzce"
    },
    {
      "id": "2063",
      "name": "Edirne"
    },
    {
      "id": "2064",
      "name": "Elazig"
    },
    {
      "id": "2065",
      "name": "Erzincan"
    },
    {
      "id": "1744",
      "name": "Erzurum"
    },
    {
      "id": "2066",
      "name": "Eskisehir"
    },
    {
      "id": "2067",
      "name": "Gaziantep"
    },
    {
      "id": "2068",
      "name": "Giresun"
    },
    {
      "id": "2069",
      "name": "Gumushane"
    },
    {
      "id": "1745",
      "name": "Hakkari"
    },
    {
      "id": "1746",
      "name": "Hatay"
    },
    {
      "id": "1747",
      "name": "Icel"
    },
    {
      "id": "1748",
      "name": "Isparta"
    },
    {
      "id": "1749",
      "name": "Istanbul"
    },
    {
      "id": "1750",
      "name": "Izmir"
    },
    {
      "id": "2070",
      "name": "Kahramanmaras"
    },
    {
      "id": "2071",
      "name": "Karabuk"
    },
    {
      "id": "1751",
      "name": "Karaman"
    },
    {
      "id": "2072",
      "name": "Kars"
    },
    {
      "id": "2073",
      "name": "Kastamonu"
    },
    {
      "id": "2074",
      "name": "Kayseri"
    },
    {
      "id": "1752",
      "name": "Kilis"
    },
    {
      "id": "2075",
      "name": "Kirikkale"
    },
    {
      "id": "2076",
      "name": "Kirklareli"
    },
    {
      "id": "2077",
      "name": "Kirsehir"
    },
    {
      "id": "1753",
      "name": "Kocaeli"
    },
    {
      "id": "1754",
      "name": "Konya"
    },
    {
      "id": "2078",
      "name": "Kutahya"
    },
    {
      "id": "2079",
      "name": "Malatya"
    },
    {
      "id": "1755",
      "name": "Manisa"
    },
    {
      "id": "2080",
      "name": "Mardin"
    },
    {
      "id": "2081",
      "name": "Mersin"
    },
    {
      "id": "2082",
      "name": "Mugla"
    },
    {
      "id": "2083",
      "name": "Mus"
    },
    {
      "id": "2084",
      "name": "Nevsehir"
    },
    {
      "id": "1756",
      "name": "Nigde"
    },
    {
      "id": "2085",
      "name": "Ordu"
    },
    {
      "id": "2086",
      "name": "Osmaniye"
    },
    {
      "id": "2087",
      "name": "Rize"
    },
    {
      "id": "2088",
      "name": "Sakarya"
    },
    {
      "id": "2089",
      "name": "Samsun"
    },
    {
      "id": "2090",
      "name": "Sanliurfa"
    },
    {
      "id": "2091",
      "name": "Siirt"
    },
    {
      "id": "2092",
      "name": "Sinop"
    },
    {
      "id": "1757",
      "name": "Sirnak"
    },
    {
      "id": "1758",
      "name": "Sivas"
    },
    {
      "id": "2093",
      "name": "Tekirdag"
    },
    {
      "id": "2094",
      "name": "Tokat"
    },
    {
      "id": "2095",
      "name": "Trabzon"
    },
    {
      "id": "2096",
      "name": "Tunceli"
    },
    {
      "id": "2097",
      "name": "Usak"
    },
    {
      "id": "2098",
      "name": "Van"
    },
    {
      "id": "1759",
      "name": "Yalova"
    },
    {
      "id": "2099",
      "name": "Yozgat"
    },
    {
      "id": "2100",
      "name": "Zonguldak"
    }
  ],
  "214": [
    {
      "id": "1760",
      "name": "Ahal"
    },
    {
      "id": "1761",
      "name": "Balkan"
    },
    {
      "id": "1762",
      "name": "Dasoguz"
    },
    {
      "id": "1763",
      "name": "Lebap"
    },
    {
      "id": "1764",
      "name": "Mary"
    }
  ],
  "215": [
    {
      "id": "1765",
      "name": "Turks & Caicos Islands"
    }
  ],
  "216": [
    {
      "id": "1766",
      "name": "Tuvalu"
    }
  ],
  "217": [
    {
      "id": "1767",
      "name": "Uganda"
    }
  ],
  "218": [
    {
      "id": "1768",
      "name": "Cherkas'ka"
    },
    {
      "id": "1769",
      "name": "Chernihivs'ka"
    },
    {
      "id": "1770",
      "name": "Chernivets'ka"
    },
    {
      "id": "1771",
      "name": "Dnipropetrovs'ka"
    },
    {
      "id": "1772",
      "name": "Donets'ka"
    },
    {
      "id": "1773",
      "name": "Ivano-Frankivs'ka"
    },
    {
      "id": "1774",
      "name": "Kharkivs'ka"
    },
    {
      "id": "1775",
      "name": "Khersons'ka"
    },
    {
      "id": "1776",
      "name": "Khmel'nyts'ka"
    },
    {
      "id": "1777",
      "name": "Kirovohrads'ka"
    },
    {
      "id": "1778",
      "name": "Kyrm"
    },
    {
      "id": "1779",
      "name": "Kyyivs'ka"
    },
    {
      "id": "1780",
      "name": "L'vivs'ka"
    },
    {
      "id": "1781",
      "name": "Luhans'ka"
    },
    {
      "id": "1782",
      "name": "Misto Kyyiv"
    },
    {
      "id": "1783",
      "name": "Misto Sevastopol"
    },
    {
      "id": "1784",
      "name": "Mykolayivs'ka"
    },
    {
      "id": "1785",
      "name": "Odes'ka"
    },
    {
      "id": "1786",
      "name": "Poltavs'ka"
    },
    {
      "id": "1787",
      "name": "Rivnens'ka"
    },
    {
      "id": "1788",
      "name": "Sums'ka"
    },
    {
      "id": "1789",
      "name": "Ternopil's'ka"
    },
    {
      "id": "1790",
      "name": "Vinnyts'ka"
    },
    {
      "id": "1791",
      "name": "Volyns'ka"
    },
    {
      "id": "1792",
      "name": "Zakarpats'ka"
    },
    {
      "id": "1793",
      "name": "Zaporiz'ka"
    },
    {
      "id": "1794",
      "name": "Zhytomyrs'ka"
    }
  ],
  "219": [
    {
      "id": "1795",
      "name": "United Arab Emirates"
    }
  ],
  "220": [
    {
      "id": "1796",
      "name": "England"
    },
    {
      "id": "1797",
      "name": "Northern Ireland"
    },
    {
      "id": "1798",
      "name": "Scotland"
    },
    {
      "id": "1799",
      "name": "Wales"
    }
  ],
  "221": [
    {
      "id": "1800",
      "name": "Alabama"
    },
    {
      "id": "1801",
      "name": "Alaska"
    },
    {
      "id": "1802",
      "name": "American Samoa"
    },
    {
      "id": "1803",
      "name": "Arizona"
    },
    {
      "id": "1804",
      "name": "Arkansas"
    },
    {
      "id": "1805",
      "name": "California"
    },
    {
      "id": "1806",
      "name": "Colorado"
    },
    {
      "id": "1807",
      "name": "Connecticut"
    },
    {
      "id": "1808",
      "name": "Delaware"
    },
    {
      "id": "1809",
      "name": "District of Columbia"
    },
    {
      "id": "1810",
      "name": "Florida"
    },
    {
      "id": "1811",
      "name": "Georgia"
    },
    {
      "id": "1812",
      "name": "Guam"
    },
    {
      "id": "1813",
      "name": "Hawaii"
    },
    {
      "id": "1814",
      "name": "Idaho"
    },
    {
      "id": "1815",
      "name": "Illinois"
    },
    {
      "id": "1816",
      "name": "Indiana"
    },
    {
      "id": "1817",
      "name": "Iowa"
    },
    {
      "id": "1818",
      "name": "Kansas"
    },
    {
      "id": "1819",
      "name": "Kentucky"
    },
    {
      "id": "1820",
      "name": "Louisiana"
    },
    {
      "id": "1821",
      "name": "Maine"
    },
    {
      "id": "1822",
      "name": "Maryland"
    },
    {
      "id": "1823",
      "name": "Massachusetts"
    },
    {
      "id": "1824",
      "name": "Michigan"
    },
    {
      "id": "1825",
      "name": "Minnesota"
    },
    {
      "id": "1826",
      "name": "Mississippi"
    },
    {
      "id": "1827",
      "name": "Missouri"
    },
    {
      "id": "1828",
      "name": "Montana"
    },
    {
      "id": "1829",
      "name": "Nebraska"
    },
    {
      "id": "1830",
      "name": "Nevada"
    },
    {
      "id": "1831",
      "name": "New Hampshire"
    },
    {
      "id": "1832",
      "name": "New Jersey"
    },
    {
      "id": "1833",
      "name": "New Mexico"
    },
    {
      "id": "1834",
      "name": "New York"
    },
    {
      "id": "1835",
      "name": "North Carolina"
    },
    {
      "id": "1836",
      "name": "North Dakota"
    },
    {
      "id": "1837",
      "name": "Northern Mariana Islands"
    },
    {
      "id": "1838",
      "name": "Ohio"
    },
    {
      "id": "1839",
      "name": "Oklahoma"
    },
    {
      "id": "1840",
      "name": "Oregon"
    },
    {
      "id": "1841",
      "name": "Pennsylvania"
    },
    {
      "id": "1842",
      "name": "Puerto Rico"
    },
    {
      "id": "1843",
      "name": "Rhode Island"
    },
    {
      "id": "1844",
      "name": "South Carolina"
    },
    {
      "id": "1845",
      "name": "South Dakota"
    },
    {
      "id": "1846",
      "name": "Tennessee"
    },
    {
      "id": "1847",
      "name": "Texas"
    },
    {
      "id": "1848",
      "name": "Utah"
    },
    {
      "id": "1849",
      "name": "Vermont"
    },
    {
      "id": "1850",
      "name": "Virgin Islands"
    },
    {
      "id": "1851",
      "name": "Virginia"
    },
    {
      "id": "1852",
      "name": "Washington"
    },
    {
      "id": "1853",
      "name": "West Virginia"
    },
    {
      "id": "1854",
      "name": "Wisconsin"
    },
    {
      "id": "1855",
      "name": "Wyoming"
    }
  ],
  "222": [
    {
      "id": "1856",
      "name": "Artigas"
    },
    {
      "id": "1857",
      "name": "Canelones"
    },
    {
      "id": "1858",
      "name": "Cerro Largo"
    },
    {
      "id": "1859",
      "name": "Colonia"
    },
    {
      "id": "1860",
      "name": "Durazno"
    },
    {
      "id": "1861",
      "name": "Florida"
    },
    {
      "id": "1862",
      "name": "Lavalleja"
    },
    {
      "id": "1863",
      "name": "Maldonado"
    },
    {
      "id": "1864",
      "name": "Montevideo"
    },
    {
      "id": "1865",
      "name": "Paysandu"
    },
    {
      "id": "1866",
      "name": "Rio Negro"
    },
    {
      "id": "1867",
      "name": "Rivera"
    },
    {
      "id": "1868",
      "name": "Rocha"
    },
    {
      "id": "1869",
      "name": "Salto"
    },
    {
      "id": "1870",
      "name": "San Jose"
    },
    {
      "id": "1871",
      "name": "Soriano"
    },
    {
      "id": "1872",
      "name": "Tacuarembo"
    },
    {
      "id": "1873",
      "name": "Treinta y Tres"
    }
  ],
  "223": [
    {
      "id": "1874",
      "name": "Andijon"
    },
    {
      "id": "1875",
      "name": "Buxoro"
    },
    {
      "id": "1876",
      "name": "Jizzax"
    },
    {
      "id": "1877",
      "name": "Namangan"
    },
    {
      "id": "1878",
      "name": "Navoiy"
    },
    {
      "id": "1879",
      "name": "Qashqadaryo"
    },
    {
      "id": "1880",
      "name": "Qoraqalpog`iston"
    },
    {
      "id": "1881",
      "name": "Samarqand"
    },
    {
      "id": "1882",
      "name": "Sirdaryo"
    },
    {
      "id": "1883",
      "name": "Surxondaryo"
    },
    {
      "id": "1884",
      "name": "Toshkent"
    },
    {
      "id": "1885",
      "name": "Toshkent Shahri"
    },
    {
      "id": "1886",
      "name": "Unknown"
    },
    {
      "id": "1887",
      "name": "Xorazm"
    }
  ],
  "224": [
    {
      "id": "1888",
      "name": "Vanuatu"
    }
  ],
  "225": [
    {
      "id": "1889",
      "name": "Vatican City"
    }
  ],
  "226": [
    {
      "id": "1890",
      "name": "Amazonas"
    },
    {
      "id": "1891",
      "name": "Anzoategui"
    },
    {
      "id": "1892",
      "name": "Apure"
    },
    {
      "id": "1893",
      "name": "Aragua"
    },
    {
      "id": "1894",
      "name": "Barinas"
    },
    {
      "id": "1895",
      "name": "Bolivar"
    },
    {
      "id": "1896",
      "name": "Carabobo"
    },
    {
      "id": "1897",
      "name": "Falcon"
    },
    {
      "id": "1898",
      "name": "Guarico"
    },
    {
      "id": "1899",
      "name": "Lara"
    },
    {
      "id": "1900",
      "name": "Merida"
    },
    {
      "id": "1901",
      "name": "Miranda"
    },
    {
      "id": "1902",
      "name": "Monagas"
    },
    {
      "id": "1903",
      "name": "Nueva Esparta"
    },
    {
      "id": "1904",
      "name": "Sucre"
    },
    {
      "id": "1905",
      "name": "Tachira"
    },
    {
      "id": "1906",
      "name": "Trujillo"
    },
    {
      "id": "1907",
      "name": "Vargas"
    },
    {
      "id": "1908",
      "name": "Yaracuy"
    },
    {
      "id": "1909",
      "name": "Zulia"
    }
  ],
  "227": [
    {
      "id": "1910",
      "name": "An Giang"
    },
    {
      "id": "1911",
      "name": "Ba Ria-Vung Tau"
    },
    {
      "id": "1912",
      "name": "Bac Giang"
    },
    {
      "id": "1913",
      "name": "Bac Kan"
    },
    {
      "id": "1914",
      "name": "Bac Lieu"
    },
    {
      "id": "1915",
      "name": "Bac Ninh"
    },
    {
      "id": "1916",
      "name": "Ben Tre"
    },
    {
      "id": "1917",
      "name": "Binh Dinh"
    },
    {
      "id": "1918",
      "name": "Binh Duong"
    },
    {
      "id": "1919",
      "name": "Binh Phuoc"
    },
    {
      "id": "1920",
      "name": "Binh Thuan"
    },
    {
      "id": "1921",
      "name": "Ca Mau"
    },
    {
      "id": "1922",
      "name": "Can Tho"
    },
    {
      "id": "1923",
      "name": "Cao Bang"
    },
    {
      "id": "1924",
      "name": "Da Nang"
    },
    {
      "id": "1925",
      "name": "Dac Lak"
    },
    {
      "id": "1926",
      "name": "Dong Nai"
    },
    {
      "id": "1927",
      "name": "Dong Thap"
    },
    {
      "id": "1928",
      "name": "Gia Lai"
    },
    {
      "id": "1929",
      "name": "Ha Giang"
    },
    {
      "id": "1930",
      "name": "Ha Nam"
    },
    {
      "id": "1931",
      "name": "Ha Tay"
    },
    {
      "id": "1932",
      "name": "Ha Tinh"
    },
    {
      "id": "1933",
      "name": "Hai Duong"
    },
    {
      "id": "1934",
      "name": "Hoa Binh"
    },
    {
      "id": "1935",
      "name": "Hung Yen"
    },
    {
      "id": "1936",
      "name": "Khanh Hoa"
    },
    {
      "id": "1937",
      "name": "Kien Giang"
    },
    {
      "id": "1938",
      "name": "Kon Tum"
    },
    {
      "id": "1939",
      "name": "Lai Chau"
    },
    {
      "id": "1940",
      "name": "Lam Dong"
    },
    {
      "id": "1941",
      "name": "Lang Son"
    },
    {
      "id": "1942",
      "name": "Lao Cai"
    },
    {
      "id": "1943",
      "name": "Long An"
    },
    {
      "id": "1944",
      "name": "Nam Dinh"
    },
    {
      "id": "1945",
      "name": "Nghe An"
    },
    {
      "id": "1946",
      "name": "Ninh Binh"
    },
    {
      "id": "1947",
      "name": "Ninh Thuan"
    },
    {
      "id": "1948",
      "name": "Phu Tho"
    },
    {
      "id": "1949",
      "name": "Phu Yen"
    },
    {
      "id": "1950",
      "name": "Quang Binh"
    },
    {
      "id": "1951",
      "name": "Quang Nam"
    },
    {
      "id": "1952",
      "name": "Quang Ngai"
    },
    {
      "id": "1953",
      "name": "Quang Ninh"
    },
    {
      "id": "1954",
      "name": "Quang Tri"
    },
    {
      "id": "1955",
      "name": "Soc Trang"
    },
    {
      "id": "1956",
      "name": "Son La"
    },
    {
      "id": "1957",
      "name": "Tay Ninh"
    },
    {
      "id": "1958",
      "name": "Thai Binh"
    },
    {
      "id": "1959",
      "name": "Thai Nguyen"
    },
    {
      "id": "1960",
      "name": "Thanh Hoa"
    },
    {
      "id": "1961",
      "name": "Thanh Pho Hai Phong"
    },
    {
      "id": "1962",
      "name": "Thanh Pho Ho Chi Minh"
    },
    {
      "id": "1963",
      "name": "Thu Do Ha Noi"
    },
    {
      "id": "1964",
      "name": "Thua Thien-Hue"
    },
    {
      "id": "1965",
      "name": "Tien Giang"
    },
    {
      "id": "1966",
      "name": "Tra Vinh"
    },
    {
      "id": "1967",
      "name": "Tuyen Quang"
    },
    {
      "id": "1968",
      "name": "Vinh Long"
    },
    {
      "id": "1969",
      "name": "Vinh Phuc"
    },
    {
      "id": "1970",
      "name": "Yen Bai"
    }
  ],
  "228": [
    {
      "id": "1971",
      "name": "Wallis & Futuna"
    }
  ],
  "229": [
    {
      "id": "1972",
      "name": "West Bank"
    }
  ],
  "230": [
    {
      "id": "1973",
      "name": "Yemen"
    }
  ],
  "231": [
    {
      "id": "1974",
      "name": "Central"
    },
    {
      "id": "1975",
      "name": "Eastern"
    },
    {
      "id": "1976",
      "name": "Lusaka"
    },
    {
      "id": "1977",
      "name": "Southern"
    },
    {
      "id": "1978",
      "name": "Unknown"
    },
    {
      "id": "1979",
      "name": "Western"
    }
  ],
  "232": [
    {
      "id": "1980",
      "name": "Harare"
    },
    {
      "id": "1981",
      "name": "Manicaland"
    },
    {
      "id": "1982",
      "name": "Mashonaland East"
    },
    {
      "id": "1983",
      "name": "Mashonaland West"
    },
    {
      "id": "1984",
      "name": "Masvingo"
    },
    {
      "id": "1985",
      "name": "Matabeleland North"
    },
    {
      "id": "1986",
      "name": "Matabeleland South"
    },
    {
      "id": "1987",
      "name": "Midlands"
    },
    {
      "id": "1988",
      "name": "Unknown"
    }
  ],
  "233": [
    {
      "id": "2029",
      "name": "Ayeyarwady"
    },
    {
      "id": "2030",
      "name": "Bago"
    },
    {
      "id": "2031",
      "name": "Chin"
    },
    {
      "id": "2032",
      "name": "Kachin"
    },
    {
      "id": "2033",
      "name": "Kayah"
    },
    {
      "id": "2034",
      "name": "Kayin"
    },
    {
      "id": "2035",
      "name": "Magway"
    },
    {
      "id": "2036",
      "name": "Mandalay"
    },
    {
      "id": "2037",
      "name": "Mon"
    },
    {
      "id": "2038",
      "name": "Rakhine"
    },
    {
      "id": "2039",
      "name": "Sagaing"
    },
    {
      "id": "2040",
      "name": "Shan"
    },
    {
      "id": "2041",
      "name": "Tanintharyi"
    },
    {
      "id": "2042",
      "name": "Yangon"
    }
  ],
  "234": [
    {
      "id": "2104",
      "name": "Gaza"
    },
    {
      "id": "2106",
      "name": "Palestine"
    },
    {
      "id": "2105",
      "name": "West Bank"
    }
  ],
  "235": [
    {
      "id": "2176",
      "name": "Ferizaj"
    },
    {
      "id": "2177",
      "name": "Gjakova"
    },
    {
      "id": "2178",
      "name": "Gjilan"
    },
    {
      "id": "2179",
      "name": "Mitrovica"
    },
    {
      "id": "2180",
      "name": "Peja"
    },
    {
      "id": "2181",
      "name": "Pristina"
    },
    {
      "id": "2182",
      "name": "Prizren"
    }
  ]
  // Add additional countries and states here as needed
};

// Event listener to attach rich text editor toolbar action buttons
function attachRteToolbarHandlers() {
  document.querySelectorAll(".vtools-rte-toolbar button").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const cmd = btn.getAttribute("data-cmd");
      const toolbar = btn.closest(".vtools-rte-toolbar");
      const targetId = toolbar.getAttribute("data-for");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.focus();
        document.execCommand(cmd, false, null);
      }
    };
  });
}

/**
 * Renders custom registration question fields in the extension preferences.
 */
function renderCustomQuestionSettings(count, savedQuestions = []) {
  const container = document.getElementById("custom_questions_container");
  if (!container) return;
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const qData = savedQuestions[i] || { question: "", type: "text", required: false, choices: [] };
    const qDiv = document.createElement("div");
    qDiv.className = "custom-question-card";
    qDiv.style.cssText = "border-bottom: 1px dashed #ccc; padding-bottom: 10px; margin-bottom: 10px;";
    
    qDiv.innerHTML = `
      <strong>Question #${i + 1}</strong>
      <div class="row" style="margin-top: 5px;">
        <div class="col form-group">
          <label>Question Text</label>
          <input type="text" class="cq-title" value="${qData.question}" placeholder="e.g. Dietary Restrictions" />
        </div>
        <div class="col form-group">
          <label>Type</label>
          <select class="cq-type">
            <option value="text" ${qData.type === "text" ? "selected" : ""}>Text</option>
            <option value="choices" ${qData.type === "choices" ? "selected" : ""}>Choices</option>
          </select>
        </div>
        <div class="col form-group" style="display: flex; align-items: center; margin-top: 18px;">
          <label class="checkbox-label">
            <input type="checkbox" class="cq-required" ${qData.required ? "checked" : ""} /> Required
          </label>
        </div>
      </div>
      <div class="cq-choices-wrapper" style="display: ${qData.type === "choices" ? "block" : "none"}; margin-left: 20px;">
        <label>Number of Choices</label>
        <input type="number" class="cq-choices-count" min="1" max="10" value="${qData.choices ? qData.choices.length : 1}" style="width: 100px;" />
        <div class="cq-choices-container" style="margin-top: 8px;"></div>
      </div>
    `;

    container.appendChild(qDiv);

    const typeSelect = qDiv.querySelector(".cq-type");
    const choicesWrapper = qDiv.querySelector(".cq-choices-wrapper");
    const choicesCountInput = qDiv.querySelector(".cq-choices-count");
    const choicesContainer = qDiv.querySelector(".cq-choices-container");

    const renderChoiceInputs = () => {
      const num = parseInt(choicesCountInput.value) || 0;
      choicesContainer.innerHTML = "";
      for (let c = 0; c < num; c++) {
        const val = (qData.choices && qData.choices[c]) ? qData.choices[c] : "";
        const cInput = document.createElement("input");
        cInput.type = "text";
        cInput.className = "cq-choice-text";
        cInput.value = val;
        cInput.placeholder = `Choice #${c + 1}`;
        cInput.style.cssText = "margin-bottom: 5px; width: 80%; display: block;";
        choicesContainer.appendChild(cInput);
      }
    };

    typeSelect.addEventListener("change", () => {
      choicesWrapper.style.display = typeSelect.value === "choices" ? "block" : "none";
    });

    choicesCountInput.addEventListener("input", renderChoiceInputs);
    if (qData.type === "choices") renderChoiceInputs();
  }
}

// Toggles the visibility of registration start/end options based on the selected registration type (Standard vs Custom/None).

function toggleRegistrationDates() {
  const regTypeSelect = document.getElementById("opt_reg_type");
  const standardOpts = document.getElementById("standard_reg_opts");

  if (!regTypeSelect || !standardOpts) return;

  const selectedValue = regTypeSelect.value.toLowerCase().trim();

  // Hide if selected option is 'custom' or 'none', show only when 'standard'
  if (selectedValue === "custom" || selectedValue === "none") {
    standardOpts.style.display = "none";
  } else {
    standardOpts.style.display = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  attachRteToolbarHandlers();
  restoreOptions();

  // Event listener for toggling registration date options dynamically
  const regTypeSelect = document.getElementById("opt_reg_type");
  if (regTypeSelect) {
    regTypeSelect.addEventListener("change", toggleRegistrationDates);
  }

  // Event listeners for custom registration questions
  const enableCustomQs = document.getElementById("opt_enable_custom_questions");
  const countInput = document.getElementById("opt_custom_questions_count");

  if (enableCustomQs) {
    enableCustomQs.addEventListener("change", (e) => {
      const container = document.getElementById("custom_questions_settings");
      if (container) {
        container.style.display = e.target.checked ? "block" : "none";
      }
    });
  }

  if (countInput) {
    countInput.addEventListener("input", (e) => {
      const count = parseInt(e.target.value) || 0;
      renderCustomQuestionSettings(count);
    });
  }
});

document.getElementById("save_btn").addEventListener("click", saveOptions);

// Dynamic dropdown listener for Country selection
document.getElementById("opt_country").addEventListener("change", function () {
  populateStates(this.value);
});

/**
 * Populates the State/Province dropdown based on the chosen country ID.
 * @param {string} countryId - Selected country ID.
 * @param {string} selectedStateId - Optional state ID to pre-select.
 */
function populateStates(countryId, selectedStateId = "") {
  const stateSelect = document.getElementById("opt_state");
  stateSelect.innerHTML = '<option value="">Select State/Province...</option>';

  if (countryStatesMap[countryId]) {
    countryStatesMap[countryId].forEach((st) => {
      const opt = document.createElement("option");
      opt.value = st.id;
      opt.textContent = st.name;
      if (st.id === String(selectedStateId)) {
        opt.selected = true;
      }
      stateSelect.appendChild(opt);
    });
  }
}

function saveOptions() {
  // Extract custom questions data
  const questionCards = document.querySelectorAll(".custom-question-card");
  const customQuestions = Array.from(questionCards).map((card) => {
    const typeSelect = card.querySelector(".cq-type");
    const type = typeSelect ? typeSelect.value : "text";
    
    let choices = [];
    if (type === "choices") {
      const choiceInputs = card.querySelectorAll(".cq-choice-text");
      choices = Array.from(choiceInputs).map((input) => input.value);
    }

    const titleInput = card.querySelector(".cq-title");
    const requiredCheckbox = card.querySelector(".cq-required");

    return {
      question: titleInput ? titleInput.value : "",
      type: type,
      required: requiredCheckbox ? requiredCheckbox.checked : false,
      choices: choices
    };
  });

  const enableCustomQsElem = document.getElementById("opt_enable_custom_questions");
  const countInputElem = document.getElementById("opt_custom_questions_count");

  const settings = {
    hostOu: document.getElementById("opt_host_ou").value,
    hostEmail: document.getElementById("opt_host_email").value,
    notifyImmediately: document.getElementById("opt_notify_immediately").checked,
    cosponsor: document.getElementById("opt_cosponsor").value,
    // Save innerHTML from rich text content editable element
    extraContact: document.getElementById("opt_extra_contact").innerHTML,
    timezone: document.getElementById("opt_timezone").value,
    defaultTags: document.getElementById("opt_default_tags").value,
    address: document.getElementById("opt_address").value,
    city: document.getElementById("opt_city").value,
    postal: document.getElementById("opt_postal").value,
    country: document.getElementById("opt_country").value,
    state: document.getElementById("opt_state").value,
    useSurveyUrl: document.getElementById("opt_use_survey_url").checked,
    regType: document.getElementById("opt_reg_type").value,
    regStartMode: document.getElementById("opt_reg_start_mode").value,
    regEndMode: document.getElementById("opt_reg_end_mode").value,
    maxReg: document.getElementById("opt_max_reg").value,
    enableCustomQuestions: enableCustomQsElem ? enableCustomQsElem.checked : false,
    customQuestionsCount: countInputElem ? parseInt(countInputElem.value) || 0 : 0,
    customQuestions: customQuestions
  };

  chrome.storage.sync.set(settings, () => {
    const status = document.getElementById("status");
    status.style.display = "block";
    setTimeout(() => (status.style.display = "none"), 2000);
  });
}

function restoreOptions() {
  chrome.storage.sync.get(
    {
      hostOu: "STBXXXXXXXX - hostOu",
      hostEmail: "email@emailprovider.com",
      notifyImmediately: false,
      cosponsor: "",
      extraContact: "",
      timezone: "Europe/Madrid",
      defaultTags: "#SB #UNI",
      address: "address",
      city: "Barcelona",
      postal: "00000",
      country: "194",
      state: "1663",
      useSurveyUrl: false,
      regType: "Custom",
      regStartMode: "autofill_time",
      regEndMode: "event_start",
      maxReg: "",
      enableCustomQuestions: false,
      customQuestionsCount: 0,
      customQuestions: []
    },
    (items) => {
      document.getElementById("opt_host_ou").value = items.hostOu;
      document.getElementById("opt_host_email").value = items.hostEmail;
      document.getElementById("opt_notify_immediately").checked = items.notifyImmediately;
      document.getElementById("opt_cosponsor").value = items.cosponsor;
      
      // Set innerHTML for rich text content editable element
      document.getElementById("opt_extra_contact").innerHTML = items.extraContact;

      document.getElementById("opt_timezone").value = items.timezone;
      document.getElementById("opt_default_tags").value = items.defaultTags;
      document.getElementById("opt_address").value = items.address;
      document.getElementById("opt_city").value = items.city;
      document.getElementById("opt_postal").value = items.postal;
      
      // Populate country select and update state options dynamically before setting value
      document.getElementById("opt_country").value = items.country;
      populateStates(items.country, items.state);
      
      document.getElementById("opt_use_survey_url").checked = items.useSurveyUrl;

      document.getElementById("opt_reg_type").value = items.regType;
      document.getElementById("opt_reg_start_mode").value = items.regStartMode;
      document.getElementById("opt_reg_end_mode").value = items.regEndMode;
      document.getElementById("opt_max_reg").value = items.maxReg;

      // Restore custom questions settings
      const enableCustomQsElem = document.getElementById("opt_enable_custom_questions");
      const customSettingsDiv = document.getElementById("custom_questions_settings");
      if (enableCustomQsElem) {
        enableCustomQsElem.checked = items.enableCustomQuestions;
      }
      if (customSettingsDiv) {
        customSettingsDiv.style.display = items.enableCustomQuestions ? "block" : "none";
      }

      const countInputElem = document.getElementById("opt_custom_questions_count");
      if (countInputElem) {
        countInputElem.value = items.customQuestionsCount;
      }

      renderCustomQuestionSettings(items.customQuestionsCount, items.customQuestions);

      // Update initial visibility state after saved options are loaded
      toggleRegistrationDates();
    }
  );
}