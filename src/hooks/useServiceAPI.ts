import { useState, useEffect } from 'react'

interface UseServiceAPIProps<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

const useServiceAPI = <T,>(apiFunction: (...args: any[]) => Promise<T>, args: any[] = []): UseServiceAPIProps<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const result = await apiFunction(...args)
        setData(result)
      } catch (err: any) {
        if (err.message || 'An exception occurred') {
          setError(err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [apiFunction, ...args])

  return { data, isLoading, error }
}

export default useServiceAPI