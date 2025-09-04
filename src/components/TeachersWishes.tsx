import React from 'react';

const TeachersWishes = () => {
  const wishes = [
    {
      id: 1,
      quote: "Thank you for believing in our dreams when we couldn't see them ourselves. Your faith in us creates the foundation for our success.",
      name: "Emma Thompson",
      role: "High School Graduate"
    },
    {
      id: 2,
      quote: "Your patience turned my confusion into clarity, my struggles into strengths. Thank you for never giving up on me.",
      name: "James Wilson",
      role: "College Freshman"
    },
    {
      id: 3,
      quote: "You didn't just teach subjects; you taught us to think, to question, and to discover. Your lessons go far beyond textbooks.",
      name: "Maya Patel",
      role: "Medical Student"
    },
    {
      id: 4,
      quote: "In your classroom, I found my voice and learned that my thoughts matter. Thank you for creating a safe space to grow.",
      name: "Alex Rivera",
      role: "Engineering Student"
    },
    {
      id: 5,
      quote: "Your encouragement was the spark that ignited my passion for learning. Thank you for showing me what I could become.",
      name: "Sophie Chen",
      role: "Teacher in Training"
    },
    {
      id: 6,
      quote: "You made the impossible seem possible and helped me achieve things I never thought I could. Your belief changes lives.",
      name: "Marcus Johnson",
      role: "Young Professional"
    },
    {
      id: 7,
      quote: "Thank you for seeing potential in every student and for making learning an adventure rather than a chore.",
      name: "Zara Ahmed",
      role: "Graduate Student"
    },
    {
      id: 8,
      quote: "Your dedication extends far beyond school hours. Thank you for caring about our futures as much as our present.",
      name: "Ryan O'Connor",
      role: "Recent Graduate"
    }
  ];

  return (
    <section className="teachers-wishes">
      <div className="wishes-container">
        <header className="wishes-header">
          <h2 className="wishes-title">Messages of Gratitude</h2>
          <p className="wishes-subtitle">Heartfelt appreciation from students whose lives you've touched</p>
        </header>

        <div className="wishes-grid">
          {wishes.map((wish) => (
            <article key={wish.id} className="wish-card">
              <div className="quote-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="wish-quote">
                "{wish.quote}"
              </blockquote>

              <footer className="wish-author">
                <h4 className="author-name">{wish.name}</h4>
                <p className="author-role">{wish.role}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="final-note">
          <div className="note-content">
            <h3 className="note-title">To All Our Dedicated Teachers</h3>
            <p className="note-text">
              Your unwavering dedication shapes minds, touches hearts, and builds the future. Every lesson you teach, 
              every moment you care, and every dream you nurture creates ripples that last a lifetime. Thank you for 
              being the light that guides us through the journey of learning and growth.
            </p>
            <p className="note-signature">
              Happy Teachers' Day! 
              <span className="heart">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersWishes;