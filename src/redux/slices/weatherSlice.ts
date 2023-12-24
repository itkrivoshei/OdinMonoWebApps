import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export enum Region {
  EU = 'EU',
  US = 'US',
}

export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    feelslike_c: number;
    feelslike_f: number;
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    air_quality?: {
      'us-epa-index': number;
    };
    condition: {
      text: string;
    };
  };
}

interface WeatherState {
  weatherData: WeatherData | null;
  region: Region;
  gifUrl: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weatherData: null,
  region: Region.EU,
  gifUrl: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (
    location: {
      city?: string;
      latitude?: number;
      longitude?: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const query =
        location.city || `${location.latitude},${location.longitude}`;
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}&aqi=yes`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      return await response.json();
    } catch (error) {
      return rejectWithValue('Failed to fetch weather data');
    }
  }
);

export const fetchGif = createAsyncThunk(
  'weather/fetchGif',
  async (condition: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${condition} weather&limit=1`
      );
      if (!response.ok) throw new Error('Failed to fetch GIF');
      const data = await response.json();
      return data.data.length > 0 ? data.data[0].images.fixed_height.url : null;
    } catch (error) {
      return rejectWithValue('Failed to fetch GIF');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleRegionFormat: (state) => {
      state.region = state.region === Region.EU ? Region.US : Region.EU;
    },
  },
});

export const { toggleRegionFormat } = weatherSlice.actions;
export default weatherSlice.reducer;
