const busRoutes = [
  // Route Bus 1
  {
    routeType: "Route Bus",
    routeNo: "1",
    busNo: "470",
    route: "Route 1: House Building - Azimpur - Rajlaxmi - Jasimuddin - Airport - Kawla - Khilkhet - Sheora - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "7:00 am",
    noon: "",
    afternoon: "",
    driver: "Israfil - 01921195966, Sharif - 01718445521"
  },
  {
    routeType: "Route Bus",
    routeNo: "1",
    busNo: "470",
    route: "Route 1 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Sheora - Khilkhet - Kawla - Airport - Jasimuddin - Rajlaxmi - Azimpur - House Building",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: "Barek - 01743941318, Mostaf - 01710511060, Ashraf - 01766110564"
  },
  {
    routeType: "Route Bus",
    routeNo: "1",
    busNo: "472",
    route: "Route 1: House Building - Azimpur - Rajlaxmi - Jasimuddin - Airport - Kawla - Khilkhet - Sheora - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "7:00 am",
    noon: "",
    afternoon: "",
    driver: "Barek - 01743941318, Mostaf - 01710511060, Ashraf - 01766110564"
  },
  {
    routeType: "Route Bus",
    routeNo: "1",
    busNo: "472",
    route: "Route 1 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Sheora - Khilkhet - Kawla - Airport - Jasimuddin - Rajlaxmi - Azimpur - House Building",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: "Jishm - 01842019252"
  },
  
  // Route Bus 2
  {
    routeType: "Route Bus",
    routeNo: "2",
    busNo: "352",
    route: "Route 2: Kakrail - Mouchak - Malibagh Railgate - Abul Hotel - Rampura Bazar - Rampura Bridge - Middle Badda - Gulshan Link Road - North Badda - Shahjadpur - Jamuna Future Park - Sheora - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "6:40 am",
    noon: "",
    afternoon: "",
    driver: "Jishm - 01842019252"
  },
  {
    routeType: "Route Bus",
    routeNo: "2",
    busNo: "353",
    route: "Route 2 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Sheora - Jamuna Future Park - Shahjadpur - North Badda - Gulshan Link Road - Middle Badda - Rampura Bridge - Rampura Bazar - Abul Hotel - Malibagh Railgate - Mouchak - Kakrail",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "2",
    busNo: "354",
    route: "Route 2: Kakrail - Mouchak - Malibagh Railgate - Abul Hotel - Rampura Bazar - Rampura Bridge - Middle Badda - Gulshan Link Road - North Badda - Shahjadpur - Jamuna Future Park - Sheora - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "6:50 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "2",
    busNo: "354",
    route: "Route 2 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Sheora - Jamuna Future Park - Shahjadpur - North Badda - Gulshan Link Road - Middle Badda - Rampura Bridge - Rampura Bazar - Abul Hotel - Malibagh Railgate - Mouchak - Kakrail",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "2",
    busNo: "494",
    route: "Route 2: Kakrail - Mouchak - Malibagh Railgate - Abul Hotel - Rampura Bazar - Rampura Bridge - Middle Badda - Gulshan Link Road - North Badda - Shahjadpur - Jamuna Future Park - Sheora - ECB Circle - Kalshi - ECB Canteen - Mirpur 12- BUP",
    morning: "7:00 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "2",
    busNo: "494",
    route: "Route 2 (Return): BUP - Mirpur 12- ECB Canteen - Kalshi - ECB Circle - Sheora - Jamuna Future Park - Shahjadpur - North Badda - Gulshan Link Road - Middle Badda - Rampura Bridge - Rampura Bazar - Abul Hotel - Malibagh Railgate - Mouchak - Kakrail",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  
  // Route Bus 3
  {
    routeType: "Route Bus",
    routeNo: "3",
    busNo: "293",
    route: "Route 3: Moghbazar - Hatirjheel - Satrasta Mor - Nabisco - Mohakhali - Chairman Bari - Kakoli - Navy HQ - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "7:00 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "3",
    busNo: "293",
    route: "Route 3 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Navy HQ - Kakoli - Chairman Bari - Mohakhali - Nabisco - Satrasta Mor - Hatirjheel - Moghbazar",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  
  // Route Bus 4
  {
    routeType: "Route Bus",
    routeNo: "4",
    busNo: "292",
    route: "Route 4: Jahangir Gate - Shaheen Cinema Hall - Workshop - Adamjee - Post Office - Army HQ - CMH - Matikata - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "7:10 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "4",
    busNo: "292",
    route: "Route 4 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Matikata - CMH - Army HQ - Post Office - Adamjee - Workshop - Shaheen Cinema Hall - Jahangir Gate",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "4",
    busNo: "401",
    route: "Route 4: Jahangir Gate - Shaheen Cinema Hall - Workshop - Adamjee - Post Office - Army HQ - CMH - Matikata - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "7:20 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "4",
    busNo: "401",
    route: "Route 4 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Matikata - CMH - Army HQ - Post Office - Adamjee - Workshop - Shaheen Cinema Hall - Jahangir Gate",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  
  // Route Bus 5
  {
    routeType: "Route Bus",
    routeNo: "5",
    busNo: "300",
    route: "Route 5: Shahbagh - Banglamotor - Kawran Bazar - Farmgate - Jahangir Gate - Shaheen Cinema Hall - Workshop - Adamjee - Post Office - Army HQ - CMH - Matikata - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "7:00 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "5",
    busNo: "300",
    route: "Route 5 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Matikata - CMH - Army HQ - Post Office - Adamjee - Workshop - Shaheen Cinema Hall - Jahangir Gate - Farmgate - Kawran Bazar - Banglamotor - Shahbagh",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "5",
    busNo: "426",
    route: "Route 5: Shahbagh - Banglamotor - Kawran Bazar - Farmgate - Jahangir Gate - Shaheen Cinema Hall - Workshop - Adamjee - Post Office - Army HQ - CMH - Matikata - ECB Circle - Kalshi - ECB Canteen - DOHS - BUP",
    morning: "7:05 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "5",
    busNo: "426",
    route: "Route 5 (Return): BUP - DOHS - ECB Canteen - Kalshi - ECB Circle - Matikata - CMH - Army HQ - Post Office - Adamjee - Workshop - Shaheen Cinema Hall - Jahangir Gate - Farmgate - Kawran Bazar - Banglamotor - Shahbagh",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  
  // Route Bus 6
  {
    routeType: "Route Bus",
    routeNo: "6",
    busNo: "291",
    route: "Route 6: Khamarbari Mor - Chandrima Udyan - Agricultural University Shelter - Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Mirpur 11.5 - Mirpur 12 - BUP",
    morning: "6:50 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "6",
    busNo: "291",
    route: "Route 6 (Return): BUP - Mirpur 12 - Mirpur 11.5 - Mirpur 11 - Mirpur 10 - Kazipara - Shewrapara - Taltola - Agargaon - Agricultural University Shelter - Chandrima Udyan - Khamarbari Mor",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "6",
    busNo: "295",
    route: "Route 6: Khamarbari Mor - Chandrima Udyan - Agricultural University Shelter - Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Mirpur 11.5 - Mirpur 12 - BUP",
    morning: "7:00 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "6",
    busNo: "295",
    route: "Route 6 (Return): BUP - Mirpur 12 - Mirpur 11.5 - Mirpur 11 - Mirpur 10 - Kazipara - Shewrapara - Taltola - Agargaon - Agricultural University Shelter - Chandrima Udyan - Khamarbari Mor",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  
  // Route Bus 7
  {
    routeType: "Route Bus",
    routeNo: "7",
    busNo: "301",
    route: "Route 7: Asadgate Residential School & College - Shia Mosque - Suchona Community Center - Adabor Thana - Shyamoli - Kallyanpur - Technical - Bangla College - Ansar Camp - Mirpur 1 - Sony Cinema Hall - Commerce College - Training - Mirpur 11 - Mirpur 11.5 - Mirpur 12 - BUP",
    morning: "6:50 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "7",
    busNo: "301",
    route: "Route 7 (Return): BUP - Mirpur 12 - Mirpur 11.5 - Mirpur 11 - Training - Commerce College - Sony Cinema Hall - Mirpur 1 - Ansar Camp - Bangla College - Technical - Kallyanpur - Shyamoli - Adabor Thana - Suchona Community Center - Shia Mosque - Asadgate Residential School & College",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "7",
    busNo: "402",
    route: "Route 7: Asadgate Residential School & College - Shia Mosque - Suchona Community Center - Adabor Thana - Shyamoli - Kallyanpur - Technical - Bangla College - Ansar Camp - Mirpur 1 - Sony Cinema Hall - Commerce College - Training - Mirpur 11 - Mirpur 11.5 - Mirpur 12 - BUP",
    morning: "7:00 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "7",
    busNo: "402",
    route: "Route 7 (Return): BUP - Mirpur 12 - Mirpur 11.5 - Mirpur 11 - Training - Commerce College - Sony Cinema Hall - Mirpur 1 - Ansar Camp - Bangla College - Technical - Kallyanpur - Shyamoli - Adabor Thana - Suchona Community Center - Shia Mosque - Asadgate Residential School & College",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  
  // Route Bus 8
  {
    routeType: "Route Bus",
    routeNo: "8",
    busNo: "424",
    route: "Route 8: City College - BGB Gate 4 - Dhanmondi 15 - Shankar - 27 Rapa Plaza - Asadgate - College Gate - Shyamoli - Kallyanpur - Technical - Bangla College - Ansar Camp - Mirpur 1 - Sony Cinema Hall - Commerce College - Training - Mirpur 11 - Mirpur 11.5 - Mirpur 12 - BUP",
    morning: "6:40 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "8",
    busNo: "424",
    route: "Route 8 (Return): BUP - Mirpur 12 - Mirpur 11.5 - Mirpur 11 - Training - Commerce College - Sony Cinema Hall - Mirpur 1 - Ansar Camp - Bangla College - Technical - Kallyanpur - Shyamoli - College Gate - Asadgate - 27 Rapa Plaza - Shankar - Dhanmondi 15 - BGB Gate 4 - City College",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "8",
    busNo: "471",
    route: "Route 8: City College - BGB Gate 4 - Dhanmondi 15 - Shankar - 27 Rapa Plaza - Asadgate - College Gate - Shyamoli - Kallyanpur - Technical - Bangla College - Ansar Camp - Mirpur 1 - Sony Cinema Hall - Commerce College - Training - Mirpur 11 - Mirpur 11.5 - Mirpur 12 - BUP",
    morning: "6:50 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Route Bus",
    routeNo: "8",
    busNo: "471",
    route: "Route 8 (Return): BUP - Mirpur 12 - Mirpur 11.5 - Mirpur 11 - Training - Commerce College - Sony Cinema Hall - Mirpur 1 - Ansar Camp - Bangla College - Technical - Kallyanpur - Shyamoli - College Gate - Asadgate - 27 Rapa Plaza - Shankar - Dhanmondi 15 - BGB Gate 4 - City College",
    morning: "",
    noon: "",
    afternoon: "3:40 pm, 5:40 pm",
    driver: ""
  },
  
  // Shuttle Bus 13
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0353+0569",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "",
    noon: "12:00 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0494+0300",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "",
    noon: "12:00 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0426+0301",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "",
    noon: "12:15 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0424+0471",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "",
    noon: "",
    afternoon: "2:00 pm",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0301+0402",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "",
    noon: "",
    afternoon: "2:00 pm",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0426+0300",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "",
    noon: "",
    afternoon: "2:10 pm",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0353+0569",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "",
    noon: "1:00 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0494+0300",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "",
    noon: "1:05 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0426+0301",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "",
    noon: "1:10 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0424+0471",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "",
    noon: "",
    afternoon: "2:40 pm",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0301+0402",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "",
    noon: "",
    afternoon: "2:45 pm",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "0426+0300",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "",
    noon: "",
    afternoon: "2:50 pm",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "301",
    route: "Jahangir Gate → BUP",
    morning: "8:15 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "470",
    route: "Jahangir Gate → BUP",
    morning: "8:20 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "424",
    route: "Jahangir Gate → BUP",
    morning: "8:20 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "402",
    route: "BUP → Jahangir Gate",
    morning: "9:05 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "494",
    route: "BUP → Jahangir Gate",
    morning: "9:10 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "13",
    busNo: "471",
    route: "BUP → Jahangir Gate",
    morning: "9:15 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  
  // Shuttle Bus 14
  {
    routeType: "Shuttle Bus",
    routeNo: "14",
    busNo: "0291+0293+0296",
    route: "BUP → DOHS",
    morning: "8:00 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "14",
    busNo: "0296",
    route: "BUP → DOHS",
    morning: "",
    noon: "11:15 am",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "14",
    busNo: "0294",
    route: "BUP → DOHS",
    morning: "",
    noon: "1:15 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "14",
    busNo: "0291+0293+0296",
    route: "DOHS → BUP",
    morning: "8:15 am",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "14",
    busNo: "0296",
    route: "DOHS → BUP",
    morning: "",
    noon: "11:30 am",
    afternoon: "",
    driver: ""
  },
  {
    routeType: "Shuttle Bus",
    routeNo: "14",
    busNo: "0294",
    route: "DOHS → BUP",
    morning: "",
    noon: "1:30 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "292+294+962",
    route: "BUP → Mirpur 12",
    morning: "8:00 am",
    noon: "12:10 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "292 / 291+295",
    route: "BUP → Mirpur 12",
    morning: "9:15 am",
    noon: "1:15 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "962",
    route: "BUP → Mirpur 12",
    morning: "10:15 am",
    noon: "2:00 pm",
    afternoon: "5:40 pm",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "295",
    route: "BUP → Mirpur 12",
    morning: "11:15 am",
    noon: "3:40 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0292+4962+0295",
    route: "Mirpur 12 → BUP",
    morning: "8:15 am",
    noon: "12:30 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0294",
    route: "Mirpur 12 → BUP",
    morning: "9:30 am",
    noon: "1:30 pm",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "4962",
    route: "Mirpur 12 → BUP",
    morning: "10:30 am",
    noon: "2:30 pm",
    afternoon: "6:00 pm",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0295",
    route: "Mirpur 12 → BUP",
    morning: "11:30 am",
    noon: "4:00 pm",
    afternoon: "",
    driver: ""
  }
];

// Helper function to format the data in a more readable way
function formatBusSchedule(routes) {
  // Group routes by routeNo
  const groupedRoutes = {};
  
  routes.forEach(route => {
    if (!groupedRoutes[route.routeNo]) {
      groupedRoutes[route.routeNo] = [];
    }
    groupedRoutes[route.routeNo].push(route);
  });
  
  // Format each group
  const formattedSchedule = {};
  
  for (const [routeNo, routes] of Object.entries(groupedRoutes)) {
    formattedSchedule[routeNo] = {
      routeNo,
      buses: [...new Set(routes.map(r => r.busNo).filter(Boolean))],
      drivers: [...new Set(routes.map(r => r.driver).filter(Boolean))],
      schedules: routes.map(r => ({
        busNo: r.busNo,
        route: r.route,
        morning: r.morning,
        noon: r.noon,
        afternoon: r.afternoon
      }))
    };
  }
  
  return formattedSchedule;
}

const formattedBusData = formatBusSchedule(busRoutes);

// Example usage - Log the formatted data for route 13
// console.log(JSON.stringify(formattedBusData['13'], null, 2));

// Export both raw and formatted data
module.exports = {
  busRoutes,
  formattedBusData
};
