import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  Shield,
  Car,
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  LogIn,
  X,
  Sun,
  Moon,
} from "lucide-react";
import OfflineIndicator from './components/OfflineIndicator';

// --- MOCK DATABASE ---
// In a real application, this data would come from a backend API and database.
const initialUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@pool.com",
    role: "Admin",
    status: "Active",
    avatar: "https://placehold.co/100x100/4F46E5/FFFFFF?text=A",
  },
  {
    id: 2,
    name: "Alice Johnson",
    email: "alice@driver.com",
    role: "Driver",
    status: "Active",
    rating: 4.9,
    trips: 25,
    avatar: "https://placehold.co/100x100/DB2777/FFFFFF?text=A",
  },
  {
    id: 3,
    name: "Bob Williams",
    email: "bob@passenger.com",
    role: "Passenger",
    status: "Active",
    rating: 4.7,
    trips: 12,
    avatar: "https://placehold.co/100x100/16A34A/FFFFFF?text=B",
  },
  {
    id: 4,
    name: "Charlie Brown",
    email: "charlie@driver.com",
    role: "Driver",
    status: "Active",
    rating: 4.5,
    trips: 8,
    avatar: "https://placehold.co/100x100/F97316/FFFFFF?text=C",
  },
  {
    id: 5,
    name: "Diana Miller",
    email: "diana@passenger.com",
    role: "Passenger",
    status: "Blocked",
    rating: 3.2,
    trips: 5,
    avatar: "https://placehold.co/100x100/9333EA/FFFFFF?text=D",
  },
];

const initialVehicles = [
  {
    id: 1,
    userId: 2,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    color: "White",
    licensePlate: "EV-ALICE",
  },
  {
    id: 2,
    userId: 4,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    licensePlate: "DRV-CHAS",
  },
];

const initialJourneys = [
  {
    id: 1,
    driverId: 2,
    vehicleId: 1,
    from: "Downtown, Rajkot",
    to: "Metoda GIDC, Rajkot",
    departure: "2025-06-12T09:00:00",
    seats: 3,
    price: 150,
    status: "Upcoming",
  },
  {
    id: 2,
    driverId: 4,
    vehicleId: 2,
    from: "Airport Road, Rajkot",
    to: "Crystal Mall, Rajkot",
    departure: "2025-06-12T18:30:00",
    seats: 2,
    price: 100,
    status: "Upcoming",
  },
  {
    id: 3,
    driverId: 2,
    vehicleId: 1,
    from: "University Road, Rajkot",
    to: "Race Course Ring Road",
    departure: "2025-06-13T10:00:00",
    seats: 3,
    price: 80,
    status: "Upcoming",
  },
];

const initialBookings = [
  { id: 1, journeyId: 1, passengerId: 3, status: "Confirmed" },
];

// --- HELPER COMPONENTS ---

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <Card className="w-full max-w-lg relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
        {children}
      </Card>
    </div>
  );
};

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseClasses =
    "px-6 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900";
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      {label}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-3 ${
          icon ? "pl-10" : ""
        } border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
      />
    </div>
  </div>
);

// --- AUTHENTICATION COMPONENTS ---
// Functional Module: Manage own profile (Registration) & Recover Password

const LoginModal = ({ isOpen, onClose, onLogin }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Login / Select Role">
    <div className="space-y-4">
      <p className="text-center text-gray-600 dark:text-gray-400">
        For demo purposes, select a role to log in as.
      </p>
      <Button
        onClick={() => onLogin(initialUsers[0])}
        className="w-full flex items-center justify-center gap-2"
      >
        <Shield size={20} /> Login as Admin
      </Button>
      <Button
        onClick={() => onLogin(initialUsers[1])}
        className="w-full flex items-center justify-center gap-2"
      >
        <Car size={20} /> Login as Driver (Alice)
      </Button>
      <Button
        onClick={() => onLogin(initialUsers[2])}
        className="w-full flex items-center justify-center gap-2"
      >
        <User size={20} /> Login as Passenger (Bob)
      </Button>
      <div className="text-center mt-4">
        <a
          href="#"
          className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  </Modal>
);

// --- HEADER & NAVIGATION ---

const Header = ({
  currentUser,
  onLoginClick,
  onLogout,
  toggleTheme,
  theme,
}) => (
  <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md sticky top-0 z-40">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            <Car size={28} />
            <span>CityPool</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {currentUser ? (
            <>
              <span className="hidden sm:block text-gray-700 dark:text-gray-300">
                Welcome,{" "}
                <span className="font-semibold">
                  {currentUser.name.split(" ")[0]}
                </span>
                !
              </span>
              <Button onClick={onLogout} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={onLoginClick} className="flex items-center gap-2">
              <LogIn size={20} /> Login / Register
            </Button>
          )}
        </div>
      </div>
    </nav>
  </header>
);

// --- ADMIN DASHBOARD COMPONENTS ---
// Role Module 1: Administrator

const UserManagement = ({ users, setUsers }) => {
  // Functional Module 1: Manage Passenger/Driver/Visitor (View/Block Client)
  const toggleUserStatus = (userId) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
          : user
      )
    );
  };

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        User Management
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="p-3">User</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((u) => u.role !== "Admin")
              .map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <Button
                      onClick={() => toggleUserStatus(user.id)}
                      variant={
                        user.status === "Active" ? "danger" : "secondary"
                      }
                      className="px-3 py-1 text-sm"
                    >
                      {user.status === "Active" ? "Block" : "Unblock"}
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const JourneyManagement = ({ journeys, users }) => {
  // Functional Module 2, 4, 5: Maintain search result, journey details, and route specs
  const getDriverName = (driverId) =>
    users.find((u) => u.id === driverId)?.name || "Unknown";
  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        All Journeys
      </h3>
      <div className="space-y-4">
        {journeys.map((j) => (
          <div
            key={j.id}
            className="p-4 border rounded-lg dark:border-gray-700"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-lg dark:text-white">
                  {j.from} <ArrowRight className="inline mx-2" size={16} />{" "}
                  {j.to}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Driver: {getDriverName(j.driverId)} | Date:{" "}
                  {new Date(j.departure).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-indigo-600 dark:text-indigo-400">
                  ₹{j.price}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {j.seats} seats left
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const AdminDashboard = ({ users, setUsers, journeys }) => (
  <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
      Admin Dashboard
    </h1>
    <UserManagement users={users} setUsers={setUsers} />
    <JourneyManagement journeys={journeys} users={users} />
  </div>
);

// --- DRIVER DASHBOARD COMPONENTS ---
// Role Module 1 (as Driver)

const CreateJourneyModal = ({ isOpen, onClose, onCreate, currentUser }) => {
  // Functional Module 4 & 5: Maintain Journey Details & Manage route specification (Add)
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState(1);
  const [price, setPrice] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJourney = {
      id: Date.now(),
      driverId: currentUser.id,
      vehicleId: initialVehicles.find((v) => v.userId === currentUser.id)?.id,
      from,
      to,
      departure: `${date}T${time}:00`,
      seats: parseInt(seats),
      price: parseInt(price),
      status: "Upcoming",
    };
    onCreate(newJourney);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Offer a New Journey">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="from"
          label="From"
          placeholder="e.g., Downtown, Rajkot"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          icon={<MapPin size={16} className="text-gray-400" />}
        />
        <Input
          id="to"
          label="To"
          placeholder="e.g., Metoda GIDC, Rajkot"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          icon={<MapPin size={16} className="text-gray-400" />}
        />
        <div className="flex gap-4">
          <div className="w-1/2">
            <Input
              id="date"
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              icon={<Calendar size={16} className="text-gray-400" />}
            />
          </div>
          <div className="w-1/2">
            <Input
              id="time"
              label="Time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              icon={<Clock size={16} className="text-gray-400" />}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <Input
              id="seats"
              label="Available Seats"
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              icon={<Users size={16} className="text-gray-400" />}
            />
          </div>
          <div className="w-1/2">
            <Input
              id="price"
              label="Price per Seat (₹)"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              icon={<span className="text-gray-400 font-bold">₹</span>}
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Create Journey
        </Button>
      </form>
    </Modal>
  );
};

const DriverDashboard = ({ journeys, setJourneys, currentUser }) => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const myJourneys = journeys.filter((j) => j.driverId === currentUser.id);

  const handleCreateJourney = (newJourney) => {
    setJourneys((current) => [newJourney, ...current]);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          My Journeys
        </h1>
        <Button onClick={() => setCreateModalOpen(true)}>
          + Offer New Journey
        </Button>
      </div>
      {myJourneys.length > 0 ? (
        <div className="space-y-6">
          {myJourneys.map((journey) => (
            <Card
              key={journey.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <p className="font-bold text-xl text-gray-800 dark:text-white">
                  {journey.from}{" "}
                  <ArrowRight className="inline mx-2" size={20} /> {journey.to}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(journey.departure).toLocaleString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    ₹{journey.price}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    per seat
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {journey.seats}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    seats left
                  </p>
                </div>
                <Button variant="secondary" className="px-3 py-1 text-sm">
                  Manage
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <Car size={48} className="mx-auto text-gray-400" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            No journeys offered yet.
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Ready to hit the road? Offer your first journey now.
          </p>
        </Card>
      )}
      <CreateJourneyModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreateJourney}
        currentUser={currentUser}
      />
    </div>
  );
};

// --- PASSENGER & VISITOR COMPONENTS ---
// Role Module 2: Passenger/Visitor Module

const JourneySearch = ({ onSearch }) => {
  // Functional Module 2: Search available journey
  return (
    <Card className="w-full max-w-4xl mx-auto -mt-20 relative z-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(e.target.from.value, e.target.to.value);
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
      >
        <div className="md:col-span-1">
          <Input
            id="from"
            label="From"
            placeholder="Leaving from..."
            icon={<MapPin size={16} className="text-gray-400" />}
          />
        </div>
        <div className="md:col-span-1">
          <Input
            id="to"
            label="To"
            placeholder="Going to..."
            icon={<MapPin size={16} className="text-gray-400" />}
          />
        </div>
        <div className="md:col-span-1">
          <Input
            id="date"
            label="Date"
            type="date"
            icon={<Calendar size={16} className="text-gray-400" />}
          />
        </div>
        <div className="md:col-span-1">
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
          >
            <Search size={20} /> Search Journeys
          </Button>
        </div>
      </form>
    </Card>
  );
};

const SearchResults = ({ results, users }) => {
  if (!results) return null;

  const getDriver = (driverId) => users.find((u) => u.id === driverId);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Available Journeys
      </h2>
      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((journey) => {
            const driver = getDriver(journey.driverId);
            if (!driver) return null; // Add a guard clause in case driver is not found
            return (
              <Card
                key={journey.id}
                className="hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="md:col-span-1 flex items-center gap-4">
                    <img
                      src={driver.avatar}
                      alt={driver.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="font-bold dark:text-white">{driver.name}</p>
                      <p className="text-sm text-yellow-500">
                        ⭐ {driver.rating} ({driver.trips} trips)
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-lg dark:text-white">
                      {journey.from}{" "}
                      <ArrowRight
                        className="inline mx-1 text-gray-400"
                        size={16}
                      />{" "}
                      {journey.to}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(journey.departure).toLocaleString()}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex flex-col items-end gap-2">
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      ₹{journey.price}
                    </p>
                    <Button className="w-full">
                      Book ({journey.seats} left)
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No journeys found for your search. Try broadening your criteria or
          create a ride request!
        </p>
      )}
    </div>
  );
};

const PassengerDashboard = ({ journeys, users, currentUser }) => {
  // This dashboard combines search and profile views for the passenger
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (from, to) => {
    const results = journeys.filter(
      (j) =>
        (from === "" || j.from.toLowerCase().includes(from.toLowerCase())) &&
        (to === "" || j.to.toLowerCase().includes(to.toLowerCase()))
    );
    setSearchResults(results);
  };

  const myBookings = currentUser
    ? initialBookings
        .filter((b) => b.passengerId === currentUser.id)
        .map((b) => {
          return journeys.find((j) => j.id === b.journeyId);
        })
    : [];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {!currentUser && (
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
          Find a Ride
        </h1>
      )}

      {currentUser && currentUser.role === "Passenger" && (
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Passenger Dashboard
        </h1>
      )}

      <JourneySearch onSearch={handleSearch} />

      {searchResults === null && !currentUser && (
        <div className="text-center pt-8">
          <h3 className="text-xl font-semibold dark:text-white">
            Search for a journey to get started
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your origin and destination above.
          </p>
        </div>
      )}

      {searchResults && <SearchResults results={searchResults} users={users} />}

      {/* Functional Module 1: Manage own profile (View/Edit). This part only shows if logged in. */}
      {currentUser && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            My Bookings & Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-semibold dark:text-white">
                Your Upcoming Trips
              </h3>
              {myBookings.length > 0 ? (
                myBookings
                  .filter(journey => journey) // Filter out any undefined journeys
                  .map(journey => (
                    <Card key={journey.id}>
                      <p className="font-semibold dark:text-white">
                        {journey.from} to {journey.to}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(journey.departure).toLocaleString()}
                      </p>
                    </Card>
                  ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  You have no upcoming bookings.
                </p>
              )}
            </div>
            <Card className="md:col-span-1">
              <h3 className="text-xl font-semibold dark:text-white mb-4">
                Your Profile
              </h3>
              <div className="text-center">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="font-bold text-lg dark:text-white">
                  {currentUser.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currentUser.email}
                </p>
                <p className="text-sm text-yellow-500 mt-2">
                  ⭐ {currentUser.rating} ({currentUser.trips} trips)
                </p>
                <Button variant="secondary" className="mt-4 w-full">
                  Edit Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  // Use localStorage for theme persistence
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Use localStorage for user authentication
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  // Use localStorage for users data
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  });

  // Use localStorage for journeys data
  const [journeys, setJourneys] = useState(() => {
    const savedJourneys = localStorage.getItem('journeys');
    return savedJourneys ? JSON.parse(savedJourneys) : initialJourneys;
  });

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Save current user to localStorage when it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  // Save users to localStorage when they change
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Save journeys to localStorage when they change
  useEffect(() => {
    localStorage.setItem('journeys', JSON.stringify(journeys));
  }, [journeys]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const renderContent = () => {
    if (currentUser?.role === "Admin") {
      return (
        <AdminDashboard users={users} setUsers={setUsers} journeys={journeys} />
      );
    }
    if (currentUser?.role === "Driver") {
      return (
        <DriverDashboard
          journeys={journeys}
          setJourneys={setJourneys}
          currentUser={currentUser}
        />
      );
    }
    // For a logged-in passenger
    if (currentUser?.role === "Passenger") {
      return (
        <PassengerDashboard
          journeys={journeys}
          users={users}
          currentUser={currentUser}
        />
      );
    }
    // Should not be reached if logic is correct, but as a fallback
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header
        currentUser={currentUser}
        onLoginClick={() => setLoginModalOpen(true)}
        onLogout={handleLogout}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <main>
        {currentUser ? (
          renderContent()
        ) : (
          <>
            <div className="relative bg-indigo-100 dark:bg-indigo-900/50 pt-16 pb-32">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                  Share your ride, share the cost.
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                  The smart, sustainable, and social way to travel in and around
                  Rajkot.
                </p>
              </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Visitor view uses the same component but with currentUser as null */}
              <PassengerDashboard
                journeys={journeys}
                users={users}
                currentUser={null}
              />
            </div>
          </>
        )}
      </main>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
      />
      <OfflineIndicator />
    </div>
  );
}
