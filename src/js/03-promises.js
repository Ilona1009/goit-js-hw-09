import Notiflix from 'notiflix';

const form = document.querySelector(".form");

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  
  const { delay, step, amount } = e.currentTarget.elements;
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let position = 1; position <= amountValue; position += 1) {
    if (position === 1) {
      createPromise(position, delayValue )
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })
          .finally(form.reset());

    }
    else {
      createPromise(position, delayValue + stepValue * (position - 1))
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ gi${position} in ${delay}ms`);
        })
          .finally(form.reset());

    }

  }

    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldResolve) {
            resolve({ position, delay });
          } else {
            reject({ position, delay });
          }
        }, delay);
      })
    }
  }




