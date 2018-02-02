  let cleanForm = document.querySelector('.form')
  if(cleanForm){
  let formInputs = document.querySelectorAll('.form__input')
  let formClean = document.querySelector('.form__clean')
    formClean.addEventListener('click', event => {
      formInputs.forEach(formInput => {
        formInput.value = ''
      });
    })
  }
