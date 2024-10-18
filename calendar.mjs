import sample from "lodash-es/sample";
import random from "lodash-es/random";
import { getNames } from "country-list";
import ical, { ICalCalendarMethod } from "ical-generator";
import comma from "comma-number";
import { titleCase } from "title-case";

const CITIES = [
  "San Francisco",
  "New York",
  "Berlin",
  "Prague",
  "Accra",
  "Nairobi",
  "Tokyo",
  "Sydney",
  "Rio de Janeiro",
  "Buenos Aires",
  "Mexico City",
  "Lima",
  "Toronto",
  "Vancouver",
  "Barcelona",
  "Madrid",
  "Paris",
  "London",
  "Amsterdam",
  "Rome",
  "Athens",
  "Istanbul",
  "Cairo",
  "Dubai",
  "Mumbai",
  "Bangkok",
  "Singapore",
  "Jakarta",
  "Beijing",
  "Shanghai",
  "Seoul",
  "Hong Kong",
  "Taipei",
  "Manila",
  "Auckland",
  "Melbourne",
  "Brisbane",
  "Cape Town",
  "Johannesburg",
  "Casablanca",
  "Lagos",
  "Dhaka",
  "Karachi",
  "Lahore",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Bogota",
  "Santiago",
  "Lisbon",
  "Stockholm",
  "Oslo",
  "Helsinki",
  "Moscow",
  "St. Petersburg",
  "Valparaiso",
  "Brasilia",
  "Caracas",
  "Panama City",

  "São Paulo",
  "Los Angeles",
  "Chicago",
  "Phoenix",
  "San Diego",
  "Seattle",
  "Dallas",
  "Philadelphia",
  "Houston",
  "Miami",
  "Atlanta",
  "Washington D.C.",
  "Montreal",
  "Calgary",
  "Ottawa",
  "Edmonton",
  "Quebec City",
  "Brussels",
  "Zurich",
  "Vienna",
  "Budapest",
  "Copenhagen",
  "Bucharest",
  "Sofia",
  "Belgrade",
  "Sarajevo",
  "Tirana",
  "Nicosia",
  "Reykjavik",
  "Dublin",
  "Cardiff",
  "Edinburgh",
  "Glasgow",
  "Krakow",
  "Warsaw",
  "Minsk",
  "Algiers",
  "Montevideo",
  "Quito",
  "Medellín",
  "San Juan",
  "Havana",
  "Port-au-Prince",
  "Santo Domingo",
  "San Salvador",
  "Guatemala City",
  "Panama City",
  "Belize",
];

const getRandomCity = () => sample(CITIES);
const getRandomCountry = () => sample(getNames()).split(",")[0];

