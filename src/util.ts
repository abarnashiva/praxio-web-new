import dayjs from "dayjs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export interface FileData {
  content: string;
  filename: string;
  size: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  date: string | null | undefined,
  format = "DD/MM/YYYY hh:mm:ss A"
) => (!date ? undefined : dayjs(date).format(format));

export function formatFileSize(fileSize?: number | null): string {
  if (!fileSize) {
    return "N/A";
  }
  const units = ["b", "kB", "MB", "GB", "TB"];
  let size = fileSize;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

export function convertFileToBase64(file: File): Promise<FileData> {
  return new Promise<FileData>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        const base64Data = reader.result.split(",")[1];
        const fileData: FileData = {
          content: base64Data,
          filename: file.name,
          size: file.size,
        };
        resolve(fileData);
      } else {
        reject(new Error("Failed to convert file to base64."));
      }
    };

    reader.onerror = () => {
      reject(new Error("Error occurred while reading the file."));
    };

    reader.readAsDataURL(file);
  });
}

type MyObject = {
  [key: string]: unknown;
};

export function isValidObject(obj: unknown): obj is MyObject {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  for (const key in obj) {
    if (typeof key !== "string") {
      return false;
    }
  }

  return true;
}
