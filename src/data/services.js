export const servicesData = [
  {
    id: 'gst-registration',
    slug: 'gst-registration',
    path: '/gst-registration',
    name: 'GST Registration',
    shortName: 'GST',
    tagline: 'Streamlined Goods & Services Tax registration for Indian businesses and freelancers.',
    category: 'Taxation & Indirect Taxes',
    iconName: 'ReceiptText',
    badge: 'Tax Compliance',
    shortDescription: 'Obtain your Goods and Services Tax Identification Number (GSTIN) to legally sell goods or offer taxable services across India.',
    overview: 'The Goods and Services Tax (GST) is a unified indirect tax levied on the manufacture, sale, and consumption of goods and services throughout India. Registration under GST not only ensures statutory compliance with tax authorities but also allows businesses to pass input tax credit (ITC) to their clients, bid for corporate contracts, and expand via e-commerce marketplaces.',
    governingAuthority: 'GST Council & Central Board of Indirect Taxes and Customs (CBIC)',
    officialPortal: 'https://www.gst.gov.in',
    portalName: 'Official GST Common Portal',
    whoIsItFor: [
      'Businesses crossing the mandatory turnover threshold (₹40 Lakhs for goods, ₹20 Lakhs for services in general category states; ₹20 Lakhs/₹10 Lakhs in special category states).',
      'Inter-state sellers and service providers transacting across state borders.',
      'E-commerce sellers selling goods or services through platforms like Amazon, Flipkart, or own storefronts.',
      'Casual taxable persons or non-resident taxable persons carrying on business in India.',
      'Businesses looking to voluntarily register to claim Input Tax Credit (ITC) and build B2B credibility.',
    ],
    keyBenefits: [
      {
        title: 'Input Tax Credit (ITC) Flow',
        description: 'Claim tax credits on inputs, raw materials, capital purchases, and business expenses, reducing cumulative tax cascading.',
      },
      {
        title: 'Inter-State Commercial Freedom',
        description: 'Sell products and supply services across Indian state borders without facing barrier checkpoints or unregistered seller restrictions.',
      },
      {
        title: 'B2B Client Eligibility',
        description: 'Corporate buyers and established enterprises almost universally mandate GST invoicing before releasing vendor vendor work orders.',
      },
      {
        title: 'Online Marketplace Access',
        description: 'Required by law to list merchandise on major digital retail platforms and government e-Marketplace (GeM) portals.',
      },
    ],
    considerations: [
      'Once registered, timely filing of monthly/quarterly returns (GSTR-1, GSTR-3B) and annual returns is mandatory, even with zero transactions.',
      'Separate registrations are required if you maintain principal places of business across multiple Indian states.',
      'Aadhaar authentication is required for rapid approval without mandatory physical site inspections.',
    ],
    documents: [
      {
        category: 'Promoter / Proprietor / Director Documents',
        items: [
          'Permanent Account Number (PAN) Card of the business owner or directors/partners',
          'Aadhaar Card with linked mobile number for OTP verification',
          'Passport-sized photographs of all key stakeholders',
        ],
      },
      {
        category: 'Registered Business Place Proof',
        items: [
          'Latest Electricity Bill, Water Bill, or Property Tax receipt (under 60 days old)',
          'Rent Agreement along with signed No Objection Certificate (NOC) from the property owner (if leased)',
          'Ownership proof (Title deed or Municipal khata) if the property is self-owned',
        ],
      },
      {
        category: 'Banking & Constitution Details',
        items: [
          'Cancelled cheque, bank passbook front page, or recent bank statement showing name and IFSC',
          'Certificate of Incorporation / Partnership Deed / LLP Agreement (for non-proprietorship entities)',
          'Letter of Authorization or Board Resolution appointing the authorized signatory',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Document Collation & Verification',
        description: 'We review your business constitution, premise utility bills, and promoter proofs to verify compliance with GSTN validation standards.',
      },
      {
        step: 2,
        title: 'TRN Generation & Part-A Filing',
        description: 'Generation of Temporary Reference Number (TRN) on the official GST portal using your verified PAN, email, and mobile.',
      },
      {
        step: 3,
        title: 'Application Preparation (Part-B)',
        description: 'Detailed data entry covering business description, HSN / SAC codes, principal place of business, and authorized signatory authorization.',
      },
      {
        step: 4,
        title: 'Aadhaar Biometric / OTP Authentication',
        description: 'Completion of digital Aadhaar authentication for the authorized signers to avoid physical premise inspection delays.',
      },
      {
        step: 5,
        title: 'ARN Tracking & Certificate Issuance',
        description: 'Monitoring the Application Reference Number (ARN) until the GST officer grants approval and Form GST REG-06 is issued.',
      },
    ],
    faqs: [
      {
        question: 'Is GST registration mandatory for service providers earning below ₹20 Lakhs?',
        answer: 'No, if your aggregate domestic turnover within a financial year does not exceed ₹20 Lakhs (or ₹10 Lakhs in designated special category states), GST registration is not mandatory, unless you undertake inter-state supply of goods or sell through e-commerce operators.',
      },
      {
        question: 'Can I operate from a rented residential address?',
        answer: 'Yes. You can declare a residential premises as your principal place of business by providing the rent agreement, an NOC signed by the landlord, and the latest electricity bill.',
      },
      {
        question: 'How much does the government charge for GST registration?',
        answer: 'The Government of India does not levy any official statutory fee for GST registration on gst.gov.in. Any fees charged by VpaarSetu represent professional consulting, document preparation, and facilitation assistance.',
      },
      {
        question: 'What happens if I don’t file GST returns after getting the number?',
        answer: 'Non-filing attracts statutory late fees and interest under the CGST/SGST Acts. Continued non-compliance may lead to suspension or cancellation of the GSTIN by the tax department.',
      },
    ],
    relatedServices: ['msme-registration', 'private-limited-company-registration', 'company-registration'],
  },
  {
    id: 'msme-registration',
    slug: 'msme-registration',
    path: '/msme-registration',
    name: 'MSME / Udyam Registration',
    shortName: 'MSME / Udyam',
    tagline: 'Official Udyam verification unlocking priority sector credit, subsidies, and delayed payment protections.',
    category: 'Government Recognition & Licences',
    iconName: 'Building2',
    badge: 'Government Recognition',
    shortDescription: 'Register under the Ministry of Micro, Small & Medium Enterprises (Udyam) to access institutional credit perks, collateral exemptions, and tender benefits.',
    overview: 'Udyam Registration is the official statutory registration portal for Micro, Small, and Medium Enterprises in India, administered by the Ministry of MSME. It provides enterprises with a unique permanent registration number and a digital certificate, formalizing the business in the national enterprise registry and making it eligible for multiple central and state government incentive schemes.',
    governingAuthority: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
    officialPortal: 'https://udyamregistration.gov.in',
    portalName: 'Official Udyam Registration Portal',
    whoIsItFor: [
      'Micro Enterprises: Investment in Plant & Machinery/Equipment not exceeding ₹1 Crore and Turnover not exceeding ₹5 Crores.',
      'Small Enterprises: Investment not exceeding ₹10 Crores and Turnover not exceeding ₹50 Crores.',
      'Medium Enterprises: Investment not exceeding ₹50 Crores and Turnover not exceeding ₹250 Crores.',
      'Sole proprietorships, partnerships, LLPs, Private Limited Companies, and trusts engaged in manufacturing or service provision.',
    ],
    keyBenefits: [
      {
        title: 'Priority Sector Bank Lending',
        description: 'Indian banks offer lower borrowing interest rates, collateral-free loans under CGTMSE, and preferential credit assessment for Udyam holders.',
      },
      {
        title: 'Delayed Payment Protection',
        description: 'Statutory protection under MSMED Act 2006 requiring buyers to settle dues within 45 days, with compound interest at three times RBI bank rate on defaults.',
      },
      {
        title: 'Government Tender Exemptions',
        description: 'Waiver of Earnest Money Deposit (EMD), exemption from tender document fees, and preferential purchase policies for MSME bidders.',
      },
      {
        title: 'Subsidies on IPR & Certifications',
        description: 'Up to 50% government concession on trademark application fees, patent filings, and quality certifications (ISO, ZED certification).',
      },
    ],
    considerations: [
      'Udyam registration is completely paperless and integrates directly with Income Tax and GSTN systems using the enterprise PAN.',
      'Only one Udyam registration is permitted per Aadhaar number; multiple activities or branch units must be added under the same profile.',
      'Trading activities (retail and wholesale) are permitted on Udyam strictly for Priority Sector Lending (PSL) purposes.',
    ],
    documents: [
      {
        category: 'Statutory Identity Requirements',
        items: [
          'Aadhaar number of the Proprietor / Managing Partner / Authorized Director',
          'PAN Card of the Enterprise (or personal PAN in case of sole proprietorship)',
          'Active mobile number linked with Aadhaar for official OTP receipt',
        ],
      },
      {
        category: 'Business Particulars',
        items: [
          'National Industrial Classification (NIC) 5-digit code corresponding to your business activity',
          'Details of investment in plant & machinery (drawn from the latest filed ITR, if applicable)',
          'Bank account number and IFSC code of the business operational account',
          'Employee count (male, female, other employees)',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Classification & Eligibility Review',
        description: 'Analyzing your revenue and plant investment metrics to accurately classify your unit under Micro, Small, or Medium criteria.',
      },
      {
        step: 2,
        title: 'NIC Activity Code Mapping',
        description: 'Selecting appropriate 2-digit, 4-digit, and 5-digit NIC codes from the official catalog to represent all primary and ancillary business activities.',
      },
      {
        step: 3,
        title: 'Udyam Portal Submission',
        description: 'Accurate filing of enterprise data, unit locations, bank parameters, and employment statistics directly on the Udyam portal.',
      },
      {
        step: 4,
        title: 'Aadhaar OTP Authorization',
        description: 'Prompt validation using the Aadhaar OTP received by the authorized promoter or director.',
      },
      {
        step: 5,
        title: 'Certificate Issuance & Verification',
        description: 'Retrieving the permanent Udyam Registration Certificate carrying the official QR-code for immediate banking and tender use.',
      },
    ],
    faqs: [
      {
        question: 'Does Udyam Registration need periodic renewal?',
        answer: 'No. Udyam Registration is permanent and does not expire. However, annual data (such as turnover and investment) updates automatically from linked Income Tax and GST returns.',
      },
      {
        question: 'Can retail and wholesale traders obtain Udyam registration?',
        answer: 'Yes, the Ministry of MSME includes retail and wholesale traders under Udyam, with benefits specifically focused on Priority Sector Lending from commercial banks.',
      },
      {
        question: 'Is GST mandatory to get an MSME Udyam certificate?',
        answer: 'GST is mandatory only if the entity is required by GST law to have a GSTIN. If your business turnover is exempt or below statutory thresholds, Udyam can be registered with PAN.',
      },
      {
        question: 'What is the government fee for Udyam Registration?',
        answer: 'The Government of India provides Udyam registration free of cost on its official website. VpaarSetu charges transparent professional facilitation fees for document verification, code classification, and filing support.',
      },
    ],
    relatedServices: ['gst-registration', 'company-registration', 'food-licence-registration'],
  },
  {
    id: 'company-registration',
    slug: 'company-registration',
    path: '/company-registration',
    name: 'Company Registration Overview',
    shortName: 'Company Registration',
    tagline: 'Comprehensive advisory to help you choose and form the ideal legal business entity in India.',
    category: 'Corporate Incorporation',
    iconName: 'Building',
    badge: 'Entity Formation',
    shortDescription: 'Navigate the complete spectrum of business structures in India—from Private Limited and OPC to LLP and Partnerships—to choose the ideal framework.',
    overview: 'Choosing the right business structure is the single most critical structural decision for an Indian entrepreneur. It defines your liability, tax obligations, external funding capacity, and regulatory maintenance. VpaarSetu guides founders through the statutory merits and compliance consequences of each entity format under the Companies Act 2013 and Limited Liability Partnership Act 2008.',
    governingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA Portal (SPICe+ System)',
    whoIsItFor: [
      'First-time entrepreneurs seeking clarity on whether to incorporate as a Pvt Ltd, OPC, LLP, or Partnership.',
      'Bootstrapped ventures looking to balance limited liability with minimal ongoing regulatory compliance costs.',
      'Startups with investor ambitions aiming to issue equity shares, convertible notes, or ESOPs.',
      'Professional consultants and service practices exploring pass-through taxation via LLP frameworks.',
    ],
    keyBenefits: [
      {
        title: 'Right-Fit Legal Advisory',
        description: 'Evaluate shareholder counts, operational scope, and capital structure to prevent expensive restructuring later.',
      },
      {
        title: 'End-to-End MCA Facilitation',
        description: 'Coordinated management of Digital Signatures (DSC), Director Identification Numbers (DIN), name reservation, and charter documents (MoA/AoA).',
      },
      {
        title: 'Integrated PAN, TAN & EPFO/ESIC',
        description: 'Seamless integration with Central Government SPICe+ form yielding corporate PAN, TAN, bank account pre-approval, and labour codes concurrently.',
      },
      {
        title: 'Corporate Bank Account Readiness',
        description: 'Certified copy generation and statutory kit preparation for swift corporate bank onboarding and statutory deposit verification.',
      },
    ],
    considerations: [
      'A Private Limited Company requires stricter annual audits and secretarial filings than an LLP or Partnership.',
      'LLPs do not support equity shares and cannot issue venture capital funding instruments like CCPS.',
      'Partnership firms do not offer limited liability; the partners are jointly and severally liable without limitation.',
    ],
    documents: [
      {
        category: 'Promoter & Director Proofs',
        items: [
          'PAN Card of all proposed directors/partners (mandatory for Indian nationals)',
          'Identity Proof: Passport, Voter ID, or Driving Licence',
          'Address Proof: Bank statement, Electricity bill, or Telephone bill (under 2 months old with exact name match)',
          'Passport-sized photographs and specimen digital signatures',
        ],
      },
      {
        category: 'Registered Corporate Office Proof',
        items: [
          'Proof of registered office address (Electricity bill, gas bill, or property tax receipt)',
          'Rent Agreement along with NOC from property owner in prescribed format',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Entity Structure Consultation',
        description: 'Reviewing founder count, capitalization, and expansion plans to pinpoint whether Pvt Ltd, OPC, LLP, or Partnership fits best.',
      },
      {
        step: 2,
        title: 'Class 3 Digital Signature (DSC) Issuance',
        description: 'Procuring authorized Class 3 DSC tokens for proposed directors and designated partners for statutory digital signing.',
      },
      {
        step: 3,
        title: 'Name Availability Search & Reservation (RUN/SPICe+ Part A)',
        description: 'Conducting comprehensive trademark and MCA corporate database searches to submit compliant names for central approval.',
      },
      {
        step: 4,
        title: 'Charter Drafting (MoA & AoA / LLP Agreement)',
        description: 'Drafting main business objects, share capital clauses, voting rights, and corporate governance rules.',
      },
      {
        step: 5,
        title: 'Filing, Verification & Certificate of Incorporation (CoI)',
        description: 'Submission to the Central Registration Centre (CRC) with PAN, TAN, and formal issuance of Certificate of Incorporation with CIN.',
      },
    ],
    faqs: [
      {
        question: 'Which structure is best for a tech startup planning to raise VC capital?',
        answer: 'A Private Limited Company is the standard requirement for venture capital and angel funding in India, as it permits issuance of ordinary equity, preference shares (CCPS), and Employee Stock Ownership Plans (ESOPs).',
      },
      {
        question: 'What is the minimum capital required to incorporate a company?',
        answer: 'The Companies Act has eliminated the earlier minimum paid-up capital requirement (previously ₹1 Lakh for Pvt Ltd). You can incorporate with any nominal authorized capital, typically starting at ₹10,000 to ₹1,00,000.',
      },
      {
        question: 'Can a single individual register a corporate entity?',
        answer: 'Yes, a solo founder can incorporate a One Person Company (OPC) or a Sole Proprietorship. An OPC provides the prestige and limited liability of a company while allowing a single shareholder.',
      },
    ],
    relatedServices: ['private-limited-company-registration', 'opc-registration', 'llp-registration', 'partnership-firm-registration'],
  },
  {
    id: 'private-limited-company-registration',
    slug: 'private-limited-company-registration',
    path: '/private-limited-company-registration',
    name: 'Private Limited Company Registration',
    shortName: 'Private Limited Company',
    tagline: 'The gold standard business structure for scalable startups and growth-oriented ventures in India.',
    category: 'Corporate Incorporation',
    iconName: 'ShieldCheck',
    badge: 'Most Popular for Startups',
    shortDescription: 'Incorporate a Private Limited Company (Pvt Ltd) under the Companies Act 2013 with limited liability, independent legal personality, and investor appeal.',
    overview: 'A Private Limited Company is India’s most recognized and respected corporate legal entity. Governed by the Companies Act 2013, it creates a separate legal identity distinct from its directors and shareholders. This corporate veil shields personal assets from business liabilities while providing an agile framework for raising external funding, retaining talent with ESOPs, and building enterprise credibility.',
    governingAuthority: 'Ministry of Corporate Affairs (MCA) / Registrar of Companies (ROC)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA SPICe+ (INC-32)',
    whoIsItFor: [
      'Founders planning to raise external capital from angel investors, VC funds, or financial institutions.',
      'Businesses wanting to offer Employee Stock Ownership Plans (ESOPs) to attract top industry talent.',
      'Companies operating in high-liability, technology, manufacturing, or cross-border commercial sectors.',
      'Enterprises requiring strong brand credibility when bidding for enterprise, multinational, or government contracts.',
    ],
    keyBenefits: [
      {
        title: 'Limited Liability Shield',
        description: 'Shareholder financial exposure is strictly capped at their unpaid share capital; personal real estate, savings, and assets remain secure.',
      },
      {
        title: 'Perpetual Legal Succession',
        description: 'The company continues to exist uninterrupted regardless of changes in directors, share transfers, or the retirement/demise of individual shareholders.',
      },
      {
        title: 'Venture Capital Readiness',
        description: 'Preferred legal vehicle for angel networks, venture capitalists, and private equity due to structured share classes and clear statutory investor rights.',
      },
      {
        title: 'DPIIT Startup India Eligibility',
        description: 'Eligible to apply for Startup India recognition, granting 3-year income tax holidays (Section 80-IAC) and angel tax exemptions.',
      },
    ],
    considerations: [
      'Requires a minimum of 2 directors and 2 shareholders (one person can hold both roles simultaneously).',
      'At least one director must be a resident of India (stayed in India for >= 182 days during the financial year).',
      'Mandatory annual statutory audit by an independent Chartered Accountant and annual filing of AOC-4 and MGT-7 with the ROC.',
    ],
    documents: [
      {
        category: 'Director & Shareholder Identity Proofs',
        items: [
          'Self-attested PAN Card copy (mandatory for Indian nationals)',
          'Identity Proof (Self-attested Passport, Voter Identity Card, or Driving Licence)',
          'Recent Residential Address Proof (Bank Statement, Electricity Bill, or Mobile Bill under 2 months old)',
          'Passport photograph and digital signature specimen',
        ],
      },
      {
        category: 'Registered Office Documentation',
        items: [
          'Proof of Registered Address (Electricity Bill, Water Bill, or Gas Bill under 60 days old)',
          'Notarized Rent/Lease Agreement with Landlord No Objection Certificate (NOC)',
          'Ownership document or municipal tax paid receipt if premises are self-owned',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Class 3 DSC Procurement',
        description: 'Securing encrypted Class 3 Digital Signature Certificates for all proposed directors for electronic authentication.',
      },
      {
        step: 2,
        title: 'Name Reservation (SPICe+ Part A)',
        description: 'Checking MCA nomenclature rules and trademark databases; submitting two proposed names for central CRC clearance.',
      },
      {
        step: 3,
        title: 'MoA & AoA Drafting (SPICe+ Part B)',
        description: 'Tailoring the e-Memorandum of Association and e-Articles of Association defining industrial activities and internal management.',
      },
      {
        step: 4,
        title: 'Integrated Filing & Stamp Duty',
        description: 'Online submission of SPICe+ accompanied by AGILE-PRO-S (for PAN, TAN, EPFO, ESIC, Professional Tax, and Bank Account opening).',
      },
      {
        step: 5,
        title: 'Incorporation Certificate & Bank Account Activation',
        description: 'Receipt of the Certificate of Incorporation containing CIN, PAN, and TAN issued by the Registrar of Companies.',
      },
    ],
    faqs: [
      {
        question: 'Can two family members (e.g., husband and wife) be the two directors?',
        answer: 'Yes, absolutely. Two family members can be the shareholders and directors of a Private Limited Company, provided both possess valid PAN, identity, and address proofs.',
      },
      {
        question: 'Do directors need to physically visit any government office?',
        answer: 'No. The entire incorporation process under the MCA SPICe+ system is 100% digital and conducted via electronic signatures and online submissions.',
      },
      {
        question: 'What is the INC-20A Commencement of Business requirement?',
        answer: 'Within 180 days of incorporation, the company must file Form INC-20A with the MCA confirming that each subscriber has deposited their committed share capital into the company bank account.',
      },
    ],
    relatedServices: ['company-registration', 'gst-registration', 'msme-registration', 'opc-registration'],
  },
  {
    id: 'opc-registration',
    slug: 'opc-registration',
    path: '/opc-registration',
    name: 'One Person Company (OPC) Registration',
    shortName: 'One Person Company',
    tagline: 'All the benefits of corporate limited liability for single founders and solo entrepreneurs.',
    category: 'Corporate Incorporation',
    iconName: 'UserCheck',
    badge: 'Solo Founder Entity',
    shortDescription: 'Launch as a solo entrepreneur with full corporate status, limited liability, and complete operational control without needing a co-founder.',
    overview: 'Introduced under the Companies Act 2013, a One Person Company (OPC) enables an individual entrepreneur to establish a corporate body with separate legal identity and limited liability. Unlike traditional sole proprietorships where personal assets remain exposed, an OPC shields the founder while retaining 100% individual control over shareholding and operational decisions.',
    governingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA Portal (SPICe+ OPC)',
    whoIsItFor: [
      'Solo founders, independent innovators, and boutique consultants who want corporate legal protection.',
      'Sole proprietors looking to elevate customer perception and bid for enterprise contracts.',
      'E-commerce merchants and creators who do not have or want a business partner.',
      'Entrepreneurs seeking the option to seamlessly convert into a full multi-shareholder Private Limited Company as they scale.',
    ],
    keyBenefits: [
      {
        title: 'Single Shareholder Autonomy',
        description: 'Enjoy 100% ownership and swift decision-making without board disputes or requiring a dummy shareholder.',
      },
      {
        title: 'Asset Protection & Limited Liability',
        description: 'Founder liability is strictly confined to unpaid share value; personal assets are insulated from business liabilities.',
      },
      {
        title: 'Reduced Board Compliances',
        description: 'Exempt from holding mandatory Annual General Meetings (AGMs) and cash flow statement filing requirements applicable to larger firms.',
      },
      {
        title: 'Effortless Future Conversion',
        description: 'Can voluntarily convert into a multi-shareholder Private Limited Company at any time by introducing co-founders or investors.',
      },
    ],
    considerations: [
      'The sole member must nominate an Indian citizen as a Nominee Director in Form INC-3 to step in upon incapacitation or demise.',
      'An individual can incorporate only one One Person Company at any given time.',
      'Cannot carry out Non-Banking Financial Investment activities or invest in securities of other corporate bodies.',
    ],
    documents: [
      {
        category: 'Founder & Nominee Identity',
        items: [
          'PAN Card of both the Founder and the Nominee',
          'Voter ID / Passport / Driving Licence for both individuals',
          'Bank Statement or Utility Bill (under 2 months old) for both',
          'Signed Nominee Consent in Form INC-3',
        ],
      },
      {
        category: 'Registered Premises Documents',
        items: [
          'Utility bill (Electricity/Water) of premises under 60 days old',
          'NOC from property owner & lease deed (if rented)',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'DSC Issuance & Nominee Finalization',
        description: 'Procuring Class 3 Digital Signature for the founder and obtaining written consent from the nominated individual.',
      },
      {
        step: 2,
        title: 'Name Approval via SPICe+ Part A',
        description: 'Reserving your corporate name ending with the statutory suffix "(OPC) Private Limited".',
      },
      {
        step: 3,
        title: 'MoA, AoA & INC-3 Nomination Submission',
        description: 'Drafting core company constitution and registering nominee succession documents.',
      },
      {
        step: 4,
        title: 'CRC Scrutiny & Approval',
        description: 'Filing SPICe+ Part B along with AGILE-PRO-S for integrated corporate PAN and TAN generation.',
      },
      {
        step: 5,
        title: 'Certificate of Incorporation Handover',
        description: 'Receiving the Certificate of Incorporation with permanent CIN from the Registrar of Companies.',
      },
    ],
    faqs: [
      {
        question: 'Who can be a nominee in an OPC?',
        answer: 'Any natural person who is an Indian citizen (whether resident in India or not) can be appointed as a nominee director with their written consent in Form INC-3.',
      },
      {
        question: 'Can an NRI incorporate an OPC in India?',
        answer: 'Yes, recent amendments to the Companies Act permit Non-Resident Indians (NRIs) who are Indian citizens to incorporate an OPC in India.',
      },
      {
        question: 'Can an OPC convert to a regular Private Limited Company later?',
        answer: 'Yes. An OPC can convert into a Private Limited Company or Public Company voluntarily at any time by increasing its number of members and directors to two.',
      },
    ],
    relatedServices: ['private-limited-company-registration', 'company-registration', 'gst-registration', 'msme-registration'],
  },
  {
    id: 'llp-registration',
    slug: 'llp-registration',
    path: '/llp-registration',
    name: 'Limited Liability Partnership (LLP) Registration',
    shortName: 'Limited Liability Partnership',
    tagline: 'The ideal hybrid of corporate limited liability and partnership operational flexibility.',
    category: 'Corporate Incorporation',
    iconName: 'Users',
    badge: 'Low Compliance Hybrid',
    shortDescription: 'Combine the legal protection of a corporate entity with the simple management structure and tax flow of a partnership.',
    overview: 'Introduced by the Limited Liability Partnership Act 2008, an LLP is a modern hybrid organizational framework. It provides partners with limited liability protection—ensuring no partner is liable for another partner’s independent misconduct or negligence—while preserving internal contractual freedom without the rigorous compliance overhead of a traditional joint-stock company.',
    governingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA RUN-LLP & FiLLiP System',
    whoIsItFor: [
      'Professional service firms: Chartered Accountants, Legal practices, Architects, IT consultancies, and digital agencies.',
      'Family businesses and closely-held trading groups looking to limit personal liability.',
      'Bootstrapped partnerships wanting to avoid mandatory audit requirements for smaller entities.',
      'Joint ventures between established firms collaborating on specific projects.',
    ],
    keyBenefits: [
      {
        title: 'No Mandatory Audit for Small LLPs',
        description: 'Statutory audit by a CA is exempt if turnover is below ₹40 Lakhs and capital contribution is under ₹25 Lakhs.',
      },
      {
        title: 'Liability Insulation Between Partners',
        description: 'Partners are shielded from joint liability arising from unauthorized acts or negligence committed by other partners.',
      },
      {
        title: 'Zero Dividend Distribution Restrictions',
        description: 'Partners can withdraw and distribute profits freely as agreed in the LLP deed without Dividend Distribution Tax complexities.',
      },
      {
        title: 'Minimal Statutory Governance Meetings',
        description: 'No requirement to conduct formal board meetings or annual general meetings under strict MCA procedural rules.',
      },
    ],
    considerations: [
      'Cannot raise equity venture capital or issue share classes/convertible debentures.',
      'Requires at least 2 Designated Partners, at least one of whom must be an Indian resident.',
      'The formal LLP Agreement must be executed on judicial stamp paper and filed in Form 3 within 30 days of incorporation.',
    ],
    documents: [
      {
        category: 'Partner Documentation',
        items: [
          'PAN Card of all designated partners',
          'Voter ID, Passport, or Driving Licence as proof of identity',
          'Bank statement, telephone bill, or electricity bill (less than 60 days old)',
          'Digital Signature Certificate (DSC) for designated partners',
        ],
      },
      {
        category: 'Office & Partnership Deed',
        items: [
          'Proof of registered address (Electricity bill / Municipal khata)',
          'NOC from property owner & rent agreement',
          'Drafted and executed LLP Agreement on appropriate state stamp paper',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Designated Partner DSC Procurement',
        description: 'Issuance of Class 3 digital signatures for the designated partners.',
      },
      {
        step: 2,
        title: 'Name Reservation (RUN-LLP)',
        description: 'Reserving the distinctive partnership name with the mandatory suffix "LLP".',
      },
      {
        step: 3,
        title: 'Incorporation Filing (FiLLiP)',
        description: 'Submitting Form FiLLiP to the CRC with registered office details and partner consents.',
      },
      {
        step: 4,
        title: 'Certificate of Incorporation Issuance',
        description: 'Registrar grants Certificate of Incorporation along with unique LLPIN (LLP Identification Number).',
      },
      {
        step: 5,
        title: 'Form 3 LLP Agreement Filing',
        description: 'Drafting, stamping, and mandatory filing of the comprehensive LLP Agreement within 30 days.',
      },
    ],
    faqs: [
      {
        question: 'Can an LLP be converted into a Private Limited Company later?',
        answer: 'Yes, Chapter XXI of the Companies Act 2013 allows an LLP to convert into a Private Limited Company subject to statutory ROC guidelines.',
      },
      {
        question: 'Is there a limit on the maximum number of partners in an LLP?',
        answer: 'No. While an LLP requires a minimum of 2 partners, there is no upper limit on the maximum number of partners, unlike a traditional partnership which is capped at 50.',
      },
      {
        question: 'What are the annual filing requirements for an LLP?',
        answer: 'An LLP must file Form 11 (Annual Return) by May 30th and Form 8 (Statement of Account & Solvency) by October 30th every financial year.',
      },
    ],
    relatedServices: ['partnership-firm-registration', 'private-limited-company-registration', 'gst-registration', 'company-registration'],
  },
  {
    id: 'partnership-firm-registration',
    slug: 'partnership-firm-registration',
    path: '/partnership-firm-registration',
    name: 'Partnership Firm Registration',
    shortName: 'Partnership Firm',
    tagline: 'Simple, swift, and cost-effective co-founding structure for traditional businesses and local trades.',
    category: 'Commercial Registration',
    iconName: 'Handshake',
    badge: 'Traditional Structure',
    shortDescription: 'Draft a robust Partnership Deed and register under the Indian Partnership Act 1932 for straightforward, low-maintenance joint operations.',
    overview: 'A Partnership Firm is governed by the Indian Partnership Act 1932. It represents a relationship between two or more persons who have agreed to share the profits of a business carried on by all or any of them acting for all. While registration with the state Registrar of Firms (ROF) is optional under the Act, registering the firm grants vital legal standing to enforce contractual rights in civil courts.',
    governingAuthority: 'Registrar of Firms (ROF) of respective State Government',
    officialPortal: 'State Government Commercial Taxes / ROF Portals',
    portalName: 'Respective State ROF Department',
    whoIsItFor: [
      'Two or more trusted associates, friends, or family members starting a local trading or service venture.',
      'Businesses wanting to get started quickly with minimal upfront legal overhead.',
      'Enterprises with low external liability risk that do not require venture capital investment.',
      'Small manufacturing units, wholesale traders, and neighborhood retail enterprises.',
    ],
    keyBenefits: [
      {
        title: 'Rapid & Economical Setup',
        description: 'Simpler setup process with no MCA digital signatures or mandatory corporate secretarial filings.',
      },
      {
        title: 'Internal Agreement Flexibility',
        description: 'Partners are free to define profit-sharing ratios, interest on capital, and managerial roles in the partnership deed.',
      },
      {
        title: 'Minimal Annual Compliance Burden',
        description: 'Exempt from filing annual ROC financial returns or statutory solvency disclosures.',
      },
      {
        title: 'Direct Pass-Through Taxation Rules',
        description: 'Partnership profits are taxed at firm level, while individual share of profit is exempt in the partners’ personal tax returns.',
      },
    ],
    considerations: [
      'Unlimited Personal Liability: Partners are jointly and severally liable for all firm obligations without limitation.',
      'Lack of Perpetual Succession: Demise, insolvency, or withdrawal of a partner can lead to dissolution unless explicitly protected in the deed.',
      'An unregistered firm cannot file a lawsuit against third parties in court to enforce contractual claims.',
    ],
    documents: [
      {
        category: 'Partners Details',
        items: [
          'PAN Card of all partners',
          'Aadhaar Card, Voter ID, or Passport of all partners',
          'Recent passport photographs',
        ],
      },
      {
        category: 'Partnership Deed & Premises',
        items: [
          'Customized Partnership Deed executed on non-judicial state stamp paper',
          'Electricity Bill or Property Tax receipt of the business premises',
          'Rent Agreement and Landlord NOC (if rented)',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Terms Finalization & Clause Formulation',
        description: 'Agreeing on capital contributions, profit sharing, dispute resolution, and banking signatories.',
      },
      {
        step: 2,
        title: 'Partnership Deed Drafting & Stamping',
        description: 'Professional legal drafting of the deed and stamping on state-appropriate non-judicial stamp paper.',
      },
      {
        step: 3,
        title: 'Deed Notarization & Signing',
        description: 'Formal execution of the deed before an authorized Public Notary with witness signatures.',
      },
      {
        step: 4,
        title: 'Firm PAN & TAN Application',
        description: 'Obtaining an independent PAN and TAN in the name of the Partnership Firm from the Income Tax Department.',
      },
      {
        step: 5,
        title: 'State ROF Registration (Optional but Recommended)',
        description: 'Filing Form 1 with the Registrar of Firms along with prescribed state fees for official Registration Certificate.',
      },
    ],
    faqs: [
      {
        question: 'Is it legally mandatory to register a partnership firm with the Registrar of Firms (ROF)?',
        answer: 'Registration under the Indian Partnership Act 1932 is technically optional. However, an unregistered firm cannot file legal suits against third parties in court. Therefore, registering with the ROF is strongly recommended.',
      },
      {
        question: 'What is the maximum number of partners allowed?',
        answer: 'Under Section 464 of the Companies Act 2013 and Rule 10 of the Companies (Miscellaneous) Rules 2014, the maximum number of partners in a partnership firm is 50.',
      },
      {
        question: 'Can a partnership firm be converted into an LLP later?',
        answer: 'Yes. An existing partnership firm can be converted into an LLP under the Second Schedule of the Limited Liability Partnership Act 2008.',
      },
    ],
    relatedServices: ['llp-registration', 'gst-registration', 'msme-registration', 'company-registration'],
  },
  {
    id: 'food-licence-registration',
    slug: 'food-licence-registration',
    path: '/food-licence-registration',
    name: 'FSSAI Food Licence Registration',
    shortName: 'FSSAI Food Licence',
    tagline: 'Mandatory Food Safety and Standards Authority of India licensing for food business operators (FBOs).',
    category: 'Regulatory Licences',
    iconName: 'UtensilsCrossed',
    badge: 'Statutory Licence',
    shortDescription: 'Acquire your 14-digit FSSAI Registration or State/Central Licence on the FoSCoS portal to legally manufacture, package, distribute, or sell food.',
    overview: 'The Food Safety and Standards Authority of India (FSSAI) mandates that every Food Business Operator (FBO) in India involved in manufacturing, processing, storage, distribution, packaging, or sale of food products must hold an active FSSAI registration or licence. From home cloud kitchens and restaurants to grocery stores and food packaging units, FSSAI compliance safeguards public health and is mandatory to partner with food delivery aggregators like Zomato and Swiggy.',
    governingAuthority: 'Food Safety and Standards Authority of India (FSSAI)',
    officialPortal: 'https://foscos.fssai.gov.in',
    portalName: 'Food Safety Compliance System (FoSCoS)',
    whoIsItFor: [
      'Basic Registration: Petty food businesses, small retailers, cloud kitchens, home bakers with annual turnover up to ₹12 Lakhs.',
      'State Licence: Medium-sized restaurants, caterers, food manufacturers, distributors with annual turnover between ₹12 Lakhs and ₹20 Crores.',
      'Central Licence: Large-scale food manufacturers, 100% export oriented units (EOUs), importers, e-commerce food platforms, or turnover exceeding ₹20 Crores.',
      'Online food delivery partners, dark kitchens, canteens, dhabas, and retail food stalls.',
    ],
    keyBenefits: [
      {
        title: 'Mandatory Legal Compliance',
        description: 'Prevents heavy statutory penalties (up to ₹5 Lakhs and imprisonment under Section 63 of FSS Act for running without a licence).',
      },
      {
        title: 'Food Aggregator Onboarding',
        description: 'Compulsory 14-digit FSSAI number requirement to onboard and sell items on Swiggy, Zomato, Blinkit, and Zepto.',
      },
      {
        title: 'Consumer Hygiene Trust',
        description: 'Displaying the official FSSAI logo and licence number on packaging reassures buyers of rigorous food hygiene standards.',
      },
      {
        title: 'Business Scale & Export Viability',
        description: 'Enables smooth procurement from institutional FMCG distributors and permits overseas export clearance.',
      },
    ],
    considerations: [
      'The 14-digit FSSAI licence number must be prominently displayed on food packaging, menu cards, and invoices.',
      'Licences can be taken for validity periods ranging between 1 to 5 years, with renewal applications required 30 days prior to expiry.',
      'Food safety supervisor certifications (FoSTaC) may be mandatory for designated staff in commercial restaurant kitchens.',
    ],
    documents: [
      {
        category: 'FBO Identity Proofs',
        items: [
          'Passport photo of the Food Business Operator / Partners / Directors',
          'Government photo ID (Aadhaar, Voter ID, or Passport)',
          'PAN Card of the proprietor or business entity',
        ],
      },
      {
        category: 'Premises & Equipment Details',
        items: [
          'Proof of premise possession (Rent Agreement with NOC or Electricity Bill under 60 days)',
          'Food Safety Management System (FSMS) plan or self-declaration',
          'List of food product categories manufactured or handled',
          'Kitchen layout plan and equipment list (mandatory for State/Central manufacturing licences)',
          'Water analysis test report from certified laboratory (for commercial beverage/food manufacturing units)',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'FBO Category & Capacity Assessment',
        description: 'Determining exact classification between Basic Registration, State Licence, or Central Licence based on installed production capacity and turnover.',
      },
      {
        step: 2,
        title: 'Food Category Code Selection',
        description: 'Accurately mapping food item categories (dairy, bakery, ready-to-eat, beverages) under FoSCoS standard nomenclature.',
      },
      {
        step: 3,
        title: 'FoSCoS Application Filing',
        description: 'Submitting Form A (Registration) or Form B (Licence) on the official FoSCoS portal with required technical attachments.',
      },
      {
        step: 4,
        title: 'Food Safety Officer Review',
        description: 'Tracking application scrutiny, responding to any queries raised by the Designated Officer or Food Safety Officer (FSO).',
      },
      {
        step: 5,
        title: '14-Digit Licence Number Issuance',
        description: 'Grant of the official digital FSSAI Certificate bearing the 14-digit registration number, valid for 1 to 5 years.',
      },
    ],
    faqs: [
      {
        question: 'Do home-based bakers or cloud kitchens need an FSSAI registration?',
        answer: 'Yes. Even if you operate from a home kitchen, you are considered a Food Business Operator under the FSS Act and must hold at least a Basic FSSAI Registration.',
      },
      {
        question: 'What is the validity of an FSSAI licence?',
        answer: 'FSSAI registrations and licences can be applied for a duration of 1 year up to a maximum of 5 years. Higher years attract proportionate government fees.',
      },
      {
        question: 'What is FoSCoS?',
        answer: 'FoSCoS (Food Safety Compliance System) is the modern online cloud portal launched by FSSAI for all registration, licensing, and compliance management in India.',
      },
      {
        question: 'How do government fees differ from professional assistance charges?',
        answer: 'The Government of India charges statutory fees for FSSAI (e.g. ₹100/year for basic registration, ₹2000-₹5000/year for state licences). Professional fees charged by VpaarSetu cover documentation, category selection, and application monitoring.',
      },
    ],
    relatedServices: ['gst-registration', 'msme-registration', 'partnership-firm-registration', 'private-limited-company-registration'],
  },
];

export const getServiceBySlug = (slug) => {
  return servicesData.find((s) => s.slug === slug || s.path === `/${slug}` || s.path === slug);
};