const getAllDayEventName = () => {
  return sample([
    "Orange Day",
    `Anniversary of ${random(2000, 2022)} Orange Day in ${getRandomCity()}`,
    `${comma(random(4, 49))}th Anniversary of 100-Year Flood in ${getRandomCity()}`,
    `${comma(random(4, 49))}th Anniversary of Deadly ${getRandomCountry()} Wildfires`,
    `${comma(random(2, 6))} Bird Species Went Extinct`,
    `${comma(random(6, 100))} Years Since the Needlenosed Woodpecker Went Extinct`,
    `${comma(random(6, 100))} Years Since the Last Known Passenger Peacock Died`,

    `Celebrating ${comma(random(1, 20))} Years Since the Great Coral Bleaching`,
    `${comma(random(1, 50))} Years Since the Last Ice Cap Melting`,
    `${comma(random(5, 15))}th Anniversary of the Greatest Hurricane to Hit ${getRandomCity()}`,
    `${comma(random(1, 30))}th Anniversary of the Dust Bowl Reemergence`,

    `${comma(random(3, 30))}th Year Since the Last Forest Died in ${getRandomCountry()}`,
    `${comma(random(1, 5))}th Anniversary of the Great Urban Heat Island Effect`,

    `${comma(random(20, 100))} Years Since the First Climate Refugees`,
    `Celebrating ${comma(random(5, 20))} Years of Melting Glaciers`,
    `${comma(random(100, 300))}th Anniversary of the Greenhouse Effect Discovery`,
    `World Water Shortage Day - ${comma(random(1, 10))}th Edition`,
    `${comma(random(3, 30))}rd Year Since the Great Polar Bear Exodus`,
    `${comma(random(1, 100))} Years Since the Last Known Forest on Earth`,

    `${comma(random(2, 12))}th Annual Day of Mourning for Extinct Species`,
    `${comma(random(1, 25))}th Anniversary of the Last Blue Whale Sighting`,
    `Global Day of Glacial Melt Fireworks - Year ${comma(random(1, 10))}`,
    `${comma(random(2, 20))}th Annual Day of Waving Goodbye to Disappearing Coastlines`,
    `${comma(random(1, 15))}th Anniversary of Last Rainforest Standing`,

    `${comma(random(5, 80))} Years of Desertification in ${getRandomCountry()}`,
    `${comma(random(1, 50))}th Anniversary of the Year Without Winter`,
    `${comma(random(10, 30))}th Year of the Great Drought in ${getRandomCountry()}`,

    `Hunting Day - No Limits on Endangered Wildlife`,
    `Remembering ${comma(random(1, 50))} Years of Melting Icebergs`,

    `Celebrating ${comma(random(1, 10))}th Year of Gardening Atop Landfill in ${getRandomCity()}`,
    `${comma(random(1, 100))}th Anniversary of the Last Climate Summit`,
    `${comma(random(10, 50))} Years Since the Last Known Climate Accord`,
    `Free Masks Due to AQI at ${random(200, 500)}`,

    `Remembering the ${comma(random(1, 100))}th Anniversary of Global Warming’s Invention`,
    `${comma(random(5, 30))}th Year Since the First Heat Dome`,
    `${comma(random(1, 20))}th Anniversary of the Last Coral Reef`,

    `Day of the ${comma(random(1, 10))}th Annual Climate Awareness March`,
    `Celebrating ${comma(random(1, 20))} Years Since the Great Oil Spill in ${getRandomCountry()}`,
    `${comma(random(1, 10))}th Annual Vote No on Climate Reparations`,
    `${comma(random(1, 10))}th Annual Vote No on Allowing in Climate Migrants`,

    `${comma(random(2, 20))}nd Anniversary of the Last Climate Summit`,
    `${comma(random(5, 30))}th Anniversary of the Last Arctic Expedition Before It Melted`,
    `Remembering the ${comma(random(1, 50))}th Anniversary of Climate Tragedy`,
    `${comma(random(1, 50))} Years Since Trash Started Being Shipped to the Moon`,
    `${comma(random(1, 50))} Years Since Cockroaches Overtook Humans in Waste-infested ${getRandomCity()}`,
    `Celebrating ${comma(random(1, 20))} Years Since "Just Stop Oil" Was Stopped`,
  ]);
};

const PESTS = [
  "Cockroaches",
  "Locusts",
  "Spotted Lantern Flies",
  "Mosquitoes",
  "Ticks",
  "Termites",
  "Flies",
  "Wasps",
  "Murder Hornets",
];
const getRandomPest = () => sample(PESTS);

