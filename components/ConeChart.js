import React from "react";
export function ConeChart() {
  const [stories, setStories] = React.useState(1);

  const content = (() => {
    switch (stories) {
      case 1:
        return "design a loading bar";
      case 2:
        return "...and build it in a UI";
      case 3:
        return "...and get in contact with UAT team to write a test";
      case 4:
        return "...email their manager to see if they have time";
      case 5:
        return "...oh are they on vacation?";
      case 6:
        return "...Can Allie do it?";
      case 7:
        return "...No, only Barry has access to the repo where CI runs";
      case 8:
        return "😑😑😑";
      case 9:
        return "...and incorporate it with entire app context";
      default:
        return "...and and rip out everywhere there is some kind of loading state and replace it";
    }
  })();

  const y = (i) => i * 10;
  const yPos = y(stories);
  return (
    <>
      <article className="my-8">
        <h2 className="text-3xl leading-10 font-primary">
          Cone of uncertainty 🎉
        </h2>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={stories}
          className="w-full"
          onChange={(e) => {
            const v = parseInt(e.target.value, 10);
            setStories(v);
          }}
        ></input>
        <h3 className="text-2xl leading-10 font-primary">{content}</h3>
        <p>
          <div className="max-w-full">
            <svg viewBox="-20,-20,140,140">
              <path
                d={`M0,100 L 100,${yPos} L 100,0 L ${100 - yPos},0`}
                fill="blue"
              />
              <path
                d={`M0,100 L 100,0`}
                stroke="black"
                strokeDasharray="2"
                strokeWidth="0.5"
              />

              <path d={`M0,0 L 0,100 L 100,100`} stroke="black" fill="none" />
              <text x="-20" y="50" fontSize="5">
                Done
              </text>
              <text y="110" x="50" fontSize="5">
                Time
              </text>
            </svg>
          </div>
        </p>
      </article>
    </>
  );
}
