import { createContext, useState, useEffect } from 'react'
import api from '../service/api'

interface ReactElement {
  children: React.ReactNode
}

export interface CursoProps {
  curso: string;
  categoria: string;
  descricao: string;
  professor: string;
}

interface AuthContextData {
  signed: boolean
  signIn: (email: string, password: string) => void
  signOut: () => void
  email: string
}

export const AuthContext = createContext({} as AuthContextData)

export default function AuthProvider({ children }: ReactElement) {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')

  const signIn = async (email: string, password: string) => {
    try {
        const response = await api.post('/login', {
            email,
            password
        })
    
        const { token } = response.data
    
        setEmail(email)
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }
    catch (error) {
      await signOut()
    }
  }

  const signOut = async () => {
    setToken('')
    setEmail('')
  }

  const getUserInformation = async () => {
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')

    if (email && token) {
      setEmail(email)
      setToken(token)
    }
  }

  useEffect(() => {
    getUserInformation()
  }, [])

  return (
    <AuthContext.Provider value={{ signed: !!token, signIn, signOut, email }}>
      {children}
    </AuthContext.Provider>
  )

}