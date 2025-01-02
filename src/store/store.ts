import { create } from "zustand";
import axios from "axios";




export const useMenuStore = create(set => ({
    menu: [],
    getMenu: async () => {
        const data = await axios.get(`${import.meta.env.VITE_API_URL}`)
        set({ menu: data.data.sections})
        
    }
    
}))

