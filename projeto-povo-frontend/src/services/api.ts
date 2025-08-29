import axios from 'axios';
import type { Course } from '../types/Course';

const API_BASE_URL = 'http://localhost/Projeto-Povo/Projeto-Povo/Projeto-Povo-Backend';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const courseService = {
  async getCourses(): Promise<Course[]> {
    try {
      const response = await api.get('/index.php?action=getCourses');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
      return [];
    }
  },

  async getCourseById(id: number): Promise<Course | null> {
    try {
      const response = await api.get(`/index.php?action=getCourse&id=${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar curso:', error);
      return null;
    }
  }
};
