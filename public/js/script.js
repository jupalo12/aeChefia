function ok() {
  alert("clickou")
};
function process(mesa) {
  var value = parseInt(document.getElementById("quant").value);
  value += mesa;

  if (value == NaN) {
    document.getElementById("quant").value = 0;
  } else {
    document.getElementById("quant").value = value;
  }

}

function ViewSenha() {
  let senha = document.getElementById('senha')
  let olho = document.getElementById('olho')

  if (senha.getAttribute('type') == ("password")) {
    senha.setAttribute("type", "text")
    olho.src = "/img/vision.png"
  } else {
    senha.setAttribute("type", "password")
    olho.src = "/img/private.png"
  }

}

function confirmarSenha() {
  let confSenha = document.getElementById('confSenha')
  let olho = document.getElementById('olho1')
  if (confSenha.getAttribute('type') == ("password")) {
    confSenha.setAttribute("type", "text")
    olho.src = "/img/vision.png"
  } else {
    confSenha.setAttribute("type", "password")
    olho.src = "/img/private.png"
  }
}

/**
 * ? MASCARA DE DADOS
*/

const options = {
  method: "GET",
  mode: "cors",
  caches: "default"
}
function fMasc(objeto, mascara) {
  obj = objeto
  masc = mascara
  setTimeout("fMascEx()", 1)
}
function fMascEx() {
  obj.value = masc(obj.value)
}
function mTel(tel) {
  tel = tel.replace(/\D/g, "")
  tel = tel.replace(/^(\d)/, "($1")
  tel = tel.replace(/(.{3})(\d)/, "$1)$2")
  if (tel.length == 9) {
    tel = tel.replace(/(.{1})$/, "-$1")
  } else if (tel.length == 10) {
    tel = tel.replace(/(.{2})$/, "-$1")
  } else if (tel.length == 11) {
    tel = tel.replace(/(.{3})$/, "-$1")
  } else if (tel.length == 12) {
    tel = tel.replace(/(.{4})$/, "-$1")
  } else if (tel.length > 12) {
    tel = tel.replace(/(.{4})$/, "-$1")
  } return tel;
}
function mCEP(cep) {
  cep = cep.replace(/\D/g, "")
  cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
  cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
  return cep
}

// Function Mascara Moeda
function k(i) {
  var v = i.value.replace(/\D/g, '');
  v = (v / 100).toFixed(2) + '';
  v = v.replace(".", ".");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  i.value = v;
  v = -v
  console.log(v)
}
function valor(i) {
  var v = i.value.replace(/\D/g, '');
  v = (v / 100).toFixed(2) + '';
  v = v.replace(".", ".");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  i.value = v;
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {

  });
}

cliente = {};



function btngoogle() {
  btn = document.querySelector('.abcRioButton');
  spanLogin = document.querySelector('span');

  spanLogin.textContent = "Entrar com Google"
  spanLogin.style.fontSize = '16px'
  spanLogin.style.fontWeight = 'bold'

  btn.style.height = '48px';
  btn.style.width = '87%';
  btn.style.borderRadius = '100px';
  btn.style.textAlign = 'center';
  btn.style.left = '7%';
  btn.style.paddingLeft = '7px';
  btn.style.paddingTop = '9px';
  btn.style.color = '#323232';
  btn.style.outline = 'none'
}



// height: 48px;
// width: 87%;
// border-radius: 100px;
// text-align: center;
// left: 50px;
// padding: 1%;


function Menu() {
  let menu = document.getElementById('menu-js');
  let conteudoMenu = document.getElementById('menu')
  if (menu.checked == true) {
    conteudoMenu.style.transform = origin = "0% 0%"
    conteudoMenu.style.transition = "transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0)"

  }

}



function testeDiv() {
  lippeativista
  let id = getNextId();
  let div1 = document.getElementById('quantidade1')
  let div2 = document.getElementById('quantidade2')
  let num = 1
  div1.value = id
  div2.value = id
  this.estadoQuantidade1()
  this.estadoQuantidade2()
}
class Usuario {
  constructor() {
    this.arrayUsuario = [];
    this.editId = null
  }
  cadastrar() {
    let usuario = this.lerDados();

    if (this.validaCampos(usuario)) {
      if (this.editId == null) {
        this.adicionar(usuario)
      } else {

      }

    }

  }




  async adicionar(usuario) {

    fetch('http://localhost:3031/proprietario/cadastro', {
      method: 'POST',
      headers:
        { "content-type": "application/json" },
      body: JSON.stringify(usuario)

    }).then(result => {
      return result.json();
    }).then(data => {
      console.log(data)
      usuario.id = data.usuarioCriado.id
      usuario.nome = data.usuarioCriado.nome;
      usuario.email = data.usuarioCriado.email
      usuario.cpf = data.usuarioCriado.cpf
      usuario.telefone = data.usuarioCriado.telefone
      usuario.senha = data.usuarioCriado.hash

      this.arrayUsuario.push(usuario);
      location.assign('/home')

    });
  }

  lerDados() {
    let usuario = {}

    var password = document.getElementById("senha")
      , confirm_password = document.getElementById("confSenha");

    function validatePassword() {
      if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
        alert('passei')
      } else {
        confirm_password.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    usuario.id = 0;
    usuario.nome = document.getElementById('nome').value;
    usuario.email = document.getElementById('email').value;
    usuario.cpf = document.getElementById('cpf').value;
    usuario.telefone = document.getElementById('telefone').value
    usuario.senha = document.getElementById('senha').value

    return usuario;
  }

  validaCampos(usuario) {
    let msg = '';

    if (usuario.nome == "") {
      msg += '- Informe o Nome'
    }
    if (usuario.logo == "") {
      msg += '- Informe o E-mail'
    }
    if (usuario.cep == "") {
      msg += '- Informe o cpf'
    }
    if (usuario.senha == "") {
      msg += '- Insira a Senha'
    }
    if (msg != '') {
      alert(msg);
      return false
    }


    return true;

  }
}
var usuario = new Usuario

function Modal() {

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
    modal.style.padding = '10%';
    modal.style.paddingTop = '10%'


  }

}

function chekado() {
  var checkbox = document.querySelectorAll('.itens-cardapio');

  var selecionados = 0
  checkbox.forEach(function (el) {
    if (el.checked) {
      selecionados++;
    }
  });
}

// Home Cadastrado
function estadoSpanHome() {
  let span = document.getElementById('spanFunction');
  let qnt1 = document.getElementById('quantidade1');
  let qnt2 = document.getElementById('quantidade2');

  if (qnt1.value, qnt2.value == "") {
    span.style.display = "block"
  }

  this.estadoQuantidade1();
  this.estadoQuantidade2();
}


function estadoQuantidade1() {
  let qnt1 = document.getElementById('quantidade1');

  if (qnt1.value == "") {
    qnt1.style.visibility = "hidden"
  } else {
    qnt1.style.visibility = "visible"
    let el = document.getElementById('spanFunction');
    if (el != null) {
      el.remove()
    }

  }
}

