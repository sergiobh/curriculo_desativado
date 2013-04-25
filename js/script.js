$(document).ready(function() {

	$("#input_esqueci_senha").hide();

	$("#bot_enviar").click(function(){

			var usuario = $("#input_login_usuario").val();
			var senha = $("#input_login_senha").val();
			
			if(usuario.length == "" || senha.length == ""){
			alert("Os campos de usuario e senha são de preenchimento obrigatório!");
			return false;
			}
	
	});
	
	$("#a_esqueci_senha").click(function(){
	
		$("#input_esqueci_senha").show(1000);
		$("#form_login").hide();
	
	});


	$(".link_curriculo").fancybox({
		maxWidth	: 800,
		maxHeight	: 400,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type: "ajax"
	});
});

function FecharFancybox(){
	console.log('função js');
	
	//parent.$.fancybox.close();
	
	parent.top.$('.fancybox-close').trigger('click'); 

	
}
