const baseUrl = '';
const apiBase = `${baseUrl}/api`;

function get(url, data, success, error) {
  ajax('GET', url, data, success, error);
}
function post(url, data, success, error){
  data = JSON.stringify(data);
  ajax('POST', url, data, success, error);
}
function ajax(type, url, data, success, error, extension = ''){
  if (error === undefined) error = ((data)=>showError(data.message));
  loading();

  url = `${apiBase}${url}${extension}`;

  console.log(`Enviando ${type} para ${url}`);
  console.dir(data);

  let callback = (data) =>{
    if(data.error === undefined || data.error === false)
      success(data);
    else
      error(data);
  }

  $.ajax({
    type,
    url,
    data,
    success: callback,
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
