import Transition from "./Transition";

export default function Section({ title, children }: any) {
  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center gap-5 py-5 text-white font-bakbak-one"
      >
        <Transition>
          <h2 className="mb-5 text-3xl font-bold text-center text-yellow-400 uppercase font-bakbak-one">
            {title}
          </h2>
          <p className="text-justify max-w-[500px]">{children}</p>
        </Transition>
      </section>
    </>
  );
}
