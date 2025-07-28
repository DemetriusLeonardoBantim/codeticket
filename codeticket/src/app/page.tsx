import { Title } from "../components/Title";
import { EventModel } from "../models";
import { EventCard } from "../components/EventCard";

/* export async function getEvents(): Promise<EventModel[]> {
  const response = await fetch(`${process.env.GOLANG_API_URL}/events`, {
    headers: {
      "apikey": process.env.GOLANG_API_TOKEN as string
    },
    cache: "no-store",
    // next: {
    //   tags: ["events"],
    // }
  });

  return (await response.json()).events;
} */



export default async function HomePage() {
const events: EventModel[] = [
  {
    id: '1',
    name: 'Tech Conference 2025',
    organization: 'Global Tech',
    date: '2025-09-12',
    price: 199.99,
    rating: '4.8',
    image_url: 'https://rio.websummit.com/wp-media/2024/04/53662996770_55b3c078c8_k.jpg',
    location: 'São Paulo, SP'
  },
  {
    id: '2',
    name: 'Festival de Inovação',
    organization: 'Inova Brasil',
    date: '2025-10-05',
    price: 99.5,
    rating: '4.5',
    image_url: 'https://rio.websummit.com/wp-media/2024/04/53662996770_55b3c078c8_k.jpg',
    location: 'Recife, PE'
  },
  {
    id: '3',
    name: 'UX & Design Meetup',
    organization: 'Designers Unidos',
    date: '2025-08-22',
    price: 0,
    rating: '4.9',
    image_url: 'https://rio.websummit.com/wp-media/2024/04/53662996770_55b3c078c8_k.jpg',
    location: 'Belo Horizonte, MG'
  },
  {
    id: '4',
    name: 'Congresso de Cibersegurança',
    organization: 'CyberProtect',
    date: '2025-11-10',
    price: 250,
    rating: '4.7',
    image_url: 'https://rio.websummit.com/wp-media/2024/04/53662996770_55b3c078c8_k.jpg',
    location: 'Brasília, DF'
  }
];

  return (
    <main className="mt-10 flex flex-col">
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}