import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Clips | My Website',
    robots: 'index, follow',
    openGraph: {
        title: 'Clips | My Website',
        description: 'Learn more about our clips and team.',
        url: 'https://www.mywebsite.com/clips'
    },
    keywords: 'clips, metal, rock, metal tv'
}



export default function Clips() {
    return (
        <>
            <h1>Clips</h1>
        </>
    );
}