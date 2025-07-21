module.exports = app => {
    const signup = (req, res) => {
        const ACAO = "Cadastro"
        console.log('signup')

        app.db('usuarios')
            .insert({
                idusuario: req.body.idusuario,
                matricula: req.body.matricula,
                nome: req.body.nome,
                email: req.body.email,
                password: req.body.password
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Usuário cadastrado com sucesso.",
                    "msg_erro": "",
                    "num_erro": 0
                })
            )
            .catch(err => res.status(400).json(
                {
                    "msg": "Algo de errado aconteceu.",
                    "msg_erro": err,
                    "num_erro": 1
                }
            ))
    }

    const listUsuarios = (req, res) => {
        const ACAO = "Listagem"

        console.log('listUsuarios')
        var query = app.db('usuarios')
            .orderBy('nome')
            .then(users =>
                res.json(
                    {
                        "msg": "Listagem de usuários realizada com sucesso.",
                        "msg_erro": "",
                        "num_erro": 0,
                        "res": users
                    }
                ))
            .catch(err => res.status(400).json(
                {
                    "msg": "",
                    "msg_erro": err,
                    "num_erro": 1
                }
            ))
    }

    const getUsuario = (req, res) => {
        const ACAO = "Acesso"

        console.log('getUsuario')
        app.db('usuarios')
            .where({ idusuario: req.body.idusuario })
            .then((user) => {
                console.log(user[0])
                if (user[0]) {
                    res.json(
                        {
                            "msg": "Usuário encontrado com sucesso.",
                            "msg_erro": "",
                            "num_erro": 0,
                            "res": user[0]
                        }
                    )
                } else {
                    res.json(
                        {
                            "msg": "Usuário não encontrado.",
                            "msg_erro": "",
                            "num_erro": 0,
                        }
                    )
                }
            })
            .catch(err => res.status(400).json(
                {
                    "msg": "",
                    "msg_erro": err,
                    "num_erro": 1
                }
            ))
    }

    const updateUsuario = (req, res) => {
        const ACAO = "Atualização"
        console.log('update')

        app.db('usuarios')
            .where({idusuario: req.body.idusuario})
            .update({
                matricula: req.body.matricula,
                nome: req.body.nome,
                email: req.body.email,
                password: req.body.password
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Usuário atualizado com sucesso.",
                    "msg_erro": "",
                    "num_erro": 0
                })
            )
            .catch(err => res.status(400).json(
                {
                    "msg": "",
                    "msg_erro": err,
                    "num_erro": 1
                }
            ))
    }

    return { signup, listUsuarios, getUsuario, updateUsuario }
}