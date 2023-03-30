import { useState, useEffect } from "react"
import { Data } from "@/types/data"

export const useFetch = (url : string) => {
  const [data, setData] = useState<Data | []>([])
  const [movies, setMovies] = useState<Data | []>([])
  const [tvSeries, setTvSeries] = useState<Data | []>([])
  const [trending, setTrending] = useState<Data | []>([])

  useEffect(() => {
    if(data.length === 0) {
      fetch(url)
      .then(resp => resp.json())
      .then(shows => {
        setData(shows)
        setMovies(shows.filter((item : any) => item.category === 'Movie'))
        setTvSeries(shows.filter((item : any) => item.category === 'TV Series'))
        setTrending(shows.filter((item : any) => item.isTrending))
      })
      .catch(err => console.error(err))
    }
  }, [])

  return {data, movies, tvSeries, trending}
}