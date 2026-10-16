import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Manish Rajak — CSE student, learning by building',
  description: 'The learning journey, projects, and community experiences of Manish Rajak, a second-year B.Tech CSE student in Bengaluru.',
  openGraph: {
    title: 'Manish Rajak — CSE student, learning by building',
    description: 'Projects, hackathons, and a growing journey in technology.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
