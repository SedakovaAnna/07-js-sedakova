$(document).ready(function(){

	var loginCheck = (function(){

		// Переменные модуля
		var _form = $('#login-form');
		var _loginText = $('#loginText');
		var _passwordText = $('#passwordText');

		var _emailErrorEmpty = $('#emailErrorEmpty');
		var _passwordErrorEmpty = $('#passwordErrorEmpty');
		var _emailPasswordError = $('#emailPasswordError');
		var _emailError = $('#emailError');

		var valid = true;
		var login = _loginText.val().trim();
		var password = _passwordText.val().trim();
var validate = login + password;
		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);
			});
		}

		// Приватные методы
    
		var _formValidate = function (event) {
    		event.preventDefault();//отменить стандартное поведение


    		if ( _loginText.val().trim() == '' ) {
    			_emailErrorEmpty.fadeIn(1000);//показать ошибку плавно
    			valid = false;
    		} 
    		// else {
    		// 	_emailErrorEmpty.fadeOut(1000);//скрыть ошибку плавно
    		// }

    		if ( _passwordText.val().trim() == '' ) {
    			_passwordErrorEmpty.fadeIn(1000);//показать ошибку плавно
    			valid = false;
    		} 
    		// else {
    		// 	_passwordErrorEmpty.fadeOut(1000);//скрыть ошибку плавно
    		// }



    		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    		
	      		if ( valid && !(pattern.test( _loginText.val().trim() )) )  {
    			_emailError.fadeIn(1000);//показать ошибку плавно
    			valid = false;
    			// console.log(a);

	      		} 
	     //else {
    		// 	_emailError.fadeOut(1000);//скрыть ошибку плавно
    		// }

    		if ( valid && (_loginText.val().trim() != 'mail@mail.com' || _passwordText.val().trim() != '123')) {
    			_emailPasswordError.fadeIn(1000);//показать ошибку плавно
    			valid = false;
    		} 
    		// else {
    		// 	_emailPasswordError.fadeOut(1000);//скрыть ошибку плавно

    		// }

    		if (valid) {
    			_form.unbind('submit').submit(); //убрать и снова добавить элемент отправки формы
    		} else {
    			console.log(validate+valid);
    			valid = true;

				_loginText.on('keydown', function(){
    			_emailErrorEmpty.fadeOut(1000);//скрыть ошибку плавно
    			_emailPasswordError.fadeOut(1000);
    			_emailError.fadeOut(1000);//скрыть ошибку плавно

    			});
				_passwordText.on('keydown', function(){
    			_passwordErrorEmpty.fadeOut(1000);//скрыть ошибку плавно
				_emailPasswordError.fadeOut(1000);
    			
    			});


    		}

		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	loginCheck.init();

});