module.exports = app => {
        const createEspaco = (req, res) => {
        const ACAO = "Cadastro"
        console.log('Cadastro de espaço')

        app.db('espaco')
            .insert({
                num_espaco: req.body.num_espaco,
                usuarios_idusuario: req.body.usuarios_idusuario,
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Espaço cadastrado com sucesso.",
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

    const listEspaco = (req, res) => {
    const ACAO = "Listagem de espaços"
        console.log('Listagem de espaços')

        var query = app.db('espaco')
            .orderBy('num_espaco')
            .then(espacos =>
                res.json(
                    {
                        "msg": "Listagem de espaços realizada com sucesso.",
                        "msg_erro": "",
                        "num_erro": 0,
                        "res": espacos
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

    const getEspaco = (req, res) => {
        const ACAO = "Acesso"
        console.log('Acesso de espaços')

        app.db('espaco')
            .where({ id_espaco: req.body.id_espaco })
            .then((espaco) => {
                console.log(espaco[0])
                if (espaco[0]) {
                    res.json(
                        {
                            "msg": "Usuário encontrado com sucesso.",
                            "msg_erro": "",
                            "num_erro": 0,
                            "res": espaco[0]
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

    const updateEspaco = (req, res) => {
        const ACAO = "Atualização"
        console.log('Atualização de espaço')
        
        app.db('espaco')
            .where({id_espaco: req.body.id_espaco})
            .update({
                num_espaco: req.body.num_espaco,
                usuarios_idusuario: req.body.usuarios_idusuario,
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Espaço atualizado com sucesso.",
                    "msg_erro": "",
                    "num_erro": 0
                })
            ).catch(err => res.status(400).json(
                {
                    "msg": "",
                    "msg_erro": err,
                    "num_erro": 1
                }
            ))
    }

    const remEspaco = (req, res) => {
        const ACAO = "Remover espaço"
        console.log('Remoção de espaço')

        app.db('espaco')
            .where({ id_espaco: req.body.id_espaco })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.json(
                        {
                            "msg": "Espaço removido com sucesso.",
                            "msg_erro": "",
                            "num_erro": 0,
                        }
                    )
                } else {
                    res.json(
                        {
                            "msg": "Espaço não encontrado.",
                            "msg_erro": "",
                            "num_erro": 1,
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

    return { createEspaco, listEspaco, getEspaco, updateEspaco, remEspaco }
}