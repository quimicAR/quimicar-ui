import api from 'services'

export const getAllCategories = async () => await api.get('/categories')
