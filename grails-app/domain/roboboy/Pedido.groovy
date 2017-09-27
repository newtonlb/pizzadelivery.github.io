package roboboy
import grails.rest.*;
import roboboy.Usuario;

class Pedido {
  String sabor1;
  String sabor2;
  String borda;
  static belongsTo = [ usuario: Usuario ]

  static constraints = {
    sabor2 nullable: true
  }
}
