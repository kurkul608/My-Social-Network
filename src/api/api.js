import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "b274f780-03f6-4fd9-9bc0-e965fc090098"}
});

export const userAPI = {
    getUsers: (pagesCount = 1, pageSize = 5) =>{
        return  instance.get(`/users?page=${pagesCount}&count=${pageSize}`, {withCredentials: true})
        .then (response => response.data) 
    },
    unFollow: (id) => {
        return instance.delete(`/follow/${id}`, ).then (response => response.data)
    },
    followed: (id) => {
        return instance.post(`/follow/${id}`, '', ).then (response => response.data)
    },
    getAuthMe: () => {
        return instance.get(`/auth/me`, {
            withCredentials: true
          }).then (response => response.data)
    },
    getUserProfile: (userid) => {
        debugger
        return instance.get(`/profile/${userid}`).then (response => response.data)
    }
}

