import { schoolInfo } from "@/constants/schoolData";

export default function PhoneLinks() {
  return (
    <>
      {schoolInfo.phones.map((phone, index) => (
        <a
          key={phone}
          href={schoolInfo.phoneLinks[index]}
          className="font-semibold text-[var(--brand-primary)] transition hover:text-black"
        >
          {phone}
        </a>
      ))}
    </>
  );
}
