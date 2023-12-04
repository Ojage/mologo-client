import { configureStore } from "@reduxjs/toolkit";
import imageUtilitySlice from "../features/imageUtilitySlice";

// Import and define types for your search slice if you have one

// Define the RootState type by combining all slice states
// export type RootState = {
//   trainingProgramData: GlobalState;
//   // Add types for other slices here if needed
// };

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Create a root reducer by combining all slice reducers
// const rootReducer = combineReducers({
//   trainingProgramData: trainingProgramDataSlice,
//   utility: utilitySlice,
//   // Add reducers for other slices here if needed
// });

// Create the store using the root reducer
const store = configureStore({
  reducer: {
    imageUtility: imageUtilitySlice
  },
});

export default store;
