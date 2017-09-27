<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
		<asset:stylesheet href="login.css" />
		<meta name="layout" content="main">
	</head>
	<body>
		<section id="login_form">
			<h1>Roboboy</h1>

			<input type="text" placeholder="Login" name="login">
			<input type="password" placeholder="Senha" name="senha">

			<div id="cadastro_btn" class="btn fuzzy">Cadastrar</div>
			<div id="login_btn" class="btn hidden fuzzy">Logar</div>
			<div class="loading"></div>
		</section>

		<div class="modal">
			<div id="cadastro_form" class="form">

				<input type="text" placeholder="Login" name="login" pattern="[a-zA-Z0-9]+" required>
				<input type="text" placeholder="Nome" name="nome" required>
				<input type="text" placeholder="Telefone" name="telefone" pattern="([\+]\d{2})?([\(]\d{2}[\)])?\d{4,5}[\-]\d{4}" required>
				<input type="text" placeholder="Senha" name="senha" required>
				<div class="row">
					<div><input id="pizzaria" type="radio" name="tipo" value="0"><label for="pizzaria">Pizzaria</label></div>
					<div><input id="cliente" type="radio" name="tipo" value="1"><label for="cliente">Cliente</label></div>
				</div>
				<div id="cadastrar_btn" class="btn fuzzy hidden">Cadastrar</div>

				<div class="loading"></div>
			</div>
			<div class="modal_close">X</div>
		</div>

		<asset:javascript src="login/system.js" />
		<asset:javascript src="login/gui.js" />
	</body>
</html>
