import Image from "next/image";
import React from "react";
import TermsAndConditionsImg from "../assets/images/terms-and-conditions.png";
import TermsStyles from "../styles/terms-and-conditions.module.scss";
function TermsAndConditions() {
  const highlightTermsArr = [
    {id:0,highlightTerm:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {id:1,highlightTerm:'Libero justo laoreet sit amet.'},
    {id:2,highlightTerm:'Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.'},
    {id:3,highlightTerm:'Auctor neque vitae tempus quam pellentesque nec.'},
    {id:4,highlightTerm:'Cras adipiscing enim eu turpis egestas pretium aenean.'}
  ]
  return (
    <>
      <div className={TermsStyles["terms-main-section"]}></div>
      <div>
        <div>
          <section>
            <span></span>
            <h1>Terms and Conditions</h1>
          </section>
          <section>
            <p>
              Probably the most effective way to achieve paragraph unity is to
              express the central idea of the paragraph in a topic sentence.
              Topic sentences are similar to mini thesis statements. Like a
              thesis statement, a topic sentence has a specific main point.
              Whereas the thesis is the main point of the essay, the topic
              sentence is the main point of the paragraph. Like the thesis
              statement, a topic sentence has a unifying function. But a thesis
              statement or topic sentence alone doesn’t guarantee unity. An
              essay is unified if all the paragraphs relate to the thesis,
              whereas a paragraph is unified if all the sentences relate to the
              topic sentence. Note: Not all paragraphs need topic sentences. In
              particular, opening and closing paragraphs, which serve different
              functions from body paragraphs, generally don’t have topic
              sentences.
            </p>
            <ul className={TermsStyles['highlighted-terms']}>
              {highlightTermsArr.map((term)=>(
                <li key={term.id}>{term.highlightTerm}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
