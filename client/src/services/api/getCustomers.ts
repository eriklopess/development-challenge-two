import instance from '.';
import Customer from '../../interfaces/customer.interface';

const getCustomers = async (): Promise<Customer[]> => {
  const response = await instance.get('/v1/customers');
  const data = response.data.Items;
  return data;
};

export default getCustomers;
