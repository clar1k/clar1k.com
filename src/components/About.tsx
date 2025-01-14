import { Nickname } from "~/components/Nickname";
export function About() {
  return (
    <section id="about" className="my-12">
      <h2 className="mb-4 font-mono text-2xl text-theme-primary">About</h2>
      <div className="whitespace-pre-wrap font-mono leading-6">
        Hey 👋 <br />
        I&apos;m
        <Nickname />
        , a software engineer with experience over 2 years.
        <br />I build full-stack web apps.
      </div>
    </section>
  );
}
