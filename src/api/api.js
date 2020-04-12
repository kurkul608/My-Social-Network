import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "b274f780-03f6-4fd9-9bc0-e965fc090098"}
});

export const userAPI = {
    getUsers: (pagesCount = 1, pageSize = 5) =>{
        return  instance.get(`users?page=${pagesCount}&count=${pageSize}`)
        .then (response => response.data) 
    },
    unFollow: (id) => {
        return instance.delete(`follow/${id}`).then (response => response.data)
    },
    follow: (id) => {
        return instance.post(`follow/${id}`).then (response => response.data)
    },
    
    
}
export const profileAPI ={
    getAuthMe: () => {
        return instance.get(`auth/me`).then (response => response.data)
    },
    getUserProfile: (userid) => {
        
        return instance.get(`profile/${userid}`).then (response => response.data)
    }
}

export const authAPI = {
    getAuthMe: () => {
        return instance.get(`auth/me`).then (response => response.data)
    },
}

// export const profileStatusAPI = {
//     getAuthMe: () => {
//         return instance.get(`auth/me`).then (response => response.data)
//     },
//     getStatus: (userId) => {
//         return instance.get(`profile/status/${userId}`)(response => response.data)
//     }
// }
