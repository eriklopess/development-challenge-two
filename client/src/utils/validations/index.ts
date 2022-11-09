import Customer from '../../interfaces/customer.interface';
import validateAddress from './addressValidation';
import validateDate from './dateValidation';
import validateEmail from './emailValidation';
import validateName from './nameValidation';

const checkAllFields = ({
  name, email, address, birthDate,
} : Customer): boolean => {
  if (
    name !== ''
      && email !== ''
      && address !== ''
      && birthDate !== ''
      && validateEmail(email)
      && validateName(name)
      && validateAddress(address)
      && validateDate(birthDate)
  ) {
    return true;
  }
  return false;
};

export {
  validateName,
  validateAddress,
  validateDate,
  validateEmail,
};

export default checkAllFields;
