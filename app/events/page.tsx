import { EventCard, FilterBar, PageHero } from '@/app/components/events';

export default function EventsPage() {
  // Sample event data - replace with actual data fetching later
  const sampleEvents = [
    {
      image: '/images/events/professional-business-conference.webp',
       // Replace with actual event images
      time: '7:00 PM',
      date: '23 OCT',
      title: 'Exploring New DSA Tricks :',
      description: 'Description of event 1',
      location: 'Main Auditorium, NSUT',
      socialLinks: {
        instagram: 'https://instagram.com',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        discord: 'https://discord.com'
      }
    },
    {
      image: '/next.svg', // Replace with actual event images
      time: '7:00 PM',
      date: '23 OCT',
      title: 'Exploring New DSA Tricks :',
      description: 'Description of event 2',
      location: 'Main Auditorium, NSUT',
      socialLinks: {
        instagram: 'https://instagram.com',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        discord: 'https://discord.com'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background-light-gray)]">
      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl bg-[var(--color-background-light-gray)] px-6 py-12 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <PageHero />

        {/* Filter Section */}
        <div className="mb-10">
          <FilterBar
            locationOptions={['Main Auditorium', 'Conference Hall', 'Online']}
            eventTypeOptions={['Workshop', 'Seminar', 'Hackathon', 'Meetup']}
          />
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-medium text-[var(--color-text-black)] md:text-4xl">
            Upcoming Events
          </h2>
          {/* Mobile-only separator */}
          <div className="mt-2 h-0.5 w-full bg-[var(--color-text-black)] md:hidden" />
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-6">
          {sampleEvents.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              time={event.time}
              date={event.date}
              title={event.title}
              description={event.description}
              location={event.location}
              socialLinks={event.socialLinks}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

