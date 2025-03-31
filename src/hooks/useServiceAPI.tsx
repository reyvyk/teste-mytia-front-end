import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

interface UseConfigAPIProps<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

const useServiceAPI = <T,>(url: string, config?: AxiosRequestConfig): UseConfigAPIProps<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  // console.log('URL:', url)

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