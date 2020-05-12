import React from { react };
import PropTypes from 'prop-types'

import quiz from "../src/constants/quiz";

const Questions = ({ id,question, choices }) => (
  <main>
          {quiz.map((list) => (
           <div>
            <a className="question" key={id}>{question}</a>
            {choices.map((choice) => (
             <li className="choices"><input type="radio" value={choice} name="Choix"/>{choice}</li>
             ))}
           </div>
          ))}
     <div class="control">
      <button type="submit" class="button is-primary">Submit</button>
     </div>
  </main>
);

Questions.propTypes = {
	question: PropTypes.string.isRequired,
	choices: PropTypes.string.isRequired,
};

export default Questions;