import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FormSection from "./containers/Homepage/FormSection";

export const metadata = {
  title: "GitHub Profile Lookup - Find Your Code Companions",
  description: "GitHub Profile Lookup: Connect with fellow developers effortlessly. Discover like-minded collaborators, mentors, or potential team members. Seamlessly explore GitHub's vast community and expand your coding network.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
};

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        
        <FormSection />

      </main>

      <Footer />
    </div>
    </>
  );
}
