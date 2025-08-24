'use client'

export default function AboutSection() {
  return (
    <section className="min-h-screen h-screen relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">A little bit about me.</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WHERE I'M FROM</h3>
                <p className="text-gray-600">
                  I was born and raised in Utica, NY. My Dad worked as a mail carrier for
                  the Post Office. My Mom worked as a Kindergarten Teacher. Growing up
                  they repeatedly told me to get off the computer and go outside. The OG
                  "Touch Grass™". I'm glad I did. There's not a ton to do in Utica but there is
                  a ton to eat and the food is definitely better than where you're from.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WHAT I USED TO DO</h3>
                <p className="text-gray-600">
                  When I was 14, I got my first job as a dishwasher. After that, I made pizzas at a pizzeria, chased
                  kids around as a security guard at an elementary school, and tried to
                  sell mattresses I knew nothing about at a furniture store.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WHAT I DO NOW</h3>
                <p className="text-gray-600">
                  Most recently, I was the Founding Product Designer at a startup called
                  CommandDot. While there, I was all things design, but my main focus
                  was creating a better scheduling experience for everyone. Before that, I
                  worked as a Front-End Developer at Romanelli where I learned how
                  to code and how to stop coding.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WHERE I'M AT NOW</h3>
                <p className="text-gray-600">
                  Today, I live in San Francisco, California. When I'm not working, you can
                  usually find me with my dog at the beach, the park, or the redwoods.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WHAT I'M LOOKING FOR</h3>
                <p className="text-gray-600">
                  Impact, purpose, and working with a diverse team of talented people. I
                  also think the personal computer needs its iPhone moment.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Social links and media */}
          <div className="space-y-8">
            {/* Twitter-like card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <h4 className="font-semibold">marco ✨</h4>
                  <p className="text-gray-500">@marcofyi</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">
                i get computers 'puting ✨<br />
                the internet revolution<br />
                has captured me ✨
              </p>
              <button className="text-blue-500 hover:underline text-sm">Read more tweets ↗</button>
            </div>

            {/* Music player card */}
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                <div>
                  <h4 className="font-semibold">Nights</h4>
                  <p className="text-gray-500">Frank Ocean — Blonde</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Previous</span>
                  ⏮
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Play</span>
                  ▶️
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Next</span>
                  ⏭
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Volume</span>
                  🔊
                </button>
              </div>
            </div>

            {/* Podcast card */}
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center text-white text-xs">
                  VISUAL<br />DEV.FM
                </div>
                <div>
                  <h4 className="font-semibold">Career as a Visual Developer?</h4>
                  <p className="text-gray-500">The Visual Developer Podcast</p>
                </div>
              </div>
            </div>

            {/* Message card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <h4 className="font-semibold">Marco</h4>
                </div>
              </div>
              <p className="text-gray-800 mb-4">
                want to work together? just want to chat? send me a text here (no, for real)
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                sounds good 👋
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}