const getEventName = () => {
  return sample([
    `Another ${comma(random(9, 180))}K Tons of Plastic get Dumped in the Atlantic`,
    `Another ${comma(random(6, 120))}K Tons of Plastic get Dumped in the Pacific`,
    `Another ${comma(random(3, 90))}K Tons of Plastic get Dumped in the Indian Ocean`,
    `Another ${comma(random(1, 30))}K Tons of Plastic get Dumped in the Arctic Ocean`,
    `${comma(random(3, 40_000))} People Die in Flood in ${getRandomCity()}`,
    `${comma(random(3, 99))} Birds Killed by Storm in ${getRandomCountry()}`,
    `${comma(random(3, 999))} People Hospitalized Following Heatwave in ${getRandomCity()}`,
    `Sea Level Rises Another Inch`,
    `Sea Level Rises Another Foot`,
    `Sea Level Rises Another Meter`,
    `Massive Flood Wipes Away Burial Ground in ${getRandomCity()}`,
    `Unprecedented Heatwave Hits ${getRandomCountry()}`,
    `Wildfires Rage in ${getRandomCity()}, Evacuations Begin`,
    `Catastrophic Drought Affects ${getRandomCountry()} Water Supply`,
    `${comma(random(3, 999))} Homes Destroyed by Hurricane in ${getRandomCity()}`,
    `Record-Breaking Temperatures Hit ${getRandomCountry()}`,
    `Severe Storms Cause Blackouts in ${getRandomCity()}`,
    `${comma(random(3, 999))} Evacuated as River Overflows in ${getRandomCity()}`,
    `Landslide Buries Village in ${getRandomCountry()} After Rains`,
    `Record Flooding Forces Evacuations in ${getRandomCity()}`,
    `Ice Levels Drop in The Arctic`,
    `Another Iceberg Melts`,
    `Historic Wildfires Spread Across ${getRandomCountry()}`,
    `${comma(random(3, 999))} Fish Found Dead On Beaches in ${getRandomCity()}`,
    `${comma(random(3, 999))} People Stranded by Storm in ${getRandomCountry()}`,
    `Air Quality Crisis Hitting ${getRandomCity()}`,
    `Heatwaves Force School Closures in ${getRandomCountry()}`,
    `Tropical Storm Hitting ${getRandomCity()} For The First Time`,
    `Extreme Weather Disrupting Lives in ${getRandomCountry()}`,
    `Smoky the Bear Giving Up`,
    `Fires Rage as Heatwaves Persist in ${getRandomCountry()}`,
    `Rainfall Causes Widespread Damage in ${getRandomCountry()}`,
    `${comma(random(3, 999))} Cattle Die in Heatwave in ${getRandomCity()}`,
    `Superstorm Leaves ${getRandomCity()} Reeling`,
    `${comma(random(3, 999))} Children Affected by Lead in ${getRandomCountry()} Water Supply`,
    `Unstable Weather Disrupting Farming in ${getRandomCity()}`,
    `${comma(random(3, 999))} Left Homeless After Earthquake in ${getRandomCountry()}`,
    `Bridges Collapse in ${getRandomCity()} From Flooding`,
    `Last Coral Reef Dies outside ${getRandomCountry()}`,
    `Air Quality Index Reaches Danger Levels in ${getRandomCity()}`,
    `Agricultural Losses Mount in ${getRandomCountry()}`,
    `Climate Catastrophe Puts ${comma(random(3, 999))} Species At Risk`,
    `${random(1, 16)}m Storm Surge Hits ${getRandomCity()} Coastal Areas`,
    `${comma(random(3, 999))} Die From Heat Exhaustion in ${getRandomCity()}`,
    `Heatwave Emergency Declared in ${getRandomCountry()}`,
    `Rainfall Causes Landslides in ${getRandomCity()}`,
    `Climate Crisis Costs $${comma(random(1, 999))}B in ${getRandomCountry()}`,
    `${comma(random(3, 999))} Properties Destroyed by Wildfires in ${getRandomCity()}`,
    `Schools Evacuate Due to Wildfires in ${getRandomCountry()}`,
    `Food Insecurity Rises in ${getRandomCity()}`,
    `${comma(random(3, 999))} Tourists Stranded After Landslide in ${getRandomCountry()}`,
    `Historic Drought Affects ${getRandomCity()}`,
    `Massive Iceberg Breaks Off Near ${getRandomCountry()}`,
    `${comma(random(3, 999))} Killed in Tornado Outbreak in ${getRandomCountry()}`,
    `Crop Failures Threaten Food Supply in ${getRandomCity()}`,
    `Severe Winter Storm Hits ${getRandomCountry()}`,
    `Landslide Destroys Nuclear Plant in ${getRandomCity()}`,
    `Nuclear Waste Meltdown in ${getRandomCountry()}`,
    `Oil Spill Devastates Coastline in ${getRandomCity()}`,
    `Coal Ash Dumped in ${getRandomCity()} Water Supply`,
    `Fracking Chemicals Poison ${getRandomCity()} Water Supply`,
    `Another ${random(3, 999)}K Tons of Plastic get shipped to the moon`,
    `Another ${random(3, 999)}K Tons of Plastic get shipped to Mars`,
    `Record Low Snowpack Recorded in Mountains of ${getRandomCountry()}`,
    `${comma(random(3, 999))} Affected by Toxic Waste Spill in ${getRandomCountry()}`,
    `${comma(random(3, 999))} Evacuate as Volcanic Eruption Destroys ${getRandomCountry()}`,
    `Dust Bowl Conditions Resemble Past Disasters in ${getRandomCity()}`,
    `${comma(random(3, 999))} Migrants Stranded entering ${getRandomCountry()}`,
    `Catastrophic Floods Break Seawall in ${getRandomCity()}`,
    `Freak Hailstorm Destroys ${getRandomCity()}`,
    `Mountain of Plastic Bottles Erupts Outside ${getRandomCity()}`,
    `Lead Leaching out of landfills`,
    `Rogue Tornado Spreading Industrial Waste Across ${getRandomCity()}`,
    `Ghastly haze overtaking ${getRandomCity()}`,
    `Industrial waste fire in ${getRandomCity()}`,
    `Democrats brag about energy abundance`,
    `Read IEA report on lagging renewables installations`,
    `Read IPCC report on how climate change is worse than ever`,
    `${comma(random(3, 999))} Evacuate Due to Toxic Air in ${getRandomCountry()}`,
    `${comma(random(3, 999))} Evacuate Due to Mudslides in ${getRandomCountry()}`,
    `Heatwave Causes Power Outages in ${getRandomCity()}`,
    `Record Rainfall Causes Flooding in ${getRandomCity()}`,
    `Heatwave Emergency Declared in ${getRandomCountry()}`,
    `Last Drop of Potable Water Used for Irrigation in ${getRandomCountry()}`,
    `Last Polar Bear in ${getRandomCountry()} Howling for Help`,
    `${getRandomPest()} Take Over in ${getRandomCity()}`,
    `${getRandomPest()} Swarm ${getRandomCountry()} Crops`,
    `${getRandomPest()} Infiltrate ${getRandomCity()} Homes`,
    `${getRandomPest()} Infiltrate ${getRandomCountry()} Landfills`,
    `${getRandomPest()} Infiltrate ${getRandomCity()} Sewers`,
    `${getRandomPest()} Reproducing in ${getRandomCountry()} Water Supply`,
    `${getRandomPest()} Infiltrate ${getRandomCity()} Schools`,
    `${getRandomPest()} Spreading in ${getRandomCountry()} Hospitals`,
  ]);
};

const getCalendar = () => {
  const calendar = ical({ name: "Declinism" });

  // A method is required for outlook to display event as an invitation
  calendar.method(ICalCalendarMethod.REQUEST);

  let buffer = 0; // minutes
  let lastEndTime = new Date();
  lastEndTime.setDate(lastEndTime.getDate() - 10);

  for (let i = 0; i < 256; i++) {
    const summary = titleCase(getEventName());
    const start = new Date(lastEndTime.getTime());
    start.setMinutes(start.getMinutes() + buffer);
    const duration = random(11, 222); // minutes
    const end = new Date(start.getTime());
    end.setMinutes(end.getMinutes() + duration);
    calendar.createEvent({ start, end, summary });
    buffer = random(12, 360);
    lastEndTime = end;
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  calendar.createEvent({
    start: tomorrow,
    allDay: true,
    summary: titleCase(getAllDayEventName()),
  });

  for (let i = 0; i < 365; i++) {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() - 222 + i + random(0, 3));
    calendar.createEvent({
      start: nextWeek,
      allDay: true,
      summary: titleCase(getAllDayEventName()),
    });
  }

  console.log(calendar.toJSON());

  return calendar;
};

Bun.serve({
  port: 6666,
  fetch(req) {
    const calendar = getCalendar();

    const headers = new Headers();
    headers.set("Content-Type", "text/calendar; charset=utf-8");
    headers.set("Content-Disposition", 'attachment; filename="calendar.ics"');

    return new Response(calendar.toString(), { headers });
  },
});
