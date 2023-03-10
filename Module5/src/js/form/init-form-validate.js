import FormsValidate from "./form-validate";
const formWrappers = document.querySelectorAll("[data-validate]");

console.log(formWrappers)
const resetForm = (form) => {
  setTimeout(() => {
    window.clearForm(form);
  }, 1000);
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  resetForm(e.target);
};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();
};

const callbacks = {
  base: {
    // Колбек при успешной валидации формы при попытке её отправки
    validationSuccessCallback: baseValidationSuccessCallback,
    // Колбек при не успешной валидации формы при попытке её отправки, не связан с запросами на сервер
    validationErrorCallback: baseValidationErrorCallback,
  },
};

const setCustomPhoneInputsEvent = () => {
  if (document.querySelectorAll('[data-validate-type="phone"] input').length) {
    document.querySelector("html").addEventListener("input", ({ target }) => {
      if (target.closest('[data-validate-type="phone"]')) {
        target
          .closest('[data-validate-type="phone"]')
          .querySelector("input")
          .dispatchEvent(new Event("input"));
      }
    });
  }
};

const initFormValidate = () => {
  if (formWrappers.length) {
    setCustomPhoneInputsEvent();
    formWrappers.forEach((wrapper) => {
      let callback = wrapper.dataset.callback;

      if (!callback) {
        callback = "base";
      }

      const formValidate = new FormsValidate(wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

export { initFormValidate };
