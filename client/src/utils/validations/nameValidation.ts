const validateName = (name: string): boolean => {
  if (name === '') {
    return false;
  }
  const re = /^[a-zA-Z ]{2,30}$/;
  return re.test(name);
};

export default validateName;
