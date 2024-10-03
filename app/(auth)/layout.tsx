export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center container min-h-screen mx-auto md:px-24 py-20 bg-secondary-custom_secondary">
        <div className="relative w-full px-52 z-10">{children}</div>
      </section>
    </>
  );
}