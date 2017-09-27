package roboboy
import grails.rest.*;
import roboboy.Pedido;

class Entrega {
    String endereco;
    static belongsTo = [ pedido: Pedido ]
    static constraints = {
    }
}
