const mysql = require( '../mysql' );

exports.postValor = async ( req, res ) => {
    try {

        const query = `INSERT INTO mesas_fechadas(data_mesas_fechadas,valor,id_comanda, id_estabelecimento, id_caixa ) VALUES (?,?,?,?,?)`;
        const results = await mysql.execute( query,
            [
                req.body.data_mesas_fechadas,
                req.body.valor,
                req.body.id_comanda,
                req.body.id_estabelecimento,
                req.body.id_caixa
            ] )
        const response = {

            Quantidade: results.length,
            Mensagem: 'Mesa fechada com sucesso!',
            valorCriado: {
                id_mesas_fechadas: results.insertId,
                data_mesa_fechadas: req.body.data_mesa_fechadas,
                valor: req.body.valor,
                id_comanda: req.body.id_comanda,
                id_estabelecimento: req.body.id_estabelecimento
            }
        }

        return res.status( 201 ).send( response );
    }
    catch ( error ) {
        
        return res.status( 500 ).send( { error: error } )
    }

}
exports.getUmCaixa = async (req, res) => {
    try {
        const query = `SELECT * FROM mesas_fechadas WHERE id_caixa = ?;`

        const result = await mysql.execute(query, [req.params.id_caixa]);

        const response = {
            caixa: result.map(ped => {
                return {
                    id_mesas_fechadas: ped.id_mesas_fechadas,
                    data_mesa: ped.data_mesa,
                    valor: ped.valor,
                    id_estabelecimento: ped.id_estabelecimento
                }
            })

        }
        return res.status(200).send(response)

    } catch (error) {
        return res.status(500).send({ Erro: error })
    }

}

exports.getDisponibilidade = async ( req, res ) => {
    try {
        const query = `SELECT status, mesa FROM comanda WHERE mesa = ? and id_estabelecimento = ?`
        
        const result = await mysql.execute( query, [req.params.mesa, req.params.id_estabelecimento] );

        const response = {
            quantidade: result.length,
            comanda: result.map( comand => {
                return{
                    id_comanda: comand.id_comanda,
                    disponibilidade: comand.status,
                    mesa: comand.mesa,
                }
            })

            }
        return res.status( 200 ).send( response )

    } catch ( error ) {
        return res.status( 500 ).send( { Erro: error } )
    }

}