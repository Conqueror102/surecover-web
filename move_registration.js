const fs = require('fs');
const path = require('path');

const hospitalPath = path.join(__dirname, 'components/HospitalChannel/HospitalChannel.tsx');
const regDir = path.join(__dirname, 'components/PatientRegistration');
const regPath = path.join(regDir, 'PatientRegistration.tsx');
const regPagePath = path.join(__dirname, 'app/patient-registration/page.tsx');

let hospitalContent = fs.readFileSync(hospitalPath, 'utf8');

const startMarker = '{/*  ═══════════════════════════════════════\n     HOW IT WORKS — HOSPITAL PATIENTS';
const endMarker = '{/*  ═══════════════════════════════════════\n     HOSPITAL ADMIN PORTAL PREVIEW';

const startIndex = hospitalContent.indexOf(startMarker);
const endIndex = hospitalContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const extractedPart = hospitalContent.substring(startIndex, endIndex);
  
  // Create PatientRegistration component
  const regComponentContent = `export default function PatientRegistration() {\n  return (\n    <>\n      ${extractedPart}    </>\n  );\n}\n`;
  
  if (!fs.existsSync(regDir)) {
    fs.mkdirSync(regDir, { recursive: true });
  }
  fs.writeFileSync(regPath, regComponentContent);
  
  // Remove from HospitalChannel
  const newHospitalContent = hospitalContent.substring(0, startIndex) + hospitalContent.substring(endIndex);
  fs.writeFileSync(hospitalPath, newHospitalContent);
  
  // Update app/patient-registration/page.tsx
  let pageContent = fs.readFileSync(regPagePath, 'utf8');
  pageContent = pageContent.replace("import PatientRegistrationFlow from '@/components/interactive/PatientRegistrationFlow';", "import PatientRegistration from '@/components/PatientRegistration/PatientRegistration';");
  pageContent = pageContent.replace("<PatientRegistrationFlow />", "<PatientRegistration />");
  fs.writeFileSync(regPagePath, pageContent);
  
  console.log('Successfully moved registration sections.');
} else {
  console.log('Markers not found.');
}
