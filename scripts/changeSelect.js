const changeSelect = function () {
  const select = document.querySelector('.js-choice');
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });
};

export default changeSelect;
