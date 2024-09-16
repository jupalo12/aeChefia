const mysql = require( '../mysql' )

exports.getCliente = async ( req, res ) => {

    try {
        const query = `SELECT * FROM pedidos_comanda INNER JOIN itens_do_cardapio ON 
        pedidos_comanda.id_itens_do_cardapio = itens_do_cardapio.id_itens_do_cardapio WHERE pedidos_comanda.id_comanda = ? `
        const result = await mysql.execute(query, [req.params.id_comanda]);

        const response = {
            comanda: result.map(comand => {
                return {
                    id_comanda: comand.id_comanda,
                    quantidade: comand.quant,
                    cliente: comand.id_itens_do_cardapio,
                    marca: comand.id_marcas,
                    comida: comand.nome_comida,
                        medidas: comand.id_medidas,
                        preco: comand.preco

                }
            })

        }
        return res.status(200).send(response)

    } catch (error) {
        return res.status(500).send({ Erro: error })
    }
}