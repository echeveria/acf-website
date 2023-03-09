import { updateTitleTag } from "./_app";
import { Constellation } from "../components/constellation";
import { Person } from "contentlayer/generated";
import React, { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

const transitionDuration: number = 600;

export default function Home() {
  const [isBusy, setIsBusy] = useState(false);
  const [slideIdx, setSlideIdx] = useState<number>(0);
  const totalSlideNumber = 3;

  const slideDurationTimeout = (slideDuration: number) => {
    setTimeout(() => {
      setIsBusy(false);
    }, slideDuration);
  };

  const parallaxScroll = throttle((e: React.WheelEvent<HTMLDivElement>) => {
    const isWheelingDown = -e.deltaY <= 0;
    console.log(isWheelingDown);
    if (isWheelingDown && !isBusy) {
      setIsBusy(true);
      if (slideIdx !== totalSlideNumber - 1) {
        scrollDown();
      }
      slideDurationTimeout(transitionDuration);
    }

    if (!isWheelingDown && !isBusy) {
      setIsBusy(true);
      if (slideIdx !== 0) {
        scrollUp();
      }
      slideDurationTimeout(transitionDuration);
    }
  });

  const scrollDown = (): void => setSlideIdx((prevIdx) => prevIdx + 1);

  const scrollUp = (): void => setSlideIdx((prevIdx) => prevIdx - 1);
  const addClass = (i: number) =>
    [
      "section",
      i <= slideIdx - 1 ? "down-scroll" : "",
      i !== totalSlideNumber - 1 && i >= slideIdx ? "up-scroll" : "",
    ]
      .join(" ")
      .trim();
  return (
    <>
      {updateTitleTag("Our Philosophy")}
      <div className="app" onWheel={parallaxScroll}>
        <section className={addClass(0)}>
          {slideIdx === 0 && <Constellation />}
          <div className="parallax-wrapper">
            <div className="max-w-7xl mx-auto flex items-center z-10 ">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-3/5 philosophy-container">
                  <h2>Our Philosophy</h2>
                  <div>
                    <span>Empowering people, </span>{" "}
                    <span>
                      businesses & open-source blockchain technology
                      advancement.
                    </span>
                    <span className="block">
                      We are not æternity blockchain, nor its owners and
                      managers.{" "}
                    </span>
                    <span>We are contributors, </span>{" "}
                    <span>
                      just like numerous community members & projects,{" "}
                    </span>{" "}
                    <span>
                      taking care of the smooth flow of the blockchain,
                    </span>{" "}
                    <span>continuous development, </span>{" "}
                    <span>technology advancement, </span>{" "}
                    <span>and empowerment of its ecosystem. </span>
                    <span>
                      We are one of many organizations that cares deeply about
                      æternity technology —
                    </span>{" "}
                    <span>its innovations, values & scalability.</span>
                  </div>
                </div>
                <div className="md:w-2/5" />
              </div>
            </div>
          </div>
        </section>
        <section className={addClass(1)}>
          {slideIdx === 1 && <Constellation />}
          <div className="parallax-wrapper">
            <div className="max-w-7xl mx-auto flex items-center z-10">
              <div className="md:flex md:items-center md:justify-between">
                <div
                  className={`md:w-3/5 ${
                    slideIdx >= 1 ? "philosophy-container" : undefined
                  }`}
                >
                  <div>
                    <span className="text-blue-600">Research,</span>{" "}
                    <span className="text-pink-500">development,</span>{" "}
                    <span className="text-[#37C4D5]">innovations,</span>{" "}
                    <span className="text-red-500 block">
                      community learning & building opportunities,
                    </span>{" "}
                    <span className="text-indigo-400 block">
                      Ambassador Programs and Grant Opportunities
                    </span>
                    <span>- it is not just what we do but how we do it.</span>
                    <span className="block">
                      However, we are a foundation, and thus we continue to fund
                      development of many significant components of the æternity
                      ecosystem, together with:
                    </span>
                    <span className="block">
                      * Building æternity blockchain ecosystems through global,
                      open source collaboration
                    </span>
                    <span className="block">
                      * Taking care of the core blockchain development,
                      security, and advancement
                    </span>
                    <span className="block">
                      * Foster the development and adoption of cross-industry
                      platforms powered by distributed ledgers * Educate the
                      public
                    </span>
                    <span className="block">* Educate the public</span>
                    <span className="block">
                      * Empower, support and promote open source blockchain
                      community to continuously develop ecosystem and technology
                    </span>
                  </div>
                </div>
                <div className="md:w-2/5" />
              </div>
            </div>
          </div>
        </section>
        <section className={addClass(2)}>
          {slideIdx === 2 && <Constellation />}
          <div className="parallax-wrapper">
            <div className="max-w-7xl mx-auto flex items-center z-10">
              <div className="md:flex md:items-center md:justify-between">
                <div
                  className={`md:w-3/5 ${
                    slideIdx >= 2 ? "philosophy-container" : undefined
                  }`}
                >
                  <span>Foundation is dedicated to driving Web 3.0; </span>
                  <span>
                    a decentralized and fair internet where users control their
                    own data, identity and destiny.
                  </span>
                  <span className="block">
                    Potential partners and grantees are welcome to contact the
                  </span>
                  <span>
                    Foundation for proposals to take æternity leaps ahead.
                  </span>
                  <span>
                    Core and Essentials Development Domains The 7 domains below
                    are current areas of focus for the core open source
                    development effort,
                  </span>
                  <span>listed in order of approximate funding priority.</span>
                  <span className="block">
                    The order may be adjusted as development progresses and
                    priorities evolve.
                  </span>
                  <span className="block">- Protocol Maintenance</span>
                  <span className="block">- Protocol Developmen</span>
                  <span className="block">- SDKs</span>
                  <span className="block">- Wallets and Interfaces</span>
                  <span className="block">- æpps and Integrations</span>
                  <span className="block">
                    - Middleware Backend API - Dev-Tools
                  </span>
                  <span className="block">- Dev-Tools</span>{" "}
                  <span>Let’s build æternity together!</span>
                </div>
                <div className="md:w-2/5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
