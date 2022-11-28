// console.log('Привет, мир!'); //Проверяем, что подключили скрипт

let popupElement = document.querySelector('.popup');//Делаем выборку DOM элементов
let popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let profileEditButtonElement = document.querySelector('.profile__edit-button');

let popupContent = popupElement.querySelector('.popup__content');
let formElement = popupContent.querySelector('.popup__form');
let nameInput = popupContent.querySelector('.popup__input_name'); // Находим поля формы в DOM
let jobInput = popupContent.querySelector('.popup__input_aboutyou'); // Находим поля формы в DOM
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');

const openPopup = function() {
    popupElement.classList.add('popup_is-opened'); //добавляем модификатор
    nameInput.value = profileTitle.textContent; // сохраняем значения полей
    jobInput.value =  profileText.textContent;
}
const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
}
profileEditButtonElement.addEventListener('click', openPopup); // вешаем слушатель, по клику вызываем функцию
popupCloseButtonElement.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileTitle.textContent = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
    profileText.textContent = jobInput.value; // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);