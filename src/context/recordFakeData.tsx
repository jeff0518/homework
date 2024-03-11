import { createContext, useState, ReactNode } from "react";

import fakeData from "../data/fakeData.json";

export interface MedicalRecordProps {
  recordNumber: string;
  name: string;
  gender: string;
  birthday: string;
  checkupDate: string;
  checkupNumber: string;
  photos: {
    id: string;
    image: string;
  }[];
}

interface ProviderProps {
  children: ReactNode;
}

interface PhotoProps {
  recordNumber: string;
  imageId: string;
}

interface MedicalRecordContext {
  medicalRecords: MedicalRecordProps[];
  addPatient: (newItem: MedicalRecordProps) => void;
  deledPhoto: ({ recordNumber, imageId }: PhotoProps) => void;
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

  const deledPhoto = ({ recordNumber, imageId }: PhotoProps) => {
    const updatedExiting = medicalRecords.map((item) => {
      if (item.recordNumber === recordNumber) {
        const newPhotos = item.photos.filter((image) => {
          return image.id !== imageId;
        });

        return { ...item, photos: newPhotos };
      } else {
        return item;
      }
    });

    setMedicalRecords(updatedExiting);
  };

  const recordFakeDataCtx = {
    medicalRecords,
    addPatient,
    deledPhoto,
  };

  return (
    <RecordFakeDataContext.Provider value={recordFakeDataCtx}>
      {children}
    </RecordFakeDataContext.Provider>
  );
}
