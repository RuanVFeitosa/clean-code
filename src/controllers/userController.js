const userService = require("../services/userService")

userControllers = {
    create: async (req, res) => {
        try {
            const user = await userService.create(req.body);
            return res.status(201).json({
                message: "User criado com sucesso",
                user
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao tentar criar usuario"
            })
        }
    },

    update: async (req, res) => {
        try {
            const user = await userService.update(req.params.id, req.body);
            if (!user) {
                return res.status(400).json({
                    message: "Usuario não encontrado"
                });
            }
            return res.status(200).json({
                message: "Usuario atualizado com sucesso",
                user
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao tentar atualizar usuario"
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const users = await userService.getAll();
            return res.status(200).json({
                message: "Usuarios encontrados com sucesso",
                users
            })
        } catch {
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor   "
            })
        }
    },
    getOne: async (req, res) => {
        try {

            const user = await userService.getById(req.params.id);

            if (!user) {
                return res.status(400).json({
                    message: "Usuario nao encontrado",
                })
            }

            return res.status(200).json({
                user
            })

        } catch (error) {
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor"
            })

        }
    }, 
    delete: async(req, res) => {
        try {

             const user = await userService.delete(req.params.id);

             if (!user) {
                 return res.status(200).json({
                    message: "Usuario nao encontrado"
                 })
             }

             return res.status(200).json({
                message : "Usuario deletado com sucesso"
             })
        } catch{
            return res.status(500).json({
            message: "Ocorreu um erro no Servidor"
            })
        }
    }
}

module.exports = userControllers