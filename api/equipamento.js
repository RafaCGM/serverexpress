module.exports = app => {
        const createEquipamento = (req, res) => {
        const ACAO = "Cadastro"
        console.log('Cadastro de Equipamento')

        app.db('equipamento')
            .insert({
                espaco_num_espaco: req.body.espaco_num_espaco,
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Espaço cadastrado com sucesso.",
                    "msg_erro": "",
                    "num_erro": 0
                })
            )
            .catch((error) => {
                console.log(error)
            })
            // .catch(err => res.status(400).json(
            //     {
            //         "msg": "Algo de errado aconteceu.",
            //         "msg_erro": err,
            //         "num_erro": 1
            //     }   
            // ))

    }

    const listEquipamento = (req, res) => {
    const ACAO = "Listagem de Equipamentos"
        console.log('Listagem de Equipamentos')

        var query = app.db('equipamento')
            .orderBy('id_equipamento')
            .then(equipamentos =>
                res.json(
                    {
                        "msg": "Listagem de equipamentos realizada com sucesso.",
                        "msg_erro": "",
                        "num_erro": 0,
                        "res": equipamentos
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

    const getEquipamento = (req, res) => {
        const ACAO = "Acesso"
        console.log('Acesso de equipamentos')

        app.db('equipamento')
            .where({ id_equipamento: req.body.id_equipamento })
            .then((equipamento) => {
                console.log(equipamento[0])
                if (equipamento[0]) {
                    res.json(
                        {
                            "msg": "Equipamento encontrado com sucesso.",
                            "msg_erro": "",
                            "num_erro": 0,
                            "res": equipamento[0]
                        }
                    )
                } else {
                    res.json(
                        {
                            "msg": "Equipamento não encontrado.",
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

    const updateEquipamento = (req, res) => {
        const ACAO = "Atualização"
        console.log('Atualização de equipamento')
        
        app.db('equipamento')
            .where({id_equipamento: req.body.id_equipamento})
            .update({
                // status: req.body.status,
                espaco_idespaco: req.body.espaco_idespaco,
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Equipamento atualizado com sucesso.",
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

    const remEquipamento = (req, res) => {
        const ACAO = "Remover equipamento"
        console.log('Remoção de equipamento')

        app.db('equipamento')
            .where({ id_equipamento: req.body.id_equipamento })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.json(
                        {
                            "msg": "Equipamento removido com sucesso.",
                            "msg_erro": "",
                            "num_erro": 0,
                        }
                    )
                } else {
                    res.json(
                        {
                            "msg": "Equipamento não encontrado.",
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

    return { createEquipamento, listEquipamento, getEquipamento, updateEquipamento, remEquipamento }
}