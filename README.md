# WeatherPro Dashboard 🌤️

Modern weather dashboard with real-time updates & Google Maps integration built with Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, and Socket.io.

## Features ✨

- 🗺️ **Google Maps Integration** - Interactive map with real-time weather markers
- 📊 **Advanced Charts** - Temperature, humidity, pressure, and wind speed visualizations
- 🌍 **Multi-Location Support** - Monitor multiple cities simultaneously
- 🔄 **Real-time Updates** - WebSocket integration for live weather data
- 🌓 **Dark/Light Mode** - Smooth theme switching with system preference detection
- 📱 **Responsive Design** - Mobile-first approach with full responsiveness
- 👤 **User Authentication** - NextAuth.js with OAuth support
- 💾 **Persistent Storage** - PostgreSQL database with Prisma ORM
- 🎨 **Modern UI** - Glassmorphism design with Shadcn/ui components
- ⚡ **Performance Optimized** - Image optimization, code splitting, and caching

## Tech Stack 🛠️

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Shadcn/ui** - Beautiful component library
- **Recharts** - Chart and visualization library
- **Framer Motion** - Animation library
- **Google Maps API** - Interactive maps

### Backend
- **Node.js + Express** - API server (or Next.js API Routes)
- **Socket.io** - Real-time WebSocket communication
- **PostgreSQL** - Relational database
- **Prisma ORM** - Database toolkit

### APIs
- **OpenWeatherMap API** - Weather data
- **Google Maps API** - Map integration

## Quick Start 🚀

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database
- OpenWeatherMap API key
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aji200602/weatherpro-dashboard.git
   cd weatherpro-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your API keys and database URL:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/weatherpro"
   NEXT_PUBLIC_OPENWEATHER_API_KEY="your_key_here"
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your_key_here"
   NEXTAUTH_SECRET="your_secret_here"
   ```

4. **Setup database**
   ```bash
   npm run prisma:push
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure 📁

```
weatherpro-dashboard/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   ├── dashboard/            # Dashboard pages
│   ├── auth/                 # Auth pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── weather/              # Weather-related components
│   ├── map/                  # Map-related components
│   ├── common/               # Shared components
│   └── ui/                   # Shadcn/ui components
├── lib/                      # Utility functions
│   ├── api.ts                # API helpers
│   ├── socket.ts             # Socket.io setup
│   └── utils.ts              # General utilities
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript types
├── styles/                   # Global styles
├── prisma/                   # Database schema
├── public/                   # Static assets
└── .env.example              # Environment variables template
```

## API Endpoints 🔌

### Weather APIs
- `GET /api/weather/current?city=Jakarta` - Get current weather
- `GET /api/weather/forecast?lat=X&lon=Y` - Get weather forecast
- `GET /api/weather/history?userId=X&days=7` - Get weather history
- `GET /api/weather/bulk?locations=lat1,lon1;lat2,lon2` - Batch weather query

### Location APIs
- `GET /api/locations/favorites` - Get all favorite locations
- `POST /api/locations/favorite` - Save new favorite
- `DELETE /api/locations/favorite/:id` - Delete favorite
- `PUT /api/locations/favorite/:id` - Update favorite
- `POST /api/locations/nearby?lat=X&lon=Y&radius=50` - Find nearby locations

### User & Preferences
- `GET /api/map/preferences` - Get map preferences
- `PUT /api/map/preferences` - Update map preferences
- `GET /api/user/preferences` - Get user preferences
- `PUT /api/user/preferences` - Update user preferences

## WebSocket Events 📡

- `weather:update` - Weather data updated
- `locations:nearby` - New nearby locations found
- `map:marker-update` - Marker position/icon updated
- `connection` - Client connected
- `disconnect` - Client disconnected

## Development 🧪

### Database Commands
```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Push schema to database
npm run prisma:push

# Open Prisma Studio
npm run prisma:studio
```

### Build & Deploy
```bash
# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Deployment 🌐

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

### Backend (Railway/Render)
1. Create account on Railway or Render
2. Connect GitHub repository
3. Configure environment variables
4. Deploy

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

MIT License - feel free to use this project for personal or commercial purposes.

## Support 💬

If you have any questions or need help, please open an issue or contact the team.

## Roadmap 🗓️

- [ ] Weather alerts & notifications
- [ ] Air quality detailed breakdown
- [ ] Sunrise/sunset times & moon phase
- [ ] Social sharing features
- [ ] Offline mode with service workers
- [ ] Weather comparison (multiple cities)
- [ ] Analytics dashboard
- [ ] Voice commands
- [ ] Weather radar integration
- [ ] Mobile app version

---

Made with ❤️ by WeatherPro Team
