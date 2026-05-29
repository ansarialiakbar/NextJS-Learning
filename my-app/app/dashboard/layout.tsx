import type {ReactNode} from 'react'
export default function RootLayout({children}:{children:ReactNode}){
    return(
        <section style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
       <aside style={{ float: 'left', width: '20%', backgroundColor: '#d0d0d0', padding: '10px' }}>
          <h2>Dashboard Sidebar</h2>
          <ul>
            <li>Overview</li>
            <li>Analytics</li>
            <li>Profile</li>
          </ul>
       </aside>

        {children}
    </section>
    )

}