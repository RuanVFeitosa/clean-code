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
    }
}

module.exports = userController