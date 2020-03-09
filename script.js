window.onload = function(){
  var lightbox = (function(){
    var settings = {
      view: 'view',
      button: 'button',
      blockButton: 'close',
      overlay: 'overlay',
      speed: 78,
      step: 5,
      maxOp: 0.6
    }

    function $(element){
      return document.getElementById(element);
    }

    var timer;
    var button = $(settings.button);
    var blockButton = $(settings.blockButton);
    var overlay = $(settings.overlay);

    function deleteInterval(intName){
      window.clearInterval(intName);
      intName = null;
    }

    function hideAll(){
      var view = $(settings.view);
      view.style.display = 'none';

      var overlay = $(settings.overlay);
      overlay.className = "";
      overlay.opacity = 0;
    }

    button.onclick 	= function(){

			var view = $(settings.view);
			view.style.display = "block";

			var overlay = $(settings.overlay);
			overlay.className = "overlay_active";
			overlay.style.opacity = "0";

			timer = setInterval(function(){

				var overlay = $(settings.overlay);
				var op = overlay.style.opacity;

				if(settings.maxOp <= 1){

					op = op * 100;
					op = op + (settings.step);
					op = op /100;

					if(op.toFixed(2) <= settings.maxOp){

						overlay.style.opacity = op;

						if((op.toFixed(2) % settings.maxOp) == 0){

							deleteInterval(timer);
						};
					};

					if(op.toFixed(2) > settings.maxOp){

						overlay.style.opacity = settings.maxOp;
						deleteInterval(timer);
					};
				}else{

					alert("Max opacity 1");
					overlay.style.opacity = 1;
					deleteInterval(timer);
				};
			}, settings.speed);
		};

    overlay.onClick = function(){
      deleteInterval(timer);
      hideAll();
    }

    blockButton.onclick = function(){

			deleteInterval(timer);
			hideAll();
		};

  })();

}
