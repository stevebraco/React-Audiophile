export const showError = (item) => {
  item.classList.add('checkout__form-error');
  item.parentElement.firstChild.classList.add('checkout__label-error');
  item.parentElement.dataset.error = "can't be empty";
};

export const removeError = (item) => {
  item.classList.remove('checkout__form-error');
  item.parentElement.firstChild.classList.remove('checkout__label-error');
  delete item.parentElement.dataset.error;
};
