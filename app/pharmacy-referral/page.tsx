import PharmacyReferral from '@/components/PharmacyReferral/PharmacyReferral';

export const metadata = {
  title: 'Pharmacy Referral | SureCover',
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <PharmacyReferral />
    </div>
  );
}
