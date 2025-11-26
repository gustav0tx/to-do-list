import api from './api'

export const getTasks = async () => {

    const tasks = await api({
        method: 'GET',
        
    })

}