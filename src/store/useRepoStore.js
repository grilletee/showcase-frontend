import { create } from 'zustand';

export const useRepoStore = create((set) => ({
  repos: [],
  loading: false,
  // Acciones para modificar el estado
  setRepos: (repos) => set({ repos }),
  setLoading: (status) => set({ loading: status }),
}));