package roboboy

class LoginController extends BaseController {


  def save() {

    def data = this.getRequestJson();

    def login = Usuario.findByLogin(data.login);

    if(login){
      if(login.senha == data.senha){
        this.renderHash ([error: false])
      }else{
        this.renderError("Senha incorreta")
      }
    }else{
      this.renderError("Login inexistente")
    }
   }
    def index() {

      render (view:"index")
    }


    def findBy(String attr, String id){
      switch(attr){
        case 'id':
          return Usuario.findById(id);
        case 'login':
          return Usuario.findByLogin(id);
      }
    }
    def list(){
      return Usuario.list();
    }
    def newRecord(){

      def data = this.getRequestJson();

      return new Usuario(
        nome: data.nome,
        login: data.login,
        telefone: data.login,
        senha: data.senha,
        tipo: data.tipo
        );
    }
}
