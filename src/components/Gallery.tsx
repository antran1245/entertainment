import { useContext } from "react"
import { UserContext } from "@/context/userContext"
import { Data, SingleEntry } from "@/types/data"
import Card from "./Card"
import styles from '@/styles/Gallery.module.css'

interface GalleryProp {
  data: Data
  bookmarkString?: string
}

export default function Gallery({ data, bookmarkString = "" } : GalleryProp) {
  const { isBookmarkArr } = useContext(UserContext)
  return(
    <div className={styles.container}>
      <h2>{bookmarkString !== ""? bookmarkString : 'Recommended for you'}</h2>
      <div id={styles.gallery}>
        {data.map((item: SingleEntry, index: any) => {
          return <Card key={index} item={item} isBookmark={isBookmarkArr.includes(item.id)}/>
        })}
      </div>
    </div>
  )
}