function estadoQuantidade2() {
  let qnt2 = document.getElementById('quantidade2');
  if (qnt2.value == "") {
    qnt2.style.visibility = "hidden"

  } else {
    qnt2.style.visibility = "visible"
  }

}
// Splash Screen
function timeout() {
  myVar = setTimeout(function () { window.location.href = "/dashboard"; }, 2500);
}


// Itens Cardapio
function listaCardapio() {
  let divComida = document.getElementById("divComida");
  let divBebida = document.getElementById("divBebida");
  let datalist = document.getElementById("popo")


  if (datalist.value == "Comida") {
    divComida.style.display = "flex"
    divBebida.style.display = "none"
  }
  if (datalist.value == "Bebida") {
    divBebida.style.display = "flex"
    divComida.style.display = "none"
  }

}

class Estabelecimento {
  constructor() {
    this.arrayEstabelecimento = [];
    this.editId = null
  }
  cadastrar() {
    let estabelecimento = this.lerDados();

    if (this.validaCampos(estabelecimento)) {
      if (this.editId == null) {
        this.adicionar(estabelecimento)
      } else {

      }

    }

  }
  listaEstabelecimento() {
    fetch('http://localhost:3031/estabelecimento/listar/' + localStorage.getItem("id_proprietario"), {

      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(result => {
      return result.json()
    }).then(data => {

      data.estabelecimento.forEach(estabele => {
        this.arrayEstabelecimento.push(estabele);
      })

      for (let i = 0; i < this.arrayEstabelecimento.length; i++) {

        if (this.arrayEstabelecimento[i].id_proprietario == localStorage.getItem('id_proprietario')) {
          let estabelecimento = document.createElement('option')
          estabelecimento.setAttribute("value", this.arrayEstabelecimento[i].nome_estabelecimento)
          estabelecimento.innerHTML = `${this.arrayEstabelecimento[i].nome_estabelecimento}`
          document.getElementsByClassName("dropdown_estabelecimento")[0].appendChild(estabelecimento)
        }
      }
    })
  }
  async adicionar(estabelecimento) {

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('nome_estabelecimento', estabelecimento.nome_estabelecimento);
    formData.append('cep', estabelecimento.cep);
    formData.append('logo', fileField.files[0]);
    formData.append('endereco', estabelecimento.endereco);
    formData.append('mesa', estabelecimento.mesa)
    formData.append('id_proprietario', estabelecimento.id_proprietario)


    fetch('http://localhost:3031/estabelecimento/cadastro', {
      method: 'POST',
      body: formData,

    }).then(result => {
      return result.json();
    }).then(data => {
      estabelecimento.nome_estabelecimento = data.estabelecimentoCriado.nome_estabelecimento;
      estabelecimento.logo = data.estabelecimentoCriado.logo
      estabelecimento.cep = data.estabelecimentoCriado.cep
      estabelecimento.endereco = data.estabelecimentoCriado.endereco
      estabelecimento.mesa = data.estabelecimentoCriado.mesa
      estabelecimento.id_proprietario = data.estabelecimentoCriado.id_proprietario

      this.arrayEstabelecimento.push(estabelecimento);
      location.assign('/estabelecimento/sucesso')

    });
  }
  lerDados() {
    let estabelecimento = {}

    estabelecimento.id = 0;
    estabelecimento.nome_estabelecimento = document.getElementById('nome_estabelecimento').value;
    estabelecimento.cep = document.getElementById('cep').value;
    estabelecimento.logo = document.getElementById('logo').value;
    estabelecimento.endereco = document.getElementById('endereco').value
    estabelecimento.mesa = document.getElementById('quant').value
    estabelecimento.id_proprietario = localStorage.getItem('id_proprietario')

    return estabelecimento;
  }

  verificar() {

    fetch('http://localhost:3031/estabelecimento/listar/' + localStorage.getItem("id_proprietario"), {

      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(result => {
      return result.json()
    }).then(data => {
      if (data.estabelecimento.length == 0) {
      } else {
        window.location.href = "/dashboard"
      }
    })
  }
  selecionar_estabelecimento() {
    let estabelecimento_input = document.getElementById('estab_input').value
    fetch('http://localhost:3031/estabelecimento/' + estabelecimento_input, {

      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(result => {
      return result.json()
    }).then(data => {
      if (localStorage.getItem('id_cardapio') == null) {
        localStorage.setItem("estabelecimento", data.estabelecimento[0].id_estabelecimento)
        cardapio.quantidade_cardapio();
        funcionario.funcionario_quantidade();
      } else {
        localStorage.removeItem('id_cardapio')
        localStorage.setItem("estabelecimento", data.estabelecimento[0].id_estabelecimento)
        cardapio.quantidade_cardapio();
        funcionario.funcionario_quantidade();
      }

    })

  }

  criarMesas() {
    if (localStorage.getItem('estabelecimento') == undefined) {
      let aviso = document.getElementById('aviso')
      aviso.innerHTML = `<h2 style="color: red; text-align: center; padding-top: 2%;letter-spacing: 1px;" class="h2-Add" >Selecione um estabelecimento para ver as mesas<br> `
    }
    fetch('http://localhost:3031/estabelecimento/mesa/' + localStorage.getItem("estabelecimento"), {

      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(result => {
      return result.json()
    }).then(data => {
      if (data.estabelecimento.length >= 1) {
        for (let mesa = 0; mesa < data.estabelecimento[0].mesa; mesa++) {
          let id = '0' + [mesa];
          if (id.length > 2) {
            id = id.replace('0', '')
          }
          let divElement = document.createElement("div");
          var conteudoNovo = document.createTextNode(id);
          divElement.appendChild(conteudoNovo);

          let divMae = document.getElementById("mesas");

          divElement.setAttribute('id', 'box' + id.toString());
          divElement.setAttribute('onclick', 'comanda.mesa("' + [mesa] + '")')

          divElement.style.width = "18%";
          divElement.style.height = "66px";
          divElement.style.backgroundColor = '#F4F4F4';
          divElement.style.display = '';
          divElement.style.opacity = '0.1';
          divElement.style.marginLeft = '5%';
          divElement.style.margin = '10px'
          divElement.style.color = '#5A5A5A'
          divElement.style.fontSize = '24px'
          divElement.style.fontFamily = 'Inter'
          divElement.style.fontStyle = 'normal'
          divElement.style.lineHeight = '27px'
          divElement.style.letterSpacing = '-0.02em'
          divElement.classList.add("bounceIn")


          divElement.style.paddingTop = '23px'
          divElement.style.textAlign = 'center'



          divMae.appendChild(divElement);

          if (id >= 12) {
            let footer = document.getElementById('footer');
            footer.style.position = 'unset'
          }

        }
      }
    })

  }
  validaCampos(estabelecimento) {
    let msg = '';

    if (estabelecimento.nome_estabelecimento == "") {
      msg += '- Informe o nome do estabelecimento'
    }
    if (estabelecimento.logo == "") {
      msg += '- Informe o logo do estabelecimento'
    }
    if (estabelecimento.cep == "") {
      msg += '- Informe o cep do estabelecimento'
    }
    if (estabelecimento.endereco == "") {
      msg += '- Informe o endereco do estabelecimento'
    }
    if (msg != '') {
      alert(msg);
      return false
    }
    return true;

  }
}
var estabelecimento = new Estabelecimento



function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();

  var xhr = new XMLHttpRequest();

  var id_token = googleUser.getAuthResponse().id_token;

  var email = profile.getEmail();
  xhr.open('POST', '/login');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {

    if (xhr.responseText == 'success') {

      fetch('http://localhost:3031/usuarios/' + email, {
      })
        .then(response => response.json())
        .then(data => {

          if (data.tamanho > 0) {

            try {

              fetch('http://localhost:3031/usuarios/login', {
                method: 'POST',
                body: JSON.stringify({
                  email: email,
                  google: true
                }),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }

              }).then(result => {
                return result.json();
              }).then(data => {
                localStorage.setItem("ourToken", data.token)
                localStorage.setItem("email", email)
                if (1 > 0) {
                  listarEstab()
                }

              });

            } catch (error) {
            }

          } else {

            location.assign('/cadastro')
          }
        })

      signOut();
    }
  };
  xhr.send(JSON.stringify({ token: id_token }));
}

function jwt_login() {

  let user = {
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value
  };


  fetch('http://localhost:3031/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `${localStorage.getItem("ourToken")}`

    },
    body: JSON.stringify(user)
  }).then(result => {
    if (result.ok) {
      return result.json()
    } else {
      localStorage.setItem("ourToken", null)
      alert("Senha Incorreta!")
      document.getElementById('email').value = '';
      document.getElementById('senha').value = '';
    }
  }).then(data => {

    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("ourToken", data.token);
    localStorage.setItem("id_proprietario", data.usuario[0].id_proprietario)

    // location.assign( '/home' )

    // listarEstab();

    if (1 > 0) {
      listarEstab()
    }
  });



}

function listarEstab() {


  location.assign('/home')


}

function alertEstab() {
  let email = localStorage.getItem("email");
  fetch('http://localhost:3031/estabelecimento/listar/' + email, {
    method: 'GET'
  }).then(result => {
    return result.json();
  }).then(data => {
    console.table(data.Estabelecimento[0])
  })
}


function jwt_auth_load() {

  fetch('http://localhost:3031/home/entrar', {
    headers: {
      'Authorization': `${localStorage.getItem("ourToken")}`
    }
  }).then(result => {
    if (result.ok) {
      return result.json()
    } else {
      localStorage.setItem("ourToken", null)
      location.assign('/')
    }
  });

}

function logout() {
  fetch('http://localhost:3031/logout', {

  }).then(result => {
    localStorage.clear();
    localStorage.setItem("ourToken", null)
    document.location.reload(true)

  });

}

class Proprietario {

  async buscarProprietario() {

    fetch('http://localhost:3031/proprietario/' + localStorage.getItem('id_proprietario'))
      .then(result => {
        return result.json()
      }).then(data => {
        document.getElementById('nomespan').innerHTML = `Olá ${data.proprietario.nome}!`
        estabelecimento.listaEstabelecimento();
      })
  }
}

var proprietario = new Proprietario

class Funcionario {
  funcionario_quantidade() {
    fetch('http://localhost:3031/funcionario/quantidade/' + localStorage.getItem('estabelecimento'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      document.getElementById('quantidade1').value = data.quantidade
      estadoSpanHome()
    })
  }

  listaFuncionario() {
    fetch('http://localhost:3031/funcionario/quantidade/' + localStorage.getItem('estabelecimento'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      console.log(data)

      var searchBar = document.getElementById('campo_busca');
      var funcionario_buscar = data.funcionario


      searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const FiltroFuncionario = funcionario_buscar.filter(funcionario_buscar => {
          return (
            funcionario_buscar.nome_funcionario.toLowerCase().includes(searchString)
          )
        });
        funcionar(FiltroFuncionario)
      })

      const funcionar = (funcionario_buscar) => {
        const funcionarioHTML = funcionario_buscar
          .map((funcionario_buscar) => {

            return `<div class="div-cadastrado" id="funcionario_${funcionario_buscar.id_funcionario}">
              <div class="span-cadastrado">
              <span class="nome-cadastrado">${funcionario_buscar.nome_funcionario}</span>
              <span>${funcionario_buscar.email}</span>
          </div>
          <div class="btn-cadastrado">
              <button class="editarGrey" onclick="funcionario.editarFuncionario()">Editar</button>
              <button class="excluirRed" onclick="funcionario.excluirFuncionario(${funcionario_buscar.id_funcionario})">Excluir</button>
          </div>
          </div>`;
          })
          .join('');
        let funcionario = document.getElementById('bora')

        funcionario.innerHTML = funcionarioHTML
        document.getElementsByClassName("inicio")[0].appendChild(funcionario)

      };
      funcionar(funcionario_buscar)

    })
  }
  editarFuncionario() {

  }
  excluirFuncionario(id_funcionario) {
    fetch('http://localhost:3031/funcionario/remover/' + id_funcionario, {
      method: 'DELETE',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      let selecionado = document.getElementById('funcionario_' + id_funcionario)
      selecionado.style.display = 'none'
    })
  }
  adicionar() {
    let funcionario = {}

    funcionario.id = 0;
    funcionario.nome_funcionario = document.getElementById('nome_funcionario').value;
    funcionario.email = document.getElementById('email').value;
    funcionario.login = document.getElementById('login').value;
    funcionario.senha = document.getElementById('senha').value;
    funcionario.confSenha = document.getElementById('confSenha').value;
    funcionario.id_estabelecimento = parseInt(localStorage.getItem('estabelecimento'))
    console.log(typeof (funcionario.id_estabelecimento))
    console.log(funcionario.id_estabelecimento)
    fetch('http://localhost:3031/funcionario/inserir/', {
      method: 'POST',
      headers:
        { "content-type": "application/json" },
      body: JSON.stringify(funcionario)
    }).then(result => {
      return result.json();
    }).then(data => {
      location.assign("/funcionario/sucesso")
    });
  }
  verificaEstabelecimento() {
    if (localStorage.getItem('estabelecimento') == null) {
      alert('Escolha um estabelecimento')
    } else {
      location.assign('/funcionario/cadastrar')
    }
  }


}


var funcionario = new Funcionario


class Cardapio {

  constructor() {

    this.arrayCardapio = []
  }
  search() {
    localStorage.setItem('search', 1)
  }
  deletarCardapio(id_cardapio) {
    fetch('http://localhost:3031/cardapio/remover/' + id_cardapio, {
      method: 'DELETE',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      //document.location.reload(true)
    })
  }
  quantidade_cardapio() {
    fetch('http://localhost:3031/cardapio/quantidade/' + localStorage.getItem('estabelecimento'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      document.getElementById('quantidade2').value = data.quantidade
      estadoSpanHome()
    })
  }

  addCardapio(cardapio) {
    if (localStorage.getItem('estabelecimento') == null) {
      alert('escolha um estabelecimento')
    } else {
      let nome = document.getElementById('nome').value
      fetch('http://localhost:3031/cardapio/cadastro/' + localStorage.getItem('estabelecimento') + '/' + nome, {
        method: 'POST',
        headers: { "content-type": "application/json" },
      }).then(result => {
        return result.json();
      }).then(data => {
        console.log(cardapio)
        localStorage.setItem('id_cardapio', data.cardapioCriado.id_cardapio)
      /*  if(cardapio == 1 ){
          this.setarBebida()
        }else{
          this.setarComida()
        }*/
        
      })
    }

  }


  criarCardapio() {
    fetch('http://localhost:3031/cardapio/quantidade/' + localStorage.getItem('estabelecimento'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {

      data.cardapio.forEach(estabele => {
        this.arrayCardapio.push(estabele);
      })

      for (let i = 0; i < this.arrayCardapio.length; i++) {
        fetch('http://localhost:3031/cardapio/item/' + this.arrayCardapio[i].id_cardapio, {
          method: 'GET',
          headers: { "content-type": "application/json" }
        }).then(result => {
          return result.json();
        }).then(data => {

          let cardapio = document.createElement('div')
          cardapio.classList.add('div-cadastrado')

          cardapio.innerHTML = `<div class="span-cadastrado">
      <span class="nome-cadastrado">Cardápio ${[i]}</span>
      <span>${data.quantidade} itens</span>
      <span>28/07/2021</span>
  </div>
  <div class="btn-cadastrado">
     <a href="/cardapio/lista"> <button class="editarGrey" onclick="cardapio.setarCardapio(${this.arrayCardapio[i].id_cardapio})" >Editar</button></a>
     <button class="excluirRed" onclick="cardapio.deletarCardapio(${this.arrayCardapio[i].id_cardapio})">Excluir</button>
  </div>`

          document.getElementsByClassName("selecionado")[0].appendChild(cardapio)
        });
      }
    });
  }
  selecionarCardapio() {

    let cardapio_input = document.getElementById('cardapio_input').value
    if (cardapio_input != 'Selecione uma opção') {
      localStorage.setItem("id_cardapio", cardapio_input)
    }

  }
  drop_cardapio() {
    fetch('http://localhost:3031/cardapio/listar/' + localStorage.getItem("estabelecimento"), {

      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(result => {
      return result.json()
    }).then(data => {
      for (let i = 0; i < data.cardapio.length; i++) {
        let estabelecimento = document.createElement('option')
        estabelecimento.setAttribute("value", data.cardapio[i].cardapio)
        estabelecimento.innerHTML = `${[i]}`
        document.getElementsByClassName("dropdown_estabelecimento")[0].appendChild(estabelecimento)

      }
    })
  }
  listaCardapio() {

    if (localStorage.getItem('search') != '2') {
      let search = document.createElement('div')
      search.classList.add('pesquisa')
      document.getElementsByClassName("inicio")[0].appendChild(search)
      search.innerHTML = `
      <input class="inputLine" type="search" id="buscar_produto" name="campo_busca"
      placeholder="Buscar Por..." size="30" data-search>`
      localStorage.setItem('search', 2)
    }



    let tipo = document.getElementById('tipo').value
    fetch('http://localhost:3031/cardapio/tipo/' + tipo, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(result => {
      return result.json()
    }).then(data => {
      localStorage.setItem("id_item_tipo", data.tipos[0].id_item_tipo)
      fetch('http://localhost:3031/cardapio/item/' + localStorage.getItem('id_cardapio') + '/' + localStorage.getItem('id_item_tipo'), {
        method: 'GET',
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {

        console.log(data)
        for (let i = 0; i < data.quantidade; i++) {


          let medidas = data.cardapio[i].id_medidas
          let marcas = data.cardapio[i].id_marcas
          let nome_comida = data.cardapio[i].nome_comida
          let preco = data.cardapio[i].preco
          let itens = data.cardapio[i].id_itens_do_cardapio

          if (localStorage.getItem("id_item_tipo") == 1) {
            fetch('http://localhost:3031/marca/pegar/' + marcas, {
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }
            }).then(result => {
              return result.json()
            }).then(data => {
              marcas = data.marcas[0].marca
              fetch('http://localhost:3031/medida/pegar/' + medidas, {
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                }
              }).then(result => {
                return result.json()
              }).then(data => {

                medidas = data.medidas[0].medida

                let item = document.createElement('div')
                item.classList.add('foi-bebida')
                item.setAttribute('value', itens)
                if (item.classList.contains('foi-comida') == false) {

                  let comida = document.getElementsByClassName('foi-comida')
                  for (let comer = 0; comer < comida.length; comer++) {
                    comida[comer].style.display = 'none'
                  }

                }
                item.innerHTML = `<div class="div-cadastrado" id="bebida${itens}">
                <div class="span-cadastrado">
             <span class="nome-cadastrado" id="search_name">${marcas}</span>
             <span>${medidas}</span>
             <span>R$:${preco}</span>
          </div>
          <div class="btn-cadastrado">
             <button class="editarGrey" onclick="bebida.salvarBebida(${itens})">Editar</button>
             <button class="excluirRed" onclick="cardapio.excluirProduto(${itens})">Excluir</button>
          </div>
          </div>`

                document.getElementsByClassName("inicio")[0].appendChild(item)
                const searchInput = document.querySelector("[data-search]")

                let list = document.getElementsByClassName('foi-bebida')
                searchInput.addEventListener("input", (e) => {
                  const value = e.target.value.toLowerCase();
                  console.log(value)
                  const books = list
                  console.log(books)
                  Array.from(books).forEach(function (book) {
                    const title = book.firstElementChild.textContent;
                    console.log(title)
                    if (title.toLowerCase().indexOf(value) != -1) {
                      book.style.display = 'block'
                    } else {
                      book.style.display = 'none'
                    }
                  })

                })
              })
            })
          } else {
            fetch('http://localhost:3031/medida/pegar/' + medidas, {
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }
            }).then(result => {
              return result.json()
            }).then(data => {
              medidas = data.medidas[0].medida

              let item = document.createElement('div')

              item.classList.add('foi-comida')
              if (item.classList.contains('foi-bebida') == false) {
                let bebida = document.getElementsByClassName('foi-bebida')
                for (let beber = 0; beber < bebida.length; beber++) {
                  bebida[beber].style.display = 'none'
                }

              }
              item.innerHTML = `<div class="div-cadastrado" id="comida${itens}">
                  <div class="span-cadastrado">
                      <span class="nome-cadastrado">${nome_comida}</span>
                      <span>${medidas}</span>
                      <span>R$:${preco}</span>
                  </div>
                  <div class="btn-cadastrado">
                      <button class="editarGrey" onclick="comida.salvarComida(${itens})">Editar</button>
                      <button class="excluirRed" onclick="cardapio.excluirProduto(${itens})">Excluir</button>
                  </div>
                  </div>`

              const searchInput = document.querySelector("[data-search]")
              document.getElementsByClassName("inicio")[0].appendChild(item)
              let list = document.getElementsByClassName('foi-comida')
              searchInput.addEventListener("input", (e) => {
                const value = e.target.value.toLowerCase();
                console.log(value)
                const books = list
                console.log(books)
                Array.from(books).forEach(function (book) {
                  const title = book.firstElementChild.textContent;
                  console.log(title)
                  if (title.toLowerCase().indexOf(value) != -1) {
                    book.style.display = 'block'
                  } else {
                    book.style.display = 'none'
                  }
                })

              })
            })
          }


        }
      })
    })
  }

  setarCardapio(id_cardapio) {
    localStorage.setItem('id_cardapio', id_cardapio)
  }

  setarBebida() {

    localStorage.setItem('id_item_tipo', 1)
      location.assign('/cardapio/bebida')

  }
  setarComida() {
    localStorage.setItem('id_item_tipo', 2)
      location.assign('/cardapio/comida')


  }

  excluirProduto(item) {
    fetch('http://localhost:3031/item/remover/' + item, {
      method: 'DELETE',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      if (localStorage.getItem('id_item_tipo') == 1) {
        let selecionadobebida = document.getElementById('bebida' + item)

        selecionadobebida.style.display = 'none'
      }
      let selecionadocomida = document.getElementById('comida' + item)
      selecionadocomida.style.display = 'none'
    })
  }
  sumiu() {

  }
}

var cardapio = new Cardapio


class Comida {
  constructor() {
    this.arrayComida = []
    this.editId = null
  }
  cadastrar_comida() {
    let comida = this.dadosComida();

    if (this.verificaComida(comida)) {
      if (this.editId == null) {
        this.addComida(comida)
      } else {

      }

    }

  }

  procurarPedido() {

    const searchInput = document.querySelector("[data-search]")
    let list = document.getElementsByClassName('whatever')
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
      const books = list
      Array.from(books).forEach(function (book) {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(value) != -1) {
          book.style.display = 'grid'
        } else {
          book.style.display = 'none'
        }
      })

    })
  }

  addComida(comida) {
    if (localStorage.getItem('item') == 'null') {
      fetch('http://localhost:3031/medida/' + comida.id_medidas, {
        method: 'GET',
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {

        comida.id_medidas = data.medidas[0].id_medidas

        fetch('http://localhost:3031/item/cadastro/', {
          method: 'POST',
          headers:
            { "content-type": "application/json" },
          body: JSON.stringify(comida)

        }).then(result => {
          return result.json();
        }).then(data => {

          comida.id_cardapio = data.itemCriado.id_cardapio;
          comida.id_medidas = data.itemCriado.id_medidas;
          comida.nome_comida = data.itemCriado.nome_comida;
          comida.id_item_tipo = data.itemCriado.id_item_tipo;
          comida.preco = data.itemCriado.preco;

          this.arrayComida.push(comida);
          location.assign('/cardapio/comida/sucesso')
        });
      });
    } else {
      this.editarComida()
    }

  }

  dadosComida() {
    let comida = {}
    comida.id = 0;
    comida.id_cardapio = localStorage.getItem('id_cardapio')
    comida.id_item_tipo = localStorage.getItem('id_item_tipo')
    comida.nome_comida = document.getElementById('comida').value
    comida.id_medidas = document.getElementById('medida').value;
    comida.preco = document.getElementById('preco').value

    return comida;
  }

  verificaComida(comida) {
    let msg = '';

    if (funcionario.nome_funcionario == "") {
      msg += '- Informe o Nome'
    }
    if (funcionario.email == "") {
      msg += '- Informe o E-mail'
    }
    if (funcionario.login == "") {
      msg += '- Informe o login'
    }
    if (funcionario.senha == "") {
      msg += '- Insira a Senha'
    }
    if (msg != '') {
      alert(msg);
      return false
    }


    return true;

  }
  criarComida() {
    if (localStorage.getItem('id_cardapio') == undefined) {
      document.getElementById('aviso').innerHTML = `<a href="/cardapio/zerado"><h2 style="color: #666666; text-align: center; padding-top: 2%;letter-spacing: 1px;" class="h2-Add">Selecione um
      cardapio para ver as comidas<br></a>`
    }
    fetch('http://localhost:3031/cardapio/item/' + localStorage.getItem('id_cardapio') + '/' + localStorage.getItem('id_item_tipo'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      for (let i = 0; i < data.quantidade; i++) {
        let medidas = data.cardapio[i].id_medidas
        let nome_comida = data.cardapio[i].nome_comida
        let preco = data.cardapio[i].preco
        let id_itens_do_cardapio = data.cardapio[i].id_itens_do_cardapio
        fetch('http://localhost:3031/medida/pegar/' + medidas, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(result => {
          return result.json()
        }).then(data => {
          medidas = data.medidas[0].medida

          let id = i

          let divElement = document.createElement("input");
          divElement.type = "checkbox"

          let labelFor = document.createElement("label")

          var conteudoNovo = document.createElement("span");
          var conteudoNovo2 = document.createElement("span");
          var conteudoNovo3 = document.createElement("span");

          var span1 = document.createTextNode(nome_comida)
          var span2 = document.createTextNode(medidas)
          var span3 = document.createTextNode(preco + '$')

          conteudoNovo.appendChild(span1);
          conteudoNovo2.appendChild(span2);
          conteudoNovo3.appendChild(span3);


          labelFor.appendChild(conteudoNovo);
          labelFor.appendChild(conteudoNovo2);
          labelFor.appendChild(conteudoNovo3);

          let divMae = document.getElementById("mesas");
          divMae.classList.add("checkboxes")

          divElement.setAttribute('id', 'box' + id.toString());
          labelFor.setAttribute('for', 'box' + id.toString())
          divElement.setAttribute("onclick", "comida.setarValor(" + id_itens_do_cardapio + ", this)");

          labelFor.classList.add("whatever")
          divElement.classList.add("itens-cardapio")
          divElement.classList.add("bounceIn")
          divElement.setAttribute('name', 'check');
          conteudoNovo.style.fontSize = "18px"
          conteudoNovo.style.lineHeight = "22px"
          conteudoNovo.style.letterSpacing = "-0.02em"
          conteudoNovo.style.fontWeight = "bold"
          conteudoNovo.style.textAlign = 'left'


          divMae.appendChild(divElement);
          divMae.appendChild(labelFor)
          if (id >= 4) {
            let footer = document.getElementById('footer');
            footer.style.position = 'unset'
          }
        })
      }

    })
  }
  onlyOne(checkbox) {
    console.log('passei')
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
    })
  }
  setarValor(id_itens_do_cardapio, checkbox) {
    localStorage.setItem("id_itens_do_cardapio", id_itens_do_cardapio)
    this.onlyOne(checkbox)

  }
  salvarComida(item) {
    localStorage.setItem('item', item)
    location.assign('/cardapio/comida')
  }
  mostrarComida() {
    if (localStorage.getItem('id_cardapio') == null) {
      alert('Escolha um Cardapio')
    } else {
      fetch('http://localhost:3031/medida', {
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {
        console.log(data)
        for (let i = 0; i < data.bebida_medida.length; i++) {

          let medida = document.createElement('option')
          medida.setAttribute('value', data.bebida_medida[i].medida)
          let medidao = document.getElementById('nome-medida')
          medidao.appendChild(medida)
        }
      })
    }
    if (localStorage.getItem('item') != 'null') {
      fetch('http://localhost:3031/item/unico/' + localStorage.getItem('item'), {
        method: 'GET',
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {
        document.getElementById('preco').value = data.itens[0].preco
        document.getElementById('comida').value = data.itens[0].nome_comida
        let medidas = data.itens[0].id_medidas
        document.getElementById('botao_comida').innerHTML = `Atualizar Comida `
        fetch('http://localhost:3031/medida/pegar/' + medidas, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(result => {
          return result.json()
        }).then(data => {
          medidas = data.medidas[0].medida
          document.getElementById('medida').value = medidas


        })
      })
    }

  }
  editarComida() {
    let preco = document.getElementById('preco').value
    fetch('/item/atualizar/' + localStorage.getItem('item') + '/' + preco, {
      method: 'PATCH',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      localStorage.setItem('item', 'null')
      location.assign('/cardapio/comida/sucesso')
    })
  }

}

var comida = new Comida


class Bebida {

  constructor() {
    this.arrayBebida = []
    this.editId = null
  }
  cadastrar_bebida() {
    let bebida = this.dadosBebida();

    if (this.verificaBebida(bebida)) {
      if (this.editId == null) {
        this.addBebida(bebida)
      } else {

      }

    }

  }

  criarBebida() {
    if (localStorage.getItem('id_cardapio') == undefined) {
      document.getElementById('aviso').innerHTML = `<h2 style="color: #666666; text-align: center; padding-top: 2%;letter-spacing: 1px;" class="h2-Add">Selecione um
      cardapio para ver as bebidas<br>`
    }
    fetch('http://localhost:3031/cardapio/item/' + localStorage.getItem('id_cardapio') + '/' + localStorage.getItem('id_item_tipo'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      for (let i = 0; i < data.quantidade; i++) {
        let medidas = data.cardapio[i].id_medidas
        let preco = data.cardapio[i].preco
        let marcas = data.cardapio[i].id_marcas
        let id_itens_do_cardapio = data.cardapio[i].id_itens_do_cardapio

        fetch('http://localhost:3031/medida/pegar/' + medidas, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(result => {
          return result.json()
        }).then(data => {
          medidas = data.medidas[0].medida

          fetch('http://localhost:3031/marca/pegar/' + marcas, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          }).then(result => {
            return result.json()
          }).then(data => {
            marcas = data.marcas[0].marca

            let id = i

            let divElement = document.createElement("input");
            divElement.type = "checkbox"

            let labelFor = document.createElement("label")

            var conteudoNovo = document.createElement("span");
            var conteudoNovo2 = document.createElement("span");
            var conteudoNovo3 = document.createElement("span");

            var span1 = document.createTextNode(marcas)
            var span2 = document.createTextNode(medidas)
            var span3 = document.createTextNode(preco + '$')

            conteudoNovo.appendChild(span1);
            conteudoNovo2.appendChild(span2);
            conteudoNovo3.appendChild(span3);


            labelFor.appendChild(conteudoNovo);
            labelFor.appendChild(conteudoNovo2);
            labelFor.appendChild(conteudoNovo3);

            let divMae = document.getElementById("mesas");
            divMae.classList.add("checkboxes")

            divElement.setAttribute('id', 'box' + id.toString());
            labelFor.setAttribute('for', 'box' + id.toString())
            divElement.setAttribute("onclick", "bebida.setarValor(" + id_itens_do_cardapio + ", this)");


            labelFor.classList.add("whatever")
            divElement.classList.add("itens-cardapio")
            divElement.classList.add("bounceIn")
            divElement.setAttribute('name', 'check');

            conteudoNovo.style.fontSize = "18px"
            conteudoNovo.style.lineHeight = "22px"
            conteudoNovo.style.letterSpacing = "-0.02em"
            conteudoNovo.style.fontWeight = "bold"
            conteudoNovo.style.textAlign = 'left'


            divMae.appendChild(divElement);
            divMae.appendChild(labelFor)
            if (id >= 4) {
              let footer = document.getElementById('footer');
              footer.style.position = 'unset'
            }

          })

        })
      }

    })
  }
  onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
    })
  }
  setarValor(id_itens_do_cardapio, checkbox) {
    console.log(id_itens_do_cardapio, checkbox)
    localStorage.setItem("id_itens_do_cardapio", id_itens_do_cardapio)
    this.onlyOne(checkbox)

  }
  addBebida(bebida) {
    if (localStorage.getItem('item') == 'null') {
      fetch('http://localhost:3031/bebidatipo/' + bebida.id_bebida_tipo, {
        method: 'GET',
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {
        bebida.id_bebida_tipo = data.bebida[0].id_bebida_tipo;


        fetch('http://localhost:3031/medida/' + bebida.id_medidas, {
          method: 'GET',
          headers: { "content-type": "application/json" }
        }).then(result => {
          return result.json();
        }).then(data => {

          bebida.id_medidas = data.medidas[0].id_medidas

          fetch('http://localhost:3031/marca/' + bebida.id_marcas, {
            method: 'GET',
            headers: { "content-type": "application/json" }
          }).then(result => {
            return result.json();
          }).then(data => {

            bebida.id_marcas = data.marcas[0].id_marcas
            fetch('http://localhost:3031/item/cadastro/', {
              method: 'POST',
              headers:
                { "content-type": "application/json" },
              body: JSON.stringify(bebida)

            }).then(result => {
              return result.json();
            }).then(data => {

              bebida.id_cardapio = data.itemCriado.id_cardapio;
              bebida.id_item_tipo = data.itemCriado.id_item_tipo;
              bebida.id_bebida_tipo = data.itemCriado.id_bebida_tipo;
              bebida.id_marcas = data.itemCriado.id_marcas;
              bebida.id_medidas = data.itemCriado.id_medidas;
              bebida.preco = data.itemCriado.preco;

              this.arrayBebida.push(bebida);
              location.assign('/cardapio/bebida/sucesso')
            });
          });
        });
      });
    } else {
      this.editarBebida()
    }
  }

  dadosBebida() {
    let bebida = {}
    bebida.id = 0;
    bebida.id_cardapio = localStorage.getItem('id_cardapio')
    bebida.id_item_tipo = localStorage.getItem('id_item_tipo')
    bebida.id_bebida_tipo = document.getElementById('tipo_bebida').value;
    bebida.id_marcas = document.getElementById('marca').value;
    bebida.id_medidas = document.getElementById('medida').value;
    bebida.preco = document.getElementById('preco').value

    return bebida;
  }

  verificaBebida(bebida) {
    let msg = '';

    if (funcionario.nome_funcionario == "") {
      msg += '- Informe o Nome'
    }
    if (funcionario.email == "") {
      msg += '- Informe o E-mail'
    }
    if (funcionario.login == "") {
      msg += '- Informe o login'
    }
    if (funcionario.senha == "") {
      msg += '- Insira a Senha'
    }
    if (msg != '') {
      alert(msg);
      return false
    }


    return true;

  }
  salvarBebida(item) {
    localStorage.setItem('item', item)
    location.assign('/cardapio/bebida')

  }
  mostrarBebida() {
    if (localStorage.getItem('id_cardapio') == null) {
      alert('Escolha um Cardapio')
    } else {

      fetch('http://localhost:3031/marca', {
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {
        for (let i = 0; i < data.marcas.length; i++) {
          let marca = document.createElement('option')
          marca.setAttribute('value', data.marcas[i].marca)
          let marcao = document.getElementById('nome-marca')
          marcao.appendChild(marca)
        }

      })
      fetch('http://localhost:3031/bebidatipo', {
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {

        for (let i = 0; i < data.bebida_tipo.length; i++) {
          let tipo = document.createElement('option')
          tipo.setAttribute('value', data.bebida_tipo[i].bebida)
          let tipao = document.getElementById('nome-tipo')
          tipao.appendChild(tipo)
        }
      })
      fetch('http://localhost:3031/medida', {
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {
        console.log(data)
        for (let i = 0; i < data.bebida_medida.length; i++) {

          let medida = document.createElement('option')
          medida.setAttribute('value', data.bebida_medida[i].medida)
          let medidao = document.getElementById('nome-medida')
          medidao.appendChild(medida)
        }
      })
    }
    if (localStorage.getItem('item') != 'null') {
      fetch('http://localhost:3031/item/unico/' + localStorage.getItem('item'), {
        method: 'GET',
        headers: { "content-type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {
        console.log(data)
        document.getElementById('preco').value = data.itens[0].preco
        document.getElementById('nome-tipo').value = data.itens[0].id_bebida_tipo

        let medidas = data.itens[0].id_medidas
        let marcas = data.itens[0].id_marcas
        let bebida_tipo = data.itens[0].id_bebida_tipo
        console.log(bebida_tipo)
        document.getElementById('botao_bebida').innerHTML = `Atualizar Bebida `
        fetch('http://localhost:3031/bebidatipo/buscar/' + bebida_tipo, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(result => {
          return result.json()
        }).then(data => {
          console.log(data)
          bebida_tipo = data.bebida[0].nome_tipo
          document.getElementById('tipo_bebida').value = bebida_tipo
        })
        fetch('http://localhost:3031/medida/pegar/' + medidas, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(result => {
          return result.json()
        }).then(data => {
          medidas = data.medidas[0].medida
          document.getElementById('medida').value = medidas

          fetch('http://localhost:3031/marca/pegar/' + marcas, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          }).then(result => {
            return result.json()
          }).then(data => {
            marcas = data.marcas[0].marca
            document.getElementById('marca').value = marcas
          })

        })
      })
    }

  }
  editarBebida() {
    let preco = document.getElementById('preco').value
    fetch('/item/atualizar/' + localStorage.getItem('item') + '/' + preco, {
      method: 'PATCH',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      localStorage.setItem('item', 'null')
      location.assign('/cardapio/bebida/sucesso')
    })
  }
}

var bebida = new Bebida


class Comanda {

  mesa(mesa) {
    localStorage.setItem('mesa', mesa)
    location.assign('/comanda/cliente')
  }

  carregarMesa() {
    document.getElementById('mesa').value = `${localStorage.getItem('mesa')}`
  }
  listaCliente() {
    fetch('http://localhost:3031/comanda/cliente/' + localStorage.getItem("mesa") + '/' + localStorage.getItem('estabelecimento'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      for (let i = 0; i < data.quantidade; i++) {
        console.log(data)
        if (data.comanda[i].disponibilidade == 1) {
          let comandar = document.createElement('option')
          comandar.setAttribute("value", data.comanda[i].id_comanda)
          comandar.innerHTML = `${data.comanda[i].cliente}`
          document.getElementsByClassName("dropdown_comanda")[0].appendChild(comandar)
        }


      }

    })

  }
  selecionarCliente() {
    localStorage.setItem("id_comanda", document.getElementById('id_comanda').value);
  }

  addPedido() {
    let response;
    let pedido = {}

    pedido.quant = document.getElementById("quant").value
    pedido.id_comanda = localStorage.getItem('id_comanda')
    pedido.id_itens_do_cardapio = localStorage.getItem('id_itens_do_cardapio')
    pedido.id_estabelecimento = localStorage.getItem("estabelecimento")
    response = fetch('http://localhost:3031/pedidocomanda/cadastro/', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(pedido)

    }).then(result => {
      if(response?.ok){
        alert('Selecione um cliente')
      }
      return result.json();
    }).then(data => {
      pedido.quant = data.pedidos.quant
      pedido.id_comanda = data.pedidos.id_comanda
      pedido.id_itens_do_cardapio = data.pedidos.id_itens_do_cardapio
      pedido.id_estabelecimento = data.pedidos.id_estabelecimento


      localStorage.removeItem('id_itens_do_cardapio')
      localStorage.removeItem('id_comanda')
      location.assign('/comanda/cliente')
    })
  }

  async adicionarCliente() {

    let comanda = {}

    comanda.mesa = document.getElementById('mesa').value;
    comanda.cliente = document.getElementById('cliente').value;
    comanda.telefone = document.getElementById('telefone').value;
    comanda.status = true
    comanda.id_estabelecimento = localStorage.getItem("estabelecimento")
    fetch('http://localhost:3031/comanda/cadastro/', {
      method: 'POST',
      headers:
        { "content-type": "application/json" },
      body: JSON.stringify(comanda)
    }).then(result => {
      return result.json();
    }).then(data => {
      comanda.mesa = data.cliente.mesa;
      comanda.cliente = data.cliente.cliente;
      comanda.telefone = data.cliente.telefone;
      comanda.status = data.cliente.status;
      comanda.id_estabelecimento = data.cliente.id_estabelecimento;

      location.assign('/comanda/sucesso')
    });
  }
  abrirComanda() {
    fetch('http://localhost:3031/pedidocomanda/valor/' + localStorage.getItem("id_comanda"), {
      method: 'GET',
      headers:
        { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      let valor
      for (let i = 0; i < data.pedidos.length; i++) {
        let quant = data.pedidos[i].quant
        fetch('http://localhost:3031/item/unico/' + data.pedidos[i].id_itens_do_cardapio, {
          method: 'GET',
          headers:
            { "content-type": "application/json" }
        }).then(result => {
          return result.json();
        }).then(data => {


          if (valor != undefined) {

            valor += quant * data.itens[0].preco

          } else {
            valor = quant * data.itens[0].preco
          }
          document.getElementById('valor-comanda').innerHTML = `R$ ${valor}`
          document.getElementById('valor-comanda').value = valor
        })
      }
    })
  }
  fecharComanda() {
    let close = {}

    let data = new Date()
    document.getElementById("data_mesa").value = data.toString()
    close.data_mesas_fechadas = document.getElementById("data_mesa").value.replace("GMT-0300 (Horário Padrão de Brasília)", "")
    close.valor = document.getElementById("valor-comanda").value
    close.id_comanda = localStorage.getItem('id_comanda')
    close.id_estabelecimento = localStorage.getItem('estabelecimento')
    close.id_caixa = localStorage.getItem('caixa')

    fetch('http://localhost:3031/mesa/', {
      method: 'POST',
      headers:
        { "content-type": "application/json" },
      body: JSON.stringify(close)
    }).then(result => {
      return result.json();
    }).then(data => {
      localStorage.removeItem('id_comanda')
      location.assign('/comanda/cliente')
    })
  }
  atualizar_mesa() {
    fetch('http://localhost:3031/comanda/atualizar/' + localStorage.getItem('id_comanda') + '/' + localStorage.getItem('estabelecimento'), {
      method: 'PATCH'
    }).then(result => {
      return result.json();
    })
  }
  fecharCaixa() {

  }
  abrirCaixa() {
    fetch('http://localhost:3031/caixa/buscar/' + localStorage.getItem("caixa"), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      if(data.status_caixa == 1){
        fetch('http://localhost:3031/mesa/valor/' + localStorage.getItem("caixa"), {
          method: 'GET',
          headers:
            { "content-type": "application/json" }
        }).then(result => {
          return result.json();
        }).then(data => {
          let valor
          for (let i = 0; i < data.caixa.length; i++) {
            if (valor != undefined) {
              valor += data.caixa[i].valor
            } else {
              valor = data.caixa[i].valor
            }
    
            document.getElementById('valor-caixa').innerHTML = `R$ ${valor}`
            document.getElementById('valor-caixa').value = valor
    
          }
        })
      }
    })


  }

  fazerRetirada() {
    let close = {}

    let data = new Date()
    document.getElementById("data_mesa").value = data.toString()
    close.data_mesas_fechadas = document.getElementById("data_mesa").value.replace("GMT-0300 (Horário Padrão de Brasília)", "")
    close.valor = document.getElementById("retirada").value
    close.id_comanda = localStorage.getItem('id_comanda')
    close.id_estabelecimento = localStorage.getItem('estabelecimento')
    close.valor = -close.valor
    console.log(Math.sign(close.valor))

    fetch('http://localhost:3031/mesa/', {
      method: 'POST',
      headers:
        { "content-type": "application/json" },
      body: JSON.stringify(close)
    }).then(result => {
      return result.json();
    }).then(data => {
      console.log(data)
      alert("Retirada feita com sucesso")
      setTimeout(function () { window.location.href = "/mesa"; }, 1500)
    })
  }
  disponibilidade_mesa() {
    if (localStorage.getItem("estabelecimento") != undefined) {
      fetch('http://localhost:3031/estabelecimento/mesa/' + localStorage.getItem("estabelecimento"), {

        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }).then(result => {
        return result.json()
      }).then(data => {
        for (let mesa = 0; mesa < data.estabelecimento[0].mesa; mesa++) {
          fetch('http://localhost:3031/mesa/disponibilidade/' + mesa + '/' + localStorage.getItem('estabelecimento'), {
            method: 'GET',
            headers: { "content-type": "application/json" }
          }).then(result => {
            return result.json();
          }).then(data => {
            for (let i = 0; i < data.quantidade; i++) {
              if (data.comanda[i].disponibilidade == 1) {
                let situacao = document.getElementById('box' + '0' + mesa)
                if (situacao == null) {
                  situacao = document.getElementById('box' + '' + mesa)
                  situacao.style.backgroundColor = 'var(--vermelho)'
                  situacao.style.color = 'var(--branco)'
                }
                situacao.style.backgroundColor = 'var(--vermelho)'
                situacao.style.color = 'var(--branco)'

              }
            }
          })
        }
      })
    }
  }

}


var comanda = new Comanda

function auto() {

  if (localStorage.getItem('ourToken') != 'null') {
    listarEstab();
  }

}

class Caixa {

  abrirCaixa() {
    let caixa = {}

    let data = new Date()
    caixa.data_abertura = data.toString()

    caixa.data_abertura = caixa.data_abertura.replace("GMT-0300 (Horário Padrão de Brasília)", "")
    caixa.status_caixa = 1
    caixa.id_estabelecimento = localStorage.getItem('estabelecimento')
    caixa.valor = 0
    console.log(caixa)
    fetch('http://localhost:3031/caixa/abrir_caixa', {
      method: 'POST',
      headers:
        { "content-type": "application/json" },
      body: JSON.stringify(caixa)

    }).then(result => {
      return result.json();
    }).then(data => {
      localStorage.setItem('caixa', data.id_caixa)
      console.log(data)
      location.assign('/mesa')
    })
  }
  fecharCaixa() {
    let caixa = {}
    caixa.valor = document.getElementById('valor-caixa').value
    caixa.status_caixa = 0
    caixa.id_estabelecimento = localStorage.getItem('estabelecimento')
    caixa.id_caixa = localStorage.getItem('caixa')
    console.log(caixa)


    fetch('http://localhost:3031/caixa/fechar', {
      method: 'PATCH',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(caixa)
    }).then(result => {
      return result.json();
    }).then(data => {
      localStorage.removeItem('caixa')
      alert('caixa fechado')
       setTimeout(function () { window.location.href = "/dashboard"; }, 2200);

    })
  }

}



var caixa = new Caixa

class Cliente {


  comandaCliente(){
    
    fetch('http://localhost:3031/cliente/buscar/' + localStorage.getItem('id_comanda'), {
      method: 'GET',
      headers: { "content-type": "application/json" }
    }).then(result => {
      return result.json();
    }).then(data => {
      console.log(data.comanda)
      document.getElementById("itens").innerHTML += " " + data.comanda.length
      let total = 0
      for (let i = 0; i < data.comanda.length; i++) {
        let valuation =  data.comanda[i].quantidade * data.comanda[i].preco
        let conta = document.createElement('div')
        let quantidade = data.comanda[i].quantidade
        let med = data.comanda[i].medidas
        total += valuation
        fetch('http://localhost:3031/marca/pegar/' + data.comanda[i].marca, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(result => {
          return result.json()
        }).then(data => {

         let marcas = data.marcas[0].marca
          fetch('http://localhost:3031/medida/pegar/' + med, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          }).then(result => {
            return result.json()
          }).then(data => {

           let medidas = data.medidas[0].medida
           conta.classList.add('div-cadastrado')

           conta.innerHTML = `<div class="span-cadastrado">
           <span class="nome-cadastrado"> ${marcas + ' ' +medidas}</span>
           <span>${quantidade} X</span>
           <span>${valuation}</span>
       </div>`
      
   
       document.getElementsByClassName("pedidos")[0].appendChild(conta)
          })
        })
       
  

      }
      console.log(total)
      document.getElementById("total").innerHTML += " " + total

    })
  }
}

var cliente  = new Cliente