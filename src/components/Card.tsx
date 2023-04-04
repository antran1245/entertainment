import { SingleEntry } from "@/types/data"
import Image from "next/image"
import styles from '@/styles/Gallery.module.css'

interface CardProp {
  item : SingleEntry
}

export default function Card({ item } : CardProp) {
  return(
    <div className={styles.card}>
      <Image src={`${item.thumbnail.regular.small.slice(1) }`} alt={`${item.title}`} width={280} className={styles.img} height={174}/>
    </div>
  )
}