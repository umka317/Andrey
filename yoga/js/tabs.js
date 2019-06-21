// Табы
let tab = document.querySelectorAll('.info-header-tab'),			//класс с табами
info = document.querySelector('.info-header'),				//весь блок табов
tabContent = document.querySelectorAll('.info-tabcontent');		//контент табов

function hideTabContent(a) {								//скрываем все статьи кроме 1й
for (let i = a; i < tabContent.length; i++) {
  tabContent[i].classList.remove('show');				//удаляем класс элементов show(показать)
  tabContent[i].classList.add('hide');				//добавляем класс hide(скрыть)
}
};

hideTabContent(1);

function showTabContent (b) {								//добавляем таб на который кликнули
if (tabContent[b].classList.contains('hide')) {
  tabContent[b].classList.remove('hide');
  tabContent[b].classList.add('show');
}
};

info.addEventListener('click', function(e) {				//определяем элемент на который кликнули и статью, которую добавить надо
let target = e.target;
if (target && target.classList.contains('info-header-tab')) { //проверка, если таб на который кликнули имеет класс info-header-tab
  for(let i = 0; i < tab.length; i++) {
    if (target === tab[i]) {						//если индекс таба, на кот кликнули совпадает с индексом статьи
      hideTabContent(0);
      showTabContent(i);
      break;
    }
  }
}
})

module.exports = tabs;