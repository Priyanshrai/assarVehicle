import './sd.css';
import Sidebar from './Sidebar';
import { __apiURLVehicle, __apiURLUser } from '../../apiURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, React } from 'react';



function SdBookingmgmt() {
  const Category = [{ id: "1", Category: "Car" }, { id: "2", Category: "Two-Wheeler" }];
  const Segment = [{ id: "1", sId: "1", segment: "Hatchback" }, { id: "2", sId: "1", segment: "Premium Hatchback" }, { id: "3", sId: "1", segment: "Sedan" }, { id: "4", sId: "1", segment: "Compact-SUV" }, { id: "5", sId: "1", segment: "SUV" }, { id: "6", sId: "1", segment: "MUV" }, { id: "7", sId: "2", segment: "Crusier" }, { id: "8", sId: "2", segment: "Commuter" }, { id: "9", sId: "2", segment: "Sports" }, { id: "10", sId: "2", segment: "Super" }, { id: "11", sId: "2", segment: "Adventure" }, { id: "12", sId: "2", segment: "Scooter" }];
  const Seat = [{ id: "1", SId: "1", seat: "5" }, { id: "2", SId: "1", seat: "7" }, { id: "3", SId: "1", seat: "6" }, { id: "4", SId: "1", seat: "9" }, { id: "5", SId: "1", seat: "8" }, { id: "6", SId: "1", seat: "12" }, { id: "7", SId: "2", seat: "2" }, { id: "8", SId: "2", seat: "1" }, { id: "9", SId: "1", seat: "2" }];
  const Fuel = [{ id: "1", fuel: "Petrol" }, { id: "2", fuel: "Diesel" }, { id: "3", fuel: "CNG" }, { id: "4", fuel: "Electric" }, { id: "5", fuel: "Hydrogen" }];
  const Manufacturer = [{ id: "1", cId: "1", brand: "TATA" }, { id: "2", cId: "1", brand: "MARUTI SUZUKI" }, { id: "3", cId: "1", brand: "HYUNDAI" }, { id: "4", cId: "1", brand: "HONDA" }, { id: "5", cId: "1", brand: "MG" }, { id: "6", cId: "1", brand: "MAHINDRA" }, { id: "7", cId: "1", brand: "KIA" }, { id: "8", cId: "1", brand: "ASTON MARTIN" }, { id: "9", cId: "1", brand: "VOLKSWAGON" }, { id: "10", cId: "1", brand: "AUDI" }, { id: "11", cId: "1", brand: "BMW" }, { id: "12", cId: "1", brand: "BUGATTI" }, { id: "13", cId: "1", brand: "BYD" }, { id: "14", cId: "1", brand: "DATSUN" }, { id: "15", cId: "1", brand: "RENAULT" },
  { id: "16", cId: "1", brand: "FORD" }, { id: "17", cId: "1", brand: "ISUZU" }, { id: "18", cId: "1", brand: "JEEP" }, { id: "19", cId: "1", brand: "JAGUAR" }, { id: "20", cId: "1", brand: "ROLLS ROYLCE" }, { id: "21", cId: "1", brand: "LAMBORGINI" }, { id: "22", cId: "1", brand: "LEXUS" }, { id: "23", cId: "1", brand: "VOLVO" }, { id: "24", cId: "1", brand: "LAND ROVER" }, { id: "25", cId: "1", brand: "MASERTI" }, { id: "26", cId: "1", brand: "MERCEDEZ-BENZ" }, { id: "27", cId: "1", brand: "MINI" }, { id: "28", cId: "1", brand: "NISSAN" }, { id: "29", cId: "1", brand: "SKODA" }, { id: "30", cId: "1", brand: "PORCSHE" },
  { id: "31", cId: "1", brand: "TOYOTA" }, { id: "32", cId: "1", brand: "TESLA" }, { id: "33", cId: "1", brand: "CITROEN" }, { id: "34", cId: "1", brand: "FORCE" }, { id: "35", cId: "1", brand: "BENTALY" }, { id: "36", cId: "2", brand: "HERO" }, { id: "37", cId: "2", brand: "TVS" }, { id: "38", cId: "2", brand: "BMW" }, { id: "39", cId: "2", brand: "KTM" }, { id: "40", cId: "2", brand: "BAJAJ" }, { id: "41", cId: "2", brand: "HARLEY DAVIDSON" }, { id: "42", cId: "2", brand: "HONDA" }, { id: "43", cId: "2", brand: "ROYAL ENFIELD" }, { id: "44", cId: "2", brand: "JAWA" }, { id: "45", cId: "2", brand: "YAMAHA" }, { id: "46", cId: "2", brand: "APRILIA" }, { id: "47", cId: "2", brand: "BENELLI" }, { id: "48", cId: "2", brand: "ATHER" }, { id: "49", cId: "2", brand: "OLA" }, { id: "50", cId: "2", brand: "DUCATI" },
  { id: "51", cId: "2", brand: "VESPA" }, { id: "52", cId: "2", brand: "SUZUKI" }, { id: "53", cId: "2", brand: "TRIUMPH" }, { id: "54", cId: "2", brand: "INDIAN" }, { id: "55", cId: "2", brand: "KAWASAKI" }];
  const Model = [
    { id: "1", Bid: "1", Model: "Tiago" }, { id: "2", Bid: "1", Model: "Tiagor" }, { id: "3", Bid: "1", Model: "Punch" }, { id: "4", Bid: "1", Model: "Harrier" }, { id: "5", Bid: "1", Model: "Safari" }, { id: "6", Bid: "1", Model: "Altroz" }, { id: "7", Bid: "1", Model: "Nexon" }, { id: "8", Bid: "1", Model: "Hexa" },
    { id: "9", Bid: "2", Model: "Alto-800" }, { id: "10", Bid: "2", Model: "Alto-K10" }, { id: "11", Bid: "2", Model: "S-Presso" }, { id: "12", Bid: "2", Model: "Eeco" }, { id: "13", Bid: "2", Model: "Celerio" }, { id: "14", Bid: "2", Model: "Wagon-R" }, { id: "15", Bid: "2", Model: "Ignis" }, { id: "16", Bid: "2", Model: "Swift" }, { id: "17", Bid: "2", Model: "Dzire" }, { id: "18", Bid: "2", Model: "Baleno" }, { id: "19", Bid: "2", Model: "Brezza" }, { id: "20", Bid: "2", Model: "Ertiga" }, { id: "21", Bid: "2", Model: "Ciaz" }, { id: "22", Bid: "2", Model: "Grand Vitara" }, { id: "23", Bid: "2", Model: "S-Cross" }, { id: "24", Bid: "2", Model: "XL-6" }, { id: "25", Bid: "2", Model: "Jimmy" },
    { id: "26", Bid: "3", Model: "Santro" }, { id: "27", Bid: "3", Model: "Grand-I10" }, { id: "28", Bid: "3", Model: "I-20" }, { id: "29", Bid: "3", Model: "I-20 Active" }, { id: "30", Bid: "3", Model: "Verna" }, { id: "31", Bid: "3", Model: "Aura" }, { id: "32", Bid: "3", Model: "Venue" }, { id: "33", Bid: "3", Model: "Creata" }, { id: "34", Bid: "3", Model: "Elentra" }, { id: "35", Bid: "3", Model: "Alcazer" }, { id: "36", Bid: "3", Model: "Tucson" }, { id: "37", Bid: "3", Model: "Kona" }, { id: "38", Bid: "3", Model: "Ioniq-5" },
    { id: "39", Bid: "4", Model: "Amaze" }, { id: "40", Bid: "4", Model: "Jazz" }, { id: "41", Bid: "4", Model: "WRV" }, { id: "42", Bid: "4", Model: "City" }, { id: "43", Bid: "4", Model: "Civic" },
    { id: "44", Bid: "5", Model: "Astor" }, { id: "45", Bid: "5", Model: "Hector" }, { id: "46", Bid: "5", Model: "Hector-Plus" }, { id: "47", Bid: "5", Model: "Gloster" }, { id: "48", Bid: "5", Model: "ZS" },
    { id: "49", Bid: "6", Model: "KUV-100" }, { id: "50", Bid: "6", Model: "XUV-300" }, { id: "51", Bid: "6", Model: "XUV-500" }, { id: "52", Bid: "6", Model: "XUV-700" }, { id: "53", Bid: "6", Model: "Bolero" }, { id: "54", Bid: "6", Model: "Bolero-Neo" }, { id: "55", Bid: "6", Model: "Scorpio-Classic" }, { id: "56", Bid: "6", Model: "Scorpio-N" }, { id: "57", Bid: "6", Model: "Thar" }, { id: "58", Bid: "6", Model: "Marazzo" }, { id: "59", Bid: "6", Model: "XUV-400" },
    { id: "60", Bid: "7", Model: "Sonet" }, { id: "61", Bid: "7", Model: "Carnival" }, { id: "62", Bid: "7", Model: "Seltos" }, { id: "63", Bid: "7", Model: "EV-6" }, { id: "64", Bid: "7", Model: "Carens" },
    { id: "65", Bid: "8", Model: "Vantage" }, { id: "66", Bid: "8", Model: "DB-11" }, { id: "67", Bid: "8", Model: "DB-X" },
    { id: "68", Bid: "9", Model: "Polo" }, { id: "69", Bid: "9", Model: "Vento" }, { id: "70", Bid: "9", Model: "Taigun" }, { id: "71", Bid: "9", Model: "Tiguan" }, { id: "72", Bid: "9", Model: "Virtus" }, { id: "73", Bid: "9", Model: "Jetta" },
    { id: "74", Bid: "10", Model: "Q3" }, { id: "75", Bid: "10", Model: "Q7" }, { id: "76", Bid: "10", Model: "A4" }, { id: "77", Bid: "10", Model: "A6" }, { id: "78", Bid: "10", Model: "Q5" }, { id: "79", Bid: "10", Model: "S5" }, { id: "80", Bid: "10", Model: "E-Tron" }, { id: "81", Bid: "10", Model: "Q8" }, { id: "82", Bid: "10", Model: "RS-5" }, { id: "83", Bid: "10", Model: "A8" }, { id: "84", Bid: "10", Model: "RS-Q8" }, { id: "85", Bid: "10", Model: "A3" },
    { id: "86", Bid: "11", Model: "2-Series" }, { id: "87", Bid: "11", Model: "X-1" }, { id: "88", Bid: "11", Model: "3-Series" }, { id: "89", Bid: "11", Model: "3-Series Limousine" }, { id: "90", Bid: "11", Model: "X-3" }, { id: "91", Bid: "11", Model: "5-Series" }, { id: "92", Bid: "11", Model: "M340-I" }, { id: "93", Bid: "11", Model: "6-Series GT" }, { id: "94", Bid: "11", Model: "I4" }, { id: "95", Bid: "11", Model: "X4" }, { id: "96", Bid: "11", Model: "Z4" }, { id: "97", Bid: "11", Model: "X5" }, { id: "98", Bid: "11", Model: "X6" }, { id: "99", Bid: "11", Model: "IX" }, { id: "101", Bid: "11", Model: "M4" }, { id: "102", Bid: "11", Model: "7-Series" }, { id: "103", Bid: "11", Model: "M5" }, { id: "104", Bid: "11", Model: "I7" }, { id: "105", Bid: "11", Model: "X5-M" }, { id: "106", Bid: "11", Model: "M8" }, { id: "107", Bid: "11", Model: "XM" },
    { id: "108", Bid: "12", Model: "Veron" },
    { id: "109", Bid: "13", Model: "E-6" }, { id: "110", Bid: "13", Model: "Atto-3" },
    { id: "111", Bid: "14", Model: "RediGo" },
    { id: "112", Bid: "15", Model: "Triber" }, { id: "113", Bid: "15", Model: "Kwid" }, { id: "114", Bid: "15", Model: "Kiger" },
    { id: "115", Bid: "16", Model: "Ecosport" }, { id: "116", Bid: "16", Model: "Endevour" }, { id: "100", Bid: "16", Model: "Mustang" },
    { id: "117", Bid: "17", Model: "D-Max" }, { id: "118", Bid: "17", Model: "MUX" },
    { id: "119", Bid: "18", Model: "Compass" }, { id: "120", Bid: "18", Model: "Cherokee" }, { id: "121", Bid: "18", Model: "Meridian" }, { id: "122", Bid: "18", Model: "Wrangler" },
    { id: "123", Bid: "19", Model: "XF" }, { id: "124", Bid: "19", Model: "F-Pace" }, { id: "125", Bid: "19", Model: "F-Type" }, { id: "126", Bid: "19", Model: "I-Pace" },
    { id: "128", Bid: "20", Model: "Phantom-8" }, { id: "129", Bid: "20", Model: "Wraith" }, { id: "130", Bid: "20", Model: "Cullinan" }, { id: "131", Bid: "20", Model: "Dawn" },
    { id: "132", Bid: "21", Model: "Huracan-Evo" }, { id: "133", Bid: "21", Model: "Urus-Performante" },
    { id: "134", Bid: "22", Model: "LX" }, { id: "135", Bid: "22", Model: "ES" }, { id: "136", Bid: "22", Model: "NX" }, { id: "137", Bid: "22", Model: "LC" }, { id: "138", Bid: "22", Model: "LS" }, { id: "139", Bid: "22", Model: "RS" },
    { id: "140", Bid: "23", Model: "XC-90" }, { id: "141", Bid: "23", Model: "S-90" }, { id: "142", Bid: "23", Model: "XC-60" }, { id: "143", Bid: "23", Model: "XC-40" }, { id: "144", Bid: "23", Model: "XC-40 electric" },
    { id: "145", Bid: "24", Model: "Range Rover Veler" }, { id: "146", Bid: "24", Model: "Discovery" }, { id: "147", Bid: "24", Model: "Discovery Sport" }, { id: "148", Bid: "24", Model: "Range Rover" }, { id: "149", Bid: "24", Model: "Range Rover Sport" }, { id: "150", Bid: "24", Model: "Defender" }, { id: "151", Bid: "24", Model: "Range Rover Evoque" },
    { id: "152", Bid: "25", Model: "MC-20" }, { id: "153", Bid: "25", Model: "Levantte" }, { id: "154", Bid: "25", Model: "Ghibli" }, { id: "155", Bid: "25", Model: "QuattroPorte" },
    { id: "156", Bid: "26", Model: "G-Class" }, { id: "157", Bid: "26", Model: "C-Class" }, { id: "158", Bid: "26", Model: "GLA" }, { id: "159", Bid: "26", Model: "A-Class" }, { id: "160", Bid: "26", Model: "S-Class" }, { id: "161", Bid: "26", Model: "Maybach S-Class" }, { id: "162", Bid: "26", Model: "E-Class" }, { id: "163", Bid: "26", Model: "GLE" }, { id: "164", Bid: "26", Model: "GLC" }, { id: "165", Bid: "26", Model: "GLS" }, { id: "166", Bid: "26", Model: "GLB" }, { id: "167", Bid: "26", Model: "GLC AMG" }, { id: "168", Bid: "26", Model: "A35-AMG" }, { id: "169", Bid: "26", Model: "GLA-AMG" }, { id: "170", Bid: "26", Model: "EQA" }, { id: "171", Bid: "26", Model: "A5-AMG" }, { id: "172", Bid: "26", Model: "A53-AMG" }, { id: "173", Bid: "26", Model: "GT-AMG" }, { id: "174", Bid: "26", Model: "EBQ" }, { id: "175", Bid: "26", Model: "E63-AMG" }, { id: "176", Bid: "26", Model: "A45-AMG" }, { id: "177", Bid: "26", Model: "E53-AMG" }, { id: "178", Bid: "26", Model: "EQC" }, { id: "179", Bid: "26", Model: "EQS" },
    { id: "180", Bid: "27", Model: "Cooper" },
    { id: "181", Bid: "28", Model: "Kick" }, { id: "182", Bid: "28", Model: "Magnite" },
    { id: "183", Bid: "29", Model: "Kushaq" }, { id: "183", Bid: "29", Model: "Slavia" }, { id: "184", Bid: "29", Model: "Superb" }, { id: "185", Bid: "29", Model: "Octavia" }, { id: "186", Bid: "29", Model: "Kodiaq" },
    { id: "187", Bid: "30", Model: "Cayene" }, { id: "188", Bid: "30", Model: "911" }, { id: "189", Bid: "30", Model: "Macan" }, { id: "190", Bid: "30", Model: "Panemara" }, { id: "191", Bid: "30", Model: "718" }, { id: "192", Bid: "30", Model: "Tycan" }, { id: "193", Bid: "30", Model: "Cayene Coupe" },
    { id: "194", Bid: "31", Model: "Innova" }, { id: "195", Bid: "31", Model: "Fortuner" }, { id: "210", Bid: "31", Model: "Land Crusier" }, { id: "196", Bid: "31", Model: "Urban Crusier" }, { id: "197", Bid: "31", Model: "Glanza" }, { id: "198", Bid: "31", Model: "Cammry" }, { id: "199", Bid: "31", Model: "Vellfire" }, { id: "200", Bid: "31", Model: "Hilux" },
    { id: "201", Bid: "32", Model: "S" },
    { id: "202", Bid: "33", Model: "C3" },
    { id: "203", Bid: "34", Model: "Gurkha" }, { id: "204", Bid: "34", Model: "Tempo Trax" }, { id: "205", Bid: "34", Model: "Tempo Traveller -14" }, { id: "206", Bid: "34", Model: "Tempo Traveller -16" }, { id: "207", Bid: "34", Model: "Tempo Traveller -24" }, { id: "208", Bid: "34", Model: "Tempo Traveller -30" },
    { id: "209", Bid: "35", Model: "Bentayega" },
    { id: "212", Bid: "36", Model: "HF-Deluxe" }, { id: "213", Bid: "36", Model: "Xtreme 160R" }, { id: "214", Bid: "36", Model: "Xpulse 200" }, { id: "215", Bid: "36", Model: "Pleasure" }, { id: "216", Bid: "36", Model: "Maestro" }, { id: "217", Bid: "36", Model: "Passion Pro" }, { id: "218", Bid: "36", Model: "Glamour" }, { id: "219", Bid: "36", Model: "Splender" },
    { id: "220", Bid: "37", Model: "Apatche RTR 160" }, { id: "221", Bid: "37", Model: "Raider" }, { id: "222", Bid: "37", Model: "Apache RR 310" }, { id: "223", Bid: "37", Model: "Apache RR 200" }, { id: "224", Bid: "37", Model: "I Cube" }, { id: "225", Bid: "37", Model: "Jupiter" }, { id: "226", Bid: "37", Model: "Scooty Pep" }, { id: "227", Bid: "37", Model: "Apache 180 RTR" },
    { id: "228", Bid: "38", Model: "310 R" }, { id: "229", Bid: "38", Model: "310 RR" }, { id: "230", Bid: "38", Model: "G 310 GS" }, { id: "231", Bid: "38", Model: "M1000 RR" }, { id: "231", Bid: "38", Model: "R 1250 GS" }, { id: "232", Bid: "38", Model: "R18" }, { id: "233", Bid: "38", Model: "K 1600" }, { id: "234", Bid: "38", Model: "R1250 RT" }, { id: "235", Bid: "38", Model: "S 1000 RR" },
    { id: "236", Bid: "39", Model: "Duke 200" }, { id: "237", Bid: "39", Model: "Duke 390" }, { id: "238", Bid: "39", Model: "DUKE 125" }, { id: "239", Bid: "39", Model: "RC 390" }, { id: "240", Bid: "39", Model: "RC 125" },
    { id: "241", Bid: "40", Model: "Pulser 125" }, { id: "242", Bid: "40", Model: "Pulser 160" }, { id: "243", Bid: "40", Model: "Platina" }, { id: "244", Bid: "40", Model: "Dominor" }, { id: "245", Bid: "40", Model: "Avenger" },
    { id: "246", Bid: "41", Model: "Sportster S" }, { id: "247", Bid: "41", Model: "Iron 883" }, { id: "248", Bid: "41", Model: "Forty-Eight" }, { id: "249", Bid: "41", Model: "Nightster" }, { id: "250", Bid: "41", Model: "Fat-Bob" }, { id: "251", Bid: "41", Model: "Road Glide" }, { id: "252", Bid: "41", Model: "Roadking" }, { id: "253", Bid: "41", Model: "Street Glide Special" }, { id: "254", Bid: "41", Model: "Heritage Classic" },
    { id: "255", Bid: "42", Model: "Activa" }, { id: "256", Bid: "42", Model: "Shine" }, { id: "257", Bid: "42", Model: "CBR 250" }, { id: "258", Bid: "42", Model: "CBR 150" }, { id: "259", Bid: "42", Model: "CB 350" },
    { id: "260", Bid: "43", Model: "Classic 350" }, { id: "261", Bid: "43", Model: "Thunderbird" }, { id: "262", Bid: "43", Model: "Himalayan" },
    { id: "263", Bid: "44", Model: "Sandard" }, { id: "264", Bid: "44", Model: "Perak" }, { id: "265", Bid: "44", Model: "42 Bobber" }, { id: "266", Bid: "44", Model: "42" },
    { id: "267", Bid: "45", Model: "FZ S" }, { id: "268", Bid: "45", Model: "R15S" }, { id: "269", Bid: "45", Model: "FZX" }, { id: "270", Bid: "45", Model: "R15 V4" },
    { id: "271", Bid: "46", Model: "RS 272" }, { id: "87", Bid: "46", Model: "RS V4 1100" },
    { id: "273", Bid: "47", Model: "Imperiale 400" },
    { id: "274", Bid: "48", Model: "450x" },
    { id: "275", Bid: "49", Model: "S1 Pro" },
    { id: "276", Bid: "50", Model: "Panigale v4" }, { id: "277", Bid: "50", Model: "Super Sport" }, { id: "278", Bid: "50", Model: "Monster" },
    { id: "279", Bid: "51", Model: "ZX 125" }, { id: "280", Bid: "51", Model: "SXL 125" }, { id: "281", Bid: "51", Model: "VXL" },
    { id: "282", Bid: "52", Model: "Hayabusa" }, { id: "283", Bid: "52", Model: "Access" },
    { id: "284", Bid: "53", Model: "Trident 660" }, { id: "285", Bid: "53", Model: "Rocket 3" },
    { id: "286", Bid: "54", Model: "Dark Horse" }, { id: "287", Bid: "54", Model: "Cheif Limited" },
    { id: "288", Bid: "55", Model: "Z900" }, { id: "289", Bid: "55", Model: "H2R" }, { id: "290", Bid: "55", Model: "ZX-10R" }, { id: "291", Bid: "55", Model: "Z650" }];
  const Varient = [{ id: "1", Mid: "1", Varient: "XM" }, { id: "2", Mid: "1", Varient: "XT" }, { id: "3", Mid: "1", Varient: "XZ" }, { id: "4", Mid: "2", Varient: "XM" }, { id: "5", Mid: "2", Varient: "XT" }, { id: "6", Mid: "2", Varient: "XZ" }, { id: "7", Mid: "4", Varient: "XM" }, { id: "8", Mid: "4", Varient: "XT" }, { id: "9", Mid: "4", Varient: "XZ" }, { id: "10", Mid: "5", Varient: "XM" }, { id: "11", Mid: "5", Varient: "XT" }, { id: "12", Mid: "5", Varient: "XZ" }, { id: "13", Mid: "6", Varient: "XM" }, { id: "14", Mid: "6", Varient: "XT" }, { id: "15", Mid: "6", Varient: "XZ" }, { id: "16", Mid: "7", Varient: "XM" }, { id: "17", Mid: "8", Varient: "XT" }, { id: "18", Mid: "8", Varient: "XZ" }, { id: "19", Mid: "3", Varient: "Adventure" }, { id: "20", Mid: "3", Varient: "Camo" }, { id: "21", Mid: "3", Varient: "Creative" },
  { id: "22", Mid: "9", Varient: "LXI" }, { id: "23", Mid: "9", Varient: "VXI" }, { id: "24", Mid: "10", Varient: "LXI" }, { id: "25", Mid: "10", Varient: "VXI" }, { id: "26", Mid: "11", Varient: "LXI" }, { id: "27", Mid: "11", Varient: "VXI" }, { id: "28", Mid: "12", Varient: "STD" }, { id: "29", Mid: "12", Varient: "AC" }, { id: "30", Mid: "13", Varient: "LXI" }, { id: "31", Mid: "13", Varient: "VXI" }, { id: "32", Mid: "14", Varient: "LXI" }, { id: "33", Mid: "14", Varient: "VXI" }, { id: "34", Mid: "15", Varient: "Alpha" }, { id: "35", Mid: "15", Varient: "Delta" }, { id: "36", Mid: "15", Varient: "Zeta" }
    , { id: "36", Mid: "16", Varient: "VXI" }, { id: "37", Mid: "16", Varient: "ZXI" }, { id: "38", Mid: "16", Varient: "LXI" }, { id: "39", Mid: "17", Varient: "VXI" }, { id: "40", Mid: "17", Varient: "ZXI" }, { id: "41", Mid: "17", Varient: "LXI" }, { id: "42", Mid: "18", Varient: "Alpha" }, { id: "43", Mid: "18", Varient: "Delta" }, { id: "44", Mid: "18", Varient: "Zeta" }, { id: "45", Mid: "19", Varient: "VXI" }, { id: "46", Mid: "19", Varient: "ZXI" }, { id: "47", Mid: "19", Varient: "LXI" }, { id: "48", Mid: "20", Varient: "VXI" }, { id: "49", Mid: "20", Varient: "ZXI" }, { id: "50", Mid: "20", Varient: "LXI" }, { id: "51", Mid: "21", Varient: "Alpha" }, { id: "52", Mid: "21", Varient: "Delta" }, { id: "53", Mid: "21", Varient: "Zeta" }, { id: "54", Mid: "22", Varient: "Alpha" }, { id: "55", Mid: "22", Varient: "Delta" }, { id: "56", Mid: "22", Varient: "Zeta" }, { id: "57", Mid: "23", Varient: "Alpha" }, { id: "58", Mid: "23", Varient: "Delta" }, { id: "59", Mid: "23", Varient: "Zeta" }, { id: "60", Mid: "24", Varient: "Alpha" }, { id: "61", Mid: "24", Varient: "Delta" }, { id: "62", Mid: "24", Varient: "Zeta" }, { id: "63", Mid: "25", Varient: "Alpha" }, { id: "64", Mid: "25", Varient: "Delta" }, { id: "65", Mid: "25", Varient: "Zeta" },
  { id: "66", Mid: "26", Varient: "Magna" }, { id: "67", Mid: "26", Varient: "Sportz" }, { id: "68", Mid: "26", Varient: "Asta" }, { id: "69", Mid: "27", Varient: "Magna" }, { id: "70", Mid: "27", Varient: "Sportz" }, { id: "71", Mid: "27", Varient: "Asta" }, { id: "72", Mid: "28", Varient: "Magna" }, { id: "73", Mid: "28", Varient: "Sportz" }, { id: "74", Mid: "28", Varient: "Asta" }, { id: "75", Mid: "29", Varient: "S" }, { id: "76", Mid: "29", Varient: "SX" }, { id: "77", Mid: "29", Varient: "SX(O)" }, { id: "78", Mid: "30", Varient: "S" }, { id: "79", Mid: "30", Varient: "SX" }, { id: "80", Mid: "30", Varient: "SX(O)" }, { id: "81", Mid: "31", Varient: "S" }, { id: "82", Mid: "31", Varient: "SX" }, { id: "83", Mid: "31", Varient: "SX(O)" }, { id: "84", Mid: "32", Varient: "S" }, { id: "85", Mid: "32", Varient: "SX" }, { id: "86", Mid: "32", Varient: "SX(O)" }, { id: "87", Mid: "33", Varient: "S" }, { id: "88", Mid: "33", Varient: "SX" }, { id: "89", Mid: "33", Varient: "SX(O)" }, { id: "90", Mid: "34", Varient: "Platinum" }, { id: "91", Mid: "34", Varient: "Signature" }, { id: "92", Mid: "34", Varient: "Signature(O)" }, { id: "93", Mid: "35", Varient: "Platinum" }, { id: "94", Mid: "35", Varient: "Signature" }, { id: "95", Mid: "35", Varient: "Signature(O)" }, { id: "96", Mid: "36", Varient: "Platinum" }, { id: "97", Mid: "36", Varient: "Signature" }, { id: "98", Mid: "36", Varient: "Signature(O)" }, { id: "99", Mid: "37", Varient: "Premium" }, { id: "100", Mid: "38", Varient: "RWD" },
  { id: "101", Mid: "39", Varient: "S" }, { id: "102", Mid: "39", Varient: "VX" }, { id: "103", Mid: "40", Varient: "VX" }, { id: "104", Mid: "40", Varient: "ZX" }, { id: "105", Mid: "41", Varient: "VX" }, { id: "106", Mid: "41", Varient: "VX" }, { id: "107", Mid: "42", Varient: "VX" }, { id: "108", Mid: "42", Varient: "VX" }, { id: "109", Mid: "43", Varient: "VX" }, { id: "110", Mid: "43", Varient: "VX" },
  { id: "111", Mid: "44", Varient: "Super" }, { id: "112", Mid: "44", Varient: "Smart" }, { id: "113", Mid: "44", Varient: "Sharp" }, { id: "114", Mid: "45", Varient: "Super" }, { id: "115", Mid: "45", Varient: "Smart" }, { id: "116", Mid: "45", Varient: "Sharp" }, { id: "117", Mid: "46", Varient: "Super" }, { id: "118", Mid: "46", Varient: "Smart" }, { id: "119", Mid: "46", Varient: "Sharp" }, { id: "111", Mid: "47", Varient: "Super" }, { id: "112", Mid: "47", Varient: "Smart" }, { id: "113", Mid: "47", Varient: "Sharp" }, { id: "114", Mid: "48", Varient: "Super" }, { id: "115", Mid: "48", Varient: "Smart" }, { id: "116", Mid: "48", Varient: "Sharp" },
  { id: "117", Mid: "49", Varient: "K4" }, { id: "118", Mid: "49", Varient: "K6" }, { id: "119", Mid: "49", Varient: "K8" }, { id: "120", Mid: "50", Varient: "W4" }, { id: "121", Mid: "50", Varient: "W6" }, { id: "122", Mid: "50", Varient: "W8" }, { id: "123", Mid: "51", Varient: "W7" }, { id: "124", Mid: "51", Varient: "W9" }, { id: "125", Mid: "51", Varient: "W11" }, { id: "126", Mid: "51", Varient: "W3" }, { id: "127", Mid: "52", Varient: "MX" }, { id: "128", Mid: "52", Varient: "AX" }, { id: "129", Mid: "52", Varient: "AX-L" }, { id: "130", Mid: "53", Varient: "B4" }, { id: "131", Mid: "53", Varient: "B6" }, { id: "132", Mid: "53", Varient: "B6-(O)" }, { id: "133", Mid: "54", Varient: "N-4" }, { id: "134", Mid: "54", Varient: "N-8" }, { id: "135", Mid: "54", Varient: "N-10" }, { id: "136", Mid: "55", Varient: "S3 Classis" }, { id: "137", Mid: "55", Varient: "S11 Classic" }, { id: "138", Mid: "56", Varient: "Z8" }, { id: "139", Mid: "56", Varient: "Z8L" }, { id: "140", Mid: "56", Varient: "Z4" }, { id: "141", Mid: "56", Varient: "Z6" }, { id: "142", Mid: "57", Varient: "AX" }, { id: "143", Mid: "57", Varient: "LX" }, { id: "144", Mid: "58", Varient: "M2" }, { id: "145", Mid: "58", Varient: "M4" }, { id: "146", Mid: "58", Varient: "M6" }, { id: "147", Mid: "59", Varient: "EC" }, { id: "148", Mid: "59", Varient: "EL" },
  { id: "149", Mid: "60", Varient: "HTK" }, { id: "150", Mid: "60", Varient: "HTX" }, { id: "151", Mid: "60", Varient: "GTX" }, { id: "152", Mid: "60", Varient: "X" }, { id: "153", Mid: "61", Varient: "Prestige" }, { id: "154", Mid: "61", Varient: "Limousine" }, { id: "155", Mid: "61", Varient: "Limousine Plus" }, { id: "156", Mid: "62", Varient: "HTK" }, { id: "157", Mid: "62", Varient: "HTX" }, { id: "158", Mid: "62", Varient: "GTX" }, { id: "159", Mid: "62", Varient: "X" }, { id: "160", Mid: "64", Varient: "Premium" }, { id: "161", Mid: "64", Varient: "Prestige" }, { id: "162", Mid: "64", Varient: "Luxury" }, { id: "163", Mid: "63", Varient: "GT-Line" },
  { id: "164", Mid: "65", Varient: "Coupe" }, { id: "165", Mid: "66", Varient: "Evolution" }, { id: "166", Mid: "67", Varient: "Twin Turbo" },
  { id: "167", Mid: "68", Varient: "Comfortline" }, { id: "168", Mid: "68", Varient: "Highline" }, { id: "169", Mid: "69", Varient: "Comfortline" }, { id: "170", Mid: "70", Varient: "Highline" }, { id: "171", Mid: "72", Varient: "Comfortline" }, { id: "172", Mid: "72", Varient: "Highline" }, { id: "173", Mid: "73", Varient: "Comfortline" }, { id: "174", Mid: "73", Varient: "Highline" }, { id: "175", Mid: "71", Varient: "Exclusive" }, { id: "176", Mid: "71", Varient: "Elegance" },
  { id: "177", Mid: "74", Varient: "Premium" }, { id: "178", Mid: "74", Varient: "Technology Plus" }, { id: "179", Mid: "75", Varient: "Premium" }, { id: "180", Mid: "75", Varient: "Technology Plus" }, { id: "181", Mid: "76", Varient: "Premium" }, { id: "182", Mid: "76", Varient: "Technology Plus" }, { id: "183", Mid: "77", Varient: "Premium" }, { id: "184", Mid: "77", Varient: "Technology Plus" }, { id: "185", Mid: "78", Varient: "Premium" }, { id: "186", Mid: "78", Varient: "Technology Plus" }, { id: "187", Mid: "79", Varient: "Sportback" }, { id: "188", Mid: "79", Varient: "Quattro" }, { id: "189", Mid: "80", Varient: "RS" }, { id: "190", Mid: "80", Varient: "S" }, { id: "191", Mid: "81", Varient: "Celebration" }, { id: "192", Mid: "83", Varient: "Celebration" }, { id: "193", Mid: "82", Varient: "SportSBack" }, { id: "194", Mid: "84", Varient: "4L-TFSI" }, { id: "195", Mid: "85", Varient: "SportSBack" },
  { id: "196", Mid: "86", Varient: "220d" }, { id: "197", Mid: "86", Varient: "220i" }, { id: "198", Mid: "87", Varient: "sDrive18i" }, { id: "199", Mid: "87", Varient: "sDrive18d" }, { id: "200", Mid: "88", Varient: "330i" }, { id: "201", Mid: "88", Varient: "320d" }, { id: "202", Mid: "89", Varient: "330 Li" }, { id: "203", Mid: "89", Varient: "320d Li" }, { id: "204", Mid: "90", Varient: "xDrive30i SportX Plus" }, { id: "205", Mid: "90", Varient: "xDrive20d Luxuary Edition" }, { id: "206", Mid: "91", Varient: "530i M Sport" }, { id: "207", Mid: "91", Varient: "520d M Sport" }, { id: "208", Mid: "91", Varient: "530d M Sport" }, { id: "209", Mid: "91", Varient: "520d M Sport Luxuary Edition" }, { id: "210", Mid: "92", Varient: "Xdrive" }, { id: "211", Mid: "93", Varient: "630i M Sport" }, { id: "212", Mid: "93", Varient: "620d M Sport" }, { id: "212", Mid: "93", Varient: "620d M Sport Luxury Line" }, { id: "213", Mid: "94", Varient: "eDrive40" }, { id: "214", Mid: "95", Varient: "xDrive30i M Sport X Silver Shadow Edition" }, { id: "215", Mid: "95", Varient: "xDrive30d M Sport X Silver Shadow Edition" }, { id: "216", Mid: "96", Varient: "sDrive20 i" }, { id: "217", Mid: "96", Varient: "M 40i" }, { id: "218", Mid: "97", Varient: "xDrive40i SportX Plus" }, { id: "219", Mid: "97", Varient: "xDrive30d X Line" }, { id: "220", Mid: "98", Varient: "xDrive40i xLine" },
  { id: "221", Mid: "99", Varient: "xDrive40i xLine" }, { id: "222", Mid: "99", Varient: "xDrive40i M Sport" }, { id: "223", Mid: "101", Varient: "M xDrive Coupe" }, { id: "224", Mid: "102", Varient: "740I" }, { id: "225", Mid: "103", Varient: "Competition" }, { id: "226", Mid: "104", Varient: "xDrive60" }, { id: "227", Mid: "105", Varient: "Competition" }, { id: "228", Mid: "106", Varient: "Coupe" }, { id: "229", Mid: "107", Varient: "Plug-in-Hybrid" },
  { id: "230", Mid: "108", Varient: "Coupe" },
  { id: "231", Mid: "109", Varient: "GL" }, { id: "232", Mid: "110", Varient: "Extended Range" }, { id: "233", Mid: "110", Varient: "Special Edition" },
  { id: "234", Mid: "111", Varient: "LS" },
  { id: "235", Mid: "112", Varient: "RXL" }, { id: "236", Mid: "112", Varient: "RXT" }, { id: "237", Mid: "112", Varient: "RXZ" }, { id: "238", Mid: "113", Varient: "RXL" }, { id: "239", Mid: "113", Varient: "RXT" }, { id: "240", Mid: "113", Varient: "RXZ" }, { id: "241", Mid: "114", Varient: "RXL" }, { id: "242", Mid: "114", Varient: "RXT" }, { id: "243", Mid: "114", Varient: "RXZ" },
  { id: "244", Mid: "115", Varient: "Titanum" }, { id: "245", Mid: "116", Varient: "Titanum" }, { id: "246", Mid: "100", Varient: "Eco Boost Premium" },
  { id: "247", Mid: "117", Varient: "Hi-Lander" }, { id: "248", Mid: "117", Varient: "V-Cross" }, { id: "249", Mid: "118", Varient: "4x4" }, { id: "250", Mid: "118", Varient: "4x2" },
  { id: "251", Mid: "119", Varient: "Sport" }, { id: "252", Mid: "119", Varient: "Logitude" }, { id: "253", Mid: "119", Varient: "Model" }, { id: "254", Mid: "120", Varient: "Limited" }, { id: "255", Mid: "121", Varient: "Limited" }, { id: "256", Mid: "122", Varient: "Unlimited" },
  { id: "256", Mid: "123", Varient: "R-Dynamic" }, { id: "257", Mid: "124", Varient: "R-Dynamic" }, { id: "258", Mid: "125", Varient: "R-Dynamic" }, { id: "259", Mid: "126", Varient: "HSE" }, { id: "260", Mid: "126", Varient: "SE" },
  { id: "261", Mid: "128", Varient: "Coupe" }, { id: "262", Mid: "129", Varient: "Couper" }, { id: "263", Mid: "130", Varient: "SUV" }, { id: "264", Mid: "131", Varient: "Sedan" },
  { id: "264", Mid: "132", Varient: "AWD" }, { id: "265", Mid: "132", Varient: "V10" }, { id: "266", Mid: "132", Varient: "Special Edition RWD" }, { id: "267", Mid: "133", Varient: "Twin-Turbo V8" },
  { id: "268", Mid: "134", Varient: "500d" }, { id: "269", Mid: "135", Varient: "Exquisite" }, { id: "270", Mid: "135", Varient: "Luxury" }, { id: "271", Mid: "136", Varient: "350h F-Sport" }, { id: "272", Mid: "136", Varient: "350h Luxury" }, { id: "273", Mid: "136", Varient: "350h Exquisite" }, { id: "274", Mid: "137", Varient: "450hL" }, { id: "275", Mid: "138", Varient: "500h" }, { id: "276", Mid: "139", Varient: "500h-Luxury" }, { id: "277", Mid: "139", Varient: "Sport-Plus" },
  { id: "278", Mid: "140", Varient: "B6 Ultimate" }, { id: "279", Mid: "141", Varient: "B5 Ultimate" }, { id: "280", Mid: "142", Varient: "B5-Ultimate" }, { id: "281", Mid: "143", Varient: "B4-Ultimate" }, { id: "282", Mid: "144", Varient: "A8" },
  { id: "283", Mid: "145", Varient: "SR-Dynamic" }, { id: "284", Mid: "146", Varient: "SR-Dynamic" }, { id: "285", Mid: "147", Varient: "SR-Dynamic" }, { id: "286", Mid: "148", Varient: "SR-Dynamic" }, { id: "287", Mid: "149", Varient: "SR-Dynamic" }, { id: "288", Mid: "150", Varient: "SR-Dynamic" }, { id: "289", Mid: "151", Varient: "SR-Dynamic" },
  { id: "290", Mid: "152", Varient: "Gt-Hybrid" }, { id: "291", Mid: "153", Varient: "Gt-Hybrid" }, { id: "292", Mid: "154", Varient: "Gt-Hybrid" }, { id: "293", Mid: "155", Varient: "Gt-Hybrid" },
  { id: "294", Mid: "156", Varient: "220d" }, { id: "295", Mid: "157", Varient: "220d" }, { id: "296", Mid: "158", Varient: "G350d" }, { id: "297", Mid: "159", Varient: "200d" }, { id: "298", Mid: "160", Varient: "S350d" }, { id: "299", Mid: "161", Varient: "S580d" }, { id: "300", Mid: "162", Varient: "E200d Exclusive" }, { id: "301", Mid: "163", Varient: "400d" }, { id: "302", Mid: "164", Varient: "200 Progressive" }, { id: "303", Mid: "165", Varient: "400d" }, { id: "304", Mid: "166", Varient: "200d Progressive Line" }, { id: "305", Mid: "167", Varient: "300d" }, { id: "306", Mid: "168", Varient: "4MATIC" }, { id: "307", Mid: "169", Varient: "4MATIC" }, { id: "308", Mid: "170", Varient: "300 4MATIC" }, { id: "309", Mid: "171", Varient: "4MATIC Plus" }, { id: "310", Mid: "172", Varient: "4MATIC" }, { id: "311", Mid: "173", Varient: "300 4MATIC" }, { id: "312", Mid: "174", Varient: "300 4MATIC" }, { id: "313", Mid: "175", Varient: "300 4MATIC" }, { id: "314", Mid: "176", Varient: "300 4MATIC" }, { id: "315", Mid: "177", Varient: "300 4MATIC" }, { id: "316", Mid: "178", Varient: "300 4MATIC" }, { id: "317", Mid: "179", Varient: "300 4MATIC" },
  { id: "318", Mid: "180", Varient: "S" },
  { id: "319", Mid: "181", Varient: "XV" }, { id: "320", Mid: "181", Varient: "XL" }, { id: "321", Mid: "182", Varient: "XV" }, { id: "322", Mid: "182", Varient: "XL" },
  { id: "323", Mid: "183", Varient: "Active" }, { id: "324", Mid: "183", Varient: "Ambition" }, { id: "325", Mid: "184", Varient: "Active" }, { id: "326", Mid: "184", Varient: "Ambition" }, { id: "327", Mid: "185", Varient: "Sportsline" }, { id: "328", Mid: "185", Varient: "L&K" }, { id: "329", Mid: "186", Varient: "Sportsline" }, { id: "330", Mid: "186", Varient: "L&K" },
  { id: "331", Mid: "187", Varient: "Base" }, { id: "332", Mid: "188", Varient: "Base" }, { id: "333", Mid: "189", Varient: "Base" }, { id: "334", Mid: "190", Varient: "Base" }, { id: "335", Mid: "191", Varient: "Base" }, { id: "336", Mid: "192", Varient: "Base" }, { id: "337", Mid: "193", Varient: "Base" },
  { id: "338", Mid: "194", Varient: "GX" }, { id: "339", Mid: "194", Varient: "VX" }, { id: "340", Mid: "194", Varient: "ZX" }, { id: "341", Mid: "195", Varient: "4x2" }, { id: "342", Mid: "195", Varient: "4x4" }, { id: "343", Mid: "195", Varient: "Legender" }, { id: "344", Mid: "210", Varient: "ZX" }, { id: "345", Mid: "196", Varient: "V" }, { id: "346", Mid: "196", Varient: "G" }, { id: "347", Mid: "197", Varient: "V" }, { id: "348", Mid: "197", Varient: "G" }, { id: "349", Mid: "198", Varient: "Hybrid" }, { id: "350", Mid: "199", Varient: "Hybrod" }, { id: "351", Mid: "200", Varient: "STD-4X4" },
  { id: "352", Mid: "201", Varient: "S" },
  { id: "353", Mid: "202", Varient: "Live" }, { id: "354", Mid: "202", Varient: "Feel" },
  { id: "355", Mid: "203", Varient: "4x4" }, { id: "356", Mid: "204", Varient: "STD" }, { id: "357", Mid: "205", Varient: "STD" }, { id: "358", Mid: "206", Varient: "STD" }, { id: "359", Mid: "207", Varient: "STD" }, { id: "360", Mid: "208", Varient: "STD" },
  { id: "360", Mid: "209", Varient: "V8" }
    , { id: "361", Mid: "211", Varient: "OTHERS" }
  ];

  const [file, setFile] = useState()
  const [file1, setFile1] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()
  const [file4, setFile4] = useState()
  const [output, setOutput] = useState();
  const [vehicleregistraion, setVehicleregistration] = useState();
  const [manufactring, setManufactring] = useState();
  const [engine, setEngine] = useState();
  const [chassis, setChassis] = useState();
  const [colour, setColour] = useState();
  const [category, setCategory] = useState();
  const [manufacturerName, setManufacturerName] = useState();
  const [model, setModel] = useState();
  const [varient, setVarient] = useState();
  const [seat1, setSeat1] = useState();
  const [fuel1, setFuel1] = useState();
  const [running, setRunning] = useState();
  const [attachmentdate, setAttachment] = useState();
  const [city, setCity] = useState();

  const [CatList, SetCatList] = useState();
  const [manList, SetManList] = useState([]);
  const [modelList, SetModelList] = useState([]);
  const [varientList, SetVarientList] = useState([]);
  const [fuel, SetFuel] = useState();
  const [segment, SetSegment] = useState([]);
  const [seat, SetSeat] = useState([]);


  useEffect(() => {
    setInterval(() => {
      SetCatList(Category);
      SetFuel(Fuel);

    }, 10)
  }, []);

  const handleSegment = (id) => {
    const dt = Segment.filter(x => x.sId === id)
    const data = Manufacturer.filter(x => x.cId === id)
    const se = Seat.filter(x => x.SId === id)

    SetSegment(dt)
    SetManList(data)
    SetSeat(se)
  }
  const handelModel = (id) => {
    const dt = Model.filter(x => x.Bid === id)
    SetModelList(dt)
  }
  const handelVarient = (id) => {
    const dt = Varient.filter(x => x.Mid === id)
    SetVarientList(dt)
  }

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }
  const handleChange1 = (event) => {
    setFile1(event.target.files[0])
  }
  const handleChange2 = (event) => {
    setFile2(event.target.files[0])
  }
  const handleChange3 = (event) => {
    setFile3(event.target.files[0])
  }
  const handleChange4 = (event) => {
    setFile4(event.target.files[0])
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append('vehicleregistraion', vehicleregistraion);
    formData.append('manufactring', manufactring);
    formData.append('engine', engine);
    formData.append('chassis', chassis);
    formData.append('colour', colour);
    formData.append('category', category);
    formData.append('segment', segment);
    formData.append('manufacturerName', manufacturerName);
    formData.append('model', model);
    formData.append('varient', varient);
    formData.append('seat1', seat1);
    formData.append('fuel1', fuel1);
    formData.append('running', running);
    formData.append('attachmentdate', attachmentdate);
    formData.append('city', city);
    formData.append('insurance', file);
    formData.append('registration', file1);
    formData.append('fitness', file2);
    formData.append('puc', file3);
    formData.append('permit', file4);

    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(__apiURLVehicle + "save", formData, config).then((response) => {
      setOutput("Document Uploaded Successfully wait for 1 Hour.");

    });
  }

  //get data table
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios.get(__apiURLUser + "fetch?role=user").then((response) => {
        setUserDetails(response.data);
      }).catch((err) => {
        console.log(err);
      });
    }, 100);
  }, []);

  const manageSelfdriveStatus = (_id, sd) => {
    if (sd == "blocked") {
      let updatesdDetails = { "condition_obj": { "_id": _id }, "content_obj": { "selfdrivestatus": 0 } };
      axios.patch(__apiURLUser + "update", updatesdDetails).then(() => {
        navigate("/sdusermgmt");
      });
    }
    else {
      let updatesdDetails = { "condition_obj": { "_id": _id }, "content_obj": { "selfdrivestatus": 1 } };
      axios.patch(__apiURLUser + "update", updatesdDetails).then(() => {
        navigate("/sdusermgmt");
      });
    }
  }


  const manageUserStatus = (_id, s) => {
    if (s == "block") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
      axios.patch(__apiURLUser + "update", updateDetails).then(() => {
        navigate("/sdusermgmt");
      });
    }
    else if (s == "verify") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
      axios.patch(__apiURLUser + "update", updateDetails).then(() => {
        navigate("/sdusermgmt");
      });
    }
    else {
      axios.delete(__apiURLUser + "delete/" + _id).then(() => {
        navigate("/sdusermgmt");
      });
    }
  }



  return (
    <div>
      <div id="home-collapse">
        <div className='row'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>
          <div className='col-lg-9'>
            <center>
              <h1 id="vmd">Booking Management</h1></center>
            <div className='container-parcha' >
              <font color="black">{output}</font>
              <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Add New Booking
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <form>
                    <h1 className="mgmt">Vehicle Registration Form</h1>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Vehicle Registration No.</label>
                      <input type="text" class="form-control" value={vehicleregistraion} onChange={e => setVehicleregistration(e.target.value)} placeholder="Vehicle Registration No." />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Manufacturing Year</label>
                      <input type="date" class="form-control" value={manufactring} onChange={e => setManufactring(e.target.value)} placeholder="Enter Manufactring Year" />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Engine No.</label>
                      <input type="text" class="form-control" value={engine} onChange={e => setEngine(e.target.value)} placeholder="Enter Engine No." />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Chassis No.</label>
                      <input type="text" class="form-control" value={chassis} onChange={e => setChassis(e.target.value)} placeholder="Enter Chassis No." />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Colour</label>
                      <input type="text" class="form-control" value={colour} onChange={e => setColour(e.target.value)} placeholder="Enter Colour Name" />
                    </div>
                    <div class="col-auto my-1">
                      <label class="mr-sm-2 mgmt" for="inlineFormCustomSelect">Choose Category</label>
                      <select class="custom-select mr-sm-2" value={category} onChange={(e) => handleSegment(e.target.value)}>
                        <option value="0">Choose Category </option>
                        {
                          CatList &&
                            CatList !== undefined ?
                            CatList.map((row) => {
                              return (
                                <option value={row.id}> {row.Category} </option>
                              )
                            })
                            : "No Category"
                        }
                      </select>
                    </div>
                    <div class="col-auto my-1">
                      <label class="mr-sm-2 mgmt" for="inlineFormCustomSelect">Choose Segment</label>
                      <select class="custom-select mr-sm-2" >
                        <option value="0">Choose Segment </option>
                        {
                          segment !== undefined ?
                            segment &&
                            segment.map((row) => {
                              return (
                                <option value={row.id}> {row.segment} </option>
                              )
                            })
                            : "No Category"
                        }
                      </select>
                    </div>
                    <div class="col-auto my-1">
                      <label class="mr-sm-2 mgmt" for="inlineFormCustomSelect">Choose Manufacturer</label>
                      <select class="custom-select mr-sm-2" value={manufacturerName} onChange={(e) => handelModel(e.target.value)}>
                        <option value="0">Choose Manufacturer </option>
                        {
                          manList &&
                            manList !== undefined ?
                            manList.map((row) => {
                              return (
                                <option value={row.id}> {row.brand} </option>
                              )
                            })
                            : "No Manufacturer"
                        }
                      </select>
                    </div>
                    <div class="col-auto my-1">
                      <label class="mr-sm-2 mgmt" for="inlineFormCustomSelect">Choose Model</label>
                      <select class="custom-select mr-sm-2" value={model} onChange={(e) => handelVarient(e.target.value)} >
                        <option value="0">Choose Model </option>
                        {
                          modelList &&
                            modelList !== undefined ?
                            modelList.map((row) => {
                              return (
                                <option value={row.id}> {row.Model} </option>
                              )
                            })
                            : "No Model"
                        }
                      </select>
                    </div>
                    <div class="col-auto my-1">
                      <label class="mr-sm-2 mgmt" for="inlineFormCustomSelect">Choose Varient</label>
                      <select class="custom-select mr-sm-2" value={varient}  >
                        <option value="0">Choose Varient </option>
                        {
                          varientList &&
                            varientList !== undefined ?
                            varientList.map((row) => {
                              return (
                                <option value={row.id}> {row.Varient} </option>
                              )
                            })
                            : "No Varient"
                        }
                      </select>
                    </div>
                    <div class="col-auto my-1">
                      <label class="mr-sm-2 mgmt" for="inlineFormCustomSelect">Seating Capacity</label>
                      <select class="custom-select mr-sm-2" value={seat1} >
                        <option value="0">Seating Capacity </option>
                        {
                          seat &&
                            seat !== undefined ?
                            seat.map((row) => {
                              return (
                                <option value={row.id}> {row.seat} </option>
                              )
                            })
                            : "No Category"
                        }
                      </select>
                    </div>
                    <div class="col-auto my-1">
                      <label class="mr-sm-2 mgmt" for="inlineFormCustomSelect">Fuel Type</label>
                      <select class="custom-select mr-sm-2"  >
                        <option value="0">Fuel Type </option>
                        {
                          fuel &&
                            fuel !== undefined ?
                            fuel.map((row) => {
                              return (
                                <option value={row.id}> {row.fuel} </option>
                              )
                            })
                            : "No Fuel"
                        }
                      </select>
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Running KM</label>
                      <input type="number" class="form-control" value={running} onChange={e => setRunning(e.target.value)} placeholder="Enter Running KM" />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Insurance Photo</label>
                      <input type="file" class="form-control" onChange={handleChange} />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Registration Card Photo</label>
                      <input type="file" class="form-control" onChange={handleChange1} />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Fitness Certificate Photo</label>
                      <input type="file" class="form-control" onChange={handleChange2} />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">PUC Certificate Photo</label>
                      <input type="file" class="form-control" onChange={handleChange3} />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Permit Certificate Photo</label>
                      <input type="file" class="form-control" onChange={handleChange4} />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">Date of Assosciation</label>
                      <input type="date" class="form-control" value={attachmentdate} onChange={e => setAttachment(e.target.value)} placeholder="Attachment Date" />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">City Name</label>
                      <input type="text" class="form-control" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
                    </div>

                    <button id="b5" type="button" onClick={handleSubmit} class="btn btn-primary" >Submit</button>
                  </form>
                </div>
              </div>
              <table id='tableuser' className="table table-bordered">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Selfdrive Status</th>
                  <th>Info</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  userDetails.map((row) => (
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.mobile}</td>
                      <td>
                        {
                          row.selfdrivestatus == 0 &&
                          <a style={{ "color": "green" }} onClick={() => { manageSelfdriveStatus(row._id, "verified") }} >Approved</a>
                        }
                        {
                          row.selfdrivestatus == 1 &&
                          <a style={{ "color": "orange" }} onClick={() => { manageSelfdriveStatus(row._id, "blocked") }} >NotApproved</a>
                        }
                      </td>
                      <td>{row.info}</td>
                      <td>
                        {
                          row.status == 0 &&
                          <a style={{ "color": "green" }} onClick={() => { manageUserStatus(row._id, "verify") }} >Verify User</a>
                        }
                        {
                          row.status == 1 &&
                          <a style={{ "color": "orange" }} onClick={() => { manageUserStatus(row._id, "block") }} >Block User</a>
                        }
                      </td>
                      <td>
                        <a style={{ "color": "red" }} onClick={() => { manageUserStatus(row._id, "delete") }} >Delete</a>
                      </td>
                    </tr>
                  ))

                }
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SdBookingmgmt