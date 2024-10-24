const User = require('../models/user')


const userService = {
    create: async (user) => {
        try {
            return await User.create(user)
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar User')
        }
    },
    update: async (id, userToUpdate) => {
        try {
            const user = await User.findByPk(id)
            if (!user) {
                return null;
            }
            await user.update(userToUpdate) // Update atualizar
            await user.save() // Save
            return user
        } catch {
            throw new Error('Ocorreu um erro ao atualizar User')
        }
    },
    getById: async (id) => {
        try {
            const user = await User.findByPk(id)
            if (!user) {
                return null;
            }
            return user;
        } catch {
            throw new Error('Ocorreu um erro ao buscar User')
        }
    },
    getAll: async () => {
        try {
            return await User.findAll()
        } catch {
            throw new Error('Ocorreu um erro ao buscar todos User')
        }
    },
    delete: async (id) => {
        try {

            const user = await User.findByPk(id)
            if (!user) {
                return null;
            }

            return await user.destroy()
            
        } catch {
            throw new Error('Ocorreu um erro ao deletar User')
        }
    }
}

module.exports = userService;
