const busRoutes = [
  {
    routeNo: "1",
    busNo: "0470, 0472",
    route: "House Building → Azampur → Rajlaxmi → Jasimuddin → Airport → Kawla → Khilkhet → Shewra → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "07:45",
    noon: "",
    afternoon: "",
    driver: "Israfil - 01921195966, Sharif - 01718445521"
  },
  {
    routeNo: "2",
    busNo: "0353, 0354, 0494",
    route: "Kakrail → Mouchak → Malibagh Railgate → Abul Hotel → Rampura Bazar → Rampura Bridge → Madhubagh → Gulshan Link Road → Uttar Badda → Shahjadpur → Jamuna Future Park → Shewra → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "07:20",
    noon: "",
    afternoon: "",
    driver: "Barek - 01743941318, Mostaf - 01710511060, Ashraf - 01766110564"
  },
  {
    routeNo: "3",
    busNo: "",
    route: "BUP → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Shewra → Jamuna Future Park → Shahjadpur → Uttar Badda → Gulshan Link Road → Madhubagh → Rampura Bridge",
    morning: "",
    noon: "12:35",
    afternoon: "03:00",
    driver: "Barek - 01743941318, Mostaf - 01710511060, Ashraf - 01766110564"
  },
  {
    routeNo: "4",
    busNo: "0293",
    route: "Kakrail → Moghbazar → Satrasta Mor → Mohakhali → Banani → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "07:35",
    noon: "",
    afternoon: "",
    driver: "Jishm - 01842019252"
  },
  {
    routeNo: "5",
    busNo: "",
    route: "BUP → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Navy Head Quarters → Banani → Mohakhali → Satrasta Mor",
    morning: "",
    noon: "12:35",
    afternoon: "03:00",
    driver: "Jishm - 01842019252"
  },
  {
    routeNo: "6",
    busNo: "0426, 0300",
    route: "Shahbagh → Banglamotor → Kawran Bazar → Farmgate → Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "07:30",
    noon: "",
    afternoon: "",
    driver: "Faizlu - 01678687354, Prashankar - 01719900729"
  },
  {
    routeNo: "7",
    busNo: "",
    route: "BUP → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate → Farmgate → Kawran Bazar",
    morning: "",
    noon: "12:35",
    afternoon: "03:00",
    driver: "Faizlu - 01678687354, Prashankar - 01719900729"
  },
  {
    routeNo: "8",
    busNo: "0291, 0295",
    route: "Agargaon → Talatala → Shewrapara → Kazipara → Mirpur 10 → Mirpur 11 → Mirpur 12 → BUP",
    morning: "07:45",
    noon: "",
    afternoon: "",
    driver: "Nur Alam - 01732284039, Badsha - 01758927462"
  },
  {
    routeNo: "9",
    busNo: "0402, 0301",
    route: "Residential School & College → Isha Mosque → Suchana Community Center → Adabor Thana → Shyamoli → Kallyanpur → Technical → Bangla College → Ansar Camp → Mirpur 1 → Cine Cinema Hall → Commerce College → Proshika → Mirpur 11 → Mirpur 12 → BUP",
    morning: "07:30",
    noon: "",
    afternoon: "",
    driver: "Selman - 01988798596, Zainal - 01717156260"
  },
  {
    routeNo: "10",
    busNo: "",
    route: "BUP → Mirpur 12 → Mirpur 11 → Proshika → Commerce College → Cine Cinema Hall → Mirpur 1 → Ansar Camp → Bangla College → Technical → Kallyanpur → Shyamoli",
    morning: "",
    noon: "12:35",
    afternoon: "03:00",
    driver: "Selman - 01988798596, Zainal - 01717156260"
  },
  {
    routeNo: "11",
    busNo: "0471, 0424",
    route: "City College → Bijoy Sarani → Dhanmondi 15 → Shankar → 27 Rapa Plaza → Asad Gate → College Gate → Shyamoli → Kallyanpur → Technical → Bangla College → Ansar Camp → Mirpur 1 → Cine Cinema Hall → Commerce College → Proshika → Mirpur 11 → Mirpur 12 → BUP",
    morning: "07:25",
    noon: "",
    afternoon: "",
    driver: "Tayeb - 01728223081, Obaidul - 01740811628"
  },
  {
    routeNo: "12",
    busNo: "",
    route: "BUP → Mirpur 12 → Mirpur 11 → Proshika → Commerce College → Cine Cinema Hall → Mirpur 1 → Ansar Camp → Bangla College → Technical → Kallyanpur → Shyamoli → College Gate → Asad Gate → Manik Mia Avenue",
    morning: "",
    noon: "12:35",
    afternoon: "03:00",
    driver: "Tayeb - 01728223081, Obaidul - 01740811628"
  },
  {
    routeNo: "13",
    busNo: "0292, 0401",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "08:05",
    noon: "",
    afternoon: "",
    driver: "Alamin - 01722153376, Galap - 01764170403"
  },
  // Additional routes from paste.txt that aren't in the original data
  {
    routeNo: "13",
    busNo: "0353+0569",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "09:15",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0494+0300",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "09:20",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0426+0301",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "09:20",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "14",
    busNo: "0291+0293+0296",
    route: "BUP → DOHS",
    morning: "09:25",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0292+4962+0295",
    route: "Mirpur 12 → BUP",
    morning: "09:40",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "14",
    busNo: "0291+0293+0296",
    route: "DOHS → BUP",
    morning: "09:45",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0353+0569",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "10:05",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0494+0300",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "10:10",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0426+0301",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "10:15",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0292+4962+0295",
    route: "BUP → Mirpur 12",
    morning: "10:15",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0294",
    route: "Mirpur 12 → BUP",
    morning: "10:50",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0424+0471",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "10:50",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0301+0402",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "10:55",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0426+0300",
    route: "BUP → DOHS → ECB Canteen (Pallabi Police Station) → Kalshi → ECB Square → Matikata → CMH → Army Head Quarters → Post Office → Adamjee → Workshop → Jahangir Gate",
    morning: "10:55",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0294",
    route: "BUP → Mirpur 12",
    morning: "11:25",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0424+0471",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "11:30",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "14",
    busNo: "0296",
    route: "BUP → DOHS",
    morning: "11:30",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0301+0402",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "11:35",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "13",
    busNo: "0426+0300",
    route: "Jahangir Gate → Workshop → Adamjee → Post Office → Army Head Quarters → CMH → Matikata → ECB Square → Kalshi → ECB Canteen (Pallabi Police Station) → DOHS → BUP",
    morning: "11:35",
    noon: "",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "4962",
    route: "Mirpur 12 → BUP",
    morning: "",
    noon: "12:00",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "14",
    busNo: "0296",
    route: "DOHS → BUP",
    morning: "",
    noon: "12:00",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "4962",
    route: "BUP → Mirpur 12",
    morning: "",
    noon: "12:35",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "14",
    busNo: "0294",
    route: "BUP → DOHS",
    morning: "",
    noon: "13:00",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0295",
    route: "Mirpur 12 → BUP",
    morning: "",
    noon: "13:15",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "14",
    busNo: "0294",
    route: "DOHS → BUP",
    morning: "",
    noon: "13:15",
    afternoon: "",
    driver: ""
  },
  {
    routeNo: "15",
    busNo: "0295",
    route: "BUP → Mirpur 12",
    morning: "",
    noon: "13:45",
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