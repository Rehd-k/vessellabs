import Link from 'next/link';

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterColumn {
  title?: string;
  links: FooterLink[];
}

const FooterSection = ({ title, links }: FooterColumn) => {
  if (title) {
    return (
      <div>
        <h4 className="text-white font-bold mb-4">{title}</h4>
        <ul className="space-y-2">
          {links.map((link, idx) => {
            if (link.href) {
              return (
                <li key={idx} className="hover:text-[#3B82F6] cursor-pointer">
                  <Link href={link.href} className="hover:text-[#3B82F6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={idx} className="hover:text-[#3B82F6] cursor-pointer">
                {link.label}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="col-span-1 md:col-span-1">
      <div className="flex items-center gap-2 mb-4 text-white">
        <div className="w-6 h-6 bg-[#3B82F6] rounded flex items-center justify-center font-bold text-xs">V</div>
        <span className="font-bold text-lg">Vessel Labs</span>
      </div>
      <p>{links[0]?.label}</p>
    </div>
  );
};

export const Footer = () => {
  const productLinks: FooterLink[] = [
    { label: "Healthcare", href: "/demo/HEALTHCARE" },
    { label: "Hospitality", href: "/demo/HOSPITALITY" },
    { label: "Retail", href: "/demo/RETAIL" },
    { label: "Logistics", href: "/demo/LOGISTICS" },
    { label: "Manufacturing", href: "/demo/MAUNFACTURING" },
    { label: "Accounting", href: "/demo/ACCOUNTING" },
  ];

  const companyLinks: FooterLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
  ];

  const companyInfo: FooterLink[] = [
    { label: "The all-in-one business management suite for modern enterprises." },
  ];

  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <FooterSection links={companyInfo} />
        <FooterSection title="Product" links={productLinks} />
        <FooterSection title="Company" links={companyLinks} />
        <FooterSection title="Legal" links={legalLinks} />
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-center text-xs">
        © 2024 Vessel Labs Inc. All rights reserved.
      </div>
    </footer>
  );
};
