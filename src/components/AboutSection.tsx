import { BookOpen, User, Users, Cross } from "lucide-react"; // Cross icon added for Christ-Centered Ministry

export default function AboutSection() {
  return (
    // Outer section for padding and background
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            About Pastor Naomi
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Called to ministry over 15 years ago, I have dedicated my life to
            serving God and His people through biblical teaching, pastoral
            counseling, and spiritual guidance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* === Main Content: Text and Image Block (Two Columns) === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-20">
            {/* Left Column: My Journey In Faith Text */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-black">
                My Journey In Faith
              </h3>
              <p className="text-base text-gray-700 mb-6">
                My calling to ministry began during my college years when I felt
                God&apos;s unmistakable call to serve His people. After
                completing my **Master of Divinity** and later my **Ph.D in
                Biblical Studies**, I have served in various pastoral roles,
                always with a heart for counseling and spiritual direction.
              </p>
              <p className="text-base text-gray-700 mb-6">
                I am also a **licensed professional counselor**, which allows me
                to offer both spiritual and psychological support to those
                seeking healing and growth. My approach integrates faith-based
                perspectives with sound counseling practices.
              </p>
              <p className="text-base text-gray-700">
                Beyond formal ministry, I am passionate about women&apos;s
                ministry, family counseling, and helping individuals discover
                their God-given purpose and calling.
              </p>

              {/* --- IMAGE PLACEHOLDER 1 (Mid-Left Floating) --- */}
              {/* This is the placeholder that appears to the left of the text block in the original image. 
                 It's challenging to make it 'float' mid-text purely with a standard grid/flex, 
                 so we'll place it here to simulate its position relative to the main content area. */}
              <div className="mt-8 md:mt-12 lg:hidden">
                <div className="bg-gray-800 h-40 w-full rounded-lg"></div>
              </div>
            </div>

            {/* Right Column: Image Placeholders (The 3 floating dark blocks) */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4 self-start">
              {/* Image Placeholder 1 (Top Right) - Spans both columns to be wider */}
              <div className="col-span-2 bg-gray-800 h-40 w-full rounded-lg mb-4"></div>

              {/* Image Placeholder 2 (Mid Left) - The "floating" one */}
              <div className="bg-gray-800 h-40 w-full rounded-lg self-center"></div>

              {/* Image Placeholder 3 (Bottom Right) - Sits to the right of Image 2 */}
              <div className="bg-gray-800 h-40 w-full rounded-lg"></div>
            </div>
          </div>

          {/* === Core Ministry Values (Four Cards) === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Christ-Centered Ministry */}
            <div className="p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              {/* ICON STYLE UPDATE: Yellow rounded div with white icon */}
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-black">
                Christ-Centered Ministry
              </h4>
              <p className="text-sm text-gray-600">
                Every aspect of my ministry is grounded in the love and
                teachings of Jesus Christ, emphasizing grace, mercy, and
                redemption
              </p>
            </div>

            {/* Card 2: Biblical Foundation */}
            <div className="p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              {/* ICON STYLE UPDATE: Yellow rounded div with white icon */}
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-black">
                Biblical Foundation
              </h4>
              <p className="text-sm text-gray-600">
                I believe in the authority and inspiration of Scripture as our
                guide for faith, life, and spiritual growth.
              </p>
            </div>

            {/* Card 3: Compassionate Care */}
            <div className="p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              {/* ICON STYLE UPDATE: Yellow rounded div with white icon */}
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-black">
                Compassionate Care
              </h4>
              <p className="text-sm text-gray-600">
                Providing pastoral care with empathy, understanding, and
                unconditional love for all who seek spiritual guidance
              </p>
            </div>

            {/* Card 4: Community Building */}
            <div className="p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              {/* ICON STYLE UPDATE: Yellow rounded div with white icon */}
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-black">
                Community Building
              </h4>
              <p className="text-sm text-gray-600">
                Fostering strong Christian communities where believers can grow
                together in faith and support one another
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
