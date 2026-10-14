export const siteConfig = {
  name: "VpaarSetu",
  tagline: "Your Business. Your Vision. Our Guidance.",
  description: "From business registration to essential licences and compliance, VpaarSetu helps entrepreneurs navigate paperwork and regulatory processes with clarity and confidence.",
  phone: "+91 76198 49962",
  phoneRaw: "+917619849962",
  email: "vypaarsetulko@gmail.com",
  enquiryEmail: "vypaarsetulko@gmail.com",
  whatsappNumber: "917619849962",
  whatsappDefaultMessage: "Hello VpaarSetu, I would like to inquire about business registration and compliance assistance.",
  workingHours: "Monday – Saturday: 9:30 AM to 6:30 PM IST",
  address: "02 Infront Of Ram Kishore Inter College Jankipuram extension Lucknow 226021",
  headquarters: "02 Infront Of Ram Kishore Inter College, Jankipuram Extension, Lucknow, Uttar Pradesh 226021",
  regionalOffice: "Jankipuram Extension, Lucknow 226021",
  panIndiaNote: "Assisting business owners and startups across Uttar Pradesh and all states and Union Territories in India.",
  disclaimer: "VpaarSetu is a professional consulting and facilitation service firm. We are not a government body or affiliated with any government department. All applications are submitted through official statutory portals (MCA, GST Portal, Udyam, FoSCoS) on behalf of our clients.",
  officialPortals: [
    { name: "Ministry of Corporate Affairs (MCA)", url: "https://www.mca.gov.in" },
    { name: "Goods and Services Tax (GST) Portal", url: "https://www.gst.gov.in" },
    { name: "Udyam MSME Registration Portal", url: "https://udyamregistration.gov.in" },
    { name: "FSSAI FoSCoS Portal", url: "https://foscos.fssai.gov.in" },
  ]
};

export const getWhatsAppLink = (serviceName = '') => {
  const text = serviceName 
    ? `Hello VpaarSetu, I would like guidance on ${serviceName}. Please share how we can proceed.` 
    : siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
