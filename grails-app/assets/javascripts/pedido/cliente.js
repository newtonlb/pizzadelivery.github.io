$(()=>{

  let senha = $("#login_form input[name='senha']");
  let login = $("#login_form input[name='login']");
  let buttn = $("#submit");
  let cadas = $("#cadastro_btn");
  let modal = $('.modal');
  let modcl = $('.modal_close');
  let cadbt = $('#cadastrar_btn');
  let cadIn = $('#cadastro_form input');

  loginSetup();
  modalSetup();


  function loginSetup(){

    function loginBts(){
      if(senha.val() && login.val()){
        buttn.removeClass("hidden")
        cadas.addClass("hidden")
      }
      else{
        buttn.addClass("hidden")
        cadas.removeClass("hidden")
      }
    }

    senha.on('input', loginBts);
    login.on('input', loginBts);

    buttn.click(ev=>{
      let data = {
        senha: senha.val(),
        login: login.val()
      }

      post(`/login`, data, onLoginDone)
    })
  }
  function modalSetup(){
    cadas.click(ev => modal.addClass('visible'))
    modcl.click(ev => modal.removeClass('visible'))
    cadbt.click(ev => {
      let data = {}
      cadIn.each(function() {
        let inp = $(this);

        data[inp.attr('name')] = inp.val()
      });

      post(`/usuario`, data, (data, status) => {
        login.val(data.login);
        modcl.click();
        onCadastroDone(data);
      })
    })

    cadIn.each(function(){
      $(this).on('input', ()=>{
        cadIn.each(function(index){

          if($(this).val()){
            if(++index == cadIn.length)
              cadbt.removeClass('hidden');
          }
          else{
            cadbt.addClass('hidden');
            return false;
          }
        })
      })
    });
  }
});
