import Head from 'next/head'

const GuestLayout = ({title, children }) => {
    return (
        <div>
            <Head>
                <title>{title? title + ' - Amazon' : "Amazon"}</title>
            </Head>
        
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout