const designSelect = function () {
  const select = document.querySelector('.js-choice');

  /* implement Choice plugin */
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });

  return choices;
};

export default designSelect;
