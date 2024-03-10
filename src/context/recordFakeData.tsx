import { createContext, useState, ReactNode } from "react";

import fakeData from "../data/fakeData.json";

export interface MedicalRecordProps {
  recordNumber: string;
  name: string;
  gender: string;
  birthday: string;
  checkupDate: string;
  checkupNumber: string;
  photos: string[];
}

interface ProviderProps {
  children: ReactNode;
}

interface MedicalRecordContext {
  medicalRecords: MedicalRecordProps[];
  addPatient: (newItem: MedicalRecordProps) => void;
}

const defaultValue = fakeData.medicalRecords;

export const RecordFakeDataContext = createContext<
  MedicalRecordContext | undefined
>(undefined);

export function RecordFakeDataContextProvider({ children }: ProviderProps) {
  const [medicalRecords, setMedicalRecords] =
    useState<MedicalRecordProps[]>(defaultValue);

  const addPatient = (newItem: MedicalRecordProps) => {
    const existing = medicalRecords;
    existing.push(newItem);
    setMedicalRecords(existing);
  };

  const recordFakeDataCtx = {
    medicalRecords,
    addPatient,
  };

  return (
    <RecordFakeDataContext.Provider value={recordFakeDataCtx}>
      {children}
    </RecordFakeDataContext.Provider>
  );
}
