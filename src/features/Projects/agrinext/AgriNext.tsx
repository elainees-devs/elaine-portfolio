//src/features/Projects/agrinext/AgriNext.tsx
import Button from "../../../shared/ui/Button";
import PreviousButton from "../../../shared/ui/PreviousButton";

const AgriNext:React.FC=()=> {
    return (
        <div className="p-6 min-h-screen">
            <PreviousButton title="back to projects" />
        <h2 className="text-3xl font-bold mb-8 text-gray">AgriNext Africa</h2>
        <p className="text-gray-700 mb-4">
            AgriNext Africa is a MERN stack platform aimed at transforming agricultural operations and connecting farmers with smart analytics.
        </p>
        <p className="text-gray-700 mb-4">
            The platform provides farmers with tools to manage their operations efficiently, access real-time data, and make informed decisions.
        </p>
        <p className="text-gray-700 mb-4">
            With features like crop management, weather forecasting, and market analysis, Agrisol empowers farmers to optimize their yield and profitability.
        </p>
        <Button 
        text="View Project" 
        onClick={() =>
    window.open(
      "https://www.canva.com/design/DAGlpIHLoeg/rrDYcP0ebZ8OgGc2qqshXA/edit?utm_content=DAGlpIHLoeg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      "_blank"
    )
  }
  />
        </div>
    );
}
export default AgriNext;