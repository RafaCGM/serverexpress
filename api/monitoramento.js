const equipamento = require("./equipamento")

module.exports = app => {
        const createMonitoramento = (req, res) => {
        const ACAO = "Cadastro"
        console.log('Cadastro de Monitoramento')

        app.db('monitoramento')
            .insert({
                data_hora: req.body.data_hora,
                equipamento_idequipamento: req.body.equipamento_idequipamento,
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Monitoramento cadastrado com sucesso.",
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

    const listMonitoramento = (req, res) => {
    const ACAO = "Listagem de Monitoramentos"
        console.log('Listagem de Monitoramentos')

        var query = app.db('monitoramento')
            .orderBy('data_hora')
            .then(monitoramentos =>
                res.json(
                    {
                        "msg": "Listagem de monitoramentos realizada com sucesso.",
                        "msg_erro": "",
                        "num_erro": 0,
                        "res": monitoramentos
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

    const getMonitoramento = (req, res) => {
        const ACAO = "Acesso"
        console.log('Acesso de monitoramentos')

        app.db('monitoramento')
            .where({ id_monitoramento: req.body.id_monitoramento })
            .then((monitoramento) => {
                console.log(monitoramento[0])
                if (monitoramento[0]) {
                    res.json(
                        {
                            "msg": "Usuário encontrado com sucesso.",
                            "msg_erro": "",
                            "num_erro": 0,
                            "res": monitoramento[0]
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

    const updateMonitoramento = (req, res) => {
        const ACAO = "Atualização"
        console.log('Atualização de monitoramento')
        
        app.db('monitoramento')
            .where({id_monitoramento: req.body.id_monitoramento})
            .update({
                data_hora: req.body.data_hora,
                equipamento_idequipamento: req.body.equipamento_idequipamento,
            })
            .then(_ => res.status(200).json(
                {
                    "msg": "Monitoramento atualizado com sucesso.",
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

    const remMonitoramento = (req, res) => {
        const ACAO = "Remover monitoramento"
        console.log('Remoção de monitoramento')

        app.db('monitoramento')
            .where({ id_monitoramento: req.body.id_monitoramento })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.json(
                        {
                            "msg": "Monitoramento removido com sucesso.",
                            "msg_erro": "",
                            "num_erro": 0,
                        }
                    )
                } else {
                    res.json(
                        {
                            "msg": "Monitoramento não encontrado.",
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

    return { createMonitoramento, listMonitoramento, getMonitoramento, updateMonitoramento, remMonitoramento }
}