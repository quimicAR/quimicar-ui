import api from 'services'

export const getAllElements = async () => await api.get('/elements')
