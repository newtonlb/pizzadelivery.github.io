package roboboy

class UrlMappings {

	static mappings = {

		"/api/$controller/$attr?/$id?"{
	    action = [GET:"show", POST:"save", PUT:"update", DELETE:"remove"]
	  }
		"/$controller/$action?/$id?(.$format)?"{
				constraints {
						// apply constraints here
				}
		}
    "/"(controller:"login")
		"500"(view:'/error')
	"/pedido/pizzaria" (view: "/pedido/pizzaria")
	"/pedido/cliente" (view: "/pedido/cliente")
	}
}
