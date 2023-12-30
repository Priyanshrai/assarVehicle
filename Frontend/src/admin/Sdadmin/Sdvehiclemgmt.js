import "./sd.css";
import Sidebar from "./Sidebar";
import { __apiURLVehicle, __apiURLUser } from "../../apiURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, React } from "react";

function Sdvehiclemgmt() {
  const Category = [{ Category: "Car" }, { Category: "Two-Wheeler" }];
  const Segment = [
    { Category: "Car", segment: "Hatchback" },
    { Category: "Car", segment: "Premium Hatchback" },
    { Category: "Car", segment: "Sedan" },
    { Category: "Car", segment: "Compact-SUV" },
    { Category: "Car", segment: "SUV" },
    { Category: "Car", segment: "MUV" },
    { Category: "Two-Wheeler", segment: "Crusier" },
    { Category: "Two-Wheeler", segment: "Commuter" },
    { Category: "Two-Wheeler", segment: "Sports" },
    { Category: "Two-Wheeler", segment: "Super" },
    { Category: "Two-Wheeler", segment: "Adventure" },
    { Category: "Two-Wheeler", segment: "Scooter" },
  ];
  const Seat = [
    { Category: "Car", seat: "2" },
    { Category: "Car", seat: "5" },
    { Category: "Car", seat: "6" },
    { Category: "Car", seat: "7" },
    { Category: "Car", seat: "8" },
    { Category: "Car", seat: "9" },
    { Category: "Car", seat: "12" },
    { Category: "Two-Wheeler", seat: "2" },
    { Category: "Two-Wheeler", seat: "1" },
  ];
  const Fuel = [
    { fuel: "Petrol" },
    { fuel: "Diesel" },
    { fuel: "CNG" },
    { fuel: "Electric" },
    { fuel: "Hydrogen" },
  ];
  const Manufacturer = [{ Category: "Car", brand: "TATA" },
  { Category: "Car", brand: "MARUTI SUZUKI" },
  { Category: "Car", brand: "HYUNDAI" },
  { Category: "Car", brand: "HONDA" },
  { Category: "Car", brand: "MG" },
  { Category: "Car", brand: "MAHINDRA" },
  { Category: "Car", brand: "KIA" },
  { Category: "Car", brand: "ASTON MARTIN" },
  { Category: "Car", brand: "VOLKSWAGON" },
  { Category: "Car", brand: "AUDI" },
  { Category: "Car", brand: "BMW" },
  { Category: "Car", brand: "BUGATTI" },
  { Category: "Car", brand: "BYD" },
  { Category: "Car", brand: "DATSUN" },
  { Category: "Car", brand: "RENAULT" },
  { Category: "Car", brand: "FORD" },
  { Category: "Car", brand: "ISUZU" },
  { Category: "Car", brand: "JEEP" },
  { Category: "Car", brand: "JAGUAR" },
  { Category: "Car", brand: "ROLLS ROYLCE" },
  { Category: "Car", brand: "LAMBORGINI" },
  { Category: "Car", brand: "LEXUS" },
  { Category: "Car", brand: "VOLVO" },
  { Category: "Car", brand: "LAND ROVER" },
  { Category: "Car", brand: "MASERTI" },
  { Category: "Car", brand: "MERCEDEZ-BENZ" },
  { Category: "Car", brand: "MINI" },
  { Category: "Car", brand: "NISSAN" },
  { Category: "Car", brand: "SKODA" },
  { Category: "Car", brand: "PORCSHE" },
  { Category: "Car", brand: "TOYOTA" },
  { Category: "Car", brand: "TESLA" },
  { Category: "Car", brand: "CITROEN" },
  { Category: "Car", brand: "FORCE" },
  { Category: "Car", brand: "BENTALY" },
  { Category: "Two-Wheeler", brand: "HERO" },
  { Category: "Two-Wheeler", brand: "TVS" },
  { Category: "Two-Wheeler", brand: "BMW-BIKE" },
  { Category: "Two-Wheeler", brand: "KTM" },
  { Category: "Two-Wheeler", brand: "BAJAJ" },
  { Category: "Two-Wheeler", brand: "HARLEY DAVIDSON" },
  { Category: "Two-Wheeler", brand: "HONDA-BIKE" },
  { Category: "Two-Wheeler", brand: "ROYAL ENFIELD" },
  { Category: "Two-Wheeler", brand: "JAWA" },
  { Category: "Two-Wheeler", brand: "YAMAHA" },
  { Category: "Two-Wheeler", brand: "APRILIA" },
  { Category: "Two-Wheeler", brand: "BENELLI" },
  { Category: "Two-Wheeler", brand: "ATHER" },
  { Category: "Two-Wheeler", brand: "OLA" },
  { Category: "Two-Wheeler", brand: "DUCATI" },
  { Category: "Two-Wheeler", brand: "VESPA" },
  { Category: "Two-Wheeler", brand: "SUZUKI" },
  { Category: "Two-Wheeler", brand: "TRIUMPH" },
  { Category: "Two-Wheeler", brand: "INDIAN" },
  { Category: "Two-Wheeler", brand: "KAWASAKI" },
  ];
  const Model = [
    { brand: "TATA", Model: "Tiago" },
    { brand: "TATA", Model: "Tiagor" },
    { brand: "TATA", Model: "Punch" },
    { brand: "TATA", Model: "Harrier" },
    { brand: "TATA", Model: "Safari" },
    { brand: "TATA", Model: "Altroz" },
    { brand: "TATA", Model: "Nexon" },
    { brand: "TATA", Model: "Hexa" },
    { brand: "MARUTI SUZUKI", Model: "Alto-800" },
    { brand: "MARUTI SUZUKI", Model: "Alto-K10" },
    { brand: "MARUTI SUZUKI", Model: "S-Presso" },
    { brand: "MARUTI SUZUKI", Model: "Eeco" },
    { brand: "MARUTI SUZUKI", Model: "Celerio" },
    { brand: "MARUTI SUZUKI", Model: "Wagon-R" },
    { brand: "MARUTI SUZUKI", Model: "Ignis" },
    { brand: "MARUTI SUZUKI", Model: "Swift" },
    { brand: "MARUTI SUZUKI", Model: "Dzire" },
    { brand: "MARUTI SUZUKI", Model: "Baleno" },
    { brand: "MARUTI SUZUKI", Model: "Brezza" },
    { brand: "MARUTI SUZUKI", Model: "Ertiga" },
    { brand: "MARUTI SUZUKI", Model: "Ciaz" },
    { brand: "MARUTI SUZUKI", Model: "Grand Vitara" },
    { brand: "MARUTI SUZUKI", Model: "S-Cross" },
    { brand: "MARUTI SUZUKI", Model: "XL-6" },
    { brand: "MARUTI SUZUKI", Model: "Jimmy" },
    { brand: "HYUNDAI", Model: "Santro" },
    { brand: "HYUNDAI", Model: "Grand-I10" },
    { brand: "HYUNDAI", Model: "I-20" },
    { brand: "HYUNDAI", Model: "I-20 Active" },
    { brand: "HYUNDAI", Model: "Verna" },
    { brand: "HYUNDAI", Model: "Aura" },
    { brand: "HYUNDAI", Model: "Venue" },
    { brand: "HYUNDAI", Model: "Creata" },
    { brand: "HYUNDAI", Model: "Elentra" },
    { brand: "HYUNDAI", Model: "Alcazer" },
    { brand: "HYUNDAI", Model: "Tucson" },
    { brand: "HYUNDAI", Model: "Kona" },
    { brand: "HYUNDAI", Model: "Ioniq-5" },
    { brand: "HONDA", Model: "Amaze" },
    { brand: "HONDA", Model: "Jazz" },
    { brand: "HONDA", Model: "WRV" },
    { brand: "HONDA", Model: "City" },
    { brand: "HONDA", Model: "Civic" },
    { brand: "MG", Model: "Astor" },
    { brand: "MG", Model: "Hector" },
    { brand: "MG", Model: "Hector-Plus" },
    { brand: "MG", Model: "Gloster" },
    { brand: "MG", Model: "ZS" },
    { brand: "MAHINDRA", Model: "KUV-100" },
    { brand: "MAHINDRA", Model: "XUV-300" },
    { brand: "MAHINDRA", Model: "XUV-500" },
    { brand: "MAHINDRA", Model: "XUV-700" },
    { brand: "MAHINDRA", Model: "Bolero" },
    { brand: "MAHINDRA", Model: "Bolero-Neo" },
    { brand: "MAHINDRA", Model: "Scorpio-Classic" },
    { brand: "MAHINDRA", Model: "Scorpio-N" },
    { brand: "MAHINDRA", Model: "Thar" },
    { brand: "MAHINDRA", Model: "Marazzo" },
    { brand: "MAHINDRA", Model: "XUV-400" },
    { brand: "KIA", Model: "Sonet" },
    { brand: "KIA", Model: "Carnival" },
    { brand: "KIA", Model: "Seltos" },
    { brand: "KIA", Model: "EV-6" },
    { brand: "KIA", Model: "Carens" },
    { brand: "ASTON MARTIN", Model: "Vantage" },
    { brand: "ASTON MARTIN", Model: "DB-11" },
    { brand: "ASTON MARTIN", Model: "DB-X" },
    { brand: "VOLKSWAGON", Model: "Polo" },
    { brand: "VOLKSWAGON", Model: "Vento" },
    { brand: "VOLKSWAGON", Model: "Taigun" },
    { brand: "VOLKSWAGON", Model: "Tiguan" },
    { brand: "VOLKSWAGON", Model: "Virtus" },
    { brand: "VOLKSWAGON", Model: "Jetta" },
    { brand: "AUDI", Model: "Q3" },
    { brand: "AUDI", Model: "Q7" },
    { brand: "AUDI", Model: "A4" },
    { brand: "AUDI", Model: "A6" },
    { brand: "AUDI", Model: "Q5" },
    { brand: "AUDI", Model: "S5" },
    { brand: "AUDI", Model: "E-Tron" },
    { brand: "AUDI", Model: "Q8" },
    { brand: "AUDI", Model: "RS-5" },
    { brand: "AUDI", Model: "A8" },
    { brand: "AUDI", Model: "RS-Q8" },
    { brand: "AUDI", Model: "A3" },
    { brand: "BMW", Model: "2-Series" },
    { brand: "BMW", Model: "X-1" },
    { brand: "BMW", Model: "3-Series" },
    { brand: "BMW", Model: "3-Series Limousine" },
    { brand: "BMW", Model: "X-3" },
    { brand: "BMW", Model: "5-Series" },
    { brand: "BMW", Model: "M340-I" },
    { brand: "BMW", Model: "6-Series GT" },
    { brand: "BMW", Model: "I4" },
    { brand: "BMW", Model: "X4" },
    { brand: "BMW", Model: "Z4" },
    { brand: "BMW", Model: "X5" },
    { brand: "BMW", Model: "X6" },
    { brand: "BMW", Model: "IX" },
    { brand: "BMW", Model: "M4" },
    { brand: "BMW", Model: "7-Series" },
    { brand: "BMW", Model: "M5" },
    { brand: "BMW", Model: "I7" },
    { brand: "BMW", Model: "X5-M" },
    { brand: "BMW", Model: "M8" },
    { brand: "BMW", Model: "XM" },
    { brand: "BUGATTI", Model: "Veron" },
    { brand: "BYD", Model: "E-6" },
    { brand: "BYD", Model: "Atto-3" },
    { brand: "DATSUN", Model: "RediGo" },
    { brand: "RENAULT", Model: "Triber" },
    { brand: "RENAULT", Model: "Kwid" },
    { brand: "RENAULT", Model: "Kiger" },
    { brand: "RENAULT", Model: "Duster" },
    { brand: "FORD", Model: "Ecosport" },
    { brand: "FORD", Model: "Endevour" },
    { brand: "FORD", Model: "Mustang" },
    { brand: "ISUZU", Model: "D-Max" },
    { brand: "ISUZU", Model: "MUX" },
    { brand: "JEEP", Model: "Compass" },
    { brand: "JEEP", Model: "Cherokee" },
    { brand: "JEEP", Model: "Meridian" },
    { brand: "JEEP", Model: "Wrangler" },
    { brand: "JAGUAR", Model: "XF" },
    { brand: "JAGUAR", Model: "F-Pace" },
    { brand: "JAGUAR", Model: "F-Type" },
    { brand: "JAGUAR", Model: "I-Pace" },
    { brand: "ROLLS ROYLCE", Model: "Phantom-8" },
    { brand: "ROLLS ROYLCE", Model: "Wraith" },
    { brand: "ROLLS ROYLCE", Model: "Cullinan" },
    { brand: "ROLLS ROYLCE", Model: "Dawn" },
    { brand: "LAMBORGINI", Model: "Huracan-Evo" },
    { brand: "LAMBORGINI", Model: "Urus-Performante" },
    { brand: "LEXUS", Model: "LX" },
    { brand: "LEXUS", Model: "ES" },
    { brand: "LEXUS", Model: "NX" },
    { brand: "LEXUS", Model: "LC" },
    { brand: "LEXUS", Model: "LS" },
    { brand: "LEXUS", Model: "RS" },
    { brand: "VOLVO", Model: "XC-90" },
    { brand: "VOLVO", Model: "S-90" },
    { brand: "VOLVO", Model: "XC-60" },
    { brand: "VOLVO", Model: "XC-40" },
    { brand: "VOLVO", Model: "XC-40 electric" },
    { brand: "LAND ROVER", Model: "Range Rover Veler" },
    { brand: "LAND ROVER", Model: "Discovery" },
    { brand: "LAND ROVER", Model: "Discovery Sport" },
    { brand: "LAND ROVER", Model: "Range Rover" },
    { brand: "LAND ROVER", Model: "Range Rover Sport" },
    { brand: "LAND ROVER", Model: "Defender" },
    { brand: "LAND ROVER", Model: "Range Rover Evoque" },
    { brand: "MASERTI", Model: "MC-20" },
    { brand: "MASERTI", Model: "Levantte" },
    { brand: "MASERTI", Model: "Ghibli" },
    { brand: "MASERTI", Model: "QuattroPorte" },
    { brand: "MERCEDEZ-BENZ", Model: "G-Class" },
    { brand: "MERCEDEZ-BENZ", Model: "C-Class" },
    { brand: "MERCEDEZ-BENZ", Model: "GLA" },
    { brand: "MERCEDEZ-BENZ", Model: "A-Class" },
    { brand: "MERCEDEZ-BENZ", Model: "S-Class" },
    { brand: "MERCEDEZ-BENZ", Model: "Maybach S-Class" },
    { brand: "MERCEDEZ-BENZ", Model: "E-Class" },
    { brand: "MERCEDEZ-BENZ", Model: "GLE" },
    { brand: "MERCEDEZ-BENZ", Model: "GLC" },
    { brand: "MERCEDEZ-BENZ", Model: "GLS" },
    { brand: "MERCEDEZ-BENZ", Model: "GLB" },
    { brand: "MERCEDEZ-BENZ", Model: "GLC AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "A35-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "GLA-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "EQA" },
    { brand: "MERCEDEZ-BENZ", Model: "A5-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "A53-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "GT-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "EBQ" },
    { brand: "MERCEDEZ-BENZ", Model: "E63-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "A45-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "E53-AMG" },
    { brand: "MERCEDEZ-BENZ", Model: "EQC" },
    { brand: "MERCEDEZ-BENZ", Model: "EQS" },
    { brand: "MINI", Model: "Cooper" },
    { brand: "NISSAN", Model: "Kick" },
    { brand: "NISSAN", Model: "Magnite" },
    { brand: "SKODA", Model: "Kushaq" },
    { brand: "SKODA", Model: "Slavia" },
    { brand: "SKODA", Model: "Superb" },
    { brand: "SKODA", Model: "Octavia" },
    { brand: "SKODA", Model: "Kodiaq" },
    { brand: "PORCSHE", Model: "Cayene" },
    { brand: "PORCSHE", Model: "911" },
    { brand: "PORCSHE", Model: "Macan" },
    { brand: "PORCSHE", Model: "Panemara" },
    { brand: "PORCSHE", Model: "718" },
    { brand: "PORCSHE", Model: "Tycan" },
    { brand: "PORCSHE", Model: "Cayene Coupe" },
    { brand: "TOYOTA", Model: "Innova" },
    { brand: "TOYOTA", Model: "Fortuner" },
    { brand: "TOYOTA", Model: "Land Crusier" },
    { brand: "TOYOTA", Model: "Urban Crusier" },
    { brand: "TOYOTA", Model: "Glanza" },
    { brand: "TOYOTA", Model: "Cammry" },
    { brand: "TOYOTA", Model: "Vellfire" },
    { brand: "TOYOTA", Model: "Hilux" },
    { brand: "TESLA", Model: "S" },
    { brand: "CITROEN", Model: "C3" },
    { brand: "FORCE", Model: "Gurkha" },
    { brand: "FORCE", Model: "Tempo Trax" },
    { brand: "FORCE", Model: "Tempo Traveller -14" },
    { brand: "FORCE", Model: "Tempo Traveller -16" },
    { brand: "FORCE", Model: "Tempo Traveller -24" },
    { brand: "FORCE", Model: "Tempo Traveller -30" },
    { brand: "BENTALY", Model: "Bentayega" },
    { brand: "HERO", Model: "HF-Deluxe" },
    { brand: "HERO", Model: "Xtreme 160R" },
    { brand: "HERO", Model: "Xpulse 200" },
    { brand: "HERO", Model: "Pleasure" },
    { brand: "HERO", Model: "Maestro" },
    { brand: "HERO", Model: "Passion Pro" },
    { brand: "HERO", Model: "Glamour" },
    { brand: "HERO", Model: "Splender" },
    { brand: "TVS", Model: "Apatche RTR 160" },
    { brand: "TVS", Model: "Raider" },
    { brand: "TVS", Model: "Apache RR 310" },
    { brand: "TVS", Model: "Apache RR 200" },
    { brand: "TVS", Model: "I Cube" },
    { brand: "TVS", Model: "Jupiter" },
    { brand: "TVS", Model: "Scooty Pep" },
    { brand: "TVS", Model: "Apache 180 RTR" },
    { brand: "BMW-BIKE", Model: "310 R" },
    { brand: "BMW-BIKE", Model: "310 RR" },
    { brand: "BMW-BIKE", Model: "G 310 GS" },
    { brand: "BMW-BIKE", Model: "M1000 RR" },
    { brand: "BMW-BIKE", Model: "R 1250 GS" },
    { brand: "BMW-BIKE", Model: "R18" },
    { brand: "BMW-BIKE", Model: "K 1600" },
    { brand: "BMW-BIKE", Model: "R1250 RT" },
    { brand: "BMW-BIKE", Model: "S 1000 RR" },
    { brand: "KTM", Model: "Duke 200" },
    { brand: "KTM", Model: "Duke 390" },
    { brand: "KTM", Model: "DUKE 125" },
    { brand: "KTM", Model: "RC 390" },
    { brand: "KTM", Model: "RC 125" },
    { brand: "BAJAJ", Model: "Pulser 125" },
    { brand: "BAJAJ", Model: "Pulser 160" },
    { brand: "BAJAJ", Model: "Platina" },
    { brand: "BAJAJ", Model: "Dominor" },
    { brand: "BAJAJ", Model: "Avenger" },
    { brand: "HARLEY DAVIDSON", Model: "Sportster S" },
    { brand: "HARLEY DAVIDSON", Model: "Iron 883" },
    { brand: "HARLEY DAVIDSON", Model: "Forty-Eight" },
    { brand: "HARLEY DAVIDSON", Model: "Nightster" },
    { brand: "HARLEY DAVIDSON", Model: "Fat-Bob" },
    { brand: "HARLEY DAVIDSON", Model: "Road Glide" },
    { brand: "HARLEY DAVIDSON", Model: "Roadking" },
    { brand: "HARLEY DAVIDSON", Model: "Street Glide Special" },
    { brand: "HARLEY DAVIDSON", Model: "Heritage Classic" },
    { brand: "HONDA-BIKE", Model: "Activa" },
    { brand: "HONDA-BIKE", Model: "Shine" },
    { brand: "HONDA-BIKE", Model: "CBR 250" },
    { brand: "HONDA-BIKE", Model: "CBR 150" },
    { brand: "HONDA-BIKE", Model: "CB 350" },
    { brand: "ROYAL ENFIELD", Model: "Classic 350" },
    { brand: "ROYAL ENFIELD", Model: "Thunderbird" },
    { brand: "ROYAL ENFIELD", Model: "Himalayan" },
    { brand: "JAWA", Model: "Sandard" },
    { brand: "JAWA", Model: "Perak" },
    { brand: "JAWA", Model: "42 Bobber" },
    { brand: "JAWA", Model: "42" },
    { brand: "YAMAHA", Model: "FZ S" },
    { brand: "YAMAHA", Model: "R15S" },
    { brand: "YAMAHA", Model: "FZX" },
    { brand: "YAMAHA", Model: "R15 V4" },
    { brand: "APRILIA", Model: "RS 272" },
    { brand: "APRILIA", Model: "RS V4 1100" },
    { brand: "BENELLI", Model: "Imperiale 400" },
    { brand: "ATHER", Model: "450x" },
    { brand: "OLA", Model: "S1 Pro" },
    { brand: "DUCATI", Model: "Panigale v4" },
    { brand: "DUCATI", Model: "Super Sport" },
    { brand: "DUCATI", Model: "Monster" },
    { brand: "VESPA", Model: "ZX 125" },
    { brand: "VESPA", Model: "SXL 125" },
    { brand: "VESPA", Model: "VXL" },
    { brand: "SUZUKI", Model: "Hayabusa" },
    { brand: "SUZUKI", Model: "Access" },
    { brand: "TRIUMPH", Model: "Trident 660" },
    { brand: "TRIUMPH", Model: "Rocket 3" },
    { brand: "INDIAN", Model: "Dark Horse" },
    { brand: "INDIAN", Model: "Cheif Limited" },
    { brand: "KAWASAKI", Model: "Z900" },
    { brand: "KAWASAKI", Model: "H2R" },
    { brand: "KAWASAKI", Model: "ZX-10R" },
    { brand: "KAWASAKI", Model: "Z650" },
  ];
  const Varient = [
    { Model: "Tiago", Varient: "XM" },
    { Model: "Tiago", Varient: "XT" },
    { Model: "Tiago", Varient: "XZ" },
    { Model: "Tiagor", Varient: "XM" },
    { Model: "Tiagor", Varient: "XT" },
    { Model: "Tiagor", Varient: "XZ" },
    { Model: "Harrier", Varient: "XM" },
    { Model: "Harrier", Varient: "XT" },
    { Model: "Harrier", Varient: "XZ" },
    { Model: "Nexon", Varient: "XM" },
    { Model: "Nexon", Varient: "XT" },
    { Model: "Nexon", Varient: "XZ" },
    { Model: "Safari", Varient: "XM" },
    { Model: "Safari", Varient: "XT" },
    { Model: "Safari", Varient: "XZ" },
    { Model: "Altroz", Varient: "XM" },
    { Model: "Altroz", Varient: "XT" },
    { Model: "Altroz", Varient: "XZ" },
    { Model: "Punch", Varient: "Adventure" },
    { Model: "Punch", Varient: "Camo" },
    { Model: "Punch", Varient: "Creative" },
    { Model: "Alto-800", Varient: "LXI" },
    { Model: "Alto-800", Varient: "VXI" },
    { Model: "Alto-K10", Varient: "LXI" },
    { Model: "Alto-K10", Varient: "VXI" },
    { Model: "S-Presso", Varient: "LXI" },
    { Model: "S-Presso", Varient: "VXI" },
    { Model: "Eeco", Varient: "STD" },
    { Model: "Eeco", Varient: "AC" },
    { Model: "Celerio", Varient: "LXI" },
    { Model: "Celerio", Varient: "VXI" },
    { Model: "Wagon-R", Varient: "LXI" },
    { Model: "Wagon-R", Varient: "VXI" },
    { Model: "Ignis", Varient: "Alpha" },
    { Model: "Ignis", Varient: "Delta" },
    { Model: "Ignis", Varient: "Zeta" },
    { Model: "Swift", Varient: "VXI" },
    { Model: "Swift", Varient: "ZXI" },
    { Model: "Swift", Varient: "LXI" },
    { Model: "Dzire", Varient: "VXI" },
    { Model: "Dzire", Varient: "ZXI" },
    { Model: "Dzire", Varient: "LXI" },
    { Model: "Baleno", Varient: "Alpha" },
    { Model: "Baleno", Varient: "Delta" },
    { Model: "Baleno", Varient: "Zeta" },
    { Model: "Brezza", Varient: "VXI" },
    { Model: "Brezza", Varient: "ZXI" },
    { Model: "Brezza", Varient: "LXI" },
    { Model: "Ertiga", Varient: "VXI" },
    { Model: "Ertiga", Varient: "ZXI" },
    { Model: "Ertiga", Varient: "LXI" },
    { Model: "Ciaz", Varient: "Alpha" },
    { Model: "Ciaz", Varient: "Delta" },
    { Model: "Ciaz", Varient: "Zeta" },
    { Model: "Grand Vitara", Varient: "Alpha" },
    { Model: "Grand Vitara", Varient: "Delta" },
    { Model: "Grand Vitara", Varient: "Zeta" },
    { Model: "S-Cross", Varient: "Alpha" },
    { Model: "S-Cross", Varient: "Delta" },
    { Model: "S-Cross", Varient: "Zeta" },
    { Model: "XL-6", Varient: "Alpha" },
    { Model: "XL-6", Varient: "Delta" },
    { Model: "XL-6", Varient: "Zeta" },
    { Model: "Jimmy", Varient: "Alpha" },
    { Model: "Jimmy", Varient: "Delta" },
    { Model: "Jimmy", Varient: "Zeta" },
    { Model: "Santro", Varient: "Magna" },
    { Model: "Santro", Varient: "Sportz" },
    { Model: "Santro", Varient: "Asta" },
    { Model: "Grand-I10", Varient: "Magna" },
    { Model: "Grand-I10", Varient: "Sportz" },
    { Model: "Grand-I10", Varient: "Asta" },
    { Model: "I-20", Varient: "Magna" },
    { Model: "I-20", Varient: "Sportz" },
    { Model: "I-20", Varient: "Asta" },
    { Model: "I-20 Active", Varient: "S" },
    { Model: "I-20 Active", Varient: "SX" },
    { Model: "I-20 Active", Varient: "SX(O)" },
    { Model: "Verna", Varient: "S" },
    { Model: "Verna", Varient: "SX" },
    { Model: "Verna", Varient: "SX(O)" },
    { Model: "Aura", Varient: "S" },
    { Model: "Aura", Varient: "SX" },
    { Model: "Aura", Varient: "SX(O)" },
    { Model: "Creata", Varient: "S" },
    { Model: "Creata", Varient: "SX" },
    { Model: "Creata", Varient: "SX(O)" },
    { Model: "Venue", Varient: "S" },
    { Model: "Venue", Varient: "SX" },
    { Model: "Venue", Varient: "SX(O)" },
    { Model: "Elentra", Varient: "Platinum" },
    { Model: "Elentra", Varient: "Signature" },
    { Model: "Elentra", Varient: "Signature(O)" },
    { Model: "Alcazer", Varient: "Platinum" },
    { Model: "Alcazer", Varient: "Signature" },
    { Model: "Alcazer", Varient: "Signature(O)" },
    { Model: "Tucson", Varient: "Platinum" },
    { Model: "Tucson", Varient: "Signature" },
    { Model: "Tucson", Varient: "Signature(O)" },
    { Model: "Kona", Varient: "Premium" },
    { Model: "Ioniq-5", Varient: "RWD" },
    { Model: "Amaze", Varient: "S" },
    { Model: "Amaze", Varient: "VX" },
    { Model: "Jazz", Varient: "VX" },
    { Model: "Jazz", Varient: "ZX" },
    { Model: "WRV", Varient: "VX" },
    { Model: "WRV", Varient: "ZX" },
    { Model: "City", Varient: "VX" },
    { Model: "City", Varient: "ZX" },
    { Model: "Civic", Varient: "VX" },
    { Model: "Civic", Varient: "VX" },
    { Model: "Astor", Varient: "Super" },
    { Model: "Astor", Varient: "Smart" },
    { Model: "Astor", Varient: "Sharp" },
    { Model: "Hector", Varient: "Super" },
    { Model: "Hector", Varient: "Smart" },
    { Model: "Hector", Varient: "Sharp" },
    { Model: "Hector-Plus", Varient: "Super" },
    { Model: "Hector-Plus", Varient: "Smart" },
    { Model: "Hector-Plus", Varient: "Sharp" },
    { Model: "Gloster", Varient: "Super" },
    { Model: "Gloster", Varient: "Smart" },
    { Model: "Gloster", Varient: "Sharp" },
    { Model: "ZS", Varient: "Super" },
    { Model: "ZS", Varient: "Smart" },
    { Model: "ZS", Varient: "Sharp" },
    { Model: "KUV-100", Varient: "K4" },
    { Model: "KUV-100", Varient: "K6" },
    { Model: "KUV-100", Varient: "K8" },
    { Model: "XUV-300", Varient: "W4" },
    { Model: "XUV-300", Varient: "W6" },
    { Model: "XUV-300", Varient: "W8" },
    { Model: "XUV-500", Varient: "W7" },
    { Model: "XUV-500", Varient: "W9" },
    { Model: "XUV-500", Varient: "W11" },
    { Model: "XUV-500", Varient: "W3" },
    { Model: "XUV-700", Varient: "MX" },
    { Model: "XUV-700", Varient: "AX" },
    { Model: "XUV-700", Varient: "AX-L" },
    { Model: "Bolero", Varient: "B4" },
    { Model: "Bolero", Varient: "B6" },
    { Model: "Bolero", Varient: "B6-(O)" },
    { Model: "Bolero-Neo", Varient: "N-4" },
    { Model: "Bolero-Neo", Varient: "N-8" },
    { Model: "Bolero-Neo", Varient: "N-10" },
    { Model: "Scorpio-Classis", Varient: "S3" },
    { Model: "Scorpio-Classis", Varient: "S11" },
    { Model: "Scorpio-N", Varient: "Z8" },
    { Model: "Scorpio-N", Varient: "Z8L" },
    { Model: "Scorpio-N", Varient: "Z4" },
    { Model: "Scorpio-N", Varient: "Z6" },
    { Model: "Thar", Varient: "AX" },
    { Model: "Thar", Varient: "LX" },
    { Model: "Marazzo", Varient: "M2" },
    { Model: "Marazzo", Varient: "M4" },
    { Model: "Marazzo", Varient: "M6" },
    { Model: "XUV-400", Varient: "EC" },
    { Model: "XUV-400", Varient: "EL" },
    { Model: "Sonet", Varient: "HTK" },
    { Model: "Sonet", Varient: "HTX" },
    { Model: "Sonet", Varient: "GTX" },
    { Model: "Sonet", Varient: "X" },
    { Model: "Carnival", Varient: "Prestige" },
    { Model: "Carnival", Varient: "Limousine" },
    { Model: "Carnival", Varient: "Limousine Plus" },
    { Model: "Seltos", Varient: "HTK" },
    { Model: "Seltos", Varient: "HTX" },
    { Model: "Seltos", Varient: "GTX" },
    { Model: "Seltos", Varient: "X" },
    { Model: "Carens", Varient: "Premium" },
    { Model: "Carens", Varient: "Prestige" },
    { Model: "Carens", Varient: "Luxury" },
    { Model: "EV-6", Varient: "GT-Line" },
    { Model: "Vantage", Varient: "Coupe" },
    { Model: "DB-11", Varient: "Evolution" },
    { Model: "DB-X", Varient: "Twin Turbo" },
    { Model: "Polo", Varient: "Comfortline" },
    { Model: "Polo", Varient: "Highline" },
    { Model: "Vento", Varient: "Comfortline" },
    { Model: "Vento", Varient: "Highline" },
    { Model: "Taigun", Varient: "Comfortline" },
    { Model: "Taigun", Varient: "Highline" },
    { Model: "Tiguan", Varient: "Comfortline" },
    { Model: "Tiguan", Varient: "Highline" },
    { Model: "Virtus", Varient: "Exclusive" },
    { Model: "Virtus", Varient: "Elegance" },
    { Model: "Jetta", Varient: "Premium" },
    { Model: "Jetta", Varient: "Technology Plus" },
    { Model: "Q3", Varient: "Premium" },
    { Model: "Q3", Varient: "Technology Plus" },
    { Model: "Q7", Varient: "Premium" },
    { Model: "Q7", Varient: "Technology Plus" },
    { Model: "A4", Varient: "Premium" },
    { Model: "A4", Varient: "Technology Plus" },
    { Model: "A6", Varient: "Premium" },
    { Model: "A6", Varient: "Technology Plus" },
    { Model: "Q5", Varient: "Sportback" },
    { Model: "Q5", Varient: "Quattro" },
    { Model: "S5", Varient: "RS" },
    { Model: "S5", Varient: "S" },
    { Model: "E-Tron", Varient: "Celebration" },
    { Model: "Q8", Varient: "Celebration" },
    { Model: "RS-5", Varient: "SportSBack" },
    { Model: "A8", Varient: "4L-TFSI" },
    { Model: "RS-Q8", Varient: "SportSBack" },
    { Model: "2-Series", Varient: "220d" },
    { Model: "2-Series", Varient: "220i" },
    { Model: "X-1", Varient: "sDrive18d" },
    { Model: "3-Series", Varient: "330i" },
    { Model: "3-Series", Varient: "320d" },
    { Model: "3-Series Limousine", Varient: "330 Li" },
    { Model: "3-Series Limousine", Varient: "320d Li" },
    { Model: "X-3", Varient: "xDrive30i SportX Plus" },
    { Model: "X-3", Varient: "xDrive20d Luxuary Edition" },
    { Model: "5-Series", Varient: "530i M Sport" },
    { Model: "5-Series", Varient: "520d M Sport" },
    { Model: "5-Series", Varient: "530d M Sport" },
    { Model: "5-Series", Varient: "520d M Sport Luxuary Edition" },
    { Model: "M340-I", Varient: "Xdrive" },
    { Model: "6-Series GT", Varient: "630i M Sport" },
    { Model: "6-Series GT", Varient: "620d M Sport" },
    { Model: "6-Series GT", Varient: "620d M Sport Luxury Line" },
    { Model: "I4", Varient: "eDrive40" },
    {
      Model: "X4",
      Varient: "xDrive30i M Sport X Silver Shadow Edition",
    },
    {
      Model: "Z4",
      Varient: "xDrive30d M Sport X Silver Shadow Edition",
    },
    { Model: "X5", Varient: "sDrive20 i" },
    { Model: "X5", Varient: "M 40i" },
    { Model: "X6", Varient: "xDrive40i SportX Plus" },
    { Model: "X6", Varient: "xDrive30d X Line" },
    { Model: "IX", Varient: "xDrive40i xLine" },
    { Model: "M4", Varient: "xDrive40i xLine" },
    { Model: "M4", Varient: "xDrive40i M Sport" },
    { Model: "M4", Varient: "M xDrive Coupe" },
    { Model: "7-Series", Varient: "740I" },
    { Model: "M5", Varient: "Competition" },
    { Model: "I7", Varient: "xDrive60" },
    { Model: "X5-M", Varient: "Competition" },
    { Model: "M8", Varient: "Coupe" },
    { Model: "XM", Varient: "Plug-in-Hybrid" },
    { Model: "Veron", Varient: "Coupe" },
    { Model: "E-6", Varient: "GL" },
    { Model: "Atto-3", Varient: "Extended Range" },
    { Model: "Atto-3", Varient: "Special Edition" },
    { Model: "RediGo", Varient: "LS" },
    { Model: "Triber", Varient: "RXL" },
    { Model: "Triber", Varient: "RXT" },
    { Model: "Triber", Varient: "RXZ" },
    { Model: "Kwid", Varient: "RXL" },
    { Model: "Kwid", Varient: "RXT" },
    { Model: "Kwid", Varient: "RXZ" },
    { Model: "Kiger", Varient: "RXL" },
    { Model: "Kiger", Varient: "RXT" },
    { Model: "Kiger", Varient: "RXZ" },
    { Model: "Duster", Varient: "RXL" },
    { Model: "Duster", Varient: "RXT" },
    { Model: "Duster", Varient: "RXZ" },
    { Model: "Ecosport", Varient: "Titanum" },
    { Model: "Endevour", Varient: "Titanum" },
    { Model: "Mustang", Varient: "Eco Boost Premium" },
    { Model: "D-Max", Varient: "Hi-Lander" },
    { Model: "D-Max", Varient: "V-Cross" },
    { Model: "MU-X", Varient: "4x4" },
    { Model: "MU-X", Varient: "4x2" },
    { Model: "Compass", Varient: "Sport" },
    { Model: "Compass", Varient: "Logitude" },
    { Model: "Cherokee", Varient: "Model" },
    { Model: "Meridian", Varient: "Limited" },
    { Model: "Wrangler", Varient: "Limited" },
    { Model: "XF", Varient: "Unlimited" },
    { Model: "F-Pace", Varient: "R-Dynamic" },
    { Model: "F-Type", Varient: "R-Dynamic" },
    { Model: "I-Pace", Varient: "R-Dynamic" },
    { Model: "Phantom-8", Varient: "HSE" },
    { Model: "Phantom-8", Varient: "SE" },
    { Model: "Wraith", Varient: "Coupe" },
    { Model: "Cullinan", Varient: "Couper" },
    { Model: "Dawn", Varient: "SUV" },
    { Model: "Dawn", Varient: "Sedan" },
    { Model: "Huracan-Evo", Varient: "AWD" },
    { Model: "Huracan-Evo", Varient: "V10" },
    { Model: "Huracan-Evo", Varient: "Special Edition RWD" },
    { Model: "Urus-Performante", Varient: "Twin-Turbo V8" },
    { Model: "LX", Varient: "500d" },
    { Model: "ES", Varient: "Exquisite" },
    { Model: "ES", Varient: "Luxury" },
    { Model: "NX", Varient: "350h F-Sport" },
    { Model: "NX", Varient: "350h Luxury" },
    { Model: "NX", Varient: "350h Exquisite" },
    { Model: "LC", Varient: "450hL" },
    { Model: "LS", Varient: "500h" },
    { Model: "RS", Varient: "500h-Luxury" },
    { Model: "RS", Varient: "Sport-Plus" },
    { Model: "XC-90", Varient: "B6 Ultimate" },
    { Model: "S-90", Varient: "B5 Ultimate" },
    { Model: "XC-60", Varient: "B5-Ultimate" },
    { Model: "XC-40", Varient: "B4-Ultimate" },
    { Model: "XC-40 electric", Varient: "A8" },
    { Model: "Range Rover Veler", Varient: "SR-Dynamic" },
    { Model: "Discovery", Varient: "SR-Dynamic" },
    { Model: "Discovery Sport", Varient: "SR-Dynamic" },
    { Model: "Range Rover", Varient: "SR-Dynamic" },
    { Model: "Range Rover Sport", Varient: "SR-Dynamic" },
    { Model: "Defender", Varient: "SR-Dynamic" },
    { Model: "Range Rover Evoque", Varient: "SR-Dynamic" },
    { Model: "MC-20", Varient: "Gt-Hybrid" },
    { Model: "Levantte", Varient: "Gt-Hybrid" },
    { Model: "Ghibli", Varient: "Gt-Hybrid" },
    { Model: "QuattroPorte", Varient: "Gt-Hybrid" },
    { Model: "G-Class", Varient: "220d" },
    { Model: "C-Class", Varient: "220d" },
    { Model: "GLA", Varient: "G350d" },
    { Model: "A-Class", Varient: "200d" },
    { Model: "S-Class", Varient: "S350d" },
    { Model: "Maybach S-Class", Varient: "S580d" },
    { Model: "E-Class", Varient: "E200d Exclusive" },
    { Model: "GLE", Varient: "400d" },
    { Model: "GLC", Varient: "200 Progressive" },
    { Model: "GLS", Varient: "400d" },
    { Model: "GLB", Varient: "200d Progressive Line" },
    { Model: "GLC AMG", Varient: "300d" },
    { Model: "A35-AMG", Varient: "4MATIC" },
    { Model: "GLA-AMG", Varient: "4MATIC" },
    { Model: "EQA", Varient: "300 4MATIC" },
    { Model: "A5-AMG", Varient: "4MATIC Plus" },
    { Model: "A53-AMG", Varient: "4MATIC" },
    { Model: "GT-AMG", Varient: "300 4MATIC" },
    { Model: "EBQ", Varient: "300 4MATIC" },
    { Model: "E63-AMG", Varient: "300 4MATIC" },
    { Model: "A45-AMG", Varient: "300 4MATIC" },
    { Model: "E53-AMG", Varient: "300 4MATIC" },
    { Model: "EQC", Varient: "300 4MATIC" },
    { Model: "EQS", Varient: "300 4MATIC" },
    { Model: "Cooper", Varient: "S" },
    { Model: "Kick", Varient: "XV" },
    { Model: "Magnite", Varient: "XL" },
    { Model: "Kushaq", Varient: "XV" },
    { Model: "Kushaq", Varient: "XL" },
    { Model: "Slavia", Varient: "Active" },
    { Model: "Slavia", Varient: "Ambition" },
    { Model: "Superb", Varient: "Active" },
    { Model: "Superb", Varient: "Ambition" },
    { Model: "Octavia", Varient: "Sportsline" },
    { Model: "Octavia", Varient: "L&K" },
    { Model: "Cayene", Varient: "Sportsline" },
    { Model: "Cayene", Varient: "L&K" },
    { Model: "911", Varient: "Base" },
    { Model: "Macan", Varient: "Base" },
    { Model: "Panemara", Varient: "Base" },
    { Model: "718", Varient: "Base" },
    { Model: "Tycan", Varient: "Base" },
    { Model: "Cayene Coupe", Varient: "Base" },
    { Model: "Innova", Varient: "GX" },
    { Model: "Innova", Varient: "VX" },
    { Model: "Innova", Varient: "ZX" },
    { Model: "Fortuner", Varient: "4x2" },
    { Model: "Fortuner", Varient: "4x4" },
    { Model: "Fortuner", Varient: "Legender" },
    { Model: "Land Crusier", Varient: "ZX" },
    { Model: "Land Crusier", Varient: "V8" },
    { Model: "Urban Crusier", Varient: "V" },
    { Model: "Urban Crusier", Varient: "G" },
    { Model: "Glanza", Varient: "V" },
    { Model: "Glanza", Varient: "G" },
    { Model: "Camry", Varient: "Hybrid" },
    { Model: "Vellfire", Varient: "Hybrid" },
    { Model: "Hilux", Varient: "STD-4X4" },
    { Model: "S", Varient: "S" },
    { Model: "C3", Varient: "Live" },
    { Model: "C3", Varient: "Feel" },
    { Model: "Gurkha", Varient: "4x4" },
    { Model: "Tempo Trax", Varient: "STD" },
    { Model: "Tempo Traveller -11", Varient: "STD" },
    { Model: "Tempo Traveller -14", Varient: "STD" },
    { Model: "Tempo Traveller -16", Varient: "STD" },
    { Model: "Tempo Traveller -24", Varient: "STD" }
  ];

  const [output, setOutput] = useState();
  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();

  const [vehicleregistration, setVehicleregistration] = useState();
  const [Manufactring, setManufactring] = useState();
  const [Engine, setEngine] = useState();
  const [Chassis, setChassis] = useState();
  const [Colour, setColour] = useState();
  const [Category1, setCategory1] = useState();
  const [Manufacturername, setManufacturerName] = useState();
  const [Model1, setModel1] = useState();
  const [Varient1, setVarient1] = useState();
  const [Seat1, setSeat1] = useState();
  const [Fuel1, setFuel1] = useState();
  const [Running, setRunning] = useState();
  const [Segment1, setSegment1] = useState();
  const [Attachmentdate, setAttachment] = useState();
  const [City, setCity] = useState();

  //cascading below are

  const [CatList, SetCatList] = useState();
  const [manList, SetManList] = useState([]);
  const [modelList, SetModelList] = useState([]);
  const [varientList, SetVarientList] = useState([]);
  const [fuel, SetFuel] = useState();
  const [segmentlist, SetSegmentlist] = useState([]);
  const [seat, SetSeat] = useState([]);
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      SetCatList(Category);
      SetFuel(Fuel);
      axios
        .get(__apiURLVehicle + "fetch?")
        .then((response) => {
          setVehicleDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  }, []);

  const handleSegment = (cat) => {
    const dt = Segment.filter((x) => x.Category === cat);
    SetSegmentlist(dt);
    const data = Manufacturer.filter(x => x.Category === cat)
    SetManList(data)
    const se = Seat.filter(x => x.Category === cat)
    SetSeat(se)
  };

  const handelModel = (id) => {
    const dt = Model.filter((x) => x.brand === id);
    SetModelList(dt);
  };
  const handelVarient = (id) => {
    const dt = Varient.filter((x) => x.Model === id);
    SetVarientList(dt);
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleChange1 = (event) => {
    setFile1(event.target.files[0]);
  };
  const handleChange2 = (event) => {
    setFile2(event.target.files[0]);
  };
  const handleChange3 = (event) => {
    setFile3(event.target.files[0]);
  };
  const handleChange4 = (event) => {
    setFile4(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("registration_no", vehicleregistration);
    formData.append("manufacturing_year", Manufactring);
    formData.append("engine_no", Engine);
    formData.append("chassis_no", Chassis);
    formData.append("colour", Colour);
    formData.append("category", Category1);
    formData.append("segment", Segment1);
    formData.append("manufacturer_name", Manufacturername);
    formData.append("vehicle_model", Model1);
    formData.append("varient", Varient1);
    formData.append("seat", Seat1);
    formData.append("fuel", Fuel1);
    formData.append("runnig_km", Running);
    formData.append("attachment_date", Attachmentdate);
    formData.append("city", City);
    formData.append("insurance", file);
    formData.append("registration", file1);
    formData.append("fitness", file2);
    formData.append("puc", file3);
    formData.append("permit", file4);

    const config = {
      "content-type": "multipart/form-data",
    };
    axios.post(__apiURLVehicle + "save", formData, config).then((response) => {
      setOutput("Vehicle added Successfully.");
      setVehicleregistration("");
      setChassis("");
      setCategory1("");
      setAttachment("");
      setManufacturerName("");
      setManufactring("");
      setCity("");
      setEngine("");
      setColour("");
      setModel1("");
      setRunning("");
      setVarient1("");
      setSeat1("");
      setFile("");
      setFile1("");
      setFile2("");
      setFile3("");
      setSegment1("");
      setFile4("");
      setFuel1("");
    });
  };

  const manageUserStatus = (_id, s) => {
    if (s == "block") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 0 },
      };
      axios.patch(__apiURLVehicle + "update", updateDetails).then(() => {
        navigate("/sdvehiclemgmt");
      });
    } else if (s == "verify") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 1 },
      };
      axios.patch(__apiURLVehicle + "update", updateDetails).then(() => {
        navigate("/sdvehiclemgmt");
      });
    } else {
      axios.delete(__apiURLVehicle + "delete/" + _id).then(() => {
        navigate("/sdvehiclemgmt");
      });
    }
  };

  //get data table

  return (
    <div>
      <div id="home-collapse">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <center>
              <h1 id="vmd">Vehicle Management</h1>
            </center>
            <div className="container-parcha">
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Add New Vehicle
              </button>
              <font color="black">{output}</font>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <form>
                    <h1 className="mgmt">Vehicle Registration Form</h1>
                    <div className="form-groupone">
                      <label className="mgmt">Vehicle Registration No.</label>
                      <input
                        type="text"
                        className="form-control"
                        value={vehicleregistration}
                        onChange={(e) => setVehicleregistration(e.target.value)}
                        placeholder="Vehicle Registration No."
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Manufacturing Year</label>
                      <input
                        type="date"
                        className="form-control"
                        value={Manufactring}
                        onChange={(e) => setManufactring(e.target.value)}
                        placeholder="Enter Manufactring Year"
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Engine No.</label>
                      <input
                        type="text"
                        className="form-control"
                        value={Engine}
                        onChange={(e) => setEngine(e.target.value)}
                        placeholder="Enter Engine No."
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Chassis No.</label>
                      <input
                        type="text"
                        className="form-control"
                        value={Chassis}
                        onChange={(e) => setChassis(e.target.value)}
                        placeholder="Enter Chassis No."
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Colour</label>
                      <input
                        type="text"
                        className="form-control"
                        value={Colour}
                        onChange={(e) => setColour(e.target.value)}
                        placeholder="Enter Colour Name"
                      />
                    </div>
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 mgmt"
                        for="inlineFormCustomSelect"
                      >
                        Choose Category
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        value={Category1}
                        onChange={(e) => setCategory1(e.target.value)}
                        onClick={(e) => handleSegment(e.target.value)}
                      >
                        <option>Choose Category </option>
                        {CatList && CatList !== undefined
                          ? CatList.map((row) => {
                            return <option> {row.Category} </option>;
                          })
                          : "No Category"}
                      </select>
                    </div>
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 mgmt"
                        for="inlineFormCustomSelect"
                      >
                        Choose Segment
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        value={Segment1}
                        onChange={(e) => setSegment1(e.target.value)}
                      >
                        <option>Choose Segment </option>
                        {segmentlist !== undefined
                          ? segmentlist &&
                          segmentlist.map((row) => {
                            return <option> {row.segment} </option>;
                          })
                          : "No Category"}
                      </select>
                    </div>
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 mgmt"
                        for="inlineFormCustomSelect"
                      >
                        Choose Manufacturer
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        value={Manufacturername}
                        onChange={(e) => setManufacturerName(e.target.value)}
                        onClick={(e) => handelModel(e.target.value)}
                      >
                        <option value="0">Choose Manufacturer </option>
                        {manList && manList !== undefined
                          ? manList.map((row) => {
                            return <option> {row.brand} </option>;
                          })
                          : "No Manufacturer"}
                      </select>
                    </div>
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 mgmt"
                        for="inlineFormCustomSelect"
                      >
                        Choose Model
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        value={Model1}
                        onChange={(e) => setModel1(e.target.value)}
                        onClick={(e) => handelVarient(e.target.value)}
                      >
                        <option>Choose Model</option>
                        {modelList && modelList !== undefined
                          ? modelList.map((row) => {
                            return <option>{row.Model}</option>;
                          })
                          : "No Model"}
                      </select>
                    </div>
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 mgmt"
                        for="inlineFormCustomSelect"
                      >
                        Choose Varient
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        value={Varient1}
                        onChange={(e) => setVarient1(e.target.value)}
                      >
                        <option>Choose Varient </option>
                        {varientList && varientList !== undefined
                          ? varientList.map((row) => {
                            return <option> {row.Varient} </option>;
                          })
                          : "No Varient"}
                      </select>
                    </div>
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 mgmt"
                        for="inlineFormCustomSelect"
                      >
                        Seating Capacity
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        value={Seat1}
                        onChange={(e) => setSeat1(e.target.value)}
                      >
                        <option value="0">Seating Capacity </option>
                        {seat && seat !== undefined
                          ? seat.map((row) => {
                            return (
                              <option value={row.id}> {row.seat} </option>
                            );
                          })
                          : "No Category"}
                      </select>
                    </div>
                    <div className="col-auto my-1">
                      <label
                        className="mr-sm-2 mgmt"
                        for="inlineFormCustomSelect"
                      >
                        Fuel Type
                      </label>
                      <select
                        className="custom-select mr-sm-2"
                        value={Fuel1}
                        onChange={(e) => setFuel1(e.target.value)}
                      >
                        <option>Fuel Type </option>
                        {fuel && fuel !== undefined
                          ? fuel.map((row) => {
                            return <option> {row.fuel} </option>;
                          })
                          : "No Fuel"}
                      </select>
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Running KM</label>
                      <input
                        type="number"
                        className="form-control"
                        value={Running}
                        onChange={(e) => setRunning(e.target.value)}
                        placeholder="Enter Running KM"
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Insurance Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Registration Card Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleChange1}
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Fitness Certificate Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleChange2}
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">PUC Certificate Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleChange3}
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Permit Certificate Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleChange4}
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">Date of Assosciation</label>
                      <input
                        type="date"
                        className="form-control"
                        value={Attachmentdate}
                        onChange={(e) => setAttachment(e.target.value)}
                        placeholder="Attachment Date"
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt">City Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={City}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                      />
                    </div>

                    <button
                      id="b5"
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <table id="tableuser" className="table table-bordered">
                <tr>
                  <th>ID</th>
                  <th>Registration Number</th>
                  <th>Manufactring Year</th>
                  <th>Engine No.</th>
                  <th>Chassis No.</th>
                  <th>Colour</th>
                  <th>Category</th>
                  <th>Segment</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Varient</th>
                  <th>Seat</th>
                  <th>Fuel</th>
                  <th>Running</th>
                  <th>City</th>
                  <th>Attachment Date</th>
                  <th>Insurance</th>
                  <th>Registration Card</th>
                  <th>Fitness</th>
                  <th>PUC</th>
                  <th>Permit</th>
                  <th>Status</th>
                  <th>Delete</th>
                  <th>Info</th>
                </tr>
                {vehicleDetails.map((row) => {
                  const I = "/assets/vehicledoc/insurance/" + row.insurance;
                  const RC =
                    "/assets/vehicledoc/registration/" + row.registration;
                  const Per = "/assets/vehicledoc/permit/" + row.permit;
                  const P = "/assets/vehicledoc/puc/" + row.puc;
                  const F = "/assets/vehicledoc/fitness/" + row.fitness;
                  return (
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.registration_no}</td>
                      <td>{row.manufacturing_year}</td>
                      <td>{row.engine_no}</td>
                      <td>{row.chassis_no}</td>
                      <td>{row.colour}</td>
                      <td>{row.category}</td>
                      <td>{row.segment}</td>
                      <td>{row.manufacturer_name}</td>
                      <td>{row.vehicle_model}</td>
                      <td>{row.varient}</td>
                      <td>{row.seat}</td>
                      <td>{row.fuel}</td>
                      <td>{row.runnig_km}</td>
                      <td>{row.city}</td>
                      <td>{row.attachment_date}</td>
                      <td>
                        <img src={I} height="120" width="150" />
                      </td>
                      <td>
                        <img src={RC} height="120" width="150" />
                      </td>
                      <td>
                        <img src={Per} height="120" width="150" />
                      </td>
                      <td>
                        <img src={P} height="120" width="150" />
                      </td>
                      <td>
                        <img src={F} height="120" width="150" />
                      </td>

                      <td>
                        {row.status == 0 && (
                          <a
                            style={{ color: "green" }}
                            onClick={() => {
                              manageUserStatus(row._id, "verify");
                            }}
                          >
                            Listed
                          </a>
                        )}
                        {row.status == 1 && (
                          <a
                            style={{ color: "orange" }}
                            onClick={() => {
                              manageUserStatus(row._id, "block");
                            }}
                          >
                            Blacklisted
                          </a>
                        )}
                      </td>
                      <td>
                        <a
                          style={{ color: "red" }}
                          onClick={() => {
                            manageUserStatus(row._id, "delete");
                          }}
                        >
                          Delete
                        </a>
                      </td>
                      <td>{row.info}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sdvehiclemgmt;
