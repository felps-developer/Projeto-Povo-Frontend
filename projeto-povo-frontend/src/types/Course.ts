export interface Course {
  id: number;
  title: string;
  description: string;
  workload: string;
  modules: number;
  accessPeriod: string;
  modality: string;
  price: string;
  image?: string;
  category: string;
  instructor: string;
}
