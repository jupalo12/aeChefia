const mysql = require( '../mysql' )

exports.getCaixa = async ( req, res ) => {

    try {
        const query = 'SELECT * FROM caixa where id_caixa = ? ;'

        const result = await mysql.execute(query, [req.params.id_caixa]);

        const response = {
            comanda: result.map(comand => {
                return {
                    id_caixa: comand.id_caixa,
                    data_abertura: comand.data_abertura,
                    status_caixa: comand.status_caixa,
                id_estabelecimento: comand.id_estabelecimento,
                }
            })

        }
        return res.status(200).send(response)

    } catch (error) {
        return res.status(500).send({ Erro: error })
    }
}
exports.postCaixa = async ( req, res ) => {
    try {

        const query = `INSERT INTO caixa (data_abertura,status_caixa,id_estabelecimento,valor ) VALUES (?,?,?,?)`;
        const result = await mysql.execute( query,
            [
                req.body.data_abertura,
                req.body.status_caixa,
                req.body.id_estabelecimento,
                req.body.valor,
            ] )
        const response = {

            Mensagem: 'Caixa aberto com sucesso!',
            id_caixa: result.insertId
        }

        return res.status( 201 ).send( response );
    }
    catch ( error ) {
        return res.status( 500 ).send( { error: error } )
    }

}

exports.fecharCaixa = async ( req, res ) => {
    try {
        const query = 'UPDATE caixa SET status_caixa = ?, valor = ? WHERE id_caixa = ? and id_estabelecimento = ?;'
        await mysql.execute( query,
            [
                req.body.status_caixa,
                req.body.valor,
                req.body.id_caixa,
                req.body.id_estabelecimento
            ] );
        const response = {
            mensagem: 'Caixa fechado com sucesso',
            caixaAtualizado: {
                nome: req.body.valor,
                status: req.body.status_caixa
            }
        }

        return res.status( 200 ).send( response )

    } catch ( error ) {
        return res.status( 500 ).send( { Erro: error } )
    }
}