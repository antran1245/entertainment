import { Data, SingleEntry } from "@/types/data"
import Card from "./Card"
import styles from '@/styles/Gallery.module.css'

interface GalleryProp {
  data: Data
}

export default function Gallery({ data } : GalleryProp) {
  return(
    <div className={styles.container}>
      <h2>Recommended for you</h2>
      <div id={styles.gallery}>
        {data.map((item: SingleEntry, index: any) => {
          return <Card key={index} item={item}/>
        })}
      </div>
    </div>
  )
}