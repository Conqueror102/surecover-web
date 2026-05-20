import DoctorRegistration from '@/components/DoctorRegistration/DoctorRegistration';

export const metadata = {
  title: 'Join Doctor | SureCover',
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <DoctorRegistration />
    </div>
  );
}
