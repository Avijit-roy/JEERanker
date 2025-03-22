import PropTypes from 'prop-types';

function FeatureCard({ title, description, bgColor, icon, textColor }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className={`${bgColor} p-6`}>
        <span className={`${textColor} text-2xl font-medium`}>
          <img src={icon} alt={title} className="inline-block w-9 h-9 mr-2" /> {title}
        </span>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-200 transition-colors text-sm font-medium">
          Open
        </button>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

export default FeatureCard;