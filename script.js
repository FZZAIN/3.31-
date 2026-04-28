let phone="601136756741";
let selectedCar="";
let selectedPrice="";
let featuredIndex=0;

/* DATA */
let allCars=[
{
name:"MERCEDES A180 STYLE AMG LINE",
brand:"MERCEDES",
year:"2020",
color:"SILVER",
price:136000,
mileage:"18,950 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"HALF LEATHER"
},
{
name:"HONDA ODYSSEY ABSOLUTE HONDA SENSING 03997",
brand:"HONDA",
year:"2021",
color:"PEARL",
price:155000,
mileage:"49,475 KM",
images:[
"images/ODYSSEY03997/1.jpg",
"images/ODYSSEY03997/2.jpg",
"images/ODYSSEY03997/3.jpg",
"images/ODYSSEY03997/4.jpg",
"images/ODYSSEY03997/5.jpg"
],
detail:"5B, DOP NAVI TV, FLIP DOWN MONITOR, 8 SEATER, MULTI VIEW MONITOR, 2 POWER SLIDE DOORS SEAT COVER ON"
},
{
name:"VOLKSWAGEN GOLF MK8R 12722",
brand:"VOLKSWAGEN",
year:"2023",
color:"BLACK",
price:235000,
mileage:"8,300 KM",
images:[
"images/VW12722/1.jpg",
"images/VW12722/2.jpg",
"images/VW12722/3.jpg",
"images/VW12722/4.jpg",
"images/VW12722/5.jpg"
],
detail:"ORIGINAL NAVI, TV, BACK CAMERA"
},
{
name:"TOYOTA HARRIER Z 14303",
brand:"TOYOTA",
year:"2020",
color:"BLACK",
price:146000,
mileage:"53,334 KM",
images:[
"images/harrier14303/1.jpg",
"images/harrier14303/2.jpg",
"images/harrier14303/3.jpg",
"images/harrier14303/4.jpg",
"images/harrier14303/5.jpg"
],
detail:"4B, JBL, 4 CAMERAS, POWER BOOT, DIM, BSM, HUD, MOP NAVI TV, HALF LEATHER"
},
{
name:"TOYOTA HARRIER Z LEATHER PACKAGE 44019",
brand:"TOYOTA",
year:"2021",
color:"PEARL",
price:156000,
mileage:"48,786 KM",
images:[
"images/harrier44019/1.jpg",
"images/harrier44019/2.jpg",
"images/harrier44019/3.jpg",
"images/harrier44019/4.jpg",
"images/harrier44019/5.jpg"
],
detail:"4.5B, LEATHER, MOP NAVI, TV, JBL, 4 CAMERAS, POWER BOOT, DIGITAL INNER MIRROR, BSM, HUD, MODELLISTA FULL AERO"
},
{
name:"TOYOTA HARRIER Z LEATHER PACKAGE 57708",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:156000,
mileage:"16,398 KM",
images:[
"images/harrier57708/1.jpg",
"images/harrier57708/2.jpg",
"images/harrier57708/3.jpg",
"images/harrier57708/4.jpg",
"images/harrier57708/5.jpg"
],
detail:"5A, LEATHER, MOP NAVI, TV, JBL, 4 CAMERAS, POWER BOOT, DIGITAL INNER MIRROR, BSM, HUD"
},
{
name:"TOYOTA HARRIER G 33711",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:235000,
mileage:"36,820 KM",
images:[
"images/harrier33711/1.jpg",
"images/harrier33711/2.jpg",
"images/harrier33711/3.jpg",
"images/harrier33711/4.jpg",
"images/harrier33711/5.jpg"
],
detail:"4.5B, HALF LEATHER, DISPLAY AUDIO BACK CAMERA, POWER BOOT, DIGITAL INNER MIRROR, BSM"
},
{
name:"TOYOTA GR COROLLA RZ 4WD 01308",
brand:"TOYOTA",
year:"2023",
color:"GREY",
price:230000,
mileage:"167 KM",
images:[
"images/corolla01308/1.jpg",
"images/corolla01308/2.jpg",
"images/corolla01308/3.jpg",
"images/corolla01308/4.jpg",
"images/corolla01308/5.jpg"
],
detail:"6A, HALF LEATHER, MOP NAVI, TV, JBL, BACK CAMERA, BSM, HUD"
},
{
name:"AUDI A5 SPORTBACK 45 TFSI SPORT QUATTRO S LINE PACKAGE 68224",
brand:"AUDI",
year:"2020",
color:"PEARL",
price:165000,
mileage:"50,000 KM",
images:[
"images/audi68224/1.jpg",
"images/audi68224/2.jpg",
"images/audi68224/3.jpg",
"images/audi68224/4.jpg",
"images/audi68224/5.jpg"
],
detail:"4.5B, NAVI, BLIND SPORT MONITOR, BLACK LEATHER"
},
{
name:"AUDI A7 SPORTBACK 55 TFSI QUATTRO S LINE 4WD 26900",
brand:"AUDI",
year:"2019",
color:"BLACK",
price:270000,
mileage:"52,808 KM",
images:[
"images/audi26900/1.jpg",
"images/audi26900/2.jpg",
"images/audi26900/3.jpg",
"images/audi26900/4.jpg",
"images/audi26900/5.jpg"
],
detail:"4.5C LEATHER, ORIGINAL NAVI, TV, 360 CAMERAS"
},
{
name:"AUDI Q5 45TFSI QUATTRO SPORT 4WD 85322",
brand:"AUDI",
year:"2019",
color:"BLUE",
price:163000,
mileage:"37,973 KM",
images:[
"images/audi85322/1.jpg",
"images/audi85322/2.jpg",
"images/audi85322/3.jpg",
"images/audi85322/4.jpg",
"images/audi85322/5.jpg"
],
detail:"5.0B, WHITE LEATHER SEAT, ORIGINAL NAVI TV, 4 CAMERA, POWER BOOT"
},
{
name:"VOLKSWAGEN GOLF GTI BASE GRADE 84876",
brand:"VOLKSWAGEN",
year:"2022",
color:"WHITE",
price:165000,
mileage:"19,440 KM",
images:[
"images/vw84876/1.jpg",
"images/vw84876/2.jpg",
"images/vw84876/3.jpg",
"images/vw84876/4.jpg",
"images/vw84876/5.jpg"
],
detail:"4.5B, ORIGINAL NAVI, BACK CAMERA"
},
{
name:"VOLKSWAGEN GOLF MK8R 2.0 14746",
brand:"VOLKSWAGEN",
year:"2023",
color:"WHITE",
price:255000,
mileage:"37,000 KM",
images:[
"images/vw14746/1.jpg",
"images/vw14746/2.jpg",
"images/vw14746/3.jpg",
"images/vw14746/4.jpg",
"images/vw14746/5.jpg"
],
detail:"4.5B, NAVI, BACK CAMERA, FLOW DESIGN AERO, MILTEK EXHAUST TIPS, EVENTURI INTAKE"
},
{
name:"MERCEDES BENZ A35 AMG PREMIUM PLUS 4MATIC UK SPEC 65872",
brand:"MERCEDES",
year:"2022",
color:"MOUNTAIN GREY METALLIC",
price:230000,
mileage:"17,600 KM",
images:[
"images/65872/1.jpg",
"images/65872/2.jpg",
"images/65872/3.jpg",
"images/65872/4.jpg",
"images/65872/5.jpg"
],
detail:"PANORAMIC GLASS ROOF, WRAP YELLOW, BLACK LEATHER, MEMORY SEATS, REVERSE CAMERA, KEYLESS GO, AERO KIT"
},
{
name:"MERCEDES BENZ A45 S 4MATIC 4WD 42444",
brand:"MERCEDES",
year:"2021",
color:"PEARL",
price:249000,
mileage:"22,178 KM",
images:[
"images/42444/1.jpg",
"images/42444/2.jpg",
"images/42444/3.jpg",
"images/42444/4.jpg",
"images/42444/5.jpg"
],
detail:"4.5B, ORIGINAL NAVI TV, BACK CAMERA, RADAR SAFETY PACKAGE"
},
{
name:"MERCEDES BENZ A180 STYLE SEDAN AMG LINE 45797",
brand:"MERCEDES",
year:"2020",
color:"WHITE",
price:145000,
mileage:"39,028 KM",
images:[
"images/45797/1.jpg",
"images/45797/2.jpg",
"images/45797/3.jpg",
"images/45797/4.jpg",
"images/45797/5.jpg"
],
detail:"4.5B, PANORAMIC ROOF, ORIGINAL NAVI, RADAR SAFETY PACKAGE, NAVIGATION PACKAGE"
},
{
name:"MERCEDES BENZ A180 SEDAN AMG LINE 04689",
brand:"MERCEDES",
year:"2021",
color:"BLACK",
price:151000,
mileage:"24,050 KM",
images:[
"images/04689/1.jpg",
"images/04689/2.jpg",
"images/04689/3.jpg",
"images/04689/4.jpg",
"images/04689/5.jpg"
],
detail:"4.5B, ORIGINAL NAVI TV, NAVIGATION PACKAGE"
},
{
name:"MERCEDES BENZ A180 STYLE SEDAN AMG LINE 45959",
brand:"MERCEDES",
year:"2021",
color:"WHITE",
price:154000,
mileage:"19,376 KM",
images:[
"images/45959/1.jpg",
"images/45959/2.jpg",
"images/45959/3.jpg",
"images/45959/4.jpg",
"images/45958/5.jpg"
],
detail:"5A, PANORAMIC SLIDING ROOF, HALF LEATHER, ORIGINAL NAVI TV, BACK CAMERA, RADAR SAFETY PACKAGE, AMG STYLING PACKAGE"
},
{
name:"MERCEDES BENZ A180 SEDAN AMG LINE 20109",
brand:"MERCEDES",
year:"2021",
color:"WHITE",
price:154000,
mileage:"20,905 KM",
images:[
"images/20109/1.jpg",
"images/20109/2.jpg",
"images/20109/3.jpg",
"images/20109/4.jpg",
"images/20109/5.jpg"
],
detail:"4.5A, PANORAMIC SLIDING ROOF, HALF LEATHER, ORIGINAL NAVI, RADAR SAFETY PACKAGE, NAVIGATION PACKAGE"
},
{
name:"MERCEDES BENZ CLA180 AMG LINE 01781",
brand:"MERCEDES",
year:"2022",
color:"WHITE",
price:188000,
mileage:"8,000 KM",
images:[
"images/01781/1.jpg",
"images/01781/2.jpg",
"images/01781/3.jpg",
"images/01781/4.jpg",
"images/01781/5.jpg"
],
detail:"5A, HALF LEATHER, ORIGINAL NAVI TV, BACK CAMERA"
},
{
name:"MERCEDES BENZ CLA180 AMG LINE 62504",
brand:"MERCEDES",
year:"2021",
color:"GREY",
price:178000,
mileage:"17,699 KM",
images:[
"images/62504/1.jpg",
"images/62504/2.jpg",
"images/62504/3.jpg",
"images/62504/4.jpg",
"images/62504/5.jpg"
],
detail:"4.5A, HALF LEATHER, ORIGINAL NAVI TV, AMG STYLING PACKAGE"
},
{
name:"MERCEDES BENZ CLA45 S 4MATIC PLUS 95201",
brand:"MERCEDES",
year:"2022",
color:"WHITE",
price:315000,
mileage:"38,242 KM",
images:[
"images/95201/1.jpg",
"images/95201/2.jpg",
"images/95201/3.jpg",
"images/95201/4.jpg",
"images/95201/5.jpg"
],
detail:"4.5B, PANORAMIC SLIDING ROOF, ORIGINAL NAVI TV, BURMESTER SOUND, BSM, HUD, AMG ADVANCED PACKAGE, AMG PERFORMANCE PACKAGE"
},
{
name:"MERCEDES BENZ GLA35 4MATIC AMG 48980",
brand:"MERCEDES",
year:"2022",
color:"PEARL",
price:220000,
mileage:"46,610 KM",
images:[
"images/48980/1.jpg",
"images/48980/2.jpg",
"images/48980/3.jpg",
"images/48980/4.jpg",
"images/48980/5.jpg"
],
detail:"4.5B, PANORAMIC SLIDING ROOF, ORIGINAL NAVI TV, 360 CAMERA, POWER TRUNK, AMG PERFORMANCE PACKAGE, ADVANCED PACKAGE, RECARO SEATS"
},
{
name:"HONDA CIVIC TYPE R FL5 05075",
brand:"HONDA",
year:"2024",
color:"BLACK",
price:258000,
mileage:"12,350 KM",
images:[
"images/05075/1.jpg",
"images/05075/2.jpg",
"images/05075/3.jpg",
"images/05075/4.jpg",
"images/05075/5.jpg"
],
detail:"5A, DOP NAVI TV"
},
{
name:"HONDA CIVIC HATCHBACK FL1 AT 03363",
brand:"HONDA",
year:"2021",
color:"BLUE",
price:140000,
mileage:"42,350 KM",
images:[
"images/03363/1.jpg",
"images/03363/2.jpg",
"images/03363/3.jpg",
"images/03363/4.jpg",
"images/03363/5.jpg"
],
detail:"4.5B, HALF LEATHER, DOP NAVI TV, HONDA SENSING"
},
{
name:"HONDA NBOX CUSTOM TURBO HONDA SENSING 45748",
brand:"HONDA",
year:"2024",
color:"BLACK",
price:110000,
mileage:"8,200 KM",
images:[
"images/45748/1.jpg",
"images/45748/2.jpg",
"images/45748/3.jpg",
"images/45748/4.jpg",
"images/45748/5.jpg"
],
detail:"4A, NEW FACELIFT, MAKER NAVI TV, AROUND VIEW 4 CAMERA, HALF LEATHER SEAT, 2 POWER DOOR, HONDA SENSING"
},
{
name:"HONDA NBOX CUSTOM TURBO COORDINATE STYLE MONOTONE 40329",
brand:"HONDA",
year:"2024",
color:"PEARL WHITE",
price:110000,
mileage:"26,000 KM",
images:[
"images/40329/1.jpg",
"images/40329/2.jpg",
"images/40329/3.jpg",
"images/40329/4.jpg",
"images/40329/5.jpg"
],
detail:"4.5B, NEW FACELIFT, MAKER NAVI TV, BACK CAMERA, HALF LEATHER SEAT, 2 POWER DOOR, HONDA SENSING"
},
{
name:"TOYOTA NOAH SI WXB 3 58889",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:122000,
mileage:"61,000 KM",
images:[
"images/58889/1.jpg",
"images/58889/2.jpg",
"images/58889/3.jpg",
"images/58889/4.jpg",
"images/58889/5.jpg"
],
detail:"4.5, NAVI TV, BACK CAMERA, DIGITAL INNER MIRROR, 7 SEATER, 2 POWER DOOR"
},
{
name:"TOYOTA NOAH SI WXB 3 65315",
brand:"TOYOTA",
year:"2021",
color:"PEARL",
price:133000,
mileage:"54,000 KM",
images:[
"images/65315/1.jpg",
"images/65315/2.jpg",
"images/65315/3.jpg",
"images/65315/4.jpg",
"images/65315/5.jpg"
],
detail:"4A, NAVI TV, BACK CAMERA, REAR ENTERTAINMENT, 7 SEATER, 2 POWER DOOR"
},
{
name:"TOYOTA VOXY ZS KIRAMEKI 3 83144",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:129000,
mileage:"24,143 KM",
images:[
"images/83144/1.jpg",
"images/83144/2.jpg",
"images/83144/3.jpg",
"images/83144/4.jpg",
"images/83144/5.jpg"
],
detail:"4.5B, AFM NAVI, 2 POWER SLIDE DOOR"
},
{
name:"TOYOTA VOXY ZS KIRAMEKI 3 00854",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:128000,
mileage:"47,770 KM",
images:[
"images/00854/1.jpg",
"images/00854/2.jpg",
"images/00854/3.jpg",
"images/00854/4.jpg",
"images/00854/5.jpg"
],
detail:"4.5B, AFM NAVI, 2 POWER SLIDE DOOR"
},
{
name:"TOYOTA VOXY ZS KIRAMEKI 3 94147",
brand:"TOYOTA",
year:"2021",
color:"PEARL",
price:128000,
mileage:"44,800 KM",
images:[
"images/94147/1.jpg",
"images/94147/2.jpg",
"images/94147/3.jpg",
"images/94147/4.jpg",
"images/94147/5.jpg"
],
detail:"4B, AFM NAVI TV, 2 POWER SLIDE DOORS"
},
{
name:"TOYOTA VOXY ZS KIRAMEKI 3 98323",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:128000,
mileage:"58,000 KM",
images:[
"images/98323/1.jpg",
"images/98323/2.jpg",
"images/98323/3.jpg",
"images/98323/4.jpg",
"images/98323/5.jpg"
],
detail:"4, NAVI TV, BACK CAMERA, 7 SEATER, 2 POWER DOOR, BLACK HALF LEATHER INTERIOR, TOYOTA SAFETY, PRE CRASH, LANE DEPARTURE ALERT, MAKER ALLOY WHEELS, LED HEADLIGHT, FOG"
},
{
name:"TOYOTA VELLFIRE Z PREMIER 02491",
brand:"TOYOTA",
color:"WHITE",
price:330000,
mileage:"22,000 KM",
images:[
"images/02491/1.jpg",
"images/02491/2.jpg",
"images/02491/3.jpg",
"images/02491/4.jpg",
"images/02491/5.jpg"
],
detail:"5A, SUNROOF, MODELISTA BODYKIT, STD LEATHER, DISPLAY AUDIO, 4 CAMERAS, 2 POWER SLIDE DOORS, POWER BOOT 3 EYE LED, DIGITAL INNER MIRROR, BSM, HUD"
},
{
name:"TOYOTA VELLFIRE Z Golden Eyes 2 89234",
brand:"TOYOTA",
year:"2021",
color:"PEARL",
price:180000,
mileage:"34,541 KM",
images:[
"images/89234/1.jpg",
"images/89234/2.jpg",
"images/89234/3.jpg",
"images/89234/4.jpg",
"images/89234/5.jpg"
],
detail:"5A, SUNROOF, HALF LEATHER, DISPLAY AUDIO, BACK CAMERA, 2 POWER SLIDE DOORS, POWER BOOT, 3 EYE LED, TOYOTA SAFETY SENSE, MODELLISTA AERO, AFM ALLOY WHEELS"
},
{
name:"TOYOTA ALPHARD Z 01628",
brand:"TOYOTA",
year:"2023",
color:"BLACK",
price:296000,
mileage:"3,350 KM",
images:[
"images/01628/1.jpg",
"images/01628/2.jpg",
"images/01628/3.jpg",
"images/01628/4.jpg",
"images/01628/5.jpg"
],
detail:"SUNROOF, DIM, UNIVERSAL STEP LEFT AND RIGHT, FLIP-DOWN MONITOR, 360 CAMERA, 2 POWER SLIDE DOORS, POWER BOOT, TOYOTA TEAM MATE SAFETY SYSTE"
},
{
name:"TOYOTA ALPHARD SC PACKAGE 93597",
brand:"TOYOTA",
year:"2021",
color:"BLACL",
price:199000,
mileage:"31,370 KM",
images:[
"images/93597/1.jpg",
"images/93597/2.jpg",
"images/93597/3.jpg",
"images/93597/4.jpg",
"images/93597/5.jpg"
],
detail:"4.5B, SUNROOF, STD LEATHER, MOP NAVI TV, JBL, REAR ENTERTAINMENT, 4 CAMERAS, 2 POWER SLIDE DOORS, POWER BOOT, 3 EYE LED, BSM, TOYOTA SAFETY SENSE, MODELISTA BODYKIT"
},
{
name:"TOYOTA ALPHARD S EDITION 7SEATER 56723",
brand:"TOYOTA",
year:"2023",
color:"BLACK",
price:190000,
mileage:"34,179 KM",
images:[
"images/56723/1.jpg",
"images/56723/2.jpg",
"images/56723/3.jpg",
"images/56723/4.jpg",
"images/56723/5.jpg"
],
detail:"4.5B, SUNROOF, DISPLAY AUDIO, FLIP DOWN MONITOR, 2 POWER SLIDE DOOR"
},
{
name:"TOYOTA ALPHARD S EDITION 8SEATER 04902",
brand:"TOYOTA",
year:"2022",
color:"PEARL",
price:183000,
mileage:"53,016 KM",
images:[
"images/04902/1.jpg",
"images/04902/2.jpg",
"images/04902/3.jpg",
"images/04902/4.jpg",
"images/04902/5.jpg"
],
detail:"4B, SUNROOF, DISPLAY AUDIO, FLIP DOWN MONITOR, BACK CAMERA, 2 POWER SLIDE DOORS, TOYOTA SAFETY SENSE, SEAT COVER ON, AFM ALLOY HEELS"
},
{
name:"TOYOTA ALPHARD X EDITION 8SEATER 57485",
brand:"TOYOTA",
year:"2022",
color:"WHITE",
price:148000,
mileage:"49,187 KM",
images:[
"images/57485/1.jpg",
"images/57485/2.jpg",
"images/57485/3.jpg",
"images/57485/4.jpg",
"images/57485/5.jpg"
],
detail:"3.5C, DISPLAY AUDIO, REAR MONITOR, BACK CAMERA, 2 POWER SLIDE DOORS, TOYOTA SAFETY SENSE"
},
{
name:"LEXUS RX350 F SPORT 4WD 02533",
brand:"LEXUS",
year:"2023",
color:"PEARL",
price:303000,
mileage:"24,444 KM",
images:[
"images/02533/1.jpg",
"images/02533/2.jpg",
"images/02533/3.jpg",
"images/02533/4.jpg",
"images/02533/5.jpg"
],
detail:"5A, BLACK INTERIOR, PANORAMIC ROOF, HALF LEATHER, ORIGINAL NAVI TV, 4CAMERAS, POWER BOOT, 3 EYE LED, BSM, HUD"
},
{
name:"LEXUS RX350 F SPORT 4WD 00399",
brand:"LEXUS",
year:"2023",
color:"PEARL",
price:303000,
mileage:"27,881 KM",
images:[
"images/00399/1.jpg",
"images/00399/2.jpg",
"images/00399/3.jpg",
"images/00399/4.jpg",
"images/00399/5.jpg"
],
detail:"4.5A, BLACK INTERIOR, PANORAMIC ROOF, HALF LEATHER, ORIGINAL NAVI TV, 4CAMERAS, POWER BOOT, 3 EYE LED, BSM, HUD"
},
{
name:"LEXUS RX350 F SPORT 4WD 00988",
brand:"LEXUS",
year:"2023",
color:"PEARL",
price:303000,
mileage:"29,830 KM",
images:[
"images/00899/1.jpg",
"images/00899/2.jpg",
"images/00899/3.jpg",
"images/00899/4.jpg",
"images/00899/5.jpg"
],
detail:"4.5B, RED INTERIOR, HALF LEATHER, ORIGINAL NAVI TV, 4 CAMERAS, POWER BOOT, 3 EYE LED, BSM, HUD"
},
{
name:"LEXUS RX450H VERSION L 4WD 24498",
brand:"LEXUS",
year:"2023",
color:"BLACK",
price:346000,
mileage:"21,377 KM",
images:[
"images/24498/1.jpg",
"images/24498/2.jpg",
"images/24498/3.jpg",
"images/24498/4.jpg",
"images/24498/5.jpg"
],
detail:"FULLY LOADED, MODELISTA BODYKIT, MODELISTA MUFFLER, MODELISTA RIM"
},
{
name:"MERCEDES BENZ A180 HATCHBACK AMG LINE SA1745",
brand:"MERCEDES",
year:"2023",
color:"WHITE",
price:178000,
mileage:"22,529 KM",
images:[
"images/sa1745/1.jpg",
"images/sa1745/2.jpg",
"images/sa1745/3.jpg",
"images/sa1745/4.jpg",
"images/sa1745/5.jpg"
],
detail:"5A, FULLY LOADED, PR, ADV PCKG, 360, HUD, RED LEATHER SEAT"
},
{
name:"BMW 118I M SPORT EW253",
brand:"BMW",
year:"2021",
color:"BLACK",
price:130000,
mileage:"26,000 KM",
images:[
"images/ew253/1.jpg",
"images/ew253/2.jpg",
"images/ew253/3.jpg",
"images/ew253/4.jpg",
"images/ew253/5.jpg"
],
detail:"NAVI TV, BACK CAM, 2 POWER SEAT, BLACK HALF LEATHER INT, CRUISE CONTROL, 18 AW"
},
{
name:"BMW M2 BASE GRAD EW406",
brand:"BMW",
year:"2023",
color:"BLACK",
price:360000,
mileage:"11,516 KM",
images:[
"images/ew406/1.jpg",
"images/ew406/2.jpg",
"images/ew406/3.jpg",
"images/ew406/4.jpg",
"images/ew406/5.jpg"
],
detail:"4.5AHIGHLINE PCKG, HARMAN KARDON, ALARM SYSTEM, BLACK LEATHER"
},
{
name:"HONDA CIVIC TYPE R FL5 BM2228",
brand:"HONDA",
year:"2023",
color:"BLUE",
price:275000,
mileage:"7,951 KM",
images:[
"images/bm2228/1.jpg",
"images/bm2228/2.jpg",
"images/bm2228/3.jpg",
"images/bm2228/4.jpg",
"images/bm2228/5.jpg"
],
detail:"5A, NAVI, TV, 19 AW"
},
{
name:"HONDA CIVIC TYPE R FL5 BM2124",
brand:"HONDA",
year:"2023",
color:"BLUE",
price:260000,
mileage:"4152 KM",
images:[
"images/bm2124/1.jpg",
"images/bm2124/2.jpg",
"images/bm2124/3.jpg",
"images/bm2124/4.jpg",
"images/bm2124/5.jpg"
],
detail:"5A, FULL AEROKITS, REAR SPOILER, TV CAM"
},
{
name:"HONDA CIVIC TYPE R FL5 DD204",
brand:"HONDA",
year:"2024",
color:"WHITE",
price:263000,
mileage:"2651 KM",
images:[
"images/dd204/1.jpg",
"images/dd204/2.jpg",
"images/dd204/3.jpg",
"images/dd204/4.jpg",
"images/dd204/5.jpg"
],
detail:"TV, BACK CAM, CRUISE CONTROL, RED BREMBO CALIPERS, HONDA SENSING, DIGITAL METER"
},
{
name:"HONDA CIVIC TYPE R FL5 SA1883",
brand:"HONDA",
year:"2024",
color:"RED",
price:270000,
mileage:"13,000 KM",
images:[
"images/sa1883/1.jpg",
"images/sa1883/2.jpg",
"images/sa1883/3.jpg",
"images/sa1883/4.jpg",
"images/sa1883/5.jpg"
],
detail:"5A, PUSH START, TV CAMERA"
},
{
name:"HONDA CIVIC TYPE R FL5 AM471",
brand:"HONDA",
year:"2025",
color:"RED",
price:280000,
mileage:"4887 KM",
images:[
"images/am471/1.jpg",
"images/am471/2.jpg",
"images/am471/3.jpg",
"images/am471/4.jpg",
"images/am471/5.jpg"
],
detail:"6A, DOP NAVI TV"
},
{
name:"HONDA CIVIC TYPE R FL5 EW415",
brand:"HONDA",
year:"2024",
color:"GREY",
price:279000,
mileage:"75 KM",
images:[
"images/ew415/1.jpg",
"images/ew415/2.jpg",
"images/ew415/3.jpg",
"images/ew415/4.jpg",
"images/ew415/5.jpg"
],
detail:"6A, RED FLOORMAT"
},
{
name:"HONDA CIVIC TYPE R RACING BLACK PCKG FL5 SA1775",
brand:"HONDA",
year:"2025",
color:"BLUE",
price:290000,
mileage:"10 KM",
images:[
"images/alphard/1.jpg",
"images/sa1775/2.jpg",
"images/sa1775/3.jpg",
"images/sa1775/4.jpg",
"images/sa1775/5.jpg"
],
detail:"SA, TYPE R RACING BLACK PCKG"
},
{
name:"HONDA CIVIC TYPE R RACING BLACK PCKG FL5 SA1776",
brand:"HONDA",
year:"2025",
color:"RED",
price:300000,
mileage:"48 KM",
images:[
"images/sa1776/1.jpg",
"images/sa1776/2.jpg",
"images/sa1776/3.jpg",
"images/sa1776/4.jpg",
"images/sa1776/5.jpg"
],
detail:"SA, TYPE R RACING BLACK PCKG"
},
{
name:"HONDA CIVIC EX FL1 AUTO DD234",
brand:"HONDA",
year:"2022",
color:"BLUE",
price:162000,
mileage:"28,464 KM",
images:[
"images/dd234/1.jpg",
"images/dd234/2.jpg",
"images/dd234/3.jpg",
"images/dd234/4.jpg",
"images/dd234/5.jpg"
],
detail:"4.5B, AT, BSM, HONDA SENSIING"
},
{
name:"HONDA CIVIC EX FL1 DD186",
brand:"HONDA",
year:"2022",
color:"BLACK",
price:155000,
mileage:"26,708 KM",
images:[
"images/dd186/1.jpg",
"images/dd186/2.jpg",
"images/dd186/3.jpg",
"images/dd186/4.jpg",
"images/dd186/5.jpg"
],
detail:"4.5B, TV, BACK CAM, HALF LEATHER SEAT, CRUISE CONTROL, BOSE SOUND, HONDA SENSING, BSM, DIGITAL METER"
},
{
name:"HONDA CIVIC EX FL1 DC468",
brand:"HONDA",
year:"2021",
color:"BLACK",
price:148000,
mileage:"45,272 KM",
images:[
"images/dc468/1.jpg",
"images/dc468/2.jpg",
"images/dc468/3.jpg",
"images/dc468/4.jpg",
"images/dc468/5.jpg"
],
detail:"4.B, NAVI, AW, BOSE, BACK CAM, MUFFLER"
},
{
name:"HONDA ODYSSEY ABSOLUTE 7SEATER BMT2192",
brand:"HONDA",
year:"2021",
color:"BLACK",
price:155000,
mileage:"23,269 KM",
images:[
"images/bmt2192/1.jpg",
"images/bmt2192/2.jpg",
"images/bmt2192/3.jpg",
"images/bmt2192/4.jpg",
"images/bmt2192/5.jpg"
],
detail:"4.5, PUSH START BUTTOM, REVERSE CAMERA, CEILING TV"
},
{
name:"HONDA STEPWAGON SPADA 7 SEATER BMT2232",
brand:"HONDA",
year:"2020",
color:"WHITE",
price:165000,
mileage:"25,273 KM",
images:[
"images/bmt2232/1.jpg",
"images/bmt2232/2.jpg",
"images/bmt2232/3.jpg",
"images/bmt2232/4.jpg",
"images/bmt2232/5.jpg"
],
detail:"3 PD, 1 TV, BACK CAM, HALF LEATHER SEAT, HONDA SENSING, CRUISE CONTROL"
},
{
name:"HONDA STEPWAGON SPADA 7SEATER DD245",
brand:"HONDA",
year:"2022",
color:"BLACK",
price:165000,
mileage:"37,856 KM",
images:[
"images/dd245/1.jpg",
"images/dd245/2.jpg",
"images/dd245/3.jpg",
"images/dd245/4.jpg",
"images/dd245/5.jpg"
],
detail:"HONDA SENSING, BSM, 3 POWER DOOR"
},
{
name:"HONDA STEPWAGON SPADA 7 SEATER BMT2197",
brand:"HONDA",
year:"2023",
color:"BLACK",
price:170000,
mileage:"39,118 KM",
images:[
"images/bmt2197/1.jpg",
"images/bmt2197/2.jpg",
"images/bmt2197/3.jpg",
"images/bmt2197/4.jpg",
"images/bmt2197/5.jpg"
],
detail:"4A, PD, 2 TV, MULTI VIEW CAM, HALF LEATHER, HONDA SENSING, CRUISE CONTROL"
},
{
name:"HONDA STEPWAGON 1.5 SPADA 7 SEATER BMT2198",
brand:"HONDA",
year:"2023",
color:"DARKBLUE",
price:170000,
mileage:"33,600 KM",
images:[
"images/bmt2198/1.jpg",
"images/bmt2198/2.jpg",
"images/bmt2198/3.jpg",
"images/bmt2198/4.jpg",
"images/bmt2198/5.jpg"
],
detail:"4.5B, 3 PD, 1 TV, BACK CAM, HALF LEATHER, HONDA SENSING, BSM, CRUISE CONTROL"
},
{
name:"LAND ROVER DEFENDER P400 XS EDITION SA782",
brand:"LAND",
year:"2021",
color:"SILVER",
price:460000,
mileage:"32,967 KM",
images:[
"images/sa782/1.jpg",
"images/sa782/2.jpg",
"images/sa782/3.jpg",
"images/sa782/4.jpg",
"images/sa782/5.jpg"
],
detail:"SUNROOF, PANORAMIC ROOF, LED LIGHT, FULL LEATHER SEAT, 2 ELECTRIC SEAT, DIGITAL INNER MIRROW, BLIND SPORT MONITOR"
},
{
name:"LEXUS LBX MORIZO RR AUTO EW257",
brand:"LEXUS",
year:"2024",
color:"WHITE",
price:288000,
mileage:"3,500 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"6A, 4 CAM, BLACK LEATHER SEAT, BSM, HUD, PB, 19 AW"
},
{
name:"LEXUS IS300 F SPORT MODE BLACK MODE BM1981",
brand:"LEXUS",
year:"2020",
color:"WHITE",
price:210000,
mileage:"36,634 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"4.5B, SR, TV, PANOCAM, RED LEATHER SEAT INT, PRECRASH, BSM, ORANGE CALIPER"
},
{
name:"LEXUS LM500H EXECUTIVE EW407",
brand:"LEXUS",
year:"2024",
color:"GREY",
price:782000,
mileage:"6,000 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"5A, 4 SEATER, MODELLISTA BODYKIT,19 RIMS, SIGNATURE CHROME SELECTION"
},
{
name:"MAZDA ROADSTAR RF RS MT SA1672",
brand:"MAZDA",
year:"2022",
color:"WHITE",
price:170000,
mileage:"16,500 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"5A, BOSE, 16 ALLOYS, RECARO SEATS, HALF LEATHER, MAZDA SPORT BODYKIT FRS"
},
{
name:"MERCEDES BENZ AMG A35 4MATIC SEDAN EW368",
brand:"MERCEDES",
year:"2022",
color:"WHITE",
price:233000,
mileage:"23,647 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4.5B, FULLY LOADED, PR, AMG PERFORMANCE, AMG ADV, 360, HUD, GREY BLACK LEATHER"
},
{
name:"MERCEDES BENZ A45 S 4MATIC PLUS AM437",
brand:"MERCEDES",
year:"2021",
color:"GREY",
price:255000,
mileage:"17,638 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"4.5A, FULLY LOADED, PR, AMG ADV, AMG PERFORMANCE, RED BLACK LEATHER"
},
{
name:"MERCEDES BENZ A180 AMG LINE SA1506",
brand:"MERCEDES",
year:"2022",
color:"RED",
price:159000,
mileage:"22,946 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"4.5B, NAVI, RADAR SAFETY, HALF LEATHER"
},
{
name:"MERCEDES BENZ A180 STYLE SEDAN DD251",
brand:"MERCEDES",
year:"2023",
color:"RED",
price:163000,
mileage:"27,583 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4.5B, PADDLE SHIFT,MEMORY ELECT SEATS, HALF LEATHER SEATS, AMBIENT LIGHT, BSM, REV CAMERA,16 SPORT RIMS"
},
{
name:"MERCEDES BENZ A180 HATCHBACK AMG LINE SA1745",
brand:"MERCEDES",
year:"2023",
color:"WHITE",
price:178000,
mileage:"22,529 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"5A, FULLY LOADED, PR, ADV PCKG, 360, HUD, RED LEATHER SEAT"
},
{
name:"MERCEDES BENZ B180 AMG LINE DD253",
brand:"MERCEDES",
year:"2021",
color:"SILVER",
price:140000,
mileage:"41,250 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"4C, MEMORY ELETR SEATS, HALF LEATHER SEATS, HUD, BSM, AMBIENT LIGHT, 4 CAMERA, PADDLE SHIFT, POWER BOOT"
},
{
name:"MERCEDES BENZ B180 AMG LINE DD254",
brand:"MERCEDES",
year:"2021",
color:"BLACK",
price:140000,
mileage:"41,783 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"5A, PADDLE SHIFT, AMBIENT LIGHT, MEMORY ELECT SEATS, HALF LEATHER SEATS, REV CAMERA, 18 SPORT RIMS"
},
{
name:"MERCEDES BENZ B180 AMG LINE DD252",
brand:"MERCEDES",
year:"2021",
color:"WHITE",
price:140000,
mileage:"21,371 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"3.5B, PADDLE SHIFT, HUD, BSM, MEMORY ELECT SEATS, AMBIENT LIGHT, HALF LEATHER SEATS, POWER BOOT, 18 SPORT RIM"
},
{
name:"MERCEDES BENZ C200 LAUREUS EDITION BM2003",
brand:"MERCEDES",
year:"2021",
color:"WHITE",
price:155000,
mileage:"38,893 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"4.5B, IMITATION BLACK LEATHER SEAT, LEATHER EXCLUSIVE PCKG, PB, 1 CAM, BSM"
},
{
name:"MERCEDES BENZ C200 LAUREUS ED SPORT PLUS SA1954",
brand:"MERCEDES",
year:"2021",
color:"WHITE",
price:165000,
mileage:"14,258 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"5B, DUAL MEMORY SEAT, LED HEADLIGHTS, LEATHER SEAT, HUD"
},
{
name:"MERCEDES BENZ C200 LAUREUS ED SPORT PLUS BM2225",
brand:"MERCEDES",
year:"2021",
color:"SILVER",
price:160000,
mileage:"16,935 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4.5B, HUD, PB, SPORT PACKAGE"
},
{
name:"MERCEDES BENZ C200 AVG AMG LINE BM1908",
brand:"MERCEDES",
year:"2022",
color:"GREY",
price:220000,
mileage:"16,344 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4.5B, REAR AXLE STEERING, LEATHER EXCLUSIVE PCKG, 3 USB INTERFACE, HUD, PB, 360 CAMERA"
},
{
name:"MERCEDES BENZ C200 AVANTGARDE AMG LINE PSZ452",
brand:"MERCEDES",
year:"2022",
color:"SILVER",
price:220000,
mileage:"18,145 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"PR, BROWN LEATHER, 360 CAM"
},
{
name:"MERCEDES BENZ C200 AVANTGARDE ISG AMG LINE DC522",
brand:"MERCEDES",
year:"2022",
color:"WHITE",
price:220000,
mileage:"12,488 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"4.5B, NO REAR AXLE, NO BURMESTER, PR, BLACK LEATHER, HUD, 360 CAM, 2 MEMORY, PB, AMG LINE"
},
{
name:"MERCEDES BENZ C200 AVANTGARDE ISG AMG LINE DC251",
brand:"MERCEDES",
year:"2021",
color:"BLACK",
price:200000,
mileage:"45,689 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4.5B, NAVI, TV, SR, BURMESTER, 360 CAMERA"
},
{
name:"MERCEDES BENZ CLA35 4MATIC DC253",
brand:"MERCEDES",
year:"2020",
color:"YELLOW",
price:258000,
mileage:"19,350 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4.5B, SUNROOF, 360 CAM, AMG SPORT SEAT"
},
{
name:"MERCEDES BENZ AMG CLA35 4MATIC PSZ460",
brand:"MERCEDES",
year:"2024",
color:"YELLOW",
price:315000,
mileage:"8,126 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"5A, PERFORMANCE PKG, ADVANCED PKG, PR"
},
{
name:"MERCEDES BENZ AMG CLA35 4MATIC SHOOTING BRAKE SA1388",
brand:"MERCEDES",
year:"2021",
color:"SILVER",
price:228000,
mileage:"49,524 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"4.5B, SUNROOF, 2 MEMORY, AMG PERFORMANCE SEAT, AIRIER SUSPENSION, HUD, POWER BOOT"
},
{
name:"MERCEDES BENZ AMG CLA45S 4MATIC PLUS STREET STYLE EDITION BMT1757",
brand:"MERCEDES",
year:"2023",
color:"GREY",
price:390000,
mileage:"14,967 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"4.5B, FULLY LOADED, PANOROOF, PERFORMANCE SEATS, 360 HUD"
},
{
name:"NOAH S G NEW MODEL 8SEATER 3863",
brand:"NOAH",
year:"2022",
color:"BLACK",
price:1680000,
mileage:"20,000 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"BLACK INTERIOR, 8SEATER, 2 POWER DOOR, FABRIC SEAT, LED HEADLIGHT, TOYOTA SAFETY SENSE, CRUISE CONTROL, MAKER NAVI, LANE KEEP ASSIST, LANE DEPARTURE ALERT, SMART KEY, PUSH START, MFSW, 2 CHARGE PORT, BACK CAMERA, 16 ORIGINAL RIMS"
},
{
name:"TOYOTA NOAH X 8SEATER 2336",
brand:"TOYOTA",
year:"2021",
color:"RED",
price:109000,
mileage:"72,000 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4.5B, BLACK INTERIOR,8 SEATER, 1 POWER DOOR, FABRIC SEAT, LED HEADLIGHT, TOYOTA SAFETY SENSE, CRUISE CONTROL ,MAKER MAVI, LANE ASSIST KEEP ASSIST, LANE DEPARTURE ALERT, START KEY, BACK CAMERA"
},
{
name:"TOYOTA ALPHARD S TYPE GOLD WMS0170",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:181000,
mileage:"21,783 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"3EYES, 2POWER DOOR, POWER BOOT, LED HEAD, CRIUSE CONTROL, ALLOY WHEEL, 7 SEATER"
},
{
name:"HONDA ODYSSEY ABSOLUTE EX WMS0115",
brand:"HONDA",
year:"2021",
color:"BLACK",
price:172000,
mileage:"31,431 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"SURROUND VIEW CAMERA, BLIND SPOT MONITOR, POWER BOOT, 2POWER DOOR, NAVI, 7SEATER, 1 2LEATHER, HONDA SENSING"
},
{
name:"TOYOTA HARRIER G LEATHER PACKAGE WMS0072",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:150000,
mileage:"54,319 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"DIGITAL INNER MIRROR, NAVI, PUSH START, SMART KEY"
},
{
name:"HONDA ODYSSEY ABSOLUTE WMS0180",
brand:"HONDA",
year:"2021",
color:"BLACK",
price:166000,
mileage:"39,403 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail:"4B, SURROUND VIEW CAMERA, 2POWER DOOR, 7SEATER, ALLOY WHEEL, 1 2LEATHER SEAT"
},
{
name:"TOYOTA VOXY S Z BM1981",
brand:"TOYOTA",
year:"2023",
color:"BLACK",
price:175000,
mileage:"5,672 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"AUTOSTEP, ADVANCE DRIVE, DIGITAL INNER MIRROR, BLIND SPOT MONITOR, POWER BOOT, 2POWER DOOR ALLOY WHEEL, 7SEATER, 1 2 LEATHER"
},
{
name:"HONDA STEPWAGON SPADA HONDA SENSING WR0160",
brand:"HONDA",
year:"2021",
color:"SILVER",
price:136000,
mileage:"52,387 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"WAKU WAKU GATE, HONDA SENSING, 2POWER DOOR, 8 SEATER, ALLOY WHEEL, BACK CAMERA"
},
{
name:"HONDA STEPWAGON HONDA SENSING BE0099",
brand:"HONDA",
year:"2021",
color:"BLACK",
price:139000,
mileage:"44,000 KM",
images:[
"images/alphard/1.jpg",
"images/alphard/2.jpg",
"images/alphard/3.jpg",
"images/alphard/4.jpg",
"images/alphard/5.jpg"
],
detail: "WAKU WAKU DOOR, 2POWER DOOR, 7SEATER, NAVI, TV, BACK CAMERA, ORI ALLOY WHEEL"
},
{
name:"TOYOTA HARRIER Z WP0078",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:168000,
mileage:"30,943 KM",
images:[
"images/A18088652/1.jpg",
"images/A18088652/2.jpg",
"images/A18088652/3.jpg",
"images/A18088652/4.jpg",
"images/A18088652/5.jpg"
],
detail:"SUNROOF, MODELISTA BODY KIT, SORROUND VIEW CAMERA, JBL SOUND SYSTEM, HEAD UP DISPLAY, DIGITAL INNER MIRROR, BLIND SPOT MONITOR, ALLOY WHEEL, POWER BOOT, PUSH START, SMART KEY, 1 2 LEATHER SEAT"
},
{
name:"TOYOTA HARRIER Z WP0077",
brand:"TOYOTA",
year:"2021",
color:"BLACK",
price:165000,
mileage:"31,671 KM",
images:[
"images/odyssey/1.jpg",
"images/odyssey/2.jpg",
"images/odyssey/3.jpg",
"images/odyssey/4.jpg",
"images/odyssey/5.jpg"
],
detail:"SUNROOF, SORROUND VIEW CAMERA, JBL SOUND SYSTEM, HEAD UP DISPLAY, DIGITAL INNER MIRROR, BLIND SPOT MONITOR, ALLOY WHEEL, POWER BOOT, PUSH START, SMART KEY, MAKER OPTION TV"
},
];

