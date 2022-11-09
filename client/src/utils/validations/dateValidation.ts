const validateDate = (date: string | null): boolean => {
  if (date === null) {
    return false;
  }
  const dateSplit = date.split('-');
  const year = dateSplit[0];
  const month = dateSplit[1];
  const day = dateSplit[1];
  const re = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  return re.test(date) && year > '1900' && month > '00' && month < '13' && day > '00' && day < '32';
};

export default validateDate;
