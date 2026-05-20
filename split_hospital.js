const fs = require('fs');
const path = require('path');

const pharmacyPath = path.join(__dirname, 'components/PharmacyReferral/PharmacyReferral.tsx');
const hospitalDir = path.join(__dirname, 'components/HospitalChannel');
const hospitalPath = path.join(hospitalDir, 'HospitalChannel.tsx');
const partnerHospitalsPage = path.join(__dirname, 'app/partner-hospitals/page.tsx');

let pharmacyContent = fs.readFileSync(pharmacyPath, 'utf8');

const splitMarker = '{/*  ═══════════════════════════════════════\n     HOSPITAL CHANNEL DIVIDER';

const parts = pharmacyContent.split(splitMarker);
if (parts.length > 1) {
  const pharmacyNew = parts[0] + '    </>\n  );\n}\n';
  fs.writeFileSync(pharmacyPath, pharmacyNew);

  if (!fs.existsSync(hospitalDir)) {
    fs.mkdirSync(hospitalDir, { recursive: true });
  }

  const hospitalContent = `export default function HospitalChannel() {\n  return (\n    <>\n      ${splitMarker}${parts[1]}`;
  fs.writeFileSync(hospitalPath, hospitalContent);

  // Update app/partner-hospitals/page.tsx
  let pageContent = fs.readFileSync(partnerHospitalsPage, 'utf8');
  pageContent = pageContent.replace(/import Proxy from '@\/components\/Proxy\/Proxy';/, "import HospitalChannel from '@/components/HospitalChannel/HospitalChannel';");
  pageContent = pageContent.replace(/<Proxy \/>/, "<HospitalChannel />");
  fs.writeFileSync(partnerHospitalsPage, pageContent);

  console.log('Successfully split Pharmacy and Hospital components.');
} else {
  console.log('Split marker not found!');
}
