import instance from '.';

const deleteCustomer = async (id: string) => {
  await instance.delete(`/v1/customers/${id}`);
};

export default deleteCustomer;
