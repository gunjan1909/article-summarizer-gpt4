import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col select-none">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex gap-1 items-center align-middle justify-center">
          <img src={logo} alt="LOGO" className="w-12 object-contain" />
          <h2 className="logo_text">ArticleSumz</h2>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/gunjan1909/article-summarier-gpt4")
          }
          className="black_btn"
        >
          Github Repo
        </button>
      </nav>
      <h1 className="head_text ">
        Summarize Articles from web with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI's GPT-4</span>
      </h1>
      <h2 className="desc">
        ArticleSumz, is an open-source article summarizer that will transform
        any lengthy articles over the web into clear and short summaries using
        AI.
      </h2>
    </header>
  );
};

export default Hero;
