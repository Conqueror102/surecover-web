import PatientRegistration from '@/components/PatientRegistration/PatientRegistration';

export const metadata = {
  title: 'Patient Registration | SureCover',
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <PatientRegistration />
    </div>
  );
}
