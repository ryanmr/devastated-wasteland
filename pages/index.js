import { Colophon } from "../components/Colophon";
import { Logo } from "../components/Logo";
import { TripleLineDivider } from "../components/TripleLineDivider";

export default function Home() {
  return (
    <>
      <div>
        <div
          className="flex flex-col items-center justify-center h-screen text-center bg-black"
          style={{
            backgroundImage: "url('/images/bg-1.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-4">
            <Logo className="h-48 animate-spin-slow" />
          </div>

          <h1 className="text-2xl tracking-wider text-white uppercase font-brand sm:text-3xl md:text-4xl lg:text-6xl">
            devastated wasteland
          </h1>
          <div className="my-4 mb-48">
            <p className="text-2xl text-white font-primary">coming soon</p>
            <p className="text-lg text-white font-primary">2021</p>
          </div>
        </div>

        <div className="container px-2 mx-auto" style={{ maxWidth: "65ch" }}>
          <div className="my-8">
            <Colophon />
          </div>

          <TripleLineDivider />

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">FrAgile</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia iaculis ultricies. Morbi non dictum neque, vel commodo
              erat. Praesent placerat libero at nisl efficitur tristique.
              Vivamus id nulla a nibh euismod eleifend. Etiam malesuada lectus
              sit amet eros semper, at fringilla lorem malesuada. Curabitur
              faucibus pellentesque lacinia. This sums up <em>"agile"</em> well
              enough.
            </p>
          </article>

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">
              Use the Uppercase-A Agile
            </h2>
            <p>
              I used to use "Agile." Then I used "agile." Now I no longer use
              the word at all. It started as a principle, it endured as a
              buzzword, and it ended on the tailend of a fad.
            </p>
          </article>

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">
              Who's update is it anyway?
            </h2>
            <div className="space-y-4">
              <p>
                Let's see, I went to a bunch of meetings, looked at incomplete
                and poorly written <em>"stories"</em> and I restarted my
                computer six times for no reason. No blockers, well, except this
                meeting.
              </p>
              <p>
                Standup is for telling folks know what you're doing right now
                and what you might work on shortly. It's not a race, it's not a
                compeition, it's not a game. It's a brief nexus to coordinate,
                it's a place for a humble plea for help.
              </p>
            </div>
          </article>

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">
              Points and Pineapples
            </h2>
            <p>
              Points are silly. Work is not continuous. Teams are not uniform.
              Knowledge is not yet learned, expertise is not yet felt. Points
              are a desperate plea to commomiditize the so-called delivery of
              software. How many points did you do this sprint? More? Awesome.
              Less? Grossly unacceptable. The discussion of value and the
              exploration of problem and solution space, what's is important
              here. Points are not.
            </p>
          </article>

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">
              Distributed Dysfunction™️
            </h2>
            <p>
              Who made these choices? Who are any of you? How could you do this?
              Let's find out.
            </p>
          </article>

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">
              Architectural Faffery
            </h2>
            <p>
              It's not intellectual faffery, but it might as well be. It's when
              you decide that an interesting architecture matters more than the
              product in someone's hands or it even working. By all means, use
              your service discovery queue mesh distributed scalable serverless
              PaaS. But before you do, let's consider the facts.
            </p>
          </article>

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">
              The Entropy Builds Up
            </h2>
            <p>
              You listen to customers. You build what they want. You build what
              they need. You keep chasing the dream. Suddenly, your system is
              broken and you have no where left to turn. What went wrong?
              Entropy begins and ends all things.
            </p>
          </article>

          <article className="my-8">
            <h2 className="text-3xl leading-10 font-primary">
              We're in a state of Jabberwocky
            </h2>
            <p>
              We've got the product you've always wanted. All you have to do is
              believe. And don't do your research.
            </p>
          </article>
        </div>

        <footer>
          <div className="flex items-center justify-center my-20">
            <div className="p-4">
              <Logo className="h-20" />
            </div>
          </div>
          <div className="flex items-center justify-center my-12">
            <p>
              <span>
                Photo by{" "}
                <a
                  className="text-blue-700 hover:underline"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://unsplash.com/@jverdi"
                >
                  Jared Verdi
                </a>{" "}
                on{" "}
                <a
                  className="text-blue-700 hover:underline"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://unsplash.com/photos/PNKwdJ8WetM"
                >
                  Unsplash
                </a>
              </span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
