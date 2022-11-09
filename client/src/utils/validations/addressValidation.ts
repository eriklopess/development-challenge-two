const validateAddress = (address: string): boolean => {
  const re = /^[a-zA-Z0-9\s']*$/;
  return re.test(address);
};

export default validateAddress;
