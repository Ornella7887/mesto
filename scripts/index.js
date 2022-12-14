// console.log('Привет, мир!'); //Проверяем, что подключили скрипт
//Array
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Челябинская область'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Камчатка'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Холмогорский район'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Байкал'
    }
];
// Переменные PopupEdit
let popupElement = document.querySelector('.popup');//Делаем выборку DOM элементов
let popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let profileEditButtonElement = document.querySelector('.profile__edit-button');

let popupContent = popupElement.querySelector('.popup__content');
let formElement = popupContent.querySelector('.popup__form');
let nameInput = popupContent.querySelector('.popup__input_form_name'); // Находим поля формы в DOM
let jobInput = popupContent.querySelector('.popup__input_form_aboutyou'); // Находим поля формы в DOM
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');

// Функции PopupEdit
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

// ПР № 5
// Переменные Template
// Element
const elements = document.querySelector('.elements');// куда будет добавляться template
// Template
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element'); //что добавляем в качестве template

// Функции Template
const createCard = function(name, src, alt) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title');
    cardTitle.textContent = name;

    const cardImage = cardElement.querySelector('.element__image');
    cardImage.setAttribute('src', src);
    cardImage.setAttribute('alt', alt);

    cardElement.querySelector('.element__button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__button_active'); // добавление лайка
    })
    cardElement.querySelector('.element__delete-button').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove(); // удаление карточки
    })
    cardImage.addEventListener('click', function (evt) {
      openPopupImage();
      popupPictureElement.src = evt.target.src;
      popupFigcaptionElement.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
    });
    return cardElement;
}

// Создаем initial card
const createInitialCard = function (dataCard) {
    const name = dataCard.name;
    const src = dataCard.link;
    const alt = dataCard.alt;
    const InitialCard = createCard(name, src, alt);

    return InitialCard;
}
  //Rendering
initialCards.forEach(function(dataCard) {
    const element = createInitialCard(dataCard);
    elements.append(element);
});

//PopupAdd
// Объявляем переменные
let popupCardElement = document.querySelector('.popup-card');//Делаем выборку DOM элементов
let popupCardCloseButtonElement = popupCardElement.querySelector('.popup-card__close-button');
let popupAddButtonElement = document.querySelector('.profile__add-button');

let popupCardContent = popupCardElement.querySelector('.popup-card__content');
let formCardElement = popupCardContent.querySelector('.popup-card__form');
let cardNameInput = popupCardContent.querySelector('.popup-card__input_form_name'); // Находим поля формы в DOM
let cardPlaceInput = popupCardContent.querySelector('.popup-card__input_form_aboutplace'); // Находим поля формы в DOM
let cardTitle = document.querySelector('.element__title');
let cardImage = document.querySelector('.element__image');

// Функции
const openPopupCard = function() {
    popupCardElement.classList.add('popup-card_is-opened'); //добавляем модификатор
    cardNameInput.value = cardTitle.textContent; // сохраняем значения полей
    cardPlaceInput.value = cardImage.src;
}
popupAddButtonElement.addEventListener('click', openPopupCard);

const closePopupCard = function() {
    popupCardElement.classList.remove('popup-card_is-opened');
}
popupCardCloseButtonElement.addEventListener('click', closePopupCard);// вешаем слушатель, по клику вызываем функцию

function formCardSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    cardTitle.textContent = cardNameInput.value; // Получите значение полей jobInput и nameInput из свойства value
    cardImage.src = cardPlaceInput.value; // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    closePopupCard();
}
formCardElement.addEventListener('submit', formCardSubmitHandler);

// Popup Image
// Объявляем переменные
let popupImageElement = document.querySelector('.popup-image');//Делаем выборку DOM элементов
let popupImageCloseButtonElement = popupImageElement.querySelector('.popup-image__close-button');

let popupImageContent = popupImageElement.querySelector('.popup-image__content');
let popupPictureElement = popupImageContent.querySelector('.popup-image__picture');
let popupFigcaptionElement = popupImageContent.querySelector('.popup-image__figcaption');

// Функции

const openPopupImage = function() {
  popupImageElement.classList.add('popup-image_is-opened'); //добавляем модификатор
}

const closePopupImage = function() {
    popupImageElement.classList.remove('popup-image_is-opened'); // удаляем модификатор
}
// cardImage.addEventListener('click', openPopupImage); // вешаем слушатель, по клику вызываем функцию
popupImageCloseButtonElement.addEventListener('click', closePopupImage);