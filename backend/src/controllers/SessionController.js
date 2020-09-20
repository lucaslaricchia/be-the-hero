const connection = require("../database/connection");

module.exports = {
    async create(request, response){
        const {id, senha} = request.body;

        const ong = await connection('ongs')
        .where('name', id)
        .andWhere('senha', senha)
        .select('name')
        .first();

    if(!ong){
        return response.status(400).json({error: 'Login ou senha incorretos'});

    }

    return response.json(ong);
    }
}