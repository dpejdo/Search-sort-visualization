export const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export const handleActive = (index) => {
  let element = document.getElementById(`${String(index)}`);
  element.classList.add('active');
};
