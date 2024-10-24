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
                return res.status(404).json({
                    message: "admistrador não encontrado ",

                })
            }
            return res.status(200).json({
                message: "admistrador encontrado ",
                adm
            })
        } catch (error) {
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor"
            })

        }
    },
    delete: async (req, res) => {
        try {
            const adm = await admService.delete(req.params.id);
            if (!adm) {
                return res.status(404).json({
                    message: "admistrador não encontrado"
                })
            }

            return res.status(200).json({
                message: "admistrador deletado com sucesso ",
                adm
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor"
            })
        }
    },

    login: async (req, res,) => {
        try {
            const data = {
                email: req.body.email,
                senha: req.body.senha
            }

            const adm = await admService.login(data);

            if (!adm) {
                return res.status(404).json({
                    message: "dados invalidos"
                })
            }

            return res.status(200).json({
                message: "login feito com sucesso",
                token: adm
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor"
            })

        }
    }, 

    esqueciSenha : async(req, res) => {
        try {
            const data = {
                nome: req.body.nome,
                email:  req.body.email,
                novasenha:  req.body.novasenha
                
            }

            const adm = await admService.esqueciSenha(data);
            if (!adm) {
                return res.status(404).json ({
                    message: "Usuario não encontrado"
                })
            }
            
            return res.status(200).json({
                message: "senha alterada com sucesso",
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "Ocorreu um erro no Servidor"
            })
        }
    }
}

module.exports = admControllers