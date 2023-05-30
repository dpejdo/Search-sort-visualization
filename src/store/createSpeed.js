const createSpeed = () => {
  let speed = 1;
  const setSpeed = (value) => {
    speed = value;
  };
  const getSpeed = () => {
    return speed;
  };
  return { setSpeed, getSpeed };
};
export default createSpeed;
