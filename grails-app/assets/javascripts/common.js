const baseUrl = '';
const apiBase = `${baseUrl}/api`;

function get(url, data, success){
  ajax('GET', url, data, success);
}
function post(url, data, success){
  data = JSON.stringify(data);
  ajax('POST', url, data, success);
}
function ajax(type, url, data, success, extension = ''){

  loading();

  url = `${apiBase}${url}${extension}`;

  console.log(`Enviando ${type} para ${url}`);
  console.dir(data);

  $.ajax({
    type,
    url,
    data,
    success,
    contentType: "application/json",
    dataType: 'json',
    error: ( jqXHR, textStatus, errorThrown)=>{console.log(`${textStatus}: ${errorThrown}`); console.dir(jqXHR);},
    complete: unLoading
  });
}
function loading(){
  $('.loading').addClass('visible');
}
function unLoading(){
  $('.loading').removeClass('visible');
}
function showError(msg){
  showMessage(msg, 'error');
}
function showMessage(msg, cls = '', tmp = 5000){
  let sysmsg = $('#sysMsg')
  sysmsg.addClass(cls).html(msg);

  sysmsg.addClass('visible');
  setTimeout(()=>{
    sysmsg.removeClass(cls)
    sysmsg.removeClass('visible')
    sysmsg.html('');
  }, tmp)
}