/* FEATURED */
setInterval(()=>{
let track=document.getElementById("featuredTrack");
if(!track) return;

featuredIndex++;
if(featuredIndex>=track.children.length) featuredIndex=0;

track.style.transform=`translateX(-${featuredIndex*100}%)`;
},3000);

/* RENDER */
function renderCars(){

let list=document.getElementById("list");
list.innerHTML="";

let search=document.getElementById("search").value.toLowerCase();
let brand=document.getElementById("brandFilter").value;
let year=document.getElementById("yearFilter").value;
let color=document.getElementById("colorFilter").value;
let price=document.getElementById("priceFilter").value;

let cars=[...allCars]
.filter(c=>c.name.toLowerCase().includes(search))
.filter(c=>brand==="all"||c.brand===brand)
.filter(c=>year==="all"||c.year==year)
.filter(c=>color==="all"||c.color===color);

if(price==="low") cars.sort((a,b)=>a.price-b.price);
if(price==="high") cars.sort((a,b)=>b.price-a.price);

cars.forEach(car=>{

list.innerHTML+=`
<div class="card">

<div class="car-slider" data-index="0">

${car.images.map((img,i)=>`
<img src="${img}" class="car-slide ${i===0?'active':''}">
`).join("")}

<button class="prev" onclick="changeSlide(this,-1)">❮</button>
<button class="next" onclick="changeSlide(this,1)">❯</button>

</div>

<div class="car-price">RM ${car.price.toLocaleString()}</div>
<div class="car-name">${car.name}</div>

<div class="car-info">
<p><b>Brand:</b> ${car.brand}</p>
<p><b>Year:</b> ${car.year}</p>
<p><b>Colour:</b> ${car.color}</p>
<p><b>Mileage:</b> ${car.mileage}</p>
<p>${car.detail}</p>
</div>

<a class="wa" onclick="openLoan('${car.name}','${car.price}')">📲 Apply Loan</a>

</div>`;
});

}

/* SLIDER */
function changeSlide(btn,step){

let slider=btn.parentElement;
let slides=slider.querySelectorAll(".car-slide");

let index=parseInt(slider.dataset.index||0);

slides[index].classList.remove("active");

index+=step;

if(index>=slides.length) index=0;
if(index<0) index=slides.length-1;

slides[index].classList.add("active");
slider.dataset.index=index;
}

/* POPUP */
function openLoan(name,price){
selectedCar=name;
selectedPrice=Number(price);

document.getElementById("loanCar").innerText="Model: "+name;
document.getElementById("loanPrice").innerText="RM "+selectedPrice.toLocaleString();

document.getElementById("popup").style.display="flex";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function sendLoan(){

let name=document.getElementById("p_name").value;
let job=document.getElementById("p_job").value;
let income=document.getElementById("p_income").value;

let msg=`🚗 APPLY LOAN REQUEST

Model: ${selectedCar}
Harga: RM ${selectedPrice.toLocaleString()}

Nama: ${name}
Job: ${job}
Income: ${income}`;

window.open("https://wa.me/"+phone+"?text="+encodeURIComponent(msg));

closePopup();
}

renderCars();