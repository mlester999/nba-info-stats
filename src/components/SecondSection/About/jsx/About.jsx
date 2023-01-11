import styles from "../css/About.module.css";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center p-10 bg-gray-200">
      <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
        <div className="row-span-2 flex flex-col rounded-md border-2 border-slate-900 bg-white">
          <div className="h-1/2 flex-1">
            <img
              src="https://image.discovery.indazn.com/eu/v2/eu/image?id=83008581313_image-background_pDach_1657287404000&quality=70"
              className="w-full object-cover object-right-top"
              alt="omnichannel"
            />
          </div>
          <div className="p-10">
            <h3 className="text-xl font-medium text-gray-900">
              Strong Competitive Balance Teams
            </h3>
            <p className="mt-2 text-slate-500">
              The league also has a strong competitive balance, with many teams
              having a chance to win the championship each year. Some of the
              most notable games include the NBA Finals, where the best team
              from the Eastern Conference competes against the best team from
              the Western Conference for the title of NBA champion.
            </p>
          </div>
        </div>
        <div className="flex rounded-md bg-white border-2 border-slate-900">
          <div className="flex-1 p-10">
            <h3 className="text-xl font-medium text-gray-900">
              Fierce Competitive Nature
            </h3>
            <p className="mt-2 text-slate-500">
              Even though trash-talking can be seen as part of the game, the NBA
              still maintains a strict code of conduct to ensure that the
              trash-talking is not disrespectful, offensive or abusive.
            </p>
          </div>

          <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
            <div className="absolute inset-0">
              <img
                src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzODM4MDY5NTU4ODE0MTQ3/luka-doncic-mavericks-lead.jpg"
                className="h-full w-full object-cover object-left-top"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex rounded-md bg-white border-2 border-slate-900">
          <div className="flex-1 p-10">
            <h3 className="text-xl font-medium text-gray-900">
              From the soaring slams to the last-second heroics shots.
            </h3>
            <p className="mt-2 text-slate-500">
              The NBA is the ultimate showcase of athletic excellence, teamwork,
              and determination. Join us as we embark on a journey where the
              stakes are high, the players are legendary and every moment is an
              opportunity for greatness!
            </p>
          </div>

          <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
            <div className="absolute inset-0">
              <img
                src="https://cdn.vox-cdn.com/thumbor/kqmOvar2u06Fj0MFmlMpLnjPZRA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23586589/1240432881.jpg"
                className="h-full w-full object-cover object-left-top"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
