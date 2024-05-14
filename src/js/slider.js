const sliderImg = document.querySelectorAll(".slider__img");

// 1 хранилище индекса активного эле-та
let switcing = 0;
setInterval(function() {
    // 0 удаляем класс у всех эл-в
  for (const iterator of sliderImg) {
    iterator.classList.remove("slider--active");
  }
  // 2 новому активному эл-ту добавляю класс
  sliderImg[switcing++].classList.add('slider--active');
  // 3 проверяю совпадает ли текущий эл-т с последним из списка
  if (sliderImg.length === switcing) {
    switcing = 0;
  };
}, 2000);