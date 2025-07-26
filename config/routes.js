module.exports = app => {
    // Usuários
    app.post('/usuarios/signin', app.api.auth.signin)
    app.post('/usuarios/signup', app.api.usuarios.signup)
    app.post('/usuarios/list', app.api.usuarios.listUsuarios)
    app.post('/usuarios/get', app.api.usuarios.getUsuario)
    app.post('/usuarios/update', app.api.usuarios.updateUsuario)
    app.post('/usuarios/rem', app.api.usuarios.remUsuario)

    // Espaço
    app.post('/espaco/create', app.api.espaco.createEspaco)
    app.post('/espaco/list', app.api.espaco.listEspaco)
    app.post('/espaco/get', app.api.espaco.getEspaco)
    app.post('/espaco/update', app.api.espaco.updateEspaco)
    app.post('/espaco/rem', app.api.espaco.remEspaco)

    // Equipamento
    app.post('/equipamento/create', app.api.equipamento.createEquipamento)
    app.post('/equipamento/list', app.api.equipamento.listEquipamento)
    app.post('/equipamento/get', app.api.equipamento.getEquipamento)
    app.post('/equipamento/update', app.api.equipamento.updateEquipamento)
    app.post('/equipamento/rem', app.api.equipamento.remEquipamento)

    // Monitoramento
    app.post('/monitoramento/create', app.api.monitoramento.createMonitoramento)
    app.post('/monitoramento/list', app.api.monitoramento.listMonitoramento)
    app.post('/monitoramento/get', app.api.monitoramento.getMonitoramento)
    app.post('/monitoramento/update', app.api.monitoramento.updateMonitoramento)
    app.post('/monitoramento/rem', app.api.monitoramento.remMonitoramento)

}