import LocaleSelect from "./LocaleSwitcher";

const GlobalHeader = ({ locale }: { locale: string }) => {
  return (
    <div>
      <LocaleSelect locale={locale} />
    </div>
  );
};

export default GlobalHeader;
