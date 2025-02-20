import { create } from "zustand";

interface VideoStore {
  activeVideoId: string | null;
  setActiveVideo: (id: string | null) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  activeVideoId: null,
  setActiveVideo: (id) => set({ activeVideoId: id }),
}));
