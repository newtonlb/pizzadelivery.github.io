package roboboy

import grails.rest.RestfulController;

class EntregaController extends RestfulController<Entrega>{
    
    EntregaController(){
      super(Entrega);
    }
    def index(){
      super.index(10);
    }
}
