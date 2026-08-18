import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyBanner from "@/components/layout/EmergencyBanner";
import MobileActionBar from "@/components/layout/MobileActionBar";
import { CLINIC_INFO } from "@/data/clinicData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#18893B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Nova Medical Centre Stirling | Family Health & General Practice",
    template: "%s | Nova Medical Centre Stirling",
  },
  description:
    "Your trusted partner for accessible healthcare in Stirling, WA. Open 7 days a week. Comprehensive family medicine, skin cancer checks, immunizations, and specialist care.",
  icons: {
    icon: "/fav-icon.png",
    shortcut: "/fav-icon.png",
    apple: "/fav-icon.png",
  },
  keywords: [
    "Family doctor Stirling",
    "GP Stirling Western Australia",
    "medical centre Stirling WA",
    "Cedric Street medical clinic",
    "general practitioner near me",
    "bulk billing doctor Stirling",
    "travel vaccinations Perth",
    "skin cancer check Stirling",
    "mental health care plan",
    "STI testing Stirling",
    "FIFO medicals Perth",
    "pre-employment medicals",
    "workers compensation doctor",
    "chronic disease management",
    "pediatric care Stirling",
    "paediatrician Stirling",
    "psychiatrist Stirling",
    "clinical psychologist",
    "women's health Stirling",
    "men's health clinic",
    "pathology services Stirling",
    "medical clinic 6021",
    "doctors near Balcatta",
    "doctors open weekend",
    "7 day medical centre",
  ],
  authors: [{ name: "Nova Medical Centre Stirling" }],
  creator: "Nova Medical Centre Stirling",
  publisher: "Nova Medical Centre Stirling",
  metadataBase: new URL("https://nova-medical-centre-stirling.base44.app"),
  alternates: {
    canonical: "https://nova-medical-centre-stirling.base44.app",
  },
  openGraph: {
    title: "Nova Medical Centre Stirling",
    description:
      "Your trusted partner for accessible healthcare. Book appointments online and access comprehensive medical services in Stirling, WA.",
    url: "https://nova-medical-centre-stirling.base44.app",
    siteName: "Nova Medical Centre Stirling",
    images: [
      {
        url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b9f671f0ee7938ec9614f/9470c8e89_logo-2.png",
        width: 1200,
        height: 630,
        alt: "Nova Medical Centre Stirling",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Medical Centre Stirling",
    description:
      "Your trusted partner for accessible healthcare. Book appointments online and access comprehensive medical services.",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b9f671f0ee7938ec9614f/9470c8e89_logo-2.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: CLINIC_INFO.name,
  url: CLINIC_INFO.websiteUrl,
  telephone: CLINIC_INFO.phoneInt,
  faxNumber: CLINIC_INFO.fax,
  email: CLINIC_INFO.email,
  priceRange: "$$",
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: "31 Cedric Street",
    addressLocality: "Stirling",
    addressRegion: "Western Australia",
    postalCode: "6021",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLINIC_INFO.coordinates.lat,
    longitude: CLINIC_INFO.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  medicalSpecialty: [
    "FamilyMedicine",
    "GeneralPractice",
    "PreventiveMedicine",
    "Pediatrics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/fav-icon.png" type="image/png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#243244] antialiased">
        <EmergencyBanner />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
