import Header from "../landingPage/header"
import FeatureCard from './FeatureCard';

function Dashboard() {
  const features = [
    {
      title: "Engage with others",
      description: "Connect and chat with fellow students, share study materials, and form study groups in real-time",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      icon: "https://raw.githubusercontent.com/Avijit-roy/Images/refs/heads/main/icons8-chat-96.png",
      textColor: "text-white"
    },
    {
      title: "Heroicons",
      description: "A set of 450+ free MIT-licensed SVG icons. Available as basic...",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: "⚔",
      textColor: "text-white"
    },
    {
      title: "Hero Patterns",
      description: "A collection of over 100 free MIT-licensed high-quality SVG...",
      bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      icon: "◈",
      textColor: "text-white"
    }
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


