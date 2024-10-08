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
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    air_quality: {
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

export const fetchWeather = createAsyncThunk<
  WeatherData, // Success type (the data structure you'll return)
  { city?: string; latitude?: number; longitude?: number }, // Input type
  { rejectValue: string } // Error type for rejectWithValue
>('weather/fetchWeather', async (location, { rejectWithValue }) => {
  try {
    const query = location.city || `${location.latitude},${location.longitude}`;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}&aqi=yes`;
    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error('Failed to fetch weather data');

    return await response.json();
  } catch {
    return rejectWithValue('Failed to fetch weather data'); // Properly return rejected value as a string
  }
});

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
    } catch {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetch weather data';
        state.loading = false;
      })
      .addCase(fetchGif.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGif.fulfilled, (state, action) => {
        state.gifUrl = action.payload;
        state.loading = false;
      })
      .addCase(fetchGif.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetch GIF';
        state.loading = false;
      });
  },
});

export const { toggleRegionFormat } = weatherSlice.actions;
export default weatherSlice.reducer;
