import Header from "@/components/Header";
import DocumentList from "@/components/DocumentList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <DocumentList />
      </main>
      <Footer />
    </div>
  );
}
