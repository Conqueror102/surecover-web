import Hero from '@/components/Hero/Hero';
import Emergency from '@/components/Emergency/Emergency';
import AppDownload from '@/components/AppDownload/AppDownload';
import Faq from '@/components/Faq/Faq';
import TrustStrip from '@/components/TrustStrip/TrustStrip';
import VisualFlow from '@/components/VisualFlow/VisualFlow';
import ChronicCare from '@/components/ChronicCare/ChronicCare';
import PrescriptionTrust from '@/components/PrescriptionTrust/PrescriptionTrust';
import Global from '@/components/Global/Global';
import Proxy from '@/components/Proxy/Proxy';
import Cta from '@/components/Cta/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <VisualFlow />
      <ChronicCare />
      <PrescriptionTrust />
      <Global />
      <Proxy />
      <Emergency />
      <AppDownload />
      <Faq />
      <Cta />
    </main>
  );
}
