import HospitalChannel from '@/components/HospitalChannel/HospitalChannel';

export const metadata = {
  title: 'Partner Hospitals | SureCover',
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <HospitalChannel />
    </div>
  );
}
