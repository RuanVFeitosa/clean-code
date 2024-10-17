const Adm = require('../models/adm')


const admService = {
    create: async (adm) => {
        try {
            return await Adm.create(adm)
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Adm')
        }
    },
    update: async (id, admToUpdate) => {
        try {
            const adm = await Adm.findByPk(id)
            if (!adm) {
                return null;
            }
            await adm.update(admToUpdate) // Update atualizar
            await adm.save() // Save
            return adm
        } catch {
            throw new Error('Ocorreu um erro ao atualizar adm')
        }
    },
    getById: async (id) => {
        try {
            const adm = await Adm.findByPk(id)
            if (!adm) {
                return null;
            }
            return adm;
        } catch {
            throw new Error('Ocorreu um erro ao buscar adm')
        }
    },
    getAll: async () => {
        try {
            return await Adm.findAll()
        } catch {
            throw new Error('Ocorreu um erro ao buscar todos adm')
        }
    },
    delete: async (id) => {
        try {
            const adm = await Adm.findByPk(id)
            if (!adm) {
                return null;
            }
            await adm.destroy()
            return adm
        } catch {
            throw new Error('Ocorreu um erro ao deletar adm')
        }
    }
}

module.exports = admService;
