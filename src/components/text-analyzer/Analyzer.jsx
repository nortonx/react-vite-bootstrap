import Textarea from "../Textarea";
import { useState } from 'react';
import Counter from "./Counter";

const Analyzer = () => {
  const [content, setContent] = useState("");

  function onChangeText(content) {
    setContent(content);
  }

  function wordCounter(content) {
    if (content) {
      const words = content.split(" ");
      return words?.length;
    }
    return 0;
  }

  function characterCounter(content) {
    const characters = content.split("");
    return characters?.length ?? 0;
  }

  function sentencesCounter(content) {
    const sentences = content.match(/[^\.!\?]+[\.!\?]+/g);
    return sentences?.length ?? 0;
  }

  function paragraphsCounter(content) {
    if (content) {
      const paragraphs = content.split(/\r?\n/);
      return paragraphs?.length;
    }
    return 0;
  }

  return(
    <div className="container text-analyzer" data-testid="analyzer">
      <div className="col">
        <div className="row">
          <Counter
            label="Words"
            counter={wordCounter(content)}
          />
          <Counter
            label="Characters"
            counter={characterCounter(content)}
          />
          <Counter
            label="Sentences"
            counter={sentencesCounter(content)}
          />
          <Counter
            label="Paragraphs"
            counter={paragraphsCounter(content)}
          />
        </div>
        <div className="row">
          <Textarea 
            label="Type in your text"
            id="text-analyzer"
            onChangeText={onChangeText}
          />
        </div>
      </div>
    </div>
  );
};

export default Analyzer;