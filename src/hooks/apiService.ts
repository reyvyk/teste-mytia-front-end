import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE;
const API_KEY = import.meta.env.VITE_API_KEY;

// Configuração global do Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Funcção para buscar filmes populares
export const fetchPopularMovies = async (page: number = 1) => {
  const response = await api.get('/movie/popular', {
    params: { page },
  });
  return response.data;
};

// Função para buscar filmes
export const fetchMovies = async (query: string, page: number = 1) => {
  const response = await api.get('/search/movie', {
    params: { query, page },
  });
  return response.data;
};

// Outras funções de API podem ser adicionadas aqui
export const fetchMovieDetails = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};