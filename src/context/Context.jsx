// context auth
import { createContext, useContext, useEffect, useReducer } from 'react'
import { loginApi, registerApi, updateMeApi } from '../services/api'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN', // Connecté avec succès
  REGISTER: 'REGISTER', // Inscrit + connecté avec succès
  UPDATE_ME: 'UPDATE_ME', // Mise à jour des données utilisateur
  DELETE_USER: 'DELETE_USER', // Suppression de l'utilisateur
  LOGOUT: 'LOGOUT', // Déconnecté
  LOADING: 'LOADING', // Chargement
  ERROR: 'ERROR', // Erreur
  RESET: 'RESET' // Réinitialisation de l'état
}

const initialState = {
  jwt: null,
  user: null,
  role: null,
  loading: false,
  isLoggedIn: false,
  error: null
}

/**
 * @param prevState Etat précédent l'action
 * @param action Action pour mettre à jour l'état = { type, data? = { jwt, user, error } }
 */
const authReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
    case actionTypes.LOGIN:
      return {
        jwt: action.data.jwt,
        user: action.data.user,
        isLoggedIn: true,
        loading: false,
        error: null
      }
    case actionTypes.UPDATE_ME:
      return {
        user: action.data.user,
        jwt: action.data.jwt,
        isLoggedIn: false
      }
    case actionTypes.DELETE_USER:
      return {
        ...initialState
      }
    case actionTypes.ERROR:
      return {
        jwt: null,
        user: null,
        loading: false,
        isLoggedIn: false,
        error: action.data.error
      }
    case actionTypes.LOADING:
      return {
        ...prevState, // Recopie de l'état précédent
        loading: true
      }
    case actionTypes.RESET:
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (dispatch) => ({
  // credentials = { identifier, password }
  login: async (credentials) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await loginApi(credentials)
      dispatch({
        type: actionTypes.LOGIN,
        data: {
          user: result.user,
          jwt: result.jwt
        }
      })
    } catch (error) {
      console.error(error)
      toast.error('Identfiant ou mot de passe incorrect')
      dispatch({
        type: actionTypes.ERROR,
        data: {
          error: 'Identifiant ou mot de passe incorrect'
        }
      })
    }
  },
  register: async (credentials) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await registerApi(credentials)
      dispatch({
        type: actionTypes.LOGIN,
        data: {
          user: result.user,
          jwt: result.jwt
        }
      })
    } catch (error) {
      console.error(error)
      toast.error('Identfiant ou mot de passe incorrect')
      dispatch({
        type: actionTypes.ERROR,
        data: {
          error: 'Identifiant ou mot de passe incorrect'
        }
      })
    }
  },
  updateMe: async (userInfos, userId, jwt) => { // Ajoutez state en tant que paramètre
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await updateMeApi(userInfos, userId, jwt)

      // Mettre à jour le JWT dans le state du contexte
      dispatch({
        type: actionTypes.UPDATE_ME,
        data: {
          user: result.user // Nouvelles informations utilisateur
        }
      })
      // Stocker le nouveau JWT dans le localStorage

      toast.success('Profil mis à jour avec succès !')
      return result
    } catch (error) {
      console.error(error)
      toast.error('Une erreur s\'est produite lors de la mise à jour du profil.')
      dispatch({
        type: actionTypes.ERROR,
        data: {
          error: 'Une erreur s\'est produite lors de la mise à jour du profil.'
        }
      })
    }
  },
  deleteUser: async (userId) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      await deleteUserApi(userId)
      dispatch({ type: actionTypes.DELETE_USER })
      toast.success('Utilisateur supprimé avec succès !')
    } catch (error) {
      toast.error('Une erreur s\'est produite lors de la suppression de l\'utilisateur.')
      dispatch({
        type: actionTypes.ERROR,
        data: {
          error: 'Une erreur s\'est produite lors de la suppression de l\'utilisateur.'
        }
      })
    }
  },
  logout: () => {
    dispatch({ type: actionTypes.LOGOUT })
    window.localStorage.removeItem('AUTH')
  }

})

const AuthProvider = ({ children }) => {
  const savedState = window.localStorage.getItem('AUTH')
  const _initialState = savedState ? JSON.parse(savedState) : initialState

  const [state, dispatch] = useReducer(authReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{ state, ...authFactory(dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an <AuthProvider>')
  return context
}

export {
  AuthProvider,
  useAuth
}
