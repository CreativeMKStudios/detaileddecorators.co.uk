export interface Review {
  quote: string;
  rating: number;
  date?: string;
}

/** Wording kept as customers wrote it on Google. */
export const reviews: Review[] = [
  {
    quote:
      'Adam saved me as needed to get my bathroom decorated at very short notice and I was not in a good place due to sacking the previous decorator due to his poor work standards. Tony painted my bathroom and did an outstanding job and even worked a Sunday to get the job started. He communicated well throughout the job and his painting standard is excellent. Also very clean and tidy too in his work. Tony and Adam are both professional, trustworthy and can’t do enough to help. Great decorators and decent respectful people which is not really common these days. I would highly recommend Detailed Decorators.',
    rating: 5,
    date: '2025-12-16',
  },
  {
    quote:
      'Have worked with Adam and Detailed Decorators for the past 8 years due to his professionalism, attention to detail, ability to keep to quoted time frames, pricing and overall nice guy. Would have no hesitation recommending Adam and the team.',
    rating: 5,
    date: '2025-10-24',
  },
  {
    quote:
      'Adam did some painting jobs for us and was brilliant all around. We’ll be calling him up for our next job!',
    rating: 5,
    date: '2025-10-19',
  },
  {
    quote:
      'Detail Decorators’ Adam, provided an outstanding service from start to finish. He was punctual, polite, and clearly takes pride in his work. The attention to detail and quality of the finish are excellent. The job was completed on time and to a very high standard. Highly recommend!',
    rating: 5,
    date: '2025-10-01',
  },
  {
    quote:
      'George & George completed internal painting of 5 rooms & hallway of residential property. They were professional, tidy, considerate and the finish is to a high standard. Adam kept in touch throughout the process to ensure everything was as expected and was flexible around my timings. Recommend this company.',
    rating: 5,
    date: '2025-06-20',
  },
  {
    quote:
      'Adam did a fantastic job painting our kitchen, and was more than happy to accommodate our unusual choice of paint finish. Really happy with the finished result. Excellent communication and lovely person, would definitely recommend.',
    rating: 5,
    date: '2025-05-19',
  },
  {
    quote:
      'Adam did a really good job in painting my new built house. He was really nice guy to explain us everything and always open to help us. And he kept us posted the process time to time as we were not in house. I’m really glad that we met Adam and I always recommend him to anyone if looking to decorate your house.',
    rating: 4,
    date: '2025-05-17',
  },
  {
    quote:
      'Adam and the team have been great. They fitted us in to get the job done before Christmas and also bring flexible when kitchen work was needed. Adam came and checked everything over making sure we were happy, which is appreciated. All in all great decorating by a great team. Thanks Adam and the Georges.',
    rating: 5,
    date: '2024-12-20',
  },
  {
    quote:
      'Very happy with the work carried out by Adam and George of Detailed Decorating. The guys were clean and tidy throughout and took great care of the house, leaving everything in a really good state and putting all furniture back in place. The stairs were painted to a very high standard and the finish looks excellent, with great attention to detail including how everything felt when touched (such as the handrails and newel posts). Professional, reliable, and would happily recommend.',
    rating: 5,
  },
  {
    quote:
      'Detailed Decorators painted and wallpapered three of the rooms in my house. I must say the work is excellent and faultless. The guys that did the work just cracked on and were no bother at all. Extremely professional, great communication throughout and very respectful. Absolutely great team and I will definitely be using them again. The rooms are beautiful.',
    rating: 5,
  },
];

export function reviewDate(iso: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}
