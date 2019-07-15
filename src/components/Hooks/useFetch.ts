import * as React from 'react'

interface responseProps {
  isLoading: boolean
  data: object
}
function useFetch(url: string, defaultResponse: responseProps) {
  const [data, setData] = React.useState(defaultResponse)

  async function getData() {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setData({
        isLoading: false,
        data
      })
    } catch (e) {
      setData({
        isLoading: false,
        data: e
      })
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  return data
}

export default useFetch
