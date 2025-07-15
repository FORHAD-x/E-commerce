import React, { useState } from 'react'

const Description = () => {
    const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { key: 'description', label: 'Description' },
    { key: 'additional', label: 'Additional Information' },
    { key: 'reviews', label: 'Reviews [5]' },
  ];
  return (
    <section className='container py-12'>
      {/* Tabs */}
      <div className="flex justify-center gap-4 mx-auto ">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 text-lg font-medium ${
              activeTab === tab.key ? 'text-black' : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Description Content */}
      {activeTab === 'description'
      ? 
        <div className="mt-8 text-center text-gray-600 space-y-6 max-w-4xl mx-auto">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker
            takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
            hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is
            both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal
            preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
        :
        <div className="mt-8 text-center text-gray-600 space-y-6 max-w-4xl mx-auto">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker
            takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          
        </div>
      }

      {/* Images */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl flex justify-center">
          <img src="/sofa.png" alt="Sofa" />
        </div>
        <div className="rounded-xl flex justify-center">
          <img src="/sofa.png" alt="Sofa"/>
        </div>
      </div>
    </section>
  )
}

export default Description