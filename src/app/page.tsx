import { Button } from '@/components/Button'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome</h1>
      <Button>Hello</Button>
    </main>
  )
}
