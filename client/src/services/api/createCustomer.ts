import instance from '.';
import Customer from '../../interfaces/customer.interface';

const createCustomer = async (customer: Customer) => {
  const response = instance.post('/v1/customers', customer, {
    method: 'POST',
  });
  return response;
};

export default createCustomer;
