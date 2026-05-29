import {Metadata} from 'next'

export const metadata: Metadata = {
    title: {
        default: "My Next.js App",
        template: "%s | My Next.js App"
    },
    description: "This is a sample Next.js application demonstrating the use of layout and page components.",
    openGraph: {
        siteName: "My Next.js App"
    }
}

export default function RootLayout({children}: {children: React.ReactNode}){
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
               


// import Link from 'next/link'
// import {ReactNode} from 'react'
// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ 
//     subsets: ['latin'],
//     weight: ['700', '500'],
//     display: "swap"
//  })

// export default function RootLayout({children}:{children:ReactNode}){
//     return(
//         <html lang="en">
//             <head>
//                 <title>My Next.js App</title>
//             </head>
//             <body className={inter.className}>
//               <header style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
//                 My Navbar
//                 <nav style={{ marginTop: '10px' }}>
//                     <Link href="/" style={{ margin: '0 10px' }}>Home</Link>
//                     <Link href="/about" style={{ margin: '0 10px' }}>About</Link>
//                     <Link href="/contact" style={{ margin: '0 10px' }}>Contact</Link>
//                     <Link href="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
//                     <Link href="/blog" style={{ margin: '0 10px' }}>Blog</Link>
//                     <Link href="/products" style={{ margin: '0 10px' }}>Products</Link>
//                     <Link href="/card" style={{ margin: '0 10px' }}>Card</Link>
//                 </nav>
//               </header>
//               {children}
//               <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: 'lightgray', marginTop: '20px' }}>
//                 My Footer
//               </footer>
//             </body>
//         </html>
//     )
// }



