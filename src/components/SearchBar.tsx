import Image from 'next/image'
import search from '@/assets/icon-search.svg'
import styles from '@/styles/SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <Image src={search} alt="magnifying glass" />
      <input type="text" placeholder='Search for movies or TV series'/>
    </div>
  )
}