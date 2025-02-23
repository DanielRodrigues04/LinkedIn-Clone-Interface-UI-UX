import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  School, 
  MessageCircle, 
  Bell, 
  Home, 
  Users2, 
  Search,
  Grid,
  User,
  Plus,
  ThumbsUp,
  MessageSquare,
  Share2
} from 'lucide-react';

function App() {
  return (
    <div className="bg-[#f3f2ef] min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <svg className="w-8 h-8 text-[#0a66c2]" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
              />
            </svg>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#eef3f8] pl-10 pr-4 py-2 rounded-md w-64 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <NavItem icon={<Home />} label="Home" />
            <NavItem icon={<Users2 />} label="Network" />
            <NavItem icon={<Briefcase />} label="Jobs" />
            <NavItem icon={<MessageCircle />} label="Messaging" />
            <NavItem icon={<Bell />} label="Notifications" />
            <NavItem icon={<User />} label="Me" active />
            <div className="h-8 w-px bg-gray-300" />
            <NavItem icon={<Grid />} label="Work" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-8 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="h-48 bg-[#1B4C9C] rounded-t-lg relative">
                <img
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
                  alt="Cover"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                  className="absolute -bottom-16 left-6 w-32 h-32 rounded-full border-4 border-white"
                />
              </div>
              <div className="pt-20 px-6 pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold">John Doe</h1>
                    <p className="text-gray-600 mt-1">Senior Software Engineer at Tech Company</p>
                    <p className="text-gray-500 text-sm mt-1">
                      <MapPin className="inline-block w-4 h-4 mr-1" />
                      San Francisco Bay Area
                    </p>
                    <p className="text-[#0a66c2] mt-2">500+ connections</p>
                  </div>
                  <button className="bg-[#0a66c2] text-white px-4 py-1.5 rounded-full font-medium">
                    Connect
                  </button>
                </div>

                <div className="mt-6">
                  <h2 className="text-lg font-semibold">About</h2>
                  <p className="mt-2 text-gray-600">
                    Passionate software engineer with 8+ years of experience in full-stack development.
                    Specialized in React, TypeScript, and cloud technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow mt-6 p-6">
              <h2 className="text-lg font-semibold flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Experience
              </h2>
              <div className="mt-4 space-y-4">
                <ExperienceItem
                  title="Senior Software Engineer"
                  company="Tech Company"
                  duration="2020 - Present"
                  location="San Francisco, CA"
                />
                <ExperienceItem
                  title="Software Engineer"
                  company="Previous Corp"
                  duration="2017 - 2020"
                  location="Seattle, WA"
                />
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow mt-6 p-6">
              <h2 className="text-lg font-semibold flex items-center">
                <School className="w-5 h-5 mr-2" />
                Education
              </h2>
              <div className="mt-4">
                <div className="flex items-start">
                  <img
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952"
                    alt="University"
                    className="w-12 h-12 rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">Computer Science, BSc</h3>
                    <p className="text-gray-600">University of Technology</p>
                    <p className="text-gray-500 text-sm">2013 - 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-medium">People also viewed</h3>
              <div className="mt-4 space-y-4">
                <SidebarProfile
                  name="Sarah Johnson"
                  title="Product Manager at Big Tech"
                  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                />
                <SidebarProfile
                  name="Michael Chen"
                  title="Senior Developer at StartUp"
                  image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-medium">People you may know</h3>
              <div className="mt-4 space-y-4">
                <SidebarProfile
                  name="Emily Brown"
                  title="UX Designer at Design Co"
                  image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                />
                <SidebarProfile
                  name="David Kim"
                  title="Software Engineer at Tech Inc"
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex flex-col items-center cursor-pointer ${active ? 'text-black' : 'text-gray-500'}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}

function ExperienceItem({ title, company, duration, location }) {
  return (
    <div className="flex items-start">
      <img
        src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed"
        alt={company}
        className="w-12 h-12 rounded"
      />
      <div className="ml-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-gray-500 text-sm">{duration}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
}

function SidebarProfile({ name, title, image }) {
  return (
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full" />
      <div className="ml-3">
        <h4 className="font-medium">{name}</h4>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
      <button className="ml-auto text-gray-400 hover:text-gray-600">
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;