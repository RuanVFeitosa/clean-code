const { where } = require('sequelize');
const Adm = require('../models/adm')
const jwt = require('jsonwebtoken');

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
            return await adm.destroy()
        } catch {
            throw new Error('Ocorreu um erro ao deletar adm')
        }
    },
    login: async (data) => {
        try {
            
            const adm = await Adm.findOne({
                where : {
                    email: data.email,
                    senha : data.senha
                }
            })

            if(!adm){
                return null
            }


            const token = jwt.sign(
                {
                    email: adm.email,
                    id : adm.id
                },
                process.env.SECRET, {
                    expiresIn: '1h'
                }
            )
            return token;


        } catch (error) {
            console.log(error)
            throw new Error('Ocorreu um erro ao fazer login')   
        }
    },

    esqueciSenha : async (data) => {
        try {
            const adm = await Adm.findOne({
                where: {
                    nome: data.nome,
                    email: data. email
                }
            });

            if (!adm) {
                return null;
            }

            return await adm.update({
                senha: data.novasenha
            })
        } catch (error) {
            console.log(error)
            throw new Error('Ocorreu um erro ao fazer login') 
        }
    }
}

module.exports = admService;
