import axios, { AxiosRequestConfig } from 'axios'
import { useState, useEffect } from 'react'

interface UseConfigAPIProps<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

const useServiceAPI = <T,>(url: string, config?: AxiosRequestConfig): UseConfigAPIProps<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await axios.get<T>(url, config)
        setData(response.data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message)
        } else {
          setError('An unexpected error occurred')
        }
      } finally {
        setIsLoading(false)
      }
    };

    fetchData()
  }, [url, config])

  return { data, isLoading, error }
};

export default useServiceAPI