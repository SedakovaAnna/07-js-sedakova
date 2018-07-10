$(document).ready(function(){

	var commentCheck = (function(){

		// Переменные модуля
		var _form = $('#comment-add-form');
		var _commentTextArea = $('#commentText');
		var _commentError = $('#commentErrorEmpty');

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

    		if (_commentTextArea.val() == '' ) {
    			//_commentError.removeClass('error-hide');//удалить класс
    			_commentError.fadeIn(1000);//показать ошибку плавно
    		// event.preventDefault();

    		} else {
    			// _commentError.addClass('error-hide'); // добавить класс
    			_commentError.fadeOut(1000);//показать ошибку плавно
    			$('form').unbind('submit').submit(); //убрать и снова добавить элемент отправки формы
    		}


			// console.log('Hello from _formValidate()');
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	commentCheck.init();

});