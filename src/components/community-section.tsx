

export function CommunitySection() {
  return (

    <div className="bg-gray-100">
      {/* Community Section */}
      <section className="bg-gradient-to-b from-gray-200 to-blue-100 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Join Our <span className="text-blue-600">Community</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {/* Discord Card */}
          <div className="bg-gray-600 text-white rounded-3xl p-6 shadow-md">
            <h3 className="text-lg font-bold">Discord</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>

          {/* Forum Discussion Card */}
          <div className="bg-gray-600 text-white rounded-3xl p-6 shadow-md">
            <h3 className="text-lg font-bold">Forum Discussion</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
        </div>
      </section>
      </div>
      )}