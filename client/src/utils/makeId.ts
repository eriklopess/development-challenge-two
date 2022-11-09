const makeId = (length: number): string => {
  const random = () => Math.random().toString(36).substr(2, length);
  return random() + random();
};

export default makeId;
