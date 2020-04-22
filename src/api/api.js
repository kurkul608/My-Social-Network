import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "e11bf014-4aba-4c8c-98b4-35822848bc0e"}
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
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    putStatus: (status) => {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    savePhoto:  (photoFile) => {
        const formData = new FormData();
        formData.append("image ", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfile:  (profile) => { 
        return instance.put(`profile/`, profile).then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe: () => {
        return instance.get(`auth/me`).then (response => response.data)
    },
    loginMe: (email, password, rememberMe, captcha = null) => {
        
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logOutMe: ()=> {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const securityAPI= {
    getCapchaURL: ()=> {
        return instance.get('security/get-captcha-url').then(response => response.data)
    },
}
