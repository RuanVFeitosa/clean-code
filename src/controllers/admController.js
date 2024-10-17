const admService = require("../services/admService")

admControllers = {
    create: async (req, res) => {
        try {
            const adm = await admService.create(req.body);
            return res.status(201).json({
                message: "admistrador criado com sucesso",
                adm
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao tentar criar admistrador"
            })
        }
    },

    update: async (req, res) => {
        try {
            const adm = await admService.update(req.params.id, req.body);
            if (!adm) {
                return res.status(400).json({
                    message: "admistrador não encontrado"
                });
            }
            return res.status(200).json({
                message: "admistrador atualizado com sucesso",
                adm
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao tentar atualizar admistrador"
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const adms = await admService.getAll();
            return res.status(200).json({
                message: "admistradores encontrados com sucesso",
                adms
            })
        } catch {
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor   "
            })
        }
    },
    getOne: async (req, res) => {
        try {
            const adm = await admService.getById(req.params.id);
            if (!adm) {
                return res.status(200).json({
                    message: "admistrador encontrado com sucesso",
                    adm
                })
            }

        } catch (error) {
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor"
            })

        }
    }, 
    delete: async(req, res) => {
        try {
             await admService.delete(req.params.id);
             if (!adm) {
                 return res.status(200).json({
                    message: "admistrador deletado com sucesso"
                 })
             }
        } catch{
            return res.status(500).json({
            message: "Ocorreu um erro no Servidor"
            })
        }
    }
}

module.exports = admController