(function(){
	var iconMenu = document.querySelector('#nav_icon');
	var mainNavigatorList = document.querySelector('.nav_list')

	iconMenu.onclick = function(){
		if(mainNavigatorList.classList.contains('nav_list')){
      mainNavigatorList.classList.remove('nav_list');
    }
    else {
      mainNavigatorList.classList.add('nav_list');
    }
	};
}());