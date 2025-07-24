export const adaptUserFromApi = (apiUser: any) => ({
  id: apiUser.id,
  email: apiUser.email,
  name: apiUser.full_name, // API different field name use karta ho
  createdAt: apiUser.created_at
});