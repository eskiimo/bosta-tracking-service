import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShippingInfo } from "../interfaces";

const initialState: ShippingInfo = {
  provider: "",
  CurrentStatus: {
    state: "",
    timestamp: "",
  },
  TrackingNumber: "",
  PromisedDate: "",
  TrackingURL: "",
  SupportPhoneNumbers: [],
  TransitEvents: [],
  CreateDate: "",
  isEditableShipment: false,
  nextWorkingDay: [],
};

export const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    ship: (state, action: PayloadAction<ShippingInfo>) => {
      state.provider = action.payload.provider;
      state.CurrentStatus = action.payload.CurrentStatus;
      state.PromisedDate = action.payload.PromisedDate;
      state.TrackingNumber = action.payload.TrackingNumber;
      state.TrackingURL = action.payload.TrackingURL;
      state.SupportPhoneNumbers = action.payload.SupportPhoneNumbers;
      state.TransitEvents = action.payload.TransitEvents;
      state.CreateDate = action.payload.CreateDate;
      state.isEditableShipment = action.payload.isEditableShipment;
      state.nextWorkingDay = action.payload.nextWorkingDay;
    },
  },
});

export const { ship } = shippingSlice.actions;

export default shippingSlice.reducer;
