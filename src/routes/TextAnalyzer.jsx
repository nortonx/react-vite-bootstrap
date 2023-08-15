import "../scss/TextAnalyzer.scss";
import Analyzer from "../components/text-analyzer/Analyzer";
const TextAnalyzer = () => {
  return(
    <div className="container text-analyzer" data-testid="text-analyzer">
      <Analyzer />
    </div>
  );
};

export default TextAnalyzer;