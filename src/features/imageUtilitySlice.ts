// src/features/imageUtilitySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Image {
  id: string;
  file: File;
}

interface ImageUtilityState {
  imgArr: Image[];
}

const initialState: ImageUtilityState = {
  imgArr: [],
};

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const imageUtilitySlice = createSlice({
  name: "imageUtility",
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<File>) => {
      const id = generateId();
      state.imgArr.unshift({ id, file: action.payload }); // Add the new image at the beginning of the array cuz I want LIFO Behavior
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.imgArr = state.imgArr.filter((img) => img.id !== action.payload);
    },
    clearImages: (state) => {
      state.imgArr = [];
    },
  },
});

export const { addImage, removeImage, clearImages } = imageUtilitySlice.actions;

export default imageUtilitySlice.reducer;
