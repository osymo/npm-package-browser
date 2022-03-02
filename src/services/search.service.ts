import getAxiosInstance from '../http'

export const SearchService = {
    search: async (searchTerm: string, start?: number, limit?: number): Promise<any> => {
    
        const axios = getAxiosInstance();

        let path = 'search?q='+searchTerm
        
        if(start) path += '&from='+start

        if(limit) path += '&size='+limit
        
        return await axios.get(path)
    }
}
