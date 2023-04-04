import { Data, SingleEntry } from "@/types/data"
import Card from "./Card"
import styles from '@/styles/Gallery.module.css'

interface GalleryProp {
  data: Data
}

export default function Gallery({ data } : GalleryProp) {
  return(
    <div id={styles.gallery}>
      {data.map((item: SingleEntry, index: any) => {
        return <Card item={item}/>
      })}
    </div>
  )
}