import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | My Website',
  robots: 'index, follow',
  openGraph: {
      title: 'Home | My Website',
      description: 'Learn more about our home and team.',
      url: 'https://www.mywebsite.com/home'
  },
  keywords: 'clips, metal, rock, metal tv',
  description: 'Some description about my home page'
}

export default function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}



