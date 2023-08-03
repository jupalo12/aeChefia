const mysql = require( '../mysql' )

exports.getCliente = async ( req, res ) => {

    try {
        const query = 'SELECT * FROM comanda where id_comanda = ? ;'

        const result = await mysql.execute(query, [req.params.id_comanda]);

        const response = {
            comanda: result.map(comand => {
                return {
                    id_comanda: comand.id_comanda,
                    mesa: comand.mesa,
                    cliente: comand.cliente,
                    telefone: comand.telefone,
                }
            })

        }
        return res.status(200).send(response)

    } catch (error) {
        return res.status(500).send({ Erro: error })
    }
}