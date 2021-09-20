
const mysql = require( '../mysql' );


exports.postItens = async ( req, res ) => {
    try {

        const query = `INSERT INTO itens_do_cardapio(id_cardapio, id_item_tipo, id_bebida_tipo, id_marcas, id_medidas, nome_comida, preco) VALUES (?, ?, ?, ?, ?, ?, ?);`;
        const results = await mysql.execute( query,
            [
                req.body.id_cardapio,
                req.body.id_item_tipo,
                req.body.id_bebida_tipo,
                req.body.id_marcas,
                req.body.medidas,
                req.body.nome_comida,
                req.body.preco

            ] )
        const response = {

            Quantidade: results.length,
            Mensagem: 'Item Adicionado com sucesso!',
            itemCriado: {
                cardapio: req.body.id_cardapio,
                item_tipo: req.body.id_item_tipo,
                bebida_tipo: req.body.id_bebida_tipo,
                marcas: req.body.id_marcas,
                medida: req.body.medidas,
                comida: req.body.nome_comida,
                preco: req.body.preco
            }
        }

        return res.status( 201 ).send( response );
    }
    catch ( error ) {
        return res.status( 500 ).send( { err: error } )
    }

}

// exports.patchItens = async ( req, res ) => {
//     try {
//         const query = 'UPDATE itens_do_cardapio SET nome = ? WHERE email = ?;'
//         await mysql.execute( query,
//             [
//                 req.body.nome,
//                 req.body.email
//             ] );
//         const response = {
//             mensagem: 'itens_do_cardapio atualizado com sucesso',
//             usuarioAtualizado: {
//                 nome: req.body.nome
//             }
//         }

//         return res.status( 201 ).send( response );
//     }
//     catch ( error ) {
//         return res.status( 500 ).send( error )
//     }

// }

exports.deleteItens = async ( req, res ) => {
    try {


        const query = 'DELETE from itens_do_cardapio WHERE id_itens_do_cardapio = ?'

        await mysql.execute( query, [ req.body.id_itens_do_cardapio ] );

        const response = {
            mensagem: 'Item removido com sucesso'
        }

        return res.status( 200 ).send( response );
    }
    catch ( error ) {
        return res.status( 500 ).send( error )
    }

}


exports.getTodos = async ( req, res ) => {
    try {
        await mysql.execute( 'SELECT * FROM itens_do_cardapio', ( error, results ) => {
            if ( error ) {
                return res.status( 500 ).send( { Erro: error } )
            }
            const response = {
                // quantidade: results.length,
                itens_do_cardapios: results.map( prod => {
                    return {
                        id_itens_do_cardapio: prod.id_itens_do_cardapio,
                        cardapio: prod.id_cardapio,
                        item_tipo: prod.id_item_tipo,
                        bebida_tipo: prod.id_bebida_tipo,
                        marcas: prod.id_marcas,
                        medida: prod.medidas,
                        comida: prod.nome_comida,
                        preco: prod.preco


                    }

                } )
            }
            return res.status( 200 ).send( response );
        } )
    }
    catch ( error ) {

    }

}

exports.verifica = async ( req, res ) => {
    try {
        const query = 'SELECT * FROM itens_do_cardapio WHERE id_cardapio = ?'

        const result = await mysql.execute( query, [ req.body.id_cardapio ] );
        const response = {
            
            Cardapio: 'Itens cadastrado com este cardapio',
            Quantidade: result.length
        }

        return res.status( 200 ).send( response );

    }
    catch ( error ) {
        console.log( error )
        return res.status( 500 ).send( { erro: error } )
    }

}



