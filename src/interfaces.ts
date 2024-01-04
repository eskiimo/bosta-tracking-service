type navbarFunc = () => void;

export interface NavFunction {
  languageChange(): navbarFunc;
}

export interface Language {
  value: string;
}

interface TransitEvent {
  state: string;
  timestamp: string;
}
interface TransitEvents extends Array<TransitEvent> {}

export interface ShippingInfo {
  provider: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: Array<string>;
  TransitEvents: TransitEvents;
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: Array<{
    dayDate: string;
    dayName: string;
  }>;
}
