import { use } from "react";
import type { ITechnology } from "../Types/technologyType";

interface TechnologySectionProps {
  dataPromise: Promise<ITechnology[]>;
}

const TechnologySection = ({ dataPromise }: TechnologySectionProps) => {
  const data = use(dataPromise);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Explore the{" "}
            <span className="text-pink-500">Technologies</span>
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

            {data.map((technology) => (
              <div
                key={technology.id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                {/* Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  {technology.badge && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
                      {technology.badge}
                    </span>
                  )}
                </div>

                {/* Name + Description */}
                <div className="mt-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {technology.name}
                  </h2>

                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    {technology.description}
                  </p>
                </div>

                {/* Category + Difficulty + Rating */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs">

                  <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
                    {technology.category}
                  </span>

                  <span className="text-gray-500">
                    {technology.difficulty}
                  </span>

                  <span className="font-medium text-gray-700">
                    ⭐ {technology.rating}
                  </span>

                </div>

                {/* Add Button */}
                <button className="mt-4 w-full rounded-lg bg-gray-950 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
                  Add to Stack
                </button>

              </div>
            ))}

          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <h2 className="text-lg font-semibold text-gray-900">
              Your Stack
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              2 Technology Selected
            </p>

            {/* Selected Technologies */}
            <div className="mt-5 space-y-3">

              <div className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2">
                <div className="flex items-center gap-3">
                  <img
                    src="/icons/svelte.svg"
                    alt="Svelte"
                    className="h-6 w-6"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Svelte
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Frontend
                    </p>
                  </div>
                </div>

                <button className="text-lg text-gray-400 hover:text-red-500">
                  ×
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2">
                <div className="flex items-center gap-3">
                  <img
                    src="/icons/redis.svg"
                    alt="Redis"
                    className="h-6 w-6"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Redis
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Database
                    </p>
                  </div>
                </div>

                <button className="text-lg text-gray-400 hover:text-red-500">
                  ×
                </button>
              </div>

            </div>

            {/* Remove All */}
            <button className="mt-8 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50">
              Remove All
            </button>

          </aside>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;