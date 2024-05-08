const classes = {
    root: "slider",
    mod: "active"
  }
  
  const store = {
    dotActive: "data-infinity"
  }
  
  
  function dots(slider) {
  
    // создали div элемент
    const dots = document.createElement('div');
    // добавили этому элементу класс
    dots.setAttribute('class', 'slider__dots');
  
    // нашли все элементы data-item
    const sliderItem = slider.querySelectorAll('[data-item]');
  
    sliderItem.forEach((element, index) => {
      const dot = document.createElement('a');
  
      if (index === 0) {
        dot.classList.add(classes.mod);
      }
  
      dots.appendChild(dot);
    });
  
    slider.appendChild(dots);
  }
  
 
  function setActiveDot(slider, index) {
    const dotsA = slider.querySelectorAll('.slider__dots a');
  
    for (const iterator of dotsA) {
      iterator.classList.remove(classes.mod);
    }
    dotsA[index].classList.add(classes.mod);
  }
  
  // clear function
  function sliderRun(slider) {
    const sliderItem = slider.querySelectorAll('[data-item]');
    const timeout = slider.getAttribute('data-timeout');
    const dotted = slider.hasAttribute('data-dotted');
  
  
    sliderItem[0].classList.add(classes.mod);
  
    // 1 хранилище индекса активного эле-та
    let switcing = 1;
    setInterval(
      function () {
        // 0 удаляем класс у всех эл-в
        for (const iterator of sliderItem) {
          iterator.classList.remove(classes.mod);
        }
  
        // функция, отвечающая за активность точек => slider, switcing
        // нужно будет внутри слайдера найти картинку под индексом switcing и задать класс
        setActiveDot(slider, switcing);
  
        // 2 новому активному эл-ту добавляю класс
        sliderItem[switcing++].classList.add(classes.mod);
  
        // 3 проверяю совпадает ли текущий эл-т с последним из списка 
        // если есть infiniti
        if (sliderItem.length === switcing) {
          switcing = 0;
        };
      }, timeout
    );
  
    if (dotted) {
      dots(slider);
    };
  };
  
  
  export const slider = () => {
    const sliders = document.querySelectorAll(`.${classes.root}`);
  
    for (const slider of sliders) {
      sliderRun(slider);
    };
  };