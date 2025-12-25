import axios from "axios";
import type Note from "../types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

interface FetchNotesResponse {
  notes: Note[];
}

const fetchNotes = async (): Promise<Note[]> => {
  
    const token = import.meta.env.VITE_NOTEHUB_TOKEN;

    const response = await axios.get<FetchNotesResponse>("/notes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data.notes;
  
};

export default fetchNotes;
