import axiosInstance from "../Interceptor/AxoisInterceptor";


const getProfile=async(id:any)=>{
    return axiosInstance.get(`/profiles/get/${id}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const updateProfile=async(profile:any)=>{
    return axiosInstance.put(`/profiles/update`, profile)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const getAllProfiles = async()=>{
    return axiosInstance.get(`/profiles/getAll`)
    .then(result => result.data)
    .catch(error => {throw error;});
}

export {getProfile, updateProfile, getAllProfiles};