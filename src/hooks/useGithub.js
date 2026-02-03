import { useState } from 'react';
import { useRepoStore } from '../store/useRepoStore';

export const useGithub = () => {
  const { setRepos, setLoading } = useRepoStore();
  const [error, setError] = useState(null);

  const fetchRepos = async (username) => {
    if (!username) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
      if (!response.ok) throw new Error('No se encontró el usuario');
      
      const data = await response.json();
      setRepos(data); // Guardamos en el estado global
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchRepos, error };
};