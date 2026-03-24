export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Note {
  text: string;
  coordinates?: Coordinates;
}

export interface Activity {
  time: string;
  title: string;
  description?: string;
  address?: string;
  notes?: (string | Note)[];
  mapUrl?: string;
  coordinates?: Coordinates;
  story?: string;
}

export interface DaySchedule {
  date: string;
  day: number;
  location: string;
  accommodation: string;
  activities: Activity[];
}

export interface FlightInfo {
  direction: '去程' | '回程';
  date: string;
  time: string;
  airline: string;
  flightNumber: string;
  route: string;
}

export interface AccommodationInfo {
  nights: number;
  location: string;
  name: string;
  cost: number;
}
