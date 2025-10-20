
const Amur = {
  sendMessage(e){
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Спасибо! Мы свяжемся с вами.\n\nИмя: ${data.name}\nТел: ${data.phone}\nСообщение: ${data.message||""}`);
    form.reset();
    return false;
  }
};
