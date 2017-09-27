package roboboy
import grails.converters.JSON

abstract class BaseController{

    def show(){

      def specific = this.requestingSpecific();

      if(specific){
       render this.findBy(specific.attr, specific.id) as JSON;
      }else{
       render this.list() as JSON;
      }
    }



    def save() {

      def record = this.newRecord();
      println((request.JSON as JSON))
      if(record.save()){
       render record as JSON
      }else{
        render ([erro: "desconhecido"] as JSON)
      }
     }

    def requestingSpecific(){

      String attr;
      String id;
      if(params.attr){
        if(params.id)
        {
          attr = params.attr;
          id   = params.id;
        }else{
          attr = "id";
          id   = params.attr;
        }
      }else return false;

      return [
        attr: attr,
        id: id
      ]
    }
    def getRequestJson(){

      return request.JSON;
    }
    abstract findBy(String attr, String id);
    abstract list();
    abstract newRecord();

    def renderError(error){
      this.renderHash([error: true, message: error]);
    }
    def renderHash(hash){
      render (hash as JSON);
    }

}
