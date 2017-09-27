package roboboy
import grails.converters.JSON

class UsuarioController extends BaseController{
    


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
