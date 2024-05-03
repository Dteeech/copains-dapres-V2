import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  timeout: 10000,
  header: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
})

const testApi = async () => {
  const response = await axiosInstance.get('/users')
  console.log(response)
  return response?.data
}

const loginApi = async () => {

}

const registerApi = async (credentials) => {
  try {
    const userData = {
      first_name: credentials.first_name,
      last_name: credentials.email,
      email : credentials.email,
      password: credentials.password,
    };

    console.log('Les credentials du nouvel user dans l\'api', userData);

    // Envoyer la demande d'inscription sans le JWT
    const response = await axiosInstance.post(`/create-account/`, userData);
    console.log('la response dans l\'api pour la création de user', response);

    // Une fois l'utilisateur inscrit avec succès, vous pouvez traiter le JWT reçu
    const { jwtToken, userData: newUser } = response.data;

    // Stocker le JWT dans le local storage
    localStorage.setItem('AUTH', JSON.stringify({ jwtToken }));

    // Retourner les données de l'utilisateur nouvellement inscrit
    return newUser;
  } catch (error) {
    console.error('Erreur lors de la création du compte :', error);
    throw error;
  }
};

export { testApi, loginApi, registerApi }
