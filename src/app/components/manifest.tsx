'use client'
import React, { useState } from 'react';

const Manifest = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div className={`space-y-4 ${isExpanded ? '' : 'max-h-80 overflow-hidden'}`}>
        <p>Hi,</p>
        <p>My name is Peter. I am the founder of the organization called JustFriendly.Org.</p>
        <p>Thank you so much for spending your time and sharing this moment with me.</p>
        <p>I am a human being, just like you, no more and no less. It breaks my heart to see what is going on in the world today, especially when it comes to the way human beings interact with each other and with nature, the mother of our origin, in such an incredibly destructive way. Vast numbers of people are suffering, and Mother Nature herself is exhausted by the unprecedented destructive exploitation of her resources.</p>
        <p>I don’t want to belong to that generation who stood by watching when the only thing that can change the current situation is action. Change is needed, and change is needed now.</p>
        <p>There is no more time to wait for politicians and leaders around the world to find a solution for the present human condition, as well as for the very serious climate situation. Whenever they try, there are always so many time-consuming conflicts of interest, mostly economic. This removes their focus from the urgency of solving the real problems, and those become secondary to the “importance” of solving the economy.</p>
        <p>As I perceive it, the present human condition and the climate situation are very much connected.</p>
        <p>There is a lot to say about the present human condition. I will narrow it down to what I perceive as the core issue.</p>
        <p>The core issue is inequality. It is only a word, so what does it actually mean? It means that the possibility for each human being to live in freedom and create a good life is not equal. Inequality is not a result of nature. Inequality is created by humans, or to be more precise, the human mind.</p>
        <p>This mindset has been developed over thousands of years. I can’t say I know exactly how it started, but I am sure that the first person on this planet who claimed, “This piece of land is mine,” didn’t do it in a peaceful way or in respect for others. Probably, this first ownership of land was achieved by force. “I am stronger than you. If you don’t agree with me, I will hurt you or kill you.” Since then, the use of force and power has been the predominant method to maintain this mind-created system of inequality on a number of levels in the human family.</p>
        <p>Today, 81 individuals hold more wealth than 50% of the world combined (Oxfam). More than 820 million people are suffering from hunger (UN Report). More than a billion people live on less than a dollar a day. More than 2.8 billion people live on less than 2 dollars a day. More than a third of the world’s population lives in nations and territories gripped by repression, war, corruption, and human rights abuses.</p>
        <p>Action is needed, and action is needed now.</p>
        <p>All use of force and power between people includes three elements: control, power, and fear.</p>
        <p>The method of control by power and fear is as follows: Control: I want to make sure that what is right for me is how it is going to be. Power and Fear: If you disagree with me, it will have consequences for you.</p>
        <p>This scenario plays out in every disagreement where one of the participants chooses to use power and fear to end the dialogue. This goes for nations, groups, and individuals.</p>
        <p>There will never be authentic trust amongst human beings, which is essential for a sustainable peace in the world, as long as we accept inequality and the use of power as conditions for the way we live together.</p>
        <p>When it comes to the present serious climate situation, the majority of scientists in the world agree that human-made CO2 emissions have led to and still cause dramatic climate changes on earth. Temperatures are rising. A lot of people on the earth today are already experiencing the devastating impact of the climate changes.</p>
        <p>In 2023, the UN Secretary-General, Antonio Guterres, expressed his major concern on this issue in the following two powerful statements: “The era of global warming has ended, the era of global boiling has arrived,” and later the same year, “Humanity has opened the gates to Hell.”</p>
        <p>This is only the beginning, but it doesn’t have to be the end.</p>
        <p>Change is needed, and change is needed now. It is not too late. The tools and technologies needed to reverse this situation are already available. Now it all depends on human beings’ ability to cooperate and make the necessary changes together.</p>
        <p>It seems to me that most people are overwhelmed by the many challenges humanity is facing at the present moment. Just thinking about it and where to start can easily create an instant block of discouragement. You might even come to the conclusion that your participation is insignificant and probably won’t make a difference. Unfortunately, the consequence will be that you might choose not to spend further time on this issue. This will prevent you from achieving the needed clarity to find out exactly what you can do and will do.</p>
        <p>If you have reached the conclusion that your voice and your participation probably won’t make a difference, I urge you to reconsider. Your participation will make a significant difference.</p>
        <p>Action is needed, and action is needed now.</p>
        <p>As a human being, you were born to be an equal member of the global human family, no matter your skin color, nationality, religion, social status, or sexual orientation. Your voice counts. You, as an individual, are of vital importance for a positive outcome in this process of needed change—a change that will benefit all human beings, as well as all life on earth, and give Mother Nature the necessary support in her ability to restore herself back to a sustainable balance.</p>
        <p>To be able to lift the present challenges in unity, we have to begin to trust each other as individuals. However, as a consequence of the inequality and use of power in the world, authentic trust between human beings is rare. This is a huge challenge that has to be brought to people&apos;s awareness.</p>
        <p>Every individual counts. Every individual on this planet who is not striving to survive the day has a great opportunity to make a significant difference.</p>
        <p>Don’t wait for change to happen. Be the change.</p>
        <p>If you want to, you can immediately begin to participate in the needed change in the world. You don’t have to wait. Make a conscious decision right now of wanting to and trying to be as friendly as you possibly can towards all human beings you meet from now on, showing them that you wish them well—even those you don’t like or disagree with.</p>
        <p>Why is it of vital importance to be consciously friendly, and how is that a significant part of the solution to the many serious challenges humanity is facing right now?</p>
        <p>It is very simple: As individuals, we can do a lot, but together there is no limit to what we can achieve if we really want to. To be able to create a positive outcome in this process of needed change in the world, we need to be able to cooperate.</p>
        <p>Strive to show each other, to the best of our ability, that we are working for the benefit and thriving of all human beings without any exception. Each one of us needs to enhance our ability to cooperate with each other in an honest and heartfelt way.</p>
        <p>If this makes sense to you, don’t hesitate. Make a conscious decision right now to be as friendly as you possibly can towards all people you meet from now on, in real life as well as on social media. Your participation will make a significant difference. By doing so, you will take full responsibility for doing your part in the needed change in the world, manifesting your brick in the future foundation of an honest, authentic, and compassionate human community.</p>
        <p>If you have made a conscious decision to try to be as friendly as you possibly can towards all people you meet from now on, please sign up on our website with your name and country. Show the world you care. Let’s make ourselves visible, showing that we are many who will participate in creating the needed change for a better world.</p>
        <p>Thank you.</p>
      </div>
      {!isExpanded && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent h-24 flex justify-center items-end">
          <button onClick={toggleExpand} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
            Continue Reading
          </button>
        </div>
      )}
    </div>
  );
};

export default Manifest;