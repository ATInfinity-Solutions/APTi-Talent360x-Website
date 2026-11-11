import type { RegionCode } from "@/lib/region"

export type CityLocation = {
  name: string
  postalCodes: string[]
}

export type StateLocation = {
  name: string
  cities: CityLocation[]
}

export const locationsByRegion: Record<RegionCode, StateLocation[]> = {
  IN: [
    {
      name: "Telangana",
      cities: [
        { name: "Hyderabad", postalCodes: ["500001", "500016", "500032", "500072", "500081"] },
        { name: "Secunderabad", postalCodes: ["500003", "500015", "500094"] },
        { name: "Warangal", postalCodes: ["506001", "506002", "506009"] },
        { name: "Nizamabad", postalCodes: ["503001", "503002"] },
        { name: "Karimnagar", postalCodes: ["505001", "505002"] },
      ],
    },
    {
      name: "Andhra Pradesh",
      cities: [
        { name: "Visakhapatnam", postalCodes: ["530001", "530016", "530026"] },
        { name: "Vijayawada", postalCodes: ["520001", "520010", "520015"] },
        { name: "Guntur", postalCodes: ["522001", "522007"] },
        { name: "Tirupati", postalCodes: ["517501", "517507"] },
      ],
    },
    {
      name: "Karnataka",
      cities: [
        { name: "Bengaluru", postalCodes: ["560001", "560034", "560066", "560103"] },
        { name: "Mysuru", postalCodes: ["570001", "570016"] },
        { name: "Mangaluru", postalCodes: ["575001", "575004"] },
        { name: "Hubballi", postalCodes: ["580020", "580029"] },
      ],
    },
    {
      name: "Maharashtra",
      cities: [
        { name: "Mumbai", postalCodes: ["400001", "400051", "400076", "400093"] },
        { name: "Pune", postalCodes: ["411001", "411014", "411045", "411057"] },
        { name: "Nagpur", postalCodes: ["440001", "440010"] },
        { name: "Nashik", postalCodes: ["422001", "422009"] },
      ],
    },
    {
      name: "Tamil Nadu",
      cities: [
        { name: "Chennai", postalCodes: ["600001", "600017", "600042", "600096"] },
        { name: "Coimbatore", postalCodes: ["641001", "641014"] },
        { name: "Madurai", postalCodes: ["625001", "625020"] },
        { name: "Tiruchirappalli", postalCodes: ["620001", "620018"] },
      ],
    },
    {
      name: "Delhi",
      cities: [
        { name: "New Delhi", postalCodes: ["110001", "110016", "110021"] },
        { name: "Delhi", postalCodes: ["110006", "110085", "110092"] },
      ],
    },
    {
      name: "Gujarat",
      cities: [
        { name: "Ahmedabad", postalCodes: ["380001", "380015", "380054"] },
        { name: "Surat", postalCodes: ["395001", "395007"] },
        { name: "Vadodara", postalCodes: ["390001", "390007"] },
        { name: "Rajkot", postalCodes: ["360001", "360005"] },
      ],
    },
    {
      name: "West Bengal",
      cities: [
        { name: "Kolkata", postalCodes: ["700001", "700019", "700091"] },
        { name: "Howrah", postalCodes: ["711101", "711204"] },
        { name: "Durgapur", postalCodes: ["713201", "713213"] },
      ],
    },
    {
      name: "Rajasthan",
      cities: [
        { name: "Jaipur", postalCodes: ["302001", "302017", "302033"] },
        { name: "Udaipur", postalCodes: ["313001", "313002"] },
        { name: "Jodhpur", postalCodes: ["342001", "342003"] },
      ],
    },
    {
      name: "Kerala",
      cities: [
        { name: "Thiruvananthapuram", postalCodes: ["695001", "695014"] },
        { name: "Kochi", postalCodes: ["682001", "682016", "682030"] },
        { name: "Kozhikode", postalCodes: ["673001", "673016"] },
      ],
    },
    {
      name: "Uttar Pradesh",
      cities: [
        { name: "Lucknow", postalCodes: ["226001", "226010"] },
        { name: "Noida", postalCodes: ["201301", "201304"] },
        { name: "Kanpur", postalCodes: ["208001", "208016"] },
        { name: "Varanasi", postalCodes: ["221001", "221005"] },
      ],
    },
    {
      name: "Punjab",
      cities: [
        { name: "Chandigarh", postalCodes: ["160001", "160036"] },
        { name: "Ludhiana", postalCodes: ["141001", "141010"] },
        { name: "Amritsar", postalCodes: ["143001", "143005"] },
      ],
    },
    {
      name: "Haryana",
      cities: [
        { name: "Gurugram", postalCodes: ["122001", "122002", "122018"] },
        { name: "Faridabad", postalCodes: ["121001", "121006"] },
        { name: "Panchkula", postalCodes: ["134109", "134112"] },
      ],
    },
  ],
  US: [
    {
      name: "California",
      cities: [
        { name: "Los Angeles", postalCodes: ["90001", "90012", "90024", "90045"] },
        { name: "San Francisco", postalCodes: ["94102", "94107", "94110"] },
        { name: "San Jose", postalCodes: ["95110", "95112", "95126"] },
        { name: "San Diego", postalCodes: ["92101", "92109", "92122"] },
      ],
    },
    {
      name: "New York",
      cities: [
        { name: "New York", postalCodes: ["10001", "10011", "10019", "10036"] },
        { name: "Brooklyn", postalCodes: ["11201", "11211", "11215"] },
        { name: "Buffalo", postalCodes: ["14201", "14202"] },
        { name: "Albany", postalCodes: ["12207", "12210"] },
      ],
    },
    {
      name: "Texas",
      cities: [
        { name: "Austin", postalCodes: ["78701", "78704", "78745"] },
        { name: "Dallas", postalCodes: ["75201", "75204", "75219"] },
        { name: "Houston", postalCodes: ["77002", "77019", "77056"] },
        { name: "San Antonio", postalCodes: ["78205", "78209"] },
      ],
    },
    {
      name: "Washington",
      cities: [
        { name: "Seattle", postalCodes: ["98101", "98109", "98121"] },
        { name: "Bellevue", postalCodes: ["98004", "98005"] },
        { name: "Tacoma", postalCodes: ["98402", "98405"] },
      ],
    },
    {
      name: "Illinois",
      cities: [
        { name: "Chicago", postalCodes: ["60601", "60611", "60614", "60654"] },
        { name: "Naperville", postalCodes: ["60540", "60563"] },
        { name: "Evanston", postalCodes: ["60201", "60202"] },
      ],
    },
    {
      name: "Florida",
      cities: [
        { name: "Miami", postalCodes: ["33101", "33130", "33131"] },
        { name: "Orlando", postalCodes: ["32801", "32803"] },
        { name: "Tampa", postalCodes: ["33602", "33606"] },
        { name: "Jacksonville", postalCodes: ["32202", "32207"] },
      ],
    },
    {
      name: "Massachusetts",
      cities: [
        { name: "Boston", postalCodes: ["02108", "02115", "02116"] },
        { name: "Cambridge", postalCodes: ["02138", "02139"] },
        { name: "Worcester", postalCodes: ["01608", "01609"] },
      ],
    },
    {
      name: "New Jersey",
      cities: [
        { name: "Jersey City", postalCodes: ["07302", "07306"] },
        { name: "Newark", postalCodes: ["07102", "07104"] },
        { name: "Princeton", postalCodes: ["08540", "08542"] },
      ],
    },
    {
      name: "Georgia",
      cities: [
        { name: "Atlanta", postalCodes: ["30303", "30308", "30318"] },
        { name: "Savannah", postalCodes: ["31401", "31405"] },
        { name: "Alpharetta", postalCodes: ["30004", "30009"] },
      ],
    },
    {
      name: "Colorado",
      cities: [
        { name: "Denver", postalCodes: ["80202", "80203", "80218"] },
        { name: "Boulder", postalCodes: ["80301", "80302"] },
        { name: "Colorado Springs", postalCodes: ["80903", "80906"] },
      ],
    },
    {
      name: "Pennsylvania",
      cities: [
        { name: "Philadelphia", postalCodes: ["19103", "19107", "19123"] },
        { name: "Pittsburgh", postalCodes: ["15212", "15222"] },
      ],
    },
    {
      name: "Virginia",
      cities: [
        { name: "Arlington", postalCodes: ["22201", "22202"] },
        { name: "Richmond", postalCodes: ["23219", "23220"] },
        { name: "McLean", postalCodes: ["22101", "22102"] },
      ],
    },
  ],
}

export function getStates(region: RegionCode): StateLocation[] {
  return locationsByRegion[region] ?? []
}

export function getCities(region: RegionCode, stateName: string): CityLocation[] {
  return getStates(region).find((s) => s.name === stateName)?.cities ?? []
}

export function getPostalCodes(region: RegionCode, stateName: string, cityName: string): string[] {
  return getCities(region, stateName).find((c) => c.name === cityName)?.postalCodes ?? []
}
