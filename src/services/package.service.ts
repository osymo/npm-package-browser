import getAxiosInstance from '../http'

export const PackageService = {
    getDetails: async (packageName: string): Promise<any> => {
    
        const axios = getAxiosInstance();

        let path = 'package/'+packageName
        
        return await axios.get(path)
    }
}
