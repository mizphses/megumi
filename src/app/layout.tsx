import clsx from 'clsx'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import 'normalize.css/normalize.css'
import '@/styles/colors.scss'
import '@/styles/variables.scss'
import { Footer } from './_components/Footer'
import { Navbar } from './_components/Navbar'
import './globals.scss'
import styles from './layout.module.scss'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin-ext'],
  variable: '--font-inter',
})
const notoJp = Noto_Sans_JP({
  subsets: ['latin-ext'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={clsx(notoJp.variable, inter.variable, styles.layoutBase)}
      >
        <Navbar showContent={true} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
