import instance from '.';
import Customer from '../../interfaces/customer.interface';

const updateCustomer = async (customer: Customer, id: string) => {
  const response = instance.post('/v1/customers', {
    ...customer,
    id,
  }, {
    method: 'PUT',
  });
  return response;
};

export default updateCustomer;
