const validateEmail = (email: string): boolean => {
  if (email === '') {
    return false;
  }
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export default validateEmail